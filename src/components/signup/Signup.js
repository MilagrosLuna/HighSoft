
// Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Signup.css'; // Importa tu archivo CSS personalizado
import { addUser } from '../data/data'; // Importa la función addUser

function Signup({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const handleSignup = () => {
    const added = addUser(username, password); // Intenta agregar el nuevo usuario
    if (added) {
      // Usuario agregado con éxito, puedes realizar acciones adicionales si es necesario
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/login'); // Redirige a la página de inicio de sesión utilizando useNavigate
    } else {
      alert('El usuario ya existe. Por favor, elija otro nombre de usuario.');
    }
  };

  return (
    <div className="signup-container"> {/* Agrega una clase CSS para el contenedor */}
      <h2>Registro</h2>
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
        <button onClick={handleSignup}>Registrarse</button>
      </form>
    </div>
  );
}

export default Signup;
