//Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { authenticateUser } from '../data/data';
import logo from '../../assets/img/logoB.png';

function Login({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsPasswordValid(true);
    setIsUsernameValid(true);
    setErrorMessage('');

    if (!username || !password) {
      if (!username) {
        setIsUsernameValid(false);
      }
      if (!password || password.length < 8) {
        setIsPasswordValid(false);
        setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
      } else {
        setErrorMessage('Todos los campos son obligatorios.');
      }
      
      // Configura el temporizador para que limpie el mensaje de error después de 5 segundos
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);

      return;
    }

    const user = authenticateUser(username, password); // Verifica las credenciales

    if (user) {
      setUser(user);
      navigate('/home');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className='center-container'>
      <div className="login-container">
        <h2> <img src={logo} alt='logo' className='logo'></img></h2>
        <form>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setIsUsernameValid(true);
              setErrorMessage('');
            }}
            className={isUsernameValid ? 'valid' : 'invalid'}
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setIsPasswordValid(e.target.value.length >= 8); // Actualiza la validez de la contraseña
              setErrorMessage('');
            }}
            className={isPasswordValid ? 'valid' : 'invalid'}
          />
          {!isPasswordValid && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleLogin}>Iniciar sesión</button>
          <p>¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
