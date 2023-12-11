import React, { Component, useState, useEffect, useContext } from "react";
import HomeNav from "./navHome";
import Footer from "./footer";
import BackToHome from "./BackToHome";
import HomeNavEmployee from "./navHomeEmployee";
import GeneralContext from "@/src/context/generalContext";

const styles = {
  container: {
    // backgroundColor: "#9333ea", // Cambia a tu color violeta deseado
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
};
export default function LayoutHome({ children }) {
 
  const context = useContext(GeneralContext);

  // estado para almacenar los datos del cliente como objeto
  const [clientData, setClientData] = useState()

  // traer los datos del cliente y almacenarlos en el
  useEffect(() => {
    context.getClientData(setClientData)
  }, [])

  return (
    <div style={styles.container}>
      {clientData && (
        clientData.is_staff ? <HomeNavEmployee /> :<HomeNav />
      )}
      <BackToHome />
        {children}
      <Footer />
    </div>
  );
}
