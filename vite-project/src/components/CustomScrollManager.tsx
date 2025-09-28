import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CustomScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This condition checks if the new page is NOT the homepage ('/').
    if (pathname !== "/") {
      // "auto" ensures the scroll is always instantaneous.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    // If the pathname is '/', this code block is skipped, and no scroll occurs.
  }, [pathname]);

  return null;
}

export default CustomScrollManager;
