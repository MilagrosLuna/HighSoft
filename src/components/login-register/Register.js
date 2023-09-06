// Register.js
import React, { useState } from "react";
import "./register.css";

function Register({ onRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleRegister = () => {
    // Aquí puedes realizar la lógica de registro, por ejemplo, hacer una solicitud a un servidor.
    // Si el registro es exitoso, puedes llamar a `onRegister` con `true`, de lo contrario, con `false`.
    const isRegistered = true; // Reemplaza esto con tu lógica de registro real
    if (isRegistered) {
      setShowSuccessMessage(true);
      //onRegister(true);
    }
  };

  return (
    <div className="register-container">
      <h2>Registrarme</h2>
      {showSuccessMessage ? (
        <p className="success-message">¡Registro exitoso!</p>
      ) : (
        <>
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
          <button onClick={handleRegister}>Registrarme</button>
        </>
      )}
    </div>
  );
}

export default Register;
