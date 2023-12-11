import React, { useState, useContext, useEffect } from 'react';
import LayoutHome from './../../components/layoutHome';
import Head from "next/head";
import GeneralContext from '@/src/context/generalContext';
// Componente de tarjeta de crédito



function CreditCard({ number, client, id, cvv, showDetails }) {

    const [showCardDetails, setShowCardDetails] = useState();

    useEffect(() => {
        setShowCardDetails(showDetails)
    }, [showDetails])
    
    const handleShow = () => {
        setShowCardDetails(!showCardDetails)
    }

    return (
        <div className="card container py-3 mx-auto my-20 text-white text-center bg-rosa rounded">
        <h2>Card ID: {id}</h2>
        <p>{client}</p>
        {showCardDetails ? (
            <div className="card-details">
            <p>Numero tarjeta: {number}</p>
            <p>CVV: {cvv}</p>
            </div>
        ):(
            <div className="card-details">
            <p>Numero tarjeta: ****************</p>
            <p>CVV: ***</p>
            </div>
        )
        }

        <button className="btn" onClick={handleShow}>
            {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        </div>
    );
}

function CreditCardsEmployee() {

    const context = useContext(GeneralContext);

    // estado para almacenar los datos del cliente como objeto
    const [clientData, setClientData] = useState()
    const [requestedClient, setRequestedClient] = useState()
    const [cardsData, setCardsData] = useState()
  
    // traer los datos del cliente y almacenarlos en el
    useEffect(() => {
        context.getClientData(setClientData)
      }, [])

    const handleClientID = (event) => {

        setRequestedClient(event.target.value);
      };
    
      const handleSubmit = () => {
        event.preventDefault();
        if (clientData && requestedClient){
            context.getCardsData(setCardsData, clientData.auth_header, requestedClient)
        }
      };

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
    <div
          style={{ width: 60 + "%" }}
          className="container py-3 mx-auto my-20 text-white text-center bg-rosa rounded"
        >
          <h3 className="text-white font-bold my-4">Listar tarjetas por cliente</h3>
          <form className="container">
            <label className="custom-label">
              Client a consultar:
              <input
                onChange={handleClientID}
                required
                type="number"
                min={0}
                style={{ width: 50 + "%" }}
                className="text-center mx-auto my-2 form-control"
              />
            </label>
            <input
              type="submit"
              className="btn btn-danger d-block mx-auto my-4"
              onClick={handleSubmit}
              value="Consultar tarjetas"
            />
          </form>
        </div>
        <div className="container py-3 mx-auto my-20 ">
            <div className="credit-cards bg-rosa rounded">
                {cardsData && cardsData.map((card, index) => (
                    <CreditCard number={card.card_number} client={(clientData.customer_name + ' ' + clientData.customer_surname)} id={card.card_id} cvv={card.cvv} showDetails={false}/>
                ))}
            </div>
        </div>
  </LayoutHome>
  </>
  );
}


export default CreditCardsEmployee;
