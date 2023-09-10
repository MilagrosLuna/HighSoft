import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';
import { addUser } from '../data/data';
import logo from '../../assets/img/logoB.png';

function Signup({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (isErrorVisible) {
      timer = setTimeout(() => {
        setIsErrorVisible(false);
      }, 5000); // Ocultar el mensaje de error después de 5 segundos
    }
    return () => clearTimeout(timer); // Limpiar el temporizador al desmontar el componente
  }, [isErrorVisible]);

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setIsPasswordValid(false);
      setErrorMessage('La contraseña debe tener al menos 8 caracteres.');
      setIsErrorVisible(true);
    } else {
      setIsPasswordValid(true);
      setErrorMessage('');
      setIsErrorVisible(false);
    }
  };

  const handleConfirmPasswordChange = (newConfirmPassword) => {
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setIsPasswordValid(false);
      setErrorMessage('Las contraseñas no coinciden.');
      setIsErrorVisible(true);
    } else {
      setIsPasswordValid(true);
      setErrorMessage('');
      setIsErrorVisible(false);
    }
  };

  const handleSignup = () => {
    if (!username || !password || !confirmPassword) {
      // Verificar si algún campo está vacío
      setIsPasswordValid(false);
      setErrorMessage('Todos los campos son obligatorios.');
      setIsErrorVisible(true);
      return;
    }

    if (!isPasswordValid) {
      return; // No realizar el registro si la contraseña no es válida
    }

    const added = addUser(username, password);
    if (added) {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      navigate('/login');
    } else {
      alert('El usuario ya existe. Por favor, elija otro nombre de usuario.');
    }
  };

  return (
    <div className='center-container'>
      <div className="signup-container">
        <h2><img src={logo} alt='logo' className='logo'></img></h2>
        
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
            onChange={(e) => handlePasswordChange(e.target.value)}
            className={isErrorVisible ? 'invalid' : isPasswordValid ? 'valid' : ''}
          />
          <input
            type="password"
            placeholder="Confirma tu contraseña"
            value={confirmPassword}
            onChange={(e) => handleConfirmPasswordChange(e.target.value)}
            className={isErrorVisible ? 'invalid' : isPasswordValid ? 'valid' : ''}
          />
          {isErrorVisible && <p className="error-message">{errorMessage}</p>}
          <button onClick={handleSignup}>Registrarse</button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
      </div>
    </div>
  );
}

export default Signup;
