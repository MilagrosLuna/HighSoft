import "./header.css";
import NavBar from "../navBar/NavBar";
import React, { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    var sidebar = document.getElementById("sidebar");
    //var overlay = document.getElementById("overlay");

    if (sidebar.style.left === "-80%") {
      sidebar.style.left = "0";
     // overlay.style.display = "block";
      //overlay.style.pointerEvents = "auto";
    } else {
      sidebar.style.left = "-80%";
      //overlay.style.display = "none";
      //overlay.style.pointerEvents = "none";
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Lógica para cambiar el modo oscuro
  };

  return (
    <header>
      <div className="header-Container">
        <NavBar toggleSidebar={toggleSidebar} />

        <div className="bank-info">
          <img
            src="../assets/img/logoW.png"
            alt="Logo highsoft banking"
            className="logo"
          />
        </div>
        <div className="darkMode">
          <button className="mode-toggle" onClick={toggleDarkMode}>
            <span className="fas fa-sun"></span>
            <span className="fas fa-moon"></span>
          </button>
        </div>
      </div>
      <div className="info-user-container">
        <div className="user-info-container">
          <div className="user-name">
            <i className="fas fa-user-circle"></i>
            <span>Hola juan</span>
          </div>
          <div className="current-time" id="current-time">
            <i className="fas fa-clock"></i>
            <span id="current-time-p"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
