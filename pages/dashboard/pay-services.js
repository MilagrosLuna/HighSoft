import React from "react";
import services from "@/src/data/services.json";
import Layout from "@/components/layout";
import Link from "next/link";

const transfers = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default transfers;
