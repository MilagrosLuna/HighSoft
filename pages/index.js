import React, { Component } from "react";
import styles from "../styles/inicio.module.css";
import Layout from "@/components/layout";
import Head from "next/head";
export default function Home() {
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
      <Layout>
        <div className={styles.container}>
          <section
            id="HIGHSOFT"
            className="text-white min-h-screen bg-black text-center flex flex-col justify-center p-4 md:p-0"
          >
            <h1 className="font-waterfall text-4xl md:text-7xl text-purple-600 font-bold">
              Bienvenido a Banco HIGHSOFT
            </h1>
          </section>
          <section
            id="Seguridad"
            className="text-white min-h-screen bg-purple-900 text-center flex flex-col justify-center p-4 md:p-0"
          >
            <div className="text-center">
              <h1 className="font-waterfall text-4xl md:text-7xl text-white font-bold">
                Seguridad
              </h1>
              <h2 className="font-waterfall text-4xl md:text-7xl text-white font-bold">
                Tu seguridad es nuestra prioridad. Protegemos tus datos y
                transacciones.
              </h2>
            </div>
          </section>
          <section
            id="servicio"
            className="text-white min-h-screen bg-black text-center flex flex-col justify-center p-4 md:p-0"
          >
            <div className="text-center">
              <h1 className="font-waterfall text-4xl md:text-7xl text-purple-600 font-bold">
                Servicio 24/7
              </h1>
              <h2 className="font-waterfall text-4xl md:text-7xl text-purple-600 font-bold">
                Accede a tus cuentas en cualquier momento, en cualquier lugar
              </h2>
            </div>
          </section>
          <section
            id="asistencia"
            className="text-white min-h-screen bg-purple-900 text-center flex flex-col justify-center p-4 md:p-0"
          >
            <div className="text-center">
              <h1 className="font-waterfall text-4xl md:text-7xl text-white font-bold">
                Asistencia
              </h1>
              <h2 className="font-waterfall text-4xl md:text-7xl text-white font-bold">
                Nuestro equipo de soporte está aquí para ayudarte en todo
                momento.
              </h2>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}