import React, { useContext } from "react";
import BalanceContext from "../../../context/BalanceContext";
import useMovement from "../../../hooks/useMovement";
import Button from "../../Button";

const PayServices = () => {
  const balance = useContext(BalanceContext);
  const { getType, getService, getAmount, handleSubmit } = useMovement();

  const handleClick = (event) => {
    getType("service");
    getAmount(event);
    getService("Servicios");
    handleSubmit(event);
  };

  return (
    <div className="container">
      <Button
        value={1000}
        onClick={(event) => {
          handleClick(event);
        }}
        text={"Luz"}
      />
      <Button
        value={300}
        onClick={(event) => {
          handleClick(event);
        }}
        text={"Agua"}
      />
      <Button
        value={700}
        onClick={(event) => {
          handleClick(event);
        }}
        text={"Gas"}
      />
    </div>
  );
};

export default PayServices;
