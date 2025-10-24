import React from "react";
import FlightCard from "./FlightCard";

const FlightResults = ({ flights, searchData, onBook, show }) => {
  if (!show) {
    return null;
  }

  const handleBook = (flightId) => {
    const flight = flights.find((f) => f.id === flightId);
    if (flight) {
      alert(
        `Flight booked successfully!\n\n` +
          `Flight: ${flight.airline}\n` +
          `Route: ${flight.from} → ${flight.to}\n` +
          `Departure: ${flight.departure}\n` +
          `Price: $${flight.price}\n\n` +
          `Thank you for choosing SkyBook!`,
      );
    }
  };

  return (
    <section id="results" className="results-section">
      <div className="container">
        <h3>Available Flights</h3>

        <div className="flight-results">
          {flights.length === 0 ? (
            <div className="no-results">
              <h4>No flights found</h4>
              <p>
                No flights available from {searchData.from} to {searchData.to}{" "}
                on the selected date.
              </p>
            </div>
          ) : (
            flights.map((flight) => (
              <FlightCard
                key={flight.id}
                flight={flight}
                searchData={searchData}
                onBook={handleBook}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FlightResults;
