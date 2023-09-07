import React, { useContext, useState } from "react";
import { useDate } from "./useDate";
import BalanceContext from "../context/BalanceContext";

const useMovement = () => {
  const balance = useContext(BalanceContext);
  const movementsArray = balance.movementsArray;
  const { getDate } = useDate();

  const [amount, setAmount] = useState(0);
  const [beneficiary, setBeneficiary] = useState("");
  const [typeOfMovement, setTypeOfMovement] = useState("");

  const date = getDate();

  const getType = (type) => {
    setTypeOfMovement(type);
  };

  const getBeneficiary = (event) => {
    setBeneficiary(event.target.value);
  };
  const getService = (service) => {
    setBeneficiary(service);
  };
  const getAmount = (event) => {
    setAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMovement = {
      type: typeOfMovement,
      date: date,
      amount: amount,
      beneficiary: beneficiary,
    };
    balance.setMovementsArray([...balance.movementsArray, newMovement]);
    console.log(balance.movementsArray);
  };

  return {
    getType,
    getBeneficiary,
    getService,
    getAmount,
    handleSubmit,
  };
};

export default useMovement;
