import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import SideNav, {
  Toggle,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";


export default function MySideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && !document.getElementById("sideNav").contains(e.target)) {
        setIsOpen(false);
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
      <SideNav.Toggle onClick={toggleNav}></SideNav.Toggle>

      <SideNav.Nav defaultSelected="home">
        <NavItem>
          <NavIcon>
            <i className="fa fa-fw fa-home" style={{ fontSize: "1.5em" }}></i>
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <i class="fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText>Transferencias</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <i class="fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText>Movimientos</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <i class="fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText>Cambio divisas</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <i class="fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText>Préstamos</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <i class="fa-solid fa-money-check-dollar"></i>
          </NavIcon>
          <NavText>Pagos</NavText>
        </NavItem>

        <NavItem>
          <NavIcon>
            <i class="fa-solid fa-right-from-bracket"></i>
          </NavIcon>
          <NavText>Cerrar Sesión</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
