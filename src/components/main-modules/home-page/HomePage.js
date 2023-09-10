import React, { useContext, useEffect, useState } from "react";
import BalanceContext from "../../../context/BalanceContext.js";
import Button from "../../Button";
// import '../../../Custom.css'

const HomePage = () => {
  const balance = useContext(BalanceContext);
  const [message, setMessage] = useState("");
  useEffect(() => {
    balance.showBalance
      ? setMessage("Ocultar Saldo")
      : setMessage("Mostrar Saldo");
  }, [balance.showBalance]);

  return (
    <div style={{width:60+"%"}} className="container py-5 mx-auto my-3 text-white text-center bg-rosa rounded">
      <div
        style={{ padding: 2 + "em" }}
        className="container mx-auto"
      >
        <h1>Bienvenido a tu cuenta</h1>
        <h3 style={{ paddingTop: 1 + "em" }} className="text-white">
          Saldo disponible
        </h3>
        <div
          style={{ width: 60 + "%" }}
          className="text-black my-4 mx-auto p-3 d-block center-block container bg-rosa-secondary rounded"
        >
          <div className="row container">
            <div className="col-md-6">
              <div>
                {balance.showBalance ? (
                  <strong className="display-6"> ${balance.balance} </strong>
                ) : (
                  <strong className="display-6">***</strong>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <Button
                  className={"mx-auto btn center-block btn-primary"}
                  text={message}
                  onClick={balance.toggleShow}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
