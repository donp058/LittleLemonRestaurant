import React, { useRef, useEffect } from "react";
import reviews from "./Reviews";
import ReviewCard from "./ReviewCard";
import "../CSS-Styles/ReviewSection.css";

export default function ReviewSection() {
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
    <section className="reviews-horizontal-scroll" ref={scrollContainerRef}>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <ReviewCard
              image={review.image}
              rating={review.rating}
              personFirstname={review.personFirstname}
              personLastname={review.personLastname}
              profileName={review.profileName}
              review={review.review}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
