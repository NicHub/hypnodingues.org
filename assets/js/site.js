function normalizeHostname(hostname) {
    return (hostname || "").replace(/^www\./, "").toLowerCase();
}

function getInternalHosts() {
    const hosts = new Set();
    const currentHost = normalizeHostname(window.location.hostname);
    const configuredHost = normalizeHostname(document.body?.dataset.siteHost);

    if (currentHost) hosts.add(currentHost);
    if (configuredHost) hosts.add(configuredHost);

    return hosts;
}

function shouldOpenInNewWindow(anchor, internalHosts) {
    const href = anchor.getAttribute("href");
    if (!href || href.startsWith("#")) return false;

    let url;
    try {
        url = new URL(href, window.location.href);
    } catch {
        return false;
    }

    if (!["http:", "https:"].includes(url.protocol)) return false;

    return !internalHosts.has(normalizeHostname(url.hostname));
}

function ensureNoopener(anchor) {
    const relValues = new Set((anchor.getAttribute("rel") || "").split(/\s+/).filter(Boolean));
    relValues.add("noopener");
    relValues.add("noreferrer");
    anchor.setAttribute("rel", Array.from(relValues).join(" "));
}

function decorateExternalLinks() {
    const internalHosts = getInternalHosts();
    const anchors = document.querySelectorAll("a[href]");

    anchors.forEach((anchor) => {
        if (!shouldOpenInNewWindow(anchor, internalHosts)) return;

        const target = anchor.getAttribute("target");
        if (!target || target === "_self") {
            anchor.setAttribute("target", "_blank");
        }

        if (anchor.getAttribute("target") === "_blank") {
            ensureNoopener(anchor);
        }
    });
}

function decorateFootnoteReferences() {
    document.querySelectorAll("a.footnote-ref").forEach(a => {
        a.parentElement?.parentElement?.classList.add("has-footnote-ref");
    });
}

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

decorateExternalLinks();
decorateFootnoteReferences();
