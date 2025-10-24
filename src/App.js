import React, { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchFlights from "./components/SearchFlights";
import FlightResults from "./components/FlightResults";
import About from "./components/About";
import Fleet from "./components/Fleet";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [flights, setFlights] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [users, setUsers] = useState([]);

  const flightDatabase = [
    {
      id: 1,
      airline: "SkyWings Airlines",
      from: "New York",
      to: "London",
      departure: "08:30",
      arrival: "20:45",
      duration: "7h 15m",
      price: 899,
    },
    {
      id: 2,
      airline: "CloudJet",
      from: "New York",
      to: "London",
      departure: "14:20",
      arrival: "02:35",
      duration: "7h 15m",
      price: 1249,
    },
    {
      id: 3,
      airline: "AeroLink",
      from: "London",
      to: "Paris",
      departure: "10:15",
      arrival: "11:30",
      duration: "1h 15m",
      price: 299,
    },
    {
      id: 4,
      airline: "EuroFly",
      from: "Paris",
      to: "Tokyo",
      departure: "16:40",
      arrival: "11:20",
      duration: "12h 40m",
      price: 1599,
    },
  ];

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }

    return () => {
      console.log("App component will unmount");
    };
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const fetchFlights = async (searchParams) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const results = flightDatabase.filter((flight) => {
        return (
          flight.from.toLowerCase().includes(searchParams.from.toLowerCase()) &&
          flight.to.toLowerCase().includes(searchParams.to.toLowerCase())
        );
      });

      return results;
    } catch (error) {
      console.error("Error fetching flights:", error);
      return [];
    }
  };

  const handleSearch = async (searchParams) => {
    setSearchData(searchParams);

    const results = await fetchFlights(searchParams);

    setFlights(results);
    setShowResults(true);

    setTimeout(() => {
      document
        .getElementById("results")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };


  const handleLogin = (userData) => {
    const user = {
      id: users.length + 1,
      name: userData.name || "User",
      email: userData.email,
    };

    setCurrentUser(user);
    setUsers([...users, user]);
    setShowAuthModal(false);

    alert(`Welcome${userData.name ? ", " + userData.name : ""}!`);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setShowAuthModal(false);
  };

  return (
    <div className="App">
      <Header setShowAuthModal={setShowAuthModal} currentUser={currentUser} />

      <main>
        <Hero />
        <SearchFlights onSearch={handleSearch} />
        <FlightResults
          flights={flights}
          searchData={searchData}
          show={showResults}
        />
        <About />
        <Fleet />
      </main>

      <AuthModal
        show={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />

      <Footer />
    </div>
  );
}

export default App;
