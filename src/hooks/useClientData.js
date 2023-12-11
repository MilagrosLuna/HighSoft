// Custom hook para traer los datosd del cliente

import { useState } from "react";
import API from "@/src/utils/api";
import { accordionItem } from "@nextui-org/react";

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

    const getAccountsData = async (setter) => {
        try {
          const authHeader = "Basic R29uekE6Njg0V1kybUhmSUNrMUJYTEhlcmgz";
          const response = await API.get("/api/accounts/", {
            headers:{
                Authorization: authHeader
            }
        });
          setter(response.data);
          return response.data;
        } catch (error) {
          console.error('Error al obtener los datos de cuentas:', error);
        }
    }

    const getTotalBalance = (accounts) => {

      let totalBalance = 0


      accounts[0].cuenta_data.map((account) => (
        totalBalance += account.balance
      ))
      return totalBalance
    }


    return {
        getClientDataFromApi,
        getClientData,
        getAccountsData,
        getTotalBalance,
        clientData
    }

};

export default useClientData