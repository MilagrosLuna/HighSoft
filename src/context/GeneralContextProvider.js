import React, { useState } from "react";
import GeneralContext from "@/src/context/generalContext";
import useBalance from "@/src/hooks/useBalance";

const GeneralContextProvider = ({ children }) => {
  const { balance, showBalance, decrement, increment, toggleShow } =
    useBalance();

  const [movementsArray, setMovementsArray] = useState([]);

  return (
    <GeneralContext.Provider
      value={{
        balance,
        showBalance,
        decrement,
        increment,
        toggleShow,
        movementsArray,
        setMovementsArray,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
