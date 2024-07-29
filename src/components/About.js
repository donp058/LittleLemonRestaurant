import React from "react";
import "../CSS-Styles/About.css";

export default function About() {
  return (
    <article
      className="about"
      id="about-section"
      aria-labelledby="about-heading"
    >
      <div className="aboutText">
        <h1 id="about-heading">Little Lemon</h1>
        <h2>Chicago</h2>
        <h3>Welcome to Little Lemon!</h3>
        <p>
          Located in the heart of Chicago, Little Lemon is a family-owned
          Mediterranean restaurant that blends traditional recipes with a modern
          twist. Founded by friends Mario and Adrian, our restaurant celebrates
          the vibrant flavors of the Mediterranean, rooted in heritage from
          Greece and Italy.
        </p>
        <h3>Our Values</h3>
        <p>
          We prioritize using fresh, locally-sourced ingredients to create
          delicious and sustainable meals. Our welcoming atmosphere ensures
          every guest feels like part of our family.
        </p>
        <h3>Join Us</h3>
        <p>
          Whether for a cozy dinner, special occasion, or just a great meal,
          Little Lemon is the perfect spot. Experience our warm hospitality and
          vibrant flavors. We can't wait to welcome you!
        </p>
      </div>
      <div className="aboutImages">
        <img
          src="restaurant chef B.jpg"
          alt="Chef at Little Lemon restaurant"
          className="aboutImgB"
        />
        <img
          src="Mario and Adrian A.jpg"
          alt="Mario and Adrian, founders of Little Lemon"
          className="aboutImgA"
        />
      </div>
    </article>
  );
}
