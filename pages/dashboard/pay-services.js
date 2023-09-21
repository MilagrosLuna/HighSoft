import React, { useContext, useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import Layout from "@/components/layout";
import GeneralContext from "@/src/context/generalContext";
import useMovement from "@/src/hooks/useMovement";
import services from "@/src/data/services.json";

const PayServices = () => {
  const balance = useContext(GeneralContext);
  const { getType, getService, getAmount, handleSubmit } = useMovement();

  const handleClick = async (event, service) =>{
    const values = event.target.value;
    getType("Servicios");
    getAmount(event);
    getService(service.tipo_servicio);
    const confirmMessage ="¿Confirma el pago del servicio por el monto de $" + values + "?";
    const confirm = window.confirm(confirmMessage);
    if (confirm) {
      alert("Se realizó el pago del servicio.");
     await handleSubmit(event);
    } else {
      alert("El pago ha sido cancelado.");
    }
  };

  return (
    <Layout>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <h3 className="text-white font-bold my-4">
          Elige que servicios quieres pagar
        </h3>
        <div>
          <table
            style={{ width: 90 + "%" }}
            className="table table-bordered text-left mx-auto"
          >
            <thead className="">
              <tr>
                <th>Servicio</th>
                <th>Monto</th>
                <th>Venc</th>
                <th></th>
              </tr>
            </thead>
            {services.map((service, index) => (
              <tr key={service.tipo_servicio}>
                <td>{service.tipo_servicio}</td>
                <td>${service.monto}</td>
                <td>{service.vencimiento}</td>
                <td>
                  <button
                    onClick={(event) => handleClick(event, service)}
                    value={service.monto}
                    className="btn btn-success"
                  >
                    Pagar
                  </button>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default PayServices;
