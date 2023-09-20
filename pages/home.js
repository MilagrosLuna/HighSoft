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
        <div style={{ width: 40 + "%", height: "max-content" }} className="text-black p-5 container d-flex flex-col gap-3 bg-rosa-secondary mx-auto d-flex align-items-center justify-content-between rounded">
          <h2>Tu saldo</h2>
            <h3 className="">{balance.showBalance ? balance.balance : "***"}</h3>
            <button
              className="btn btn-primary"
              onClick={() => {
                balance.toggleShow();
              }}
              >
              {balance.showBalance ? "Ocultar" : "Mostrar"}
            </button>
        </div>
        <div style={{ width: 40 + "%" }} className="container my-3">
          <div>
            <Link className="btn btn-primary m-1" href="/dashboard/loans">Prestamos</Link>
            <Link className="btn btn-primary m-1" href="/dashboard/pay-services">Servicios</Link>
            <Link className="btn btn-primary m-1" href="/dashboard/currency-exchange">Conversor</Link>
          </div>
          <Link style={{ width: 90 + "%" }} className="btn btn-primary m-1 " href="/dashboard/currency-exchange">Transferencias**</Link>
        </div>
      </div>
    </Layout>
  );
}
