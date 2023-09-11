//NavBar.js

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { handleLogout } from "../../App";
import "../navBar/navBar.css";
import OutsideClickHandler  from "react-outside-click-handler"; 
import { useNavigate } from "react-router-dom";

export default function MySideNav({ isLoggedIn, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  
  const handleNavItemClick = () => {
    setIsOpen(false); // Cierra la navegación al hacer clic en un NavItem
  };

  const handleOutsideClick = () => {
    if (isOpen) {
      toggleNav();
    }
  };

  const handleLogoutClick = () => {
    onLogout(); // Cierra la sesión
    navigate("/login"); // Redirige al usuario al inicio de sesión
  };

  return (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <SideNav
        id="sideNav"
        expanded={isOpen}
        onToggle={(selected) => {
          console.log(selected);
        }}
      >
        <SideNav.Toggle onClick={toggleNav} id="toggle"></SideNav.Toggle>

        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon onClick={toggleNav}>
              <Link to="/home" className="link-sin-subrayado">
                <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
              </Link>
            </NavIcon>

            <NavIcon onClick={toggleNav}>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
            </NavIcon>
            <NavText onClick={toggleNav}>
              <Link to="/home" className="link-sin-subrayado">
                Home
              </Link>
            </NavText>
          </NavItem>

          <NavItem>
            <NavIcon onClick={toggleNav}>
              <i className="fa fa-solid fa-money-check-dollar"></i>
            </NavIcon>
            <NavText onClick={toggleNav}>
              <Link to="/transfers" className="link-sin-subrayado">
                Transferencias
              </Link>
            </NavText>
          </NavItem>

          {/* Otras rutas de navegación aquí */}
          <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText onClick={toggleNav}>
            <Link to="/movements-history" className="link-sin-subrayado">
              Movimientos
            </Link>
          </NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText onClick={toggleNav}>
            <Link to="/currency-exchange" className="link-sin-subrayado">
              Cambio Divisas
            </Link>
          </NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText onClick={toggleNav}>
            <Link to="/loan-money" className="link-sin-subrayado">
              Préstamos
            </Link>
          </NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText onClick={toggleNav}>
            <Link to="/pay-services" className="link-sin-subrayado">
              Pagos
            </Link>
          </NavText>
        </NavItem>


          <NavItem>
            <NavIcon onClick={toggleNav}>
              <i className="fa fa-solid fa-right-from-bracket"></i>
            </NavIcon>
            <NavText onClick={toggleNav}>
              <Link
                to="/login"
                className="link-sin-subrayado"
                onClick={handleLogoutClick}
              >
                Cerrar Sesión
              </Link>
            </NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </OutsideClickHandler>
  );
}