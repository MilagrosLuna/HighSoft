import React, { useState , useEffect, useContext } from 'react';
import styles from "../../styles/accounts.module.css"
import LayoutHome from './../../components/layoutHome';
import Head from "next/head";
import axios from 'axios';
import GeneralContext from '@/src/context/generalContext';
// // Componente de tarjeta de crédito
// function CreditCard({ type, limit, showDetails }) {
//   const [cardNumber, setCardNumber] = useState('**** **** **** 1234'); // Número de tarjeta ficticio

//   return (
//     <div className="card container py-3 mx-auto my-20 text-white text-center bg-rosa rounded">
//       <h2>{type} Card</h2>
//       <p>Limit: ${limit}</p>
//       {showDetails && (
//         <div className="card-details">
//           <p>Card Number: {cardNumber}</p>
//           {/* Agregar más detalles aquí, como la fecha de vencimiento, etc. */}
//         </div>
//       )}
//       <button className="btn" onClick={showDetails}>
//         {showDetails ? 'Hide Details' : 'Show Details'}
//       </button>
//     </div>
//   );
// }

function ClienteDetail({ customerId }) {
  const [clientData, setClientData] = useState();
  const [accountsData, setAccountsData] = useState();

  // Objeto que mapea los tipos de cliente
  const tipoClienteMap = {
    1: 'Classic',
    2: 'Gold',
    3: 'Black'
  };

  const context = useContext(GeneralContext);

  useEffect(() => {
    context.getClientData(setClientData)
    context.getAccountsData(setAccountsData)
  }, []);

  useEffect(() => {
    if (clientData){
      context.getAccountsData(setAccountsData, clientData.auth_header)
    }
  }, [clientData])
  
  

// function CreditCards() {
//   const [showCardDetails, setShowCardDetails] = useState(false);

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
        <div className="container py-5 mx-auto mt-20">
          <div className="credit-cards bg-rosa rounded p-5">
            <div>
              {clientData && clientData.customer_name ? (
                <div>
                  <h2>Detalles del Cliente</h2>
                  <p>Nombre: {clientData.customer_name}</p>
                  <p>Apellido: {clientData.customer_surname}</p>
                  <p>DNI: {clientData.customer_dni}</p>
                  <p>Fecha de nacimiento: {clientData.dob}</p>
                  <p>Sucursal: {clientData.branch}</p>
                  <p>ID de usuario: {clientData.user}</p>
                  <p>Tipo de cliente: {tipoClienteMap[clientData.tipo_cliente]}</p>
                  {/* Otros detalles del cliente */}
                </div>
              ) : (
                <p>Cargando datos del cliente...</p>
              )}
            </div>
            </div>
        </div>

        <div className="container py-3 mx-auto ">
          <div className="credit-cards bg-rosa rounded p-5">

        <div>
            <h2>Mis Cuentas</h2>
  {accountsData ? (
    <div>
      {accountsData[0].cuenta_data.map((account, index) => (
        <div key={index} className={styles.accountWrap}>
          <p>ID de cuenta: {account.account_id}</p>
          <p>Tipo de cuenta: {account.tipo_cuenta_nombre.tipo_cuenta_nombre}</p>
          <p>Balance: <strong>{account.balance}</strong></p>
          <p>IBAN: {account.iban}</p>
          {/* Otros detalles de la cuenta */}
        </div>
      ))}
  {accountsData && console.log(accountsData)}
    </div>
  ) : (
    <p>Cargando datos de cuentas...</p>
  )}
          </div>
          </div>
        </div>

    </LayoutHome>
    </>
  ); 
}


export default ClienteDetail;
