// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Makerble Logo" className="logo-img" />
        <span className="logo-text">Makerble</span>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </nav>
      <div className="profile">
        <img src="profile.jpg" alt="User Profile" className="profile-img" />
        <h1>Welcome, [User Name]</h1>
      </div>
    </header>
  );
}

export default Header;
