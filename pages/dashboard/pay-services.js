import React from "react";
import services from "@/src/data/services.json";
import LayoutHome from "@/components/layoutHome";
import Link from "next/link";
import Head from "next/head";
const transfers = () => {
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
        <h3>¿Qué servicio deseas pagar?</h3>
        <div className="container w-75 d-flex flex-col">
          {services.map((service, index) => (
            <Link
              key={service.id}
              className="btn btn-light my-1 mx-auto"
              href={`/dashboard/pay-service/${service.id}`}
            >
                {service.tipo_servicio}
            </Link>
          ))}
        </div>
      </div>
    </LayoutHome>
    </>
  );
};

export default transfers;
