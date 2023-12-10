import Link from "next/link";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/login.module.css";
import Head from "next/head";
// const users = [
//   { id: 1, username: "usuario1", password: "contrasena1" },
//   { id: 2, username: "usuario2", password: "contrasena2" },
//   { id: 3, username: "a", password: "a" },
// ];

// function authenticateUser(username, password) {
//   // Busca en la lista de usuarios hardcodeados
//   const hardcodedUser = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   // Si el usuario está en la lista hardcodeada, devuélvelo
//   if (hardcodedUser) {
//     console.log(hardcodedUser);
//     return hardcodedUser;
//   }

//   // Si no está en la lista hardcodeada, intenta buscarlo en el localStorage
//   const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
//   const userFromLocalStorage = storedUsers.find(
//     (u) => u.username === username && u.password === password
//   );

//   // Si lo encontraste en el localStorage, devuélvelo
//   if (userFromLocalStorage) {
//     console.log(userFromLocalStorage);
//     return userFromLocalStorage;
//   }

//   // Si no se encuentra en ninguna parte, devuelve null
//   return null;
// }

import axios from "axios";
import API from "@/src/utils/api";
import GeneralContext from "@/src/context/generalContext";

async function authenticateUser(username, password) {
  try {
    // solicitud a la api                /api-token-auth
    const response = await API.post("/api/login/", {
      username,
      password,
    });
    // en este caso se toma q la api devolvio el user, verificar!
    const user = response.data;
    console.log(user);
    return user;
  } catch (error) {
    console.error(error);
    // solicitud falla.
    return null;
  }
}

export default function Login() {
  const router = useRouter(); // Obtiene el router de Next.js
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getAuth = useContext(GeneralContext);

  const [user, setUser] = useState(null); // Define el estado del usuario

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsPasswordValid(true);
    setIsUsernameValid(true);
    setErrorMessage("");

    if (!username || !password || password.length < 8) {
      if (!username) {
        setIsUsernameValid(false);
      }
      if (!password) {
        setIsPasswordValid(false);
        setErrorMessage("La contraseña es obligatoria.");
      } else if (password.length < 8) {
        setIsPasswordValid(false);
        setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      }
      if (!username && !password) {
        setErrorMessage("Todos los campos son obligatorios.");
      }
      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      return;
    }

    const StoreData = () =>{

      getAuth.getClientDataFromApi(getAuth.getCredentials(username, password))
      .then(clientData => {
        if (clientData) {
          console.log(clientData);
          const dataToStore = { 
            clientData
          };
          localStorage.setItem('myData', JSON.stringify(dataToStore));
        }
      })
      .catch(error => {
        console.error("Error al obtener los datos del cliente:", error);
      });

      // Para recuperar datos del localStorage
      const storedData = localStorage.getItem('myData');
      const parsedData = JSON.parse(storedData);

      console.log(parsedData);
    }

    const authenticatedUser = await authenticateUser(username, password); // Verifica las credenciales

    if (authenticatedUser) {
      setUser(authenticatedUser);
      getAuth.getCredentials(username, password);
      StoreData();
      router.push("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };
  const AccesoRapido = async (e) => {
    // harcodear credenciales para el acceso rapido
    const authenticatedUser = await authenticateUser("username", "password");
    setUser(authenticatedUser);
    router.push("/home");
  };
  return (
    <>
      <Head>
        <title>HighSoft</title>
        <meta name="description" content="Inicio" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="HighSoft" />
        <meta
          name="keywords"
          content="HighSoft, Online Banking, Banco, Homebanking, Préstamos personales, Pagos en línea, Transferencias"
        />
        <meta http-equiv="Content-Language" content="es" />
      </Head>
      <div className={styles["main"]}>
        <div className={styles["container"]}>
          <div className={styles["login-container-logo"]}>
            <Image
              src="/img/logoW.png"
              alt="Logo highSoft"
              width={300}
              height={30}
              quality={100}
              priority
            />
          </div>
          <form onSubmit={handleLogin} className={styles.formulario}>
            <div className="form-group">
              <label className={styles.labels} htmlFor="email">
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
            <div className="form-group">
              <label className={styles.labels} htmlFor="password">
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
              {(!isPasswordValid || !isUsernameValid) && errorMessage && (
                <>
                  <p></p>
                  <div
                    class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
                    role="alert"
                  >
                    <svg
                      class="w-5 h-5 inline mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <span class="font-medium">Error!</span>
                      {errorMessage}
                    </div>
                  </div>
                </>
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
    </>
  );
}
