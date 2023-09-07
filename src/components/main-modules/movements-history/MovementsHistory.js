import React, { useContext, useEffect } from "react";
import BalanceContext from "../../../context/BalanceContext";
import MovementLog from "./MovementLog";

const MovementsHistory = () => {
  const balance = useContext(BalanceContext);

  useEffect(() => {
    console.log(balance.movementsArray);
  }, [balance.movementsArray]);

  return (
    <div>
      <h2>Este es el historial de tus movimientos</h2>
      {balance.movementsArray.length != 0
        ? balance.movementsArray.map((element) => (
            <MovementLog
              date={element.date}
              type={element.type}
              beneficiary={element.beneficiary}
              amount={element.amount}
            />
          ))
        : ""}
    </div>
  );
};

export default MovementsHistory;
