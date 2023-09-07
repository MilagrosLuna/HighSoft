import React, { useContext, useState } from "react";
import useBalance from "../../../hooks/useBalance";
import BalanceContext from "../../../context/BalanceContext.js";

const HomePage = () => {
  const balance = useContext(BalanceContext);

  return (
    <div className="container mx-auto bg-secondary text-white text-center">
      <div style={{width:40+'rem', height:15+'em', padding:2+'em'}} className="container mx-auto">
        <h1>Bienvenido a tu cuenta</h1>
        <h3 style={{paddingTop:1+'em'}} className="text-white">Saldo disponible</h3>
        <div className="center-block container" style={{paddingTop:0.6+'em'}}>
          {balance.showBalance ? "$"+balance.balance : "***"}
          <button
            style={{marginLeft:3+'em'}}
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