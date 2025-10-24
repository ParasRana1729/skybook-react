import React from "react";

export const Header = ({ setShowAuthModal, currentUser }) => {
  return (
    <header>
      <nav>
        <div className="nav-container">
          <h1 className="logo">SkyBook</h1>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#search">Search Flights</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <button
                type="button"
                id="auth-link"
                onClick={() => setShowAuthModal(true)}
                className="auth-button"
              >
                {currentUser ? `Logout (${currentUser.name})` : "Login"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
