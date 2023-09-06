import React, { useState } from "react";
import { useDate } from "./useDate";

const useMovement = () => {
  const { getDate } = useDate();

  const [amount, setAmount] = useState(0);
  const [beneficiary, setBeneficiary] = useState("");
  const [typeOfMovement, setTypeOfMovement] = useState("");

  const date = getDate();

  const getType = (type)=>{
    setTypeOfMovement(type);
  };

  const getBeneficiary = (event) => {
    setBeneficiary(event.target.value);
  };
  const getAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (event, targetArray) => {
    event.preventDefault();
    const newMovement = {
      type: {typeOfMovement},
      date: {date},
      amount: {amount},
      beneficiary: {beneficiary}
    }
    targetArray.push(newMovement);
    console.log(targetArray)
  };

  return {
    getType,
    getBeneficiary,
    getAmount,
    handleSubmit
  };
};

export default useMovement;
