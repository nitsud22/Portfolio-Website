import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function CustomScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    // If the new page is NOT the homepage ('/'), scroll to the top.
    if (pathname !== "/") {
      // This object ensures the scroll is always instantaneous.
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);

  return null;
}

export default CustomScrollManager;
