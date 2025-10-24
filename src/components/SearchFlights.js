import React, { useState, useEffect } from "react";

const SearchFlights = ({ onSearch }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    passengers: "",
    class: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("SearchFlights component mounted");

    return () => {
      console.log("SearchFlights component will unmount");
    };
  }, []);

  useEffect(() => {
    if (formData.departure) {
      console.log("Departure date changed:", formData.departure);
    }
  }, [formData.departure]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.from.trim()) {
      newErrors.from = "Departure city is required";
    } else if (data.from.trim().length < 2) {
      newErrors.from = "City name must be at least 2 characters";
    }

    if (!data.to.trim()) {
      newErrors.to = "Destination city is required";
    } else if (data.to.trim().length < 2) {
      newErrors.to = "City name must be at least 2 characters";
    }

    if (
      data.from.trim().toLowerCase() === data.to.trim().toLowerCase() &&
      data.from.trim() !== ""
    ) {
      newErrors.to = "Destination must be different from departure city";
    }

    if (!data.departure) {
      newErrors.departure = "Departure date is required";
    } else {
      const departureDate = new Date(data.departure);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (departureDate < today) {
        newErrors.departure = "Departure date cannot be in the past";
      }
    }

    if (data.return) {
      const returnDate = new Date(data.return);
      const departureDate = new Date(data.departure);

      if (returnDate <= departureDate) {
        newErrors.return = "Return date must be after departure date";
      }
    }

    if (!data.passengers) {
      newErrors.passengers = "Number of passengers is required";
    }

    if (!data.class) {
      newErrors.class = "Travel class is required";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    onSearch(formData);
    setErrors({});
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <section id="search" className="search-section">
      <div className="container">
        <h3>Search Flights</h3>

        <form onSubmit={handleSubmit} className="flight-form">
          <div className="form-group">
            <label htmlFor="from">From</label>
            <input
              type="text"
              id="from"
              name="from"
              placeholder="Departure city"
              value={formData.from}
              onChange={handleInputChange}
              required
            />
            {errors.from && (
              <span className="error-message">{errors.from}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="text"
              id="to"
              name="to"
              placeholder="Destination city"
              value={formData.to}
              onChange={handleInputChange}
              required
            />
            {errors.to && <span className="error-message">{errors.to}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="departure">Departure Date</label>
            <input
              type="date"
              id="departure"
              name="departure"
              value={formData.departure}
              onChange={handleInputChange}
              min={today}
              required
            />
            {errors.departure && (
              <span className="error-message">{errors.departure}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="return">Return Date</label>
            <input
              type="date"
              id="return"
              name="return"
              value={formData.return}
              onChange={handleInputChange}
              min={formData.departure || today}
            />
            {errors.return && (
              <span className="error-message">{errors.return}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="passengers">Passengers</label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleInputChange}
              required
            >
              <option value="">Select passengers</option>
              <option value="1">1 Passenger</option>
              <option value="2">2 Passengers</option>
              <option value="3">3 Passengers</option>
              <option value="4">4 Passengers</option>
              <option value="5">5+ Passengers</option>
            </select>
            {errors.passengers && (
              <span className="error-message">{errors.passengers}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="class">Class</label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              required
            >
              <option value="">Select class</option>
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
            {errors.class && (
              <span className="error-message">{errors.class}</span>
            )}
          </div>

          <button type="submit" className="search-btn">
            Search Flights
          </button>
        </form>
      </div>
    </section>
  );
};

export default SearchFlights;
