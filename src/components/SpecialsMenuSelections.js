import React, { useRef, useEffect } from "react";
import specials from "./Specials";
import Card from "./Card";
import "../CSS-Styles/SpecialsMenuSelections.css";

export default function SpecialsMenuSelections() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const mouseUpHandler = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // Increase number to scroll faster
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", mouseDownHandler);
    scrollContainer.addEventListener("mouseleave", mouseLeaveHandler);
    scrollContainer.addEventListener("mouseup", mouseUpHandler);
    scrollContainer.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      scrollContainer.removeEventListener("mousedown", mouseDownHandler);
      scrollContainer.removeEventListener("mouseleave", mouseLeaveHandler);
      scrollContainer.removeEventListener("mouseup", mouseUpHandler);
      scrollContainer.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return (
    <section className="specials-horizontal-scroll" ref={scrollContainerRef}>
      <ul>
        {specials.map((special, index) => (
          <li key={index}>
            <Card
              image={special.image}
              title={special.title}
              price={special.price}
              description={special.description}
              buttonPhrase={special.buttonPhrase}
              link={special.link}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
