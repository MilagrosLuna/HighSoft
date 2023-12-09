// Custom hook para traer los datosd del cliente

import { useState } from "react";
import API from "@/src/utils/api";

const useClientData = () => {
    const [clientData, setClientData] = useState();

    async function getClientData( authHeader ) {
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

    return {
        getClientData,
        clientData
    }

};

export default useClientData