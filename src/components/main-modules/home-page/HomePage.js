import React, { useContext, useState } from "react";
import useBalance from "../../../hooks/useBalance";
import BalanceContext from "../../../context/BalanceContext.js";

const HomePage = () => {
  const balance = useContext(BalanceContext);

  return (
    <div className="container mx-auto bg-secondary text-white text-center">
      <div style={{width:40+'rem', height:15+'em'}} className="container mx-auto">
        <h1>Bienvenido a tu cuenta</h1>
        <h3 className="text-white">Saldo disponible</h3>
        <div className="center-block container">
          {balance.showBalance ? "$"+balance.balance : "***"}
          <button
            className="btn btn-default"
            id="saldoButton"
            onClick={balance.toggleShow}
          >
            Mostrar Saldo
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;