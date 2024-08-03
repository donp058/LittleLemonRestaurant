/* global fetchAPI, submitAPI */ // Declare API functions as global

import "./CSS-Styles/App.css";
import React, { useReducer, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Reservations from "./components/Reservations";
import BookingConfirmation from "./components/BookingConfirmation";
import ConfirmedBooking from "./components/ConfirmedBooking";
import ScrollToSection from "./components/ScrollToSection";
import ComingSoon from "./components/ComingSoon";

// Initialize available times with today's date
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

// Reducer function to update available times based on selected date
export const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      const selectedDate = action.payload;
      const availableTimes = fetchAPI(selectedDate);
      return availableTimes;
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );
  const [reservationDetails, setReservationDetails] = useState({});

  useEffect(() => {
    const today = new Date();
    const testTimes = fetchAPI(today);
    console.log("Testing API fetch for today's date:", testTimes);
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/reservations"
            element={
              <Reservations
                availableTimes={availableTimes}
                dispatch={dispatch}
                setReservationDetails={setReservationDetails}
              />
            }
          />
          <Route
            path="/booking-confirmation"
            element={
              <BookingConfirmation
                reservationDetails={reservationDetails}
                setReservationDetails={setReservationDetails}
              />
            }
          />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="grid">
      <div className="unused-left green" aria-hidden="true"></div>
      <Hero />
      <div className="unused-right green" aria-hidden="true"></div>
      <div className="unused-left white" aria-hidden="true"></div>
      <Highlights />
      <div className="unused-right white" aria-hidden="true"></div>
      <div className="unused-left green" aria-hidden="true"></div>
      <Testimonials />
      <div className="unused-right green" aria-hidden="true"></div>
      <div className="unused-left white" aria-hidden="true"></div>
      <About />
      <div className="unused-right white" aria-hidden="true"></div>
    </div>
  );
}

export default App;
