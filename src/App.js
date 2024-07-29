import "./CSS-Styles/App.css";
import React, { useReducer, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Reservations from "./components/Reservations";
import BookingConfirmation from "./components/BookingConfirmation";
import ComingSoon from "./components/ComingSoon";
import ScrollToSection from "./components/ScrollToSection";
import { availableTimes as initialAvailableTimes } from "./components/ReservationsAvailable";

const initializeTimes = (initialAvailableTimes) => initialAvailableTimes;

const timesReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return state;
    case "UPDATE_TIMES":
      // Logic to update available times based on selected date
      return state;
    case "UPDATE_SLOT":
      // Logic to update a specific slot
      const { date, time, update } = action.payload;
      return {
        ...state,
        [date]: state[date].map((slot) =>
          slot.time === time ? { ...slot, ...update } : slot
        ),
      };
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    initialAvailableTimes,
    initializeTimes
  );
  const [reservationDetails, setReservationDetails] = useState({});

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
          <Route
            path="/comingsoon"
            element={
              <ComingSoon/>
            }
          />
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