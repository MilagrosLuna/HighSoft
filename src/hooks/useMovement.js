// Custom hook para capturar los datos de distintos forms, convertirlos en objetos y almacenarlos en un array que lista los movimientos

import { useContext, useState } from "react";
import { useDate } from "./useDate";
import GeneralContext from "@/src/context/generalContext";

const useMovement = () => {
  const balance = useContext(GeneralContext);
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

  // capturamos el monto del movimiento
  const getAmount = (event) => {
    setAmount(event.target.value);
  };

  // se crea un objeto con todos los datos recolectados y se envian a el array
  const handleSubmit = (event) => {
    event.preventDefault();
    if(amount > 0){
      if(balance.decrement(amount)){
        const newMovement = {
          type: typeOfMovement,
          date: date,
          amount: amount,
          beneficiary: beneficiary,
        };
        balance.setMovementsArray([newMovement, ...balance.movementsArray]);
        console.log(balance.movementsArray);
      }
    }
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
