import React from "react";
import "../CSS-Styles/ReviewCard.css";

export default function ReviewCard({
  image,
  rating,
  personFirstname,
  personLastname,
  profileName,
  review,
}) {
  return (
    <article
      className="reviewCard container"
      aria-labelledby={`review-${personFirstname}-${personLastname}`}
    >
      <div className="rating" aria-label={`Rating: ${rating}`}>
        {rating}
      </div>
      <div className="identity">
        <img
          src={image}
          alt={`${personFirstname} ${personLastname}`}
          className="reviewCard-image"
        />
        <div className="names">
          <p
            id={`review-${personFirstname}-${personLastname}`}
            className="firstLastName"
          >
            {personFirstname} {personLastname}
          </p>
          <p className="profile">{profileName}</p>
        </div>
      </div>
      <div className="review">
        <p>{review}</p>
      </div>
    </article>
  );
}
