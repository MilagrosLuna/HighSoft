import React, { useContext, useEffect } from "react";
import BalanceContext from "../../../context/BalanceContext.js";
import useMovement from "../../../hooks/useMovement.js";

const Transfers = () => {
  const balance = useContext(BalanceContext);
  const { getType, getBeneficiary, getAmount, handleSubmit } = useMovement();

  useEffect(()=>{
    getType("transfer");
  },[])

  return (
    <div>
      <form onSubmit={(event)=>{handleSubmit(balance.movementsArray, event   )}}>
        <label htmlFor="">
          Ingresa cuenta de destino
          <input type="text" onChange={getBeneficiary} />
        </label>
        <label htmlFor="">
          Ingresa el monto que deseas tranferir
          <input type="text" onChange={getAmount}/>
        </label>
        <input type="submit" value="Transferir"  />
      </form>
    </div>
  );
};

export default Transfers;