import React, { Component } from "react";
import MyNavBar from "./navbar";
import Footer from "./footer";
export default function Layout({ children }) {
  return (
    <div>
      <MyNavBar />
      {children}
      <Footer />
    </div>
  );
}
