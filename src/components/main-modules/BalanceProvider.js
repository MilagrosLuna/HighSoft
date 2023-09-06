import React from "react";
import BalanceContext from "../../context/BalanceContext";
import useBalance from "../../hooks/useBalance";

const BalanceProvider = ({ children }) => {
  const { balance, showBalance, decrement, increment, toggleShow } =
    useBalance();

  let movementsArray = [];

  return (
    <BalanceContext.Provider
      value={{ balance, showBalance, decrement, increment, toggleShow, movementsArray }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
