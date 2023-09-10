import React, { useContext } from "react";
import useMovement from "../../../hooks/useMovement";
import Button from "../../Button";

const PayServices = () => {
  const { getType, getService, getAmount, handleSubmit } = useMovement();

  const handleClick = async (event) => {
    getType("Servicios");
    getAmount(event);
    getService(event.target.textContent);
    const result = await confirmPay(event);

    if (result) {
      setTimeout(handleSubmit(event), 10000);
      alert("Se realizó el pago del servicio.");
    } else {
      alert("El pago ha sido cancelado.");
    }
  };

  const confirmPay = (event) => {
    const cost = event.target.value;
    const confirmMessage =
      "¿Confirma el pago del servicio por el monto de $" + cost + "?";
    const confirm = window.confirm(confirmMessage);

    return Promise.resolve(confirm);
  };

  return (
    <div
      style={{ width: 60 + "%" }}
      className="container py-3 mx-auto my-3 text-white text-center bg-rosa rounded"
    >
      <h3 className="text-white">Elige que servicios quieres pagar</h3>
      <div className="my-4 mt- container">
        <Button
          className={"mx-auto my-3 px-5 btn d-block center-block btn-danger"}
          value={1000}
          onClick={(event) => {
            {
              handleClick(event);
            }
          }}
          text={"Luz"}
        />
        <Button
          className={"mx-auto my-3 px-5 btn d-block center-block btn-danger"}
          value={300}
          onClick={(event) => {
            {
              handleClick(event);
            }
          }}
          text={"Agua"}
        />
        <Button
          className={"mx-auto my-3 px-5 btn d-block center-block btn-danger"}
          value={700}
          onClick={(event) => {
            {
              handleClick(event);
            }
          }}
          text={"Gas"}
        />
      </div>
    </div>
  );
};

export default PayServices;
