import React from "react";
import "../CSS-Styles/Testimonials.css";
import ReviewSection from "./ReviewSection";

export default function Testimonials() {
  return (
    <section className="testimonials" aria-label="Customer Testimonials">
      <h2 className="review-title">Little Lemon Restaurant Reviews</h2>
      <ReviewSection />
    </section>
  );
}
