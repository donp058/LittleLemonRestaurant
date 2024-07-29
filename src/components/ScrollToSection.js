import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

function ScrollToSection() {
  const Location = useLocation();

  useEffect(() => {
    if (Location.state && Location.state.scrollTo) {
      scroller.scrollTo(Location.state.scrollTo, {
        smooth: true,
        duration: 500,
      });
    }
  }, [Location]);

  return null;
}

export default ScrollToSection;
