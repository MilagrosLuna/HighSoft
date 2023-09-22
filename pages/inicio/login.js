import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router"; // Importa useRouter
import styles from "../../styles/login.module.css";

const users = [
  { id: 1, username: "usuario1", password: "contrasena1" },
  { id: 2, username: "usuario2", password: "contrasena2" },
  { id: 3, username: "a", password: "a" },
  // Agrega más usuarios según sea necesario
];

function authenticateUser(username, password) {
  // Busca en la lista de usuarios hardcodeados
  const hardcodedUser = users.find(
    (u) => u.username === username && u.password === password
  );

  // Si el usuario está en la lista hardcodeada, devuélvelo
  if (hardcodedUser) {
    console.log(hardcodedUser);
    return hardcodedUser;
  }

  // Si no está en la lista hardcodeada, intenta buscarlo en el localStorage
  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const userFromLocalStorage = storedUsers.find(
    (u) => u.username === username && u.password === password
  );

  // Si lo encontraste en el localStorage, devuélvelo
  if (userFromLocalStorage) {
    console.log(userFromLocalStorage);
    return userFromLocalStorage;
  }

  // Si no se encuentra en ninguna parte, devuelve null
  return null;
}

export default function Login() {
  const router = useRouter(); // Obtiene el router de Next.js
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState(null); // Define el estado del usuario

  const handleLogin = (e) => {
    e.preventDefault();
    setIsPasswordValid(true);
    setIsUsernameValid(true);
    setErrorMessage("");

    if (!username || !password) {
      if (!username) {
        setIsUsernameValid(false);
      }
      if (!password || password.length < 8) {
        setIsPasswordValid(false);
        setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      } else {
        setErrorMessage("Todos los campos son obligatorios.");
      }

      // Configura el temporizador para que limpie el mensaje de error después de 5 segundos
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      return;
    }

    const authenticatedUser = authenticateUser(username, password); // Verifica las credenciales

    if (authenticatedUser) {
      setUser(authenticatedUser);
      router.push("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };
  const AccesoRapido = (e)=>{
    router.push("/home");
  };
  return (
    <div className={styles["main"]}>
      <div className={styles["container"]}>
        <div className={styles["login-container-logo"]}>
          <Image
            src="/img/logoW.png"
            alt="Logo highSoft"
            width={300}
            height={30}
            priority
          />
        </div>
        <form onSubmit={handleLogin} className={styles.formulario}>
          <div class="form-group">
            <label className={styles.labels} for="email">
              usuario:
            </label>
            <input
              type="text"
              placeholder="Nombre de usuario"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                setIsUsernameValid(true);
                setErrorMessage("");
              }}
              className={styles.formCcontrol}
            />
          </div>
          <div class="form-group">
            <label className={styles.labels} for="password">
              Contraseña:
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setIsPasswordValid(e.target.value.length >= 8); // Actualiza la validez de la contraseña
                setErrorMessage("");
              }}
              className={styles.formCcontrol}
            />
            {!isPasswordValid && (
              <p className={styles["error-message"]}>{errorMessage}</p>
            )}
          </div>
          <button
            type="button"
            className={styles["btn-primary"]}
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          <p>
            ¿No tienes una cuenta?{" "}
            <Link href="/inicio/register" className={styles.Link}>
              Regístrate aquí
            </Link>
          </p>
        </form>
        <button
          type="button"
          className={styles["btn-fast"]}
          onClick={AccesoRapido}
        >
          Acceso rapido
        </button>
      </div>
    </div>
  );
}
