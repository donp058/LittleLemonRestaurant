import React from "react";
import "../CSS-Styles/Card.css";

export default function Card({
  image,
  title,
  price,
  description,
  buttonPhrase,
  link,
}) {
  return (
    <div className="card" role="region" aria-labelledby={`card-title-${title}`}>
      <img src={image} alt={`${title} image`} className="card-image" />
      <div className="title-price">
        <h3 id={`card-title-${title}`} className="card-title">
          {title}
        </h3>
        <p className="card-price">{price}</p>
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
      <a
        href={link}
        className="card-button-link"
        aria-label={`Learn more about ${title}`}
      >
        <button className="card-button">{buttonPhrase}</button>
      </a>
    </div>
  );
}
