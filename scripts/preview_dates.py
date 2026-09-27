#!/usr/bin/env python3
"""Keep local article modification dates current while running Hugo."""

import datetime
import json
import os
from pathlib import Path
import signal
import subprocess
import sys
import time


def git(root, *args):
    return subprocess.check_output(["git", "-C", str(root), *args])


def local_dates(root):
    # HEAD includes both staged and unstaged changes; also include new files.
    paths = git(root, "diff", "--name-only", "-z", "HEAD", "--", "content/posts")
    paths += git(root, "ls-files", "--others", "--exclude-standard", "-z", "--", "content/posts")
    dates = {}
    for raw_path in paths.split(b"\0"):
        if not raw_path:
            continue
        path = Path(os.fsdecode(raw_path))
        try:
            modified = (root / path).stat().st_mtime
        except FileNotFoundError:
            continue
        dates[path.relative_to("content").as_posix()] = datetime.datetime.fromtimestamp(
            modified, datetime.timezone.utc
        ).isoformat()
    return {
        "head": git(root, "rev-parse", "HEAD").decode().strip(),
        "dates": dates,
    }


def update(root):
    target = root / "data/localPostDates.json"
    previous = target.read_text() if target.exists() else "{}"
    cached = json.loads(previous)
    current = local_dates(root)
    if cached.get("head") == current["head"] and "committed" in cached:
        current["committed"] = cached["committed"]
    else:
        # Hugo caches GitInfo during server runs. Refresh commit dates ourselves
        # when HEAD changes so committing does not require a server restart.
        committed = {}
        date = None
        history = git(root, "log", "--format=commit:%cI", "--name-only", "-z", "--", "content/posts")
        for field in history.split(b"\0"):
            value = os.fsdecode(field).lstrip("\n")
            if value.startswith("commit:"):
                date = value.removeprefix("commit:")
            elif value.startswith("content/posts/") and date:
                committed.setdefault(value.removeprefix("content/"), date)
        current["committed"] = committed
    content = json.dumps(current, ensure_ascii=False, sort_keys=True) + "\n"
    if previous == content:
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = target.with_suffix(".tmp")
    temporary.write_text(content)
    temporary.replace(target)


def main():
    root = Path(__file__).resolve().parent.parent
    update(root)
    process = subprocess.Popen(sys.argv[1:], cwd=root)

    def stop(signum, frame):
        raise KeyboardInterrupt

    signal.signal(signal.SIGTERM, stop)
    try:
        while process.poll() is None:
            update(root)
            time.sleep(1)
        return process.returncode
    except KeyboardInterrupt:
        return 130
    finally:
        if process.poll() is None:
            process.terminate()
            try:
                process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                process.kill()
                process.wait()


if __name__ == "__main__":
    sys.exit(main())
