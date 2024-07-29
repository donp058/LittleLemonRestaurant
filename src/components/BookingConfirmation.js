import React, { useState } from "react";
import "../CSS-Styles/BookingConfirmation.css";
import { useNavigate } from "react-router-dom";

export default function BookingConfirmation({
  reservationDetails,
  setReservationDetails,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the final submission and booking confirmation
    // This could include updating the reservation status and any other necessary actions
    console.log("Reservation Confirmed", {
      firstName,
      lastName,
      email,
      phone,
      ...reservationDetails,
    });
    navigate("/confirmation");
  };

  const resetReservationState = () => {
    setReservationDetails({
      date: "",
      time: "",
      diners: 0,
      specialRequests: "",
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const handleCancel = () => {
    resetReservationState();
    navigate("/reservations");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}-${day}-${year}`;
  };

  return (
    <div className="booking-confirmation">
      <header className="hero-section">
        <div className="hero-item-1">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <section
          className="reservation-summary"
          aria-labelledby="reservation-summary-heading"
        >
          <h3 id="reservation-summary-heading">Reservation Confirmation</h3>
          <section className="reservation-info">
            <p>Date: {formatDate(reservationDetails.date)}</p>
            <p>Time: {reservationDetails.time}</p>
            <p>Number of Guests: {reservationDetails.diners}</p>
            <p>Special Occasion: {reservationDetails.occasion}</p>
            <p>Special Requests: {reservationDetails.specialRequests}</p>
          </section>
          <div className="further-instruction">
            <p>
              Great! We have your reservation details. To finalize, please
              provide the information below.
            </p>
          </div>
        </section>
      </header>
      <main
        className="final-reservation-form"
        aria-labelledby="customer-contact-heading"
      >
        <h3 id="customer-contact-heading">Customer Contact Details</h3>
        <section className="customer-details">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                value={lastName}
                onChange={handleLastNameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div className="form-buttons">
              <button
                type="button"
                className="cancel-button"
                onClick={handleCancel}
              >
                Cancel Reservation
              </button>
              <button type="submit" className="submit-button">
                Submit Reservation
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
