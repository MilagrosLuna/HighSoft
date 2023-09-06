import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./pageContent/MainContent";
import JsonData from "./data/data.json";
import HomePage from "./main-modules/home-page/HomePage";
import Transfers from "./main-modules/transfer-money/Transfers";
import LoanMoney from "./main-modules/loan-money/LoanMoney";
import CurrencyExchange from "./main-modules/currency-exchange/CurrencyExchange";

export default function Container() {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    // Simulando una carga asincrónica de datos
    setTimeout(() => {
      setLandingPageData(JsonData);
    }, 1000); // Esto es solo para simular una carga, puedes ajustarlo a tus necesidades reales.
  }, []);

<<<<<<< HEAD
  return (
    <>
      <Header />
      <MainContent />
      {landingPageData.Contact && <Footer data={landingPageData.Contact} />}
    </>
  );
=======
    return (
      <>
        <Header />
        <MainContent />
        <Footer data={landingPageData.Contact}/> 
      </>
    );
  
>>>>>>> d0e9ecd4a5ef2be25f0b22ac42023f5c5cbb3c45
}
