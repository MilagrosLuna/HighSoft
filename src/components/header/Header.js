import { useState, useEffect, useRef } from "react"; // Importa useRef
import logoImg from "../../assets/img/logoW.png";
import MySideNav from "../navBar/NavBar";
import "./header.css";
export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <header>
      <div className="bank-info">
        <img src={logoImg} alt="Logo highsoft banking" className="logo" />
      </div>
    </header>
  );
}
