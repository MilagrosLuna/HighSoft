import React, { useState } from "react";
import GeneralContext from "@/src/context/generalContext";
import useBalance from "@/src/hooks/useBalance";
import useAuth from "@/src/hooks/useAuth";
import useClientData from "../hooks/useClientData";

const GeneralContextProvider = ({ children }) => {
  const { balance, showBalance, decrement, increment, toggleShow } =
    useBalance();
  const { getCredentials, getUsername, getPassword, username, password, credentials } = useAuth()
  const { getClientData, clientData } = useClientData()
    
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
        getCredentials,
        getUsername,
        getPassword,
        username,
        password,
        credentials,
        getClientData,
        clientData
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
