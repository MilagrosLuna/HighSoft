import React, { useState } from 'react';
import LayoutHome from './../../components/layoutHome';
import Head from "next/head";
// Componente de tarjeta de crédito
function CreditCard({ type, limit, showDetails }) {
  const [cardNumber, setCardNumber] = useState('**** **** **** 1234'); // Número de tarjeta ficticio

  return (
    <div className="card container py-3 mx-auto my-20 text-white text-center bg-rosa rounded">
      <h2>{type} Card</h2>
      <p>Limit: ${limit}</p>
      {showDetails && (
        <div className="card-details">
          <p>Card Number: {cardNumber}</p>
          {/* Agregar más detalles aquí, como la fecha de vencimiento, etc. */}
        </div>
      )}
      <button className="btn" onClick={showDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
}

function CreditCards() {
  const [showCardDetails, setShowCardDetails] = useState(false);

  return (<>
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
    <div className="container py-3 mx-auto my-20 ">
    <div className="credit-cards bg-rosa rounded">
      <CreditCard type="Credit" limit={5000} showDetails={() => setShowCardDetails(!showCardDetails)} />
      <CreditCard type="Credit" limit={5000} showDetails={() => setShowCardDetails(!showCardDetails)} />
      <CreditCard type="Credit" limit={8000} showDetails={() => setShowCardDetails(!showCardDetails)} />
      <CreditCard type="Debit" limit={2000} showDetails={() => setShowCardDetails(!showCardDetails)} />
    </div>
    </div>
  </LayoutHome>
  </>
  );
}


export default CreditCards;
