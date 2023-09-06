import "./App.css";
import React, { useState } from "react";
import Container from "./components/Container";
import Login from "./components/login-register/Login.js";
import Register from "./components/login-register/Register.js";
import Transfers from "./components/main-modules/transfer-money/Transfers.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isAuthenticated) => {
    setIsLoggedIn(isAuthenticated);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Container>
                <Transfers />
              </Container>
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
  );
}

export default App;
