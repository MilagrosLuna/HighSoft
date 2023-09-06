import { useState, useEffect, useRef } from "react"; // Importa useRef
import logoImg from "../../assets/img/logoW.png";
import NavBar from "../navBar/NavBar";
import "./header.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarRef = useRef(null); // Declara la referencia a useRef

  const toggleSidebar = () => {
    setSidebarActive((prevSidebarActive) => !prevSidebarActive);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarActive(false);
      }
    };

    if (sidebarActive) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [sidebarActive]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header>
      <div className="header-Container">
        <NavBar toggleSidebar={toggleSidebar} sidebarActive={sidebarActive} />
        <div className="bank-info">
          <img src={logoImg} alt="Logo highsoft banking" className="logo" />
        </div>
        <div className="darkMode">
          <button
            id="mode-toggle"
            onClick={toggleDarkMode}
            className={`btn ${darkMode ? "btn-light" : "btn-dark"}`}
          >
            <span className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></span>
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
