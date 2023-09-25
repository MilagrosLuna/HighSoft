import React, { useEffect, useState } from "react";
import services from "@/src/data/services.json";
import LayoutHome from "@/components/layoutHome";
import useMovement from "@/src/hooks/useMovement";
import Head from "next/head";
const Service = (props) => {
  const { service } = props;

  const { getType, getService, handleSubmit, getAmountDirectly } = useMovement();

  const getBeneficiaryDirectly = (beneficiary) => getService(beneficiary);

  useEffect(()=>{
    getBeneficiaryDirectly(service.tipo_servicio);
    getAmountDirectly(service.monto);
    getType("Servicio");
  },[])

  const confirmPay = (event) => {
    event.preventDefault();
    const confirmMessage = `¿Desea pagar ${service.tipo_servicio} por el monto de $${service.monto} ?`;
    const confirm = window.confirm(confirmMessage);
    if (confirm) {
      alert("Se pagó el servicio correctamente.");
      handleSubmit(event);
    } else {
      alert("Se canceló el pago del servicio.");
    }
  };

  return (
    <>
      <Head>
        <title>HighSoft</title>
        <meta name="description" content="Inicio" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="HighSoft" />
        <meta
          name="keywords"
          content="HighSoft, Online Banking, Banco, Homebanking, Préstamos personales, Pagos en línea, Transferencias"
        />
        <meta http-equiv="Content-Language" content="es" />
      </Head>
    <LayoutHome>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <div className="bg-light text-black text-left mx-auto my-4 p-4 rounded w-75">
          <h5 className="font-bold mb-4 text-center">
            Informarcion del servicio
          </h5>
          <p><b>Servicio: </b> {service.tipo_servicio}</p>
          <p><b>Vencimiento: </b> {service.vencimiento}</p>
          <p><b>Monto a pagar: </b> ${service.monto}</p>
        </div>
        <div className="container d-flex w-75 gap-3">
          <button onClick={(event)=>{confirmPay(event)}} className="mb-2 mx-auto w-100 btn btn-danger">
            PAGAR
          </button>
        </div>
      </div>
    </LayoutHome>
    </>
  );
};

export default Service;

export const getStaticPaths = () => {
  const paths = services.map((service) => {
    return { params: { service: service.id } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const { params } = context;
  const id = params.service;

  const serviceTarget = services.find((service) => service.id === id);
  return {
    props: {
      service: serviceTarget,
    },
    revalidate: 10,
  };
};
