import React from "react";
import "./App.css";

// Functional component that receives 'name' as a prop
function Welcome({ name }) {
  return (
    <div className="welcome-box">
      <h2>Welcome, {name}!</h2>
    </div>
  );
}

// Main App component that renders multiple Welcome components
export default function App() {
  return (
    <div className="app-container">
      <Welcome name="Deepak" />
      <Welcome name="Manvith" />
      <Welcome name="Sara" />
    </div>
  );
}