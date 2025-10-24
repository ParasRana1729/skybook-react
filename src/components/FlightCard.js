import React from "react";

const FlightCard = ({ flight, searchData, onBook }) => {
  const handleBookClick = () => {
    onBook(flight.id);
  };

  return (
    <div className="flight-card">
      <div className="flight-info">
        <h4>{flight.airline}</h4>
        <div className="flight-details">
          <p>
            <strong>{flight.from}</strong> → <strong>{flight.to}</strong>
          </p>
          <p>
            Departure: {flight.departure} | Arrival: {flight.arrival}
          </p>
          <p>Duration: {flight.duration}</p>

          {searchData && (
            <p>
              Passengers: {searchData.passengers} | Class: {searchData.class}
            </p>
          )}
        </div>
      </div>

      <div className="flight-booking">
        <div className="flight-price">${flight.price}</div>
        <button className="book-btn" onClick={handleBookClick}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FlightCard;
