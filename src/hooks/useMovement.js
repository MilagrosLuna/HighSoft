// Custom hook para capturar los datos de distintos forms, convertirlos en objetos y almacenarlos en un array que lista los movimientos

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

  // conseguimos la fecha para guardarla en el objeto
  const date = getDate();

  // conseguimos el tipo de movimiento a traves de una prop
  const getType = (type) => {
    setTypeOfMovement(type);
  };

  // almacenamos el destino de una transferencia a traves de un input
  const getBeneficiary = (event) => {
    setBeneficiary(event.target.value);
  };

  // conseguimos el nombre del servicio a traves de una prop
  const getService = (service) => {
    setBeneficiary(service);
  };

  // capturamos el 
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
