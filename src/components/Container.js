import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./pageContent/MainContent";
import JsonData from "./data/data.json";
import HomePage from "./main-modules/home-page/HomePage";
import BalanceProvider from "./main-modules/BalanceProvider";
import Transfers from "./main-modules/transfer-money/Transfers";

export default function Container() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    // Simulando una carga asincrónica de datos
    setTimeout(() => {
      setLandingPageData(JsonData);
    }, 1000); // Esto es solo para simular una carga, puedes ajustarlo a tus necesidades reales.
  }, []);

    return (
      <>
          <BalanceProvider>
            <Header />
            <MainContent />
            <HomePage />
            <Transfers/>
            <Footer data={landingPageData.Contact}/> 
          </BalanceProvider>
      </>
    );
}
