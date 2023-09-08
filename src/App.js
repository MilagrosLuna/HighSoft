import './App.css';
import React, { useState } from 'react';
import Container from './components/Container';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Transfers from './components/main-modules/transfer-money/Transfers';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Importa BrowserRouter y Navigate
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import MySideNav from "./components/navBar/NavBar";
import BalanceProvider from "./components/main-modules/BalanceProvider";
import './Custom.css'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (isAuthenticated) => {
    setIsLoggedIn(isAuthenticated);
  };

  return (
    <BalanceProvider>
     <Router> {/* Asegúrate de envolver tu aplicación con Router */}
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Container>
                  <Transfers />
                </Container>
              ) : (
                <Login setUser={handleLogin} />
              )
           }
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login setUser={handleLogin}/>
              )
            }
          />
          <Route
            path="/signup"
            element={<Signup />} // Utiliza el componente Signup en esta ruta
          />
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <Container>
                  <Transfers />
                </Container>
              ) : (
                <Navigate to="/login" replace /> // Redirige a la página de inicio de sesión si no está autenticado
              )
            }
          />
        </Routes>
      </Router>
    </BalanceProvider>
  );
}

export default App;
