// Custom hook para traer los datosd del cliente

import { useState } from "react";
import API from "@/src/utils/api";

const useClientData = () => {
    const [clientData, setClientData] = useState();

    async function getClientDataFromApi( authHeader ) {
            try {
              // solicitud a la api                /api-token-auth
                const response = await API.get("/api/client-data/", {
                    headers:{
                        Authorization: authHeader
                    }
                });
              // en este caso se toma q la api devolvio el user, verificar!
                setClientData(response.data);
                return response.data;
            } catch (error) {
              console.error(error);
              // solicitud falla.
              return null;
          }
    }

    const getClientData = (setter) => {

      const storedData = localStorage.getItem('myData');
  
      if (storedData) {
        // Si hay datos almacenados, convertir la cadena JSON a un objeto JavaScript
        const parsedData = JSON.parse(storedData);
        setter(parsedData.clientData)
      } else {
        // No hay datos almacenados bajo la clave 'myData'
        console.log('No hay datos almacenados.');
      }

    }

    return {
        getClientDataFromApi,
        getClientData,
        clientData
    }

};

export default useClientData