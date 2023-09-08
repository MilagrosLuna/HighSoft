import React, { useContext, useEffect } from "react";
import BalanceContext from "../../../context/BalanceContext.js";
import useMovement from "../../../hooks/useMovement.js";

const Transfers = () => {
  const balance = useContext(BalanceContext);
  const { getType, getBeneficiary, getAmount, handleSubmit } = useMovement();

  useEffect(() => {
    getType("transfer");
  }, []);

  return (
    <div className="container py-3 mx-auto my-3 text-white text-center bg-rosa">
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="">
          Ingresa cuenta de destino
          <input type="text" onChange={getBeneficiary} />
        </label>
        <label htmlFor="">
          Ingresa el monto que deseas tranferir
          <input type="number" onChange={getAmount} />
        </label>
        <input type="submit" value="Transferir" />
      </form>
    </div>
  );
};

export default Transfers;
