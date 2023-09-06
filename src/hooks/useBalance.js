import React, { useState } from "react";

const useBalance = () => {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);

  const decrement = (amount) => {
    setBalance(balance - amount);
  };
  const increment = (amount) => {
    setBalance(balance + amount);
  };
  const toggleShow = () => {
    showBalance ? setShowBalance(false) : setShowBalance(true);
  };

  return {
    balance,
    showBalance,
    decrement,
    increment,
    toggleShow
  };
};

export default useBalance;
