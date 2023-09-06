import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./navBar.css";

export default function NavBar(props) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const sidebarRef = useRef(null); // Referencia al elemento de la barra lateral

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
    props.toggleSidebar(); // Llama a la función del padre para abrir/cerrar la barra lateral
  };

  // Detectar clics fuera de la barra lateral
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

  // Evitar que el clic en la hamburguesa se propague al documento
  const handleHamburgerClick = (e) => {
    e.stopPropagation();
    toggleSidebar();
  };

  return (
    <div className={`menu-btn ${sidebarActive ? "active" : ""}`}  onClick={handleHamburgerClick}>
      <div className="hamburger" onClick={handleHamburgerClick}></div>
      <div className="hamburger" onClick={handleHamburgerClick}></div>
      <div className="hamburger" onClick={handleHamburgerClick}></div>
      <div className={`sidebar ${sidebarActive ? "active" : ""}`} ref={sidebarRef}>
        <Link to="/inicio" className="btnSideBar" >
          Inicio
        </Link>
        <Link to="/transferencias" className="btnSideBar">
          Transferencias
        </Link>
        <Link to="/movimientos" className="btnSideBar">
          Movimientos
        </Link>
        <Link to="/cambio-divisas" className="btnSideBar">
          Cambio divisas
        </Link>
        <Link to="/prestamos" className="btnSideBar">
          Préstamos
        </Link>
        <Link to="/pagos" className="btnSideBar">
          Pagos
        </Link>
        <Link to="/cerrar-sesion" className="btn-logOut">
          Cerrar Sesión
        </Link>
      </div>
    </div>
  );
}
