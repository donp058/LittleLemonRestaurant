import React from "react";
import ReservationForm from "./ReservationForm";
import "../CSS-Styles/Reservations.css";

export default function Reservations({
  availableTimes,
  dispatch,
  setReservationDetails,
}) {
  return (
    <div className="reservations-page">
      <header className="reservationHeroContainer">
        <div className="hero-item-1">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <div className="hero-item-2">
          <h3>Reservations</h3>
          <img
            src="restaurant.jpg"
            alt="Tables set up in the restaurant"
            className="restaurant-tables-photo"
          />
        </div>
      </header>
      <section className="reservationFormSection">
        <h3 id="reservation-form-title" className="reservation-form-title">
          Reservation Details
        </h3>
        <ReservationForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          setReservationDetails={setReservationDetails}
          aria-labelledby="reservation-form-title"
        />
      </section>
    </div>
  );
}
