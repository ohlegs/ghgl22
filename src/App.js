import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <Link to="/form">
        <button>FORM</button>
      </Link>
    </div>
  );
}
