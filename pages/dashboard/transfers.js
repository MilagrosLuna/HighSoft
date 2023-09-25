import React from "react";
import contactsData from "@/src/data/transferContacts.json";
import Head from "next/head";
import LayoutHome from "@/components/layoutHome";
import Link from "next/link";

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
          <h3>¿A quién deseas transferir?</h3>
          <div className="container d-flex flex-col">
            {contactsData.map((user) => (
              <Link
                key={user.alias}
                className="btn btn-light my-1 mx-auto w-50"
                href={`/dashboard/transfer-to/${user.alias}`}
              >
                {user.name}
              </Link>
            ))}
          </div>
        </div>
      </LayoutHome>
    </>
  );
};

export default transfers;
