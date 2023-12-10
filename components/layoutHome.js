import React, { Component, useState, useEffect } from "react";
import HomeNav from "./navHome";
import Footer from "./footer";
import BackToHome from "./BackToHome";

const styles = {
  container: {
    // backgroundColor: "#9333ea", // Cambia a tu color violeta deseado
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
};
export default function LayoutHome({ children }) {

  const [clientData, setClientData] = useState(null);
 
  useEffect(() => {
    const storedData = localStorage.getItem('myData');

    if (storedData) {
      // Si hay datos almacenados, convertir la cadena JSON a un objeto JavaScript
      const parsedData = JSON.parse(storedData);
      setClientData(parsedData.clientData);
    } else {
      // No hay datos almacenados bajo la clave 'myData'
      console.log('No hay datos almacenados.');
    }
  }, []);

  return (
    <div style={styles.container}>
      <HomeNav />
      <BackToHome />
        {children}
      <Footer />
    </div>
  );
}
