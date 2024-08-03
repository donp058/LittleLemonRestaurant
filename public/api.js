const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  const timeSlots = [
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
  ];

  // Load existing bookings from local storage
  const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

  // Check which slots are available based on existing bookings
  timeSlots.forEach((slot) => {
    const isBooked = existingBookings.some(
      (booking) =>
        new Date(booking.date).toDateString() === date.toDateString() &&
        booking.time === slot
    );

    // Randomly mark slots as available or not
    result.push({
      time: slot,
      available: !isBooked && random() > 0.5, // Randomize availability
    });
  });

  return result;
};

const submitAPI = function (formData) {
  try {
    // Retrieve existing bookings from local storage
    const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add new booking
    existingBookings.push(formData);

    // Save updated bookings back to local storage
    localStorage.setItem("bookings", JSON.stringify(existingBookings));

    return true;
  } catch (error) {
    console.error("Error submitting booking:", error);
    return false;
  }
};

// Ensure these functions are globally available
window.fetchAPI = fetchAPI;
window.submitAPI = submitAPI;
