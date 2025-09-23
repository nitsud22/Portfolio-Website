import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Explicitly set the behavior
    });
  }, [pathname]); // This effect runs every time the path changes

  return null; // This component does not render anything
}

export default ScrollToTop;
