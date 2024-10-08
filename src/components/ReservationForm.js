import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../CSS-Styles/ReservationForm.css";

const defaultTimes = [
  { time: "4:00 P.M.", available: false },
  { time: "4:30 P.M.", available: false },
  { time: "5:00 P.M.", available: false },
  { time: "5:30 P.M.", available: false },
  { time: "6:00 P.M.", available: false },
  { time: "6:30 P.M.", available: false },
  { time: "7:00 P.M.", available: false },
  { time: "7:30 P.M.", available: false },
  { time: "8:00 P.M.", available: false },
  { time: "8:30 P.M.", available: false },
  { time: "9:00 P.M.", available: false },
  { time: "9:30 P.M.", available: false },
];

export default function ReservationForm({
  availableTimes,
  dispatch,
  setReservationDetails,
}) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [selectedOccasion, setSelectedOccasion] = useState("");
  const [selectedDiners, setSelectedDiners] = useState(0);

  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isDinersSelected, setIsDinersSelected] = useState(false);
  const [isOccasionSelected, setIsOccasionSelected] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    const formattedDate = date.toISOString().split("T")[0];
    setSelectedDate(date);
    setIsDateSelected(true);
    dispatch({ type: "SET_DATE", payload: formattedDate });
    setSelectedTime("");
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
    setIsTimeSelected(true);
  };

  const handleSpecialRequestsChange = (e) => {
    setSpecialRequests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setSelectedOccasion(e.target.value);
    setIsOccasionSelected(true);
  };

  const handleDinersChange = (e) => {
    setSelectedDiners(e.target.value);
    setIsDinersSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedDate = selectedDate?.toLocaleDateString();

    // Debugging output to see the validation states
    console.log("Validation State:", {
      isDateSelected,
      isDinersSelected,
      isOccasionSelected,
      isTimeSelected,
    });

    let updatedSpecialRequests = specialRequests;
    if (
      !isDateSelected ||
      !isDinersSelected ||
      !isOccasionSelected ||
      !isTimeSelected
    ) {
      setErrors({
        date: !isDateSelected,
        diners: !isDinersSelected,
        occasion: !isOccasionSelected,
        time: !isTimeSelected,
      });
      alert("Please interact with all required fields.");
    } else {
      if (specialRequests === "") {
        updatedSpecialRequests = "None";
      }
      setReservationDetails({
        date: formattedDate,
        time: selectedTime,
        diners: selectedDiners,
        specialRequests: updatedSpecialRequests,
        occasion: selectedOccasion,
      });
      navigate("/booking-confirmation");
    }
  };

  const timesToDisplay = selectedDate
    ? availableTimes[selectedDate.toISOString().split("T")[0]] || defaultTimes
    : defaultTimes;

  return (
    <form
      className="reservation-form"
      data-testid="reservation-form"
      onSubmit={handleSubmit}
    >
      <div className="reservation-col1"></div>
      <div className="reservation-data">
        <div className="date-section">
          <label htmlFor="res-date">Reservation Date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="MM/dd/yyyy"
            placeholderText="Click for Date"
            id="res-date"
            className={`custom-datepicker ${errors.date ? "error-border" : ""}`}
            data-testid="datepicker"
            onKeyDown={(e) => e.preventDefault()}
            minDate={new Date()}
            aria-required="true"
            aria-invalid={errors.date}
            aria-describedby="date-error"
            aria-label="Reservation Date"
          />
        </div>
        <div className={`table-chart ${errors.time ? "error-border" : ""}`}>
          <h3>AVAILABLE SEATING TIMES</h3>
          <div
            className="seating-times"
            role="radiogroup"
            aria-labelledby="available-seating-times"
          >
            {timesToDisplay.map((timeSlot) => (
              <label
                key={timeSlot.time}
                htmlFor={timeSlot.time}
                className={`time-slot ${
                  selectedTime === timeSlot.time ? "selected" : ""
                } ${!timeSlot.available ? "booked" : ""}`}
              >
                <input
                  type="radio"
                  id={timeSlot.time}
                  name="seating-time"
                  value={timeSlot.time}
                  checked={selectedTime === timeSlot.time}
                  onChange={handleTimeChange}
                  disabled={!timeSlot.available}
                  aria-checked={selectedTime === timeSlot.time}
                  aria-disabled={!timeSlot.available}
                />
                {timeSlot.time}
              </label>
            ))}
          </div>
          {errors.time && (
            <span id="time-error" className="error-text">
              Please select a time.
            </span>
          )}
        </div>
        <div className="dropdown-section">
          <div className={`dinerFlex ${errors.diners ? "error-border" : ""}`}>
            <label htmlFor="diner-list">Patrons</label>
            <select
              className="dinerList"
              onChange={handleDinersChange}
              id="diner-list"
              name="diner-list"
              value={selectedDiners}
              aria-required="true"
              aria-invalid={errors.diners}
              aria-describedby="diners-error"
              aria-label="Patrons"
              data-testid="patrons-select"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            {errors.diners && (
              <span id="diners-error" className="error-text">
                Select
              </span>
            )}
          </div>
          <div
            className={`occasionFlex ${errors.occasion ? "error-border" : ""}`}
          >
            <label htmlFor="occasion">Occasion</label>
            <select
              className="occasionList"
              onChange={handleOccasionChange}
              id="occasion-list"
              name="occasion-list"
              value={selectedOccasion}
              aria-required="true"
              aria-invalid={errors.occasion}
              aria-describedby="occasion-error"
              aria-label="Occasion"
            >
              <option value=""></option>
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday</option>
              <option value="Something Else">Something Else</option>
              <option value="None">None</option>
            </select>
            {errors.occasion && (
              <span id="occasion-error" className="error-text">
                Select
              </span>
            )}
          </div>
        </div>
        <div className="special-requests">
          <label htmlFor="special-requests">Special Requests</label>
          <textarea
            id="special-requests"
            name="special-requests"
            rows="5"
            placeholder="Please type here to let us know of any requests you may have for your dining experience (Optional)"
            value={specialRequests}
            onChange={handleSpecialRequestsChange}
            aria-label="Special Requests"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Proceed With Reservation"
          className="reservation-submit"
          aria-label="Proceed With Reservation"
        />
      </div>
      <div className="reservation-col2"></div>
    </form>
  );
}
