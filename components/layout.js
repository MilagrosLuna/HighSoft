import React, { Component } from "react";
import MyNavBar from "./navbar";
import Footer from "./footer";
import BackToHome from "./BackToHome";
export default function Layout({ children }) {
  return (
    <div>
      <MyNavBar />
      <BackToHome />
            {children}
      <Footer />
    </div>
  );
}
