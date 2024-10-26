// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#tasks">Tasks</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#reports">Reports</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
