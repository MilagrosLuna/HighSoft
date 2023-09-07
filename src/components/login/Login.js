// Login.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importa useNavigate y Link
import './Login.css'; // Importa tu archivo CSS personalizado
import { authenticateUser } from '../data/data'; // Importa la función authenticateUser

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleLogin = () => {
    const user = authenticateUser(username, password); // Verifica las credenciales
    if (user) {
      setUser(user);
      navigate('/dashboard'); // Redirige al dashboard después del inicio de sesión utilizando useNavigate
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container"> {/* Agrega una clase CSS para el contenedor */}
      <h2>Login</h2>
      <form>
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
        <p>¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link></p> {/* Agrega el enlace al Signup */}
      </form>
    </div>
  );
}

export default Login;
