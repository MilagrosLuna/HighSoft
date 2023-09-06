import React from "react";
import BalanceContext from "../../context/BalanceContext.js/BalanceContext";
import useBalance from "../../hooks/useBalance";

const BalanceProvider = ({ children }) => {
  const { balance, showBalance, decrement, increment, toggleShow } =
    useBalance();

  return (
    <BalanceContext.Provider
      value={{ balance, showBalance, decrement, increment, toggleShow }}
    >
      {children}
    </BalanceContext.Provider>
  );
};

export default BalanceProvider;
