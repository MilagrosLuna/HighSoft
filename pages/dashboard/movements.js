import React, { useContext, useEffect } from "react";
import BalanceContext from "@/src/context/generalContext";
import MovementLog from "@/components/MovementLog";
import MovementLogContainer from "@/components/MovementLogContainer";
import Layout from "@/components/layout";

const MovementsHistory = () => {
  const balance = useContext(BalanceContext);

  useEffect(() => {
    console.log(balance.movementsArray);
  }, [balance.movementsArray]);

  return (
    <Layout>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
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
            )):null}
        </MovementLogContainer>
      </div>
    </Layout>
  );
};

export default MovementsHistory;
