import React, { useContext } from "react";
import styles from "../styles/inicio.module.css";
import Layout from "@/components/layout";
import useBalance from "@/src/hooks/useBalance";
import Link from "next/link";
import GeneralContext from "@/src/context/generalContext";

export default function Home() {
  const balance = useContext(GeneralContext);

  return (
    <Layout>
      <div
        style={{ width: 60 + "%" }}
        className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
      >
        <h1 className="text-center">Bienvenido</h1>
        <div style={{ width: 70 + "%", height: "max-content" }} className="text-black p-5 container d-flex flex-col gap-3 bg-rosa-secondary mx-auto d-flex align-items-center justify-content-between rounded">
          <h4>Tu saldo</h4>
            <h3>{balance.showBalance ? "$"+ balance.balance : "***"}</h3>
            <button
              className="btn btn-danger"
              onClick={() => {
                balance.toggleShow();
              }}
              >
              {balance.showBalance ? "Ocultar" : "Mostrar"}
            </button>
        </div>
        <div style={{ width: 70 + "%" }} className="container my-3">
          <Link className="btn btn-danger m-1 d-block" href="/dashboard/loans">Prestamos</Link>
          <Link className="btn btn-danger m-1 d-block" href="/dashboard/pay-services">Servicios</Link>
          <Link className="btn btn-danger m-1 d-block" href="/dashboard/movements">Movimientos</Link>
          <Link className="btn btn-danger m-1 d-block" href="/dashboard/currency-exchange">Conversor</Link>
          <Link className="btn btn-danger m-1 d-block" href="/dashboard/transfers">Transferencias</Link>
        </div>
      </div>
    </Layout>
  );
}
