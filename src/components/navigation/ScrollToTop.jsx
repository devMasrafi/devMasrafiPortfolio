import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (hash) {
      return;
    }

    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    resetScroll();

    const animationFrame = window.requestAnimationFrame(resetScroll);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;
