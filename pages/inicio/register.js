import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/register.module.css";
import Head from "next/head";

import { API } from "@/src/utils/api";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async () => {
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

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);

      return;
    }

    try {
      // Hacer una solicitud POST a la API/// la validacion de si existe deberia estar en la api
      const response = await API.post("/register", {
        username,
        password,
      });

      // Si la solicitud fue exitosa, la API debería devolver el usuario
      if (response.data.success) {
        setIsRegistered(true);
        router.push("/home");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error al registrar el usuario.");
    }
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
      </Head>{" "}
      <div className={styles["main"]}>
        <div className={styles["container"]}>
          <div className={styles["register-container-logo"]}>
            <Image
              src="/img/logoW.png"
              alt="Logo highSoft"
              width={300}
              height={30}
              quality={100}
              priority
            />
          </div>
          {isRegistered ? (
            // Registro exitoso
            <div>
              <h2>Registro exitoso, {username}!</h2>
              <p>
                ¡Ahora puedes iniciar sesión con tu cuenta recién registrada!
              </p>
              <Link href="/inicio/login">Iniciar sesión</Link>
            </div>
          ) : (
            // Formulario de registro
            <form className={styles.formulario}>
              <div className="form-group">
                <label htmlFor="email" className={styles.labels}>
                  Nombre de usuario:
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
                <label htmlFor="password" className={styles.labels}>
                  Contraseña:
                </label>
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setIsPasswordValid(e.target.value.length >= 8);
                    setErrorMessage("");
                  }}
                  className={styles.formCcontrol}
                />
              </div>
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
              <button
                onClick={handleRegister}
                className={styles["btn-primary"]}
              >
                Registrarse
              </button>
              <p>
                ¿Ya tienes una cuenta?{" "}
                <Link href="/inicio/login" className={styles.Link}>
                  Iniciar sesión aquí
                </Link>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
