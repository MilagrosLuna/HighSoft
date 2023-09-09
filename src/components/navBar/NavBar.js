//navBar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { handleLogout } from '../../App'; // Ajusta la ruta según la ubicación real de App.js


import '../navBar/navBar.css'

export default function MySideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !document.getElementById("sideNav").contains(e.target)) {
        setIsOpen(false); // Cierra el menú al hacer clic fuera de él
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <SideNav
      id="sideNav"
      expanded={isOpen}
      onSelect={(selected) => {
        console.log(selected);
      }}
    >
      <SideNav.Toggle onClick={toggleNav} id="toggle"></SideNav.Toggle>

      <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home" >
        
        <NavIcon onClick={toggleNav}>
        <Link  to="/home" className="link-sin-subrayado"><i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
        </Link>
        </NavIcon>
        
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
          </NavIcon>
          <NavText><Link  to="/home" className="link-sin-subrayado">Home</Link></NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText><Link to="/transfers" className="link-sin-subrayado">Transferencias</Link></NavText>
          </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText><Link to="/movements-history" className="link-sin-subrayado">Movimientos</Link></NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText><Link to="/currency-exchange" className="link-sin-subrayado">Cambio Divisas</Link></NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText><Link to="/loan-money" className="link-sin-subrayado">Préstamos</Link></NavText>
        </NavItem>

        <NavItem>
          <NavIcon onClick={toggleNav}>
            <i className="fa fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText><Link to="/pay-services" className="link-sin-subrayado">Pagos</Link></NavText>
        </NavItem>

        <NavItem>
  <NavIcon onClick={toggleNav}>
    <i className="fa fa-solid fa-right-from-bracket"></i>
  </NavIcon>
  <NavText>
    <Link to="/login" className="link-sin-subrayado" onClick={handleLogout}>
      Cerrar Sesión
    </Link>
  </NavText>
</NavItem>

      </SideNav.Nav>
    </SideNav>
  );
}


