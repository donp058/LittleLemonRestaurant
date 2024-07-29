import React from "react";
import "../CSS-Styles/Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleReservationClick = () => {
    navigate("/reservations");
  };

  return (
    <header className="hero-container" role="banner">
      <div className="flex-item-1">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family-owned, Mediterranean restaurant, focused on
          traditional recipes, served with a modern twist.
        </p>
        <button
          className="reservation-button"
          aria-label="Reserve a Table"
          onClick={handleReservationClick}
        >
          Reserve a Table
        </button>
      </div>
      <div className="flex-item-2">
        <img
          src="restaurantfood.jpg"
          alt="Restaurant food"
          className="restaurant-food-photo"
        />
      </div>
    </header>
  );
}
