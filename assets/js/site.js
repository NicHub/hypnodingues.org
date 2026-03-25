function getPageNavHref(kind) {
    const link = document.querySelector(`[data-page-nav="${kind}"]`);
    return link ? link.getAttribute("href") : "";
}

function shouldIgnoreKeyNavigation(event) {
    const target = event.target;
    if (!target) return false;

    if (target.closest("input, textarea, select, button, [contenteditable='true']")) {
        return true;
    }

    return event.metaKey || event.ctrlKey || event.altKey;
}

function navigateTo(href) {
    if (!href) return;
    sessionStorage.setItem("hd-nav", "1");
    window.location.href = href;
}

document.addEventListener("keydown", (event) => {
    if (event.repeat || shouldIgnoreKeyNavigation(event)) return;

    if (event.key === "ArrowLeft") {
      const href = getPageNavHref("prev");
      if (href) {
        event.preventDefault();
        navigateTo(href);
      }
      return;
    }

    if (event.key === "ArrowRight") {
      const href = getPageNavHref("next");
      if (href) {
        event.preventDefault();
        navigateTo(href);
      }
      return;
    }

    if (event.key === "ArrowUp" && event.shiftKey) {
      const href = getPageNavHref("home") || "/";
      event.preventDefault();
      navigateTo(href);
      return;
    }

    if (event.key === "Escape") {
      const href = getPageNavHref("home") || "/";
      event.preventDefault();
      navigateTo(href);
    }
});
