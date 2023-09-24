import React, { Component } from "react";
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
  return (
    <div style={styles.container}>
      <HomeNav />
      <BackToHome />
      {children}
      <Footer />
    </div>
  );
}
