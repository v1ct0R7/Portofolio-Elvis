import { useSyncExternalStore } from "react";

const NAVIGATE_EVENT = "app:navigate";

function subscribe(callback) {
  window.addEventListener("popstate", callback);
  window.addEventListener(NAVIGATE_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(NAVIGATE_EVENT, callback);
  };
}

const getLocation = () => window.location.pathname + window.location.hash;

export function useLocation() {
  const location = useSyncExternalStore(subscribe, getLocation);
  const [pathname, hash = ""] = location.split("#");
  return { pathname: pathname.replace(/\/+$/, "") || "/", hash: hash ? `#${hash}` : "" };
}

export function navigate(to) {
  if (to === getLocation()) return;
  window.history.pushState({}, "", to);
  window.dispatchEvent(new Event(NAVIGATE_EVENT));
}

export function Link({ to, onClick, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const [targetPath] = to.split("#");
    // Same-page anchors scroll natively; only intercept cross-route links.
    if (targetPath && targetPath !== window.location.pathname) {
      event.preventDefault();
      navigate(to);
    }
  };

  return <a href={to} onClick={handleClick} {...props} />;
}
