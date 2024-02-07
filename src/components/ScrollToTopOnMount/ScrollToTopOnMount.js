import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScrollToTopOnMount() {
  const navigate = useNavigate();
  const hash = window.location.hash;
  useEffect(() => {
    if (hash) {
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [navigate, hash]);

  return null;
}

export default ScrollToTopOnMount;
