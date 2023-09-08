// Custom hook para manejar los estados del balance

import React, { useState } from "react";

const useBalance = () => {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);

  // funcion para disminuir el monto del balance
  const decrement = (amount) => {
    if(balance>=amount){
      setBalance(balance - amount);
      return true
    }else{
      alert("No posee saldo suficiente.")
      return false
    }
  
  };
  //funcion para incrementar el monto del balance
  const increment = (amount) => {
    setBalance(balance + amount);
  };
  // funcion para cambiar si el monto es visible o no
  const toggleShow = () => {
    showBalance ? setShowBalance(false) : setShowBalance(true);
  };

  return {
    balance,
    showBalance,
    decrement,
    increment,
    toggleShow,
  };
};

export default useBalance;
