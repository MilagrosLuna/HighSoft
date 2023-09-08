import React, { useContext, useEffect } from "react";
import BalanceContext from "../../../context/BalanceContext.js";
import useMovement from "../../../hooks/useMovement.js";

const Transfers = () => {
  const balance = useContext(BalanceContext);
  const { getType, getBeneficiary, getAmount, handleSubmit } = useMovement();

  useEffect(() => {
    getType("Transferencia");
  }, []);

  const confirmTransfer = (event) =>{
    event.preventDefault();
    const confirmMessage = "¿Desea realizar la transferencia?"
    const confirm = window.confirm(confirmMessage);
    if (confirm) {
      alert("Su transferencia fue enviada");
      handleSubmit(event);
    } else {
      alert("La transferencia ha sido cancelada.");
    }
  };

  return (
    <div  style={{width:60+"%"}}  className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded">
      <h3 className="text-white mb-4">Envia una Transferencia</h3>
      <form
        onSubmit={(event) => {
          confirmTransfer(event)
        }}
      >
        <label className="custom-label" htmlFor="">
          Ingresa cuenta de destino
          <input
            type="text"
            style={{ width: 50 + "%" }}
            className="text-center mx-auto my-2 form-control"
            onChange={getBeneficiary}
            required
          />
        </label>
        <label className="custom-label" htmlFor="">
          Ingresa el monto que deseas tranferir
          <input
            type="number"
            style={{ width: 50 + "%" }}
            className="text-center mx-auto my-2 form-control"
            onChange={getAmount}
            required
          />
        </label>
        <input type="submit" className="btn btn-primary" value="Transferir" />
      </form>
    </div>
  );
};

export default Transfers;
