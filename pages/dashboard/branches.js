import React, { useState, useContext, useEffect } from 'react';
import LayoutHome from './../../components/layoutHome';
import Head from "next/head";
import GeneralContext from '@/src/context/generalContext';
import API from '@/src/utils/api';
// Componente de tarjeta de crédito

const getBranchesList = async (setter) => {
    try {
        const response = await API.get("/api/branches/")
        setter(response.data);
        return response.data;
    } catch (error) {
        console.error('Error al obtener los datos de cuentas:', error);
    }
}




function Branches() {
    const [showCardDetails, setShowCardDetails] = useState(false);
    const [branchesList, setBranchesList] = useState();

    useEffect(() => {
    getBranchesList(setBranchesList)
}, [])


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
        {branchesList && 
            <div className='container bg-rosa p-5'>
              <h3 className='mb-5 text-center'>Listado de sucursales</h3>
                {branchesList.map((branch, index) =>(
                  <div className='container text-center bg-danger rounded w-50'>
                    <strong>{branch.branch_name}</strong>
                    <p>{branch.branch_number}</p>
                    <p>{branch.branch_id}</p>
                  </div>
                ))}
            </div>
        }
    </div>
  </LayoutHome>
  </>
  );
}


export default Branches;
