import React, { useContext, useEffect } from "react";
import BalanceContext from "@/src/context/generalContext";
import MovementLog from "@/components/MovementLog";
import MovementLogContainer from "@/components/MovementLogContainer";

const MovementsHistory = () => {
  const balance = useContext(BalanceContext);

  useEffect(() => {
    console.log(balance.movementsArray);
  }, [balance.movementsArray]);

  return (
    <div
      style={{ width: 60 + "%" }}
      className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded"
    >
      <h3 className="text-white">Este es el historial de tus movimientos</h3>
      <MovementLogContainer>
        {balance.movementsArray.length != 0
          ? balance.movementsArray.map((element) =>
              element.amount != 0 ? (
                <MovementLog
                  date={element.date}
                  type={element.type}
                  beneficiary={element.beneficiary}
                  amount={element.amount}
                />
              ) : null
            )
          : ""}
      </MovementLogContainer>
      <button onClick={()=>console.log(balance.movementsArray)}>probar</button>
    </div>
  );
};

export default MovementsHistory;
