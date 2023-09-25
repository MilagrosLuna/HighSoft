import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/register.module.css";
import Head from "next/head";
const users = [
  // Usuarios existentes
  { id: 1, username: "usuario1", password: "contrasena1" },
  { id: 2, username: "usuario2", password: "contrasena2" },
  { id: 3, username: "a", password: "a" },
  // Agrega más usuarios según sea necesario
];

function isUsernameTaken(username) {
  return users.some((u) => u.username === username);
}

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = () => {
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

    if (isUsernameTaken(username)) {
      setErrorMessage("El nombre de usuario ya está en uso.");
      return;
    }

    // Agrega el nuevo usuario a la lista de usuarios
    const newUser = {
      id: users.length + 1,
      username,
      password,
    };
    users.push(newUser);

    // Guarda la lista actualizada en el localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Registro exitoso
    setIsRegistered(true);
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
      </Head> <div className={styles["main"]}>
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
            <p>¡Ahora puedes iniciar sesión con tu cuenta recién registrada!</p>
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
            {!isPasswordValid && (
              <p className="error-message">{errorMessage}</p>
            )}
            <button onClick={handleRegister} className={styles["btn-primary"]}>
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
