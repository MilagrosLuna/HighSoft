import React, { useState , useEffect } from 'react';
import LayoutHome from './../../components/layoutHome';
import Head from "next/head";
import axios from 'axios';
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
  const [clienteData, setClienteData] = useState(null);
  const [accountsData, setAccountsData] = useState(null);

  // Objeto que mapea los tipos de cliente
  const tipoClienteMap = {
    1: 'Classic',
    2: 'Gold',
    3: 'Black'
  };

  useEffect(() => {
    const fetchClienteData = async () => {
      try {
        const basicAuth = "Basic R29uekE6Njg0V1kybUhmSUNrMUJYTEhlcmgz";
        const headers = {
          Authorization: basicAuth,
          "Content-Type": "application/json",
        };

        const response = await axios.get(
          `http://127.0.0.1:8000/api/client-data/`,
          { headers } // Agregar los headers a la solicitud
        );
        setClienteData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error al obtener los datos del cliente:', error);
        // Manejo de errores
      }
    };

    const fetchAccountsData = async () => {
      try {
        const basicAuth = "Basic R29uekE6Njg0V1kybUhmSUNrMUJYTEhlcmgz";
        const headers = {
          Authorization: basicAuth,
          "Content-Type": "application/json",
        };

        const response = await axios.get('http://127.0.0.1:8000/api/accounts/', { headers }
        );
        setAccountsData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de cuentas:', error);
      }
    };

    fetchClienteData();
    fetchAccountsData();
  }, [customerId]);

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
        <div className="container py-3 mx-auto my-20 ">
          <div className="credit-cards bg-rosa rounded">
            <div>
              {clienteData && clienteData.customer_name ? (
                <div>
                  <h2>Detalles del Cliente</h2>
                  <p>Nombre: {clienteData.customer_name}</p>
                  <p>Apellido: {clienteData.customer_surname}</p>
                  <p>DNI: {clienteData.customer_dni}</p>
                  <p>Fecha de nacimiento: {clienteData.dob}</p>
                  <p>Sucursal: {clienteData.branch}</p>
                  <p>ID de usuario: {clienteData.user}</p>
                  <p>Tipo de cliente: {tipoClienteMap[clienteData.tipo_cliente]}</p>
                  {/* Otros detalles del cliente */}
                </div>
              ) : (
                <p>Cargando datos del cliente...</p>
              )}
            </div>
            </div>
        </div>

        <div className="container py-3 mx-auto my-30">
          <div className="credit-cards bg-rosa rounded">

        <div>
            <h2>Mis Cuentas</h2>
  {accountsData ? (
    <div>
      {accountsData[0].cuenta_data.map((account, index) => (
        <div key={index}>
          <p>ID de cuenta: {account.account_id}</p>
          <p>Tipo de cuenta: {account.tipo_cuenta_nombre.tipo_cuenta_nombre}</p>
          <p>Balance: {account.balance}</p>
          <p>IBAN: {account.iban}</p>
          {/* Otros detalles de la cuenta */}
        </div>
      ))}
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
