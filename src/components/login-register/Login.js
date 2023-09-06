// Login.js
import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí debes realizar la lógica de autenticación, por ejemplo, hacer una solicitud a un servidor.
    // Si la autenticación es exitosa, puedes llamar a `onLogin` con `true`, de lo contrario, con `false`.
    const isAuthenticated = true; // Reemplaza esto con tu lógica de autenticación real
    onLogin(isAuthenticated);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>
      <input
        type="text"
        placeholder="Nombre de usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <div className="additional-options">
      <Link to="/register">Registrarme</Link>
        <p>¿Olvidaste tu contraseña?</p>
      </div>
    </div>
  );
}

export default Login;
