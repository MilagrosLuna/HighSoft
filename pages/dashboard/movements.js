import React, { useContext, useEffect } from "react";
import BalanceContext from "@/src/context/generalContext";
import MovementLog from "@/components/MovementLog";
import MovementLogContainer from "@/components/MovementLogContainer";
import LayoutHome from "@/components/layoutHome";
import Head from "next/head";
const MovementsHistory = () => {

  const context = useContext(BalanceContext);


  // estado para almacenar los datos del cliente como objeto
  const [clientData, setClientdata] = useState()

  // traer los datos del cliente y almacenarlos en el
  useEffect(() => {
    context.getClientData(setClientdata)
  }, [])

  useEffect(() => {
    console.log(context.movementsArray);
  }, [context.movementsArray]);

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
          <h3 className="text-white">
            Este es el historial de tus movimientos
          </h3>
          <MovementLogContainer>
            {context.movementsArray.length != 0
              ? context.movementsArray.map((element) => (
                  <MovementLog
                    date={element.date}
                    type={element.type}
                    beneficiary={element.beneficiary}
                    amount={element.amount}
                  />
                ))
              : null}
          </MovementLogContainer>
        </div>
      </LayoutHome>
    </>
  );
};

export default MovementsHistory;
