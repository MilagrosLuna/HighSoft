import React, { useContext } from "react";
import BalanceContext from "../../../context/BalanceContext";
import useMovement from "../../../hooks/useMovement";
import Button from "../../Button";

const PayServices = () => {
  const balance = useContext(BalanceContext);
  const { getType, getService, getAmount, handleSubmit } = useMovement();

  const handleClick = (event) => {
    getType("Servicios");
    getAmount(event);
    getService(event.target.textContent);
    handleSubmit(event);
  };

  return (
    <div className="container py-3 mx-auto my-3 text-white text-center bg-rosa">
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
    </div>
  );
};

export default PayServices;
