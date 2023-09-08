import React, { useContext, useState } from "react";
import useBalance from "../../../hooks/useBalance";
import BalanceContext from "../../../context/BalanceContext.js";
// import '../../../Custom.css'

const HomePage = () => {
  const balance = useContext(BalanceContext);

  return (
    <div className=" container py-3 mx-auto my-3 text-white text-center bg-rosa">
      <div style={{width:40+'rem', height:15+'em', padding:2+'em'}} className="container mx-auto">
        <h1>Bienvenido a tu cuenta</h1>
        <h3 style={{paddingTop:1+'em'}} className="text-white">Saldo disponible</h3>
        <div className="center-block container bg-rosa-secondary" style={{paddingTop:0.6+'em'}}>
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