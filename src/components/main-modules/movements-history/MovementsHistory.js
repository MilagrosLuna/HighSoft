import React, { useContext, useEffect } from "react";
import BalanceContext from "../../../context/BalanceContext";
import MovementLog from "./MovementLog";
import MovementLogContainer from "./MovementLogContainer";

const MovementsHistory = () => {
  const balance = useContext(BalanceContext);

  useEffect(() => {
    console.log(balance.movementsArray);
  }, [balance.movementsArray]);

  return (
    <div  style={{width:60+"%"}}  className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded">
      <h3 className="text-white">Este es el historial de tus movimientos</h3>
      <MovementLogContainer>
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
          </MovementLogContainer>
    </div>
  );
};

export default MovementsHistory;
