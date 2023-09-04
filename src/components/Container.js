import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./pageContent/MainContent";
import JsonData from "./data/data.json";
import HomePage from "./main-modules/home-page/HomePage";
import Transfers from "./main-modules/transfer-money/Transfers";
import LoanMoney from "./main-modules/loan-money/LoanMoney";
import CurrencyExchange from "./main-modules/currency-exchange/CurrencyExchange";

export default function  Container(){
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

    return (
      <>
        <Header />
        <MainContent />
        <Footer data={landingPageData.Contact}/> 
      </>
    );
  
}

