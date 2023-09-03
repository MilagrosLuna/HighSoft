import React, { useState, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MainContent from "./pageContent/MainContent";
import JsonData from "./data/data.json";

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

