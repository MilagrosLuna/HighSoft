import React, { Component } from "react";
import MyNavBar from "./navbar";
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
export default function Layout({ children }) {
  return (
    <div style={styles.container}>
      <MyNavBar />
      <BackToHome />
      {children}
      <Footer />
    </div>
  );
}
