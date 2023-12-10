import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/register.module.css";
import Head from "next/head";
import axios from "axios";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerSurname, setCustomerSurname] = useState("");
  const [customerDNI, setCustomerDNI] = useState("");
  const [customerDOB, setCustomerDOB] = useState("");
  const [customerType, setCustomerType] = useState("");
  const [customerBranch, setCustomerBranch] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isUsernameValid, setIsUsernameValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault(); // Para prevenir la acción por defecto del formulario
    setIsPasswordValid(true);
    setIsUsernameValid(true);
    setErrorMessage("");

    if (
      !username ||
      !password ||
      password.length < 8 ||
      !customerName ||
      !customerSurname ||
      !customerDNI ||
      !customerDOB ||
      !customerType ||
      !customerBranch
    ) {
      setErrorMessage(alert("Todos los campos son obligatorios."));

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
      return;
    }


    try {
      const basicAuth = "Basic R29uekE6Njg0V1kybUhmSUNrMUJYTEhlcmgz";
      const headers = {
        Authorization: basicAuth,
        "Content-Type": "application/json",
      };
    
      const response = await axios.post(
        'http://127.0.0.1:8000/api/create-user/',
        {
          user_data: {
            username,
            password,
            first_name: customerName,
            last_name: customerSurname,
            is_staff: "0", // Cambia a '1' si necesitas el valor dinámico
          },
          cliente_data: {
            customer_name: customerName,
            customer_surname: customerSurname,
            customer_dni: parseInt(customerDNI),
            dob: customerDOB, // Asegúrate de que esté en el formato AAAA-MM-DD
            tipo_cliente: parseInt(customerType),
            branch: parseInt(customerBranch),
          },
        },
        { headers }
      );

      
    
      console.log('Respuesta de la API:', response);

    if (response.status === 201) {
      console.log('Usuario creado correctamente');
      setIsRegistered(true);
    } else if (response.status === 400) {
      console.log('Error 400:', response.data);
      alert('Problema el registrar usuario');
    }
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    alert(error.response.data.username[0]); 
    ;// Avisa si hay un error de conexión
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
      </Head>
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
            <form className={styles.formulario} onSubmit={handleRegister}>
              <div className="form-group">
                <label htmlFor="username" className={styles.labels}>
                  Nombre de usuario:
                </label>
                <input
                  type="text"
                  placeholder="Nombre de usuario"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setIsUsernameValid(e.target.value.length >= 3);
                    setErrorMessage("");
                  }}
                  className={styles.formCcontrol}
                  id="username"
                />
                {!isUsernameValid && (
                <span style={{ color: "red" }}>
                  El nombre de usuario debe tener al menos 3 caracteres
                </span>
              )}
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
                  id="password"
                />{!isPasswordValid && (
                <span style={{ color: "red" }}>
                  La contraseña debe tener al menos 8 caracteres
                </span>
              )}
              </div>

              <div className="form-group">
                <label htmlFor="customerName" className={styles.labels}>
                  Nombre del cliente:
                </label>
                <input
                  type="text"
                  placeholder="Nombre del cliente"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className={styles.formCcontrol}
                  id="customerName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerSurname" className={styles.labels}>
                  Apellido del cliente:
                </label>
                <input
                  type="text"
                  placeholder="Apellido del cliente"
                  value={customerSurname}
                  onChange={(e) => setCustomerSurname(e.target.value)}
                  className={styles.formCcontrol}
                  id="customerSurname"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerDNI" className={styles.labels}>
                  Número de identificación (DNI):
                </label>
                <input
                  type="number"
                  placeholder="Número de identificación"
                  value={customerDNI}
                  onChange={(e) => setCustomerDNI(e.target.value)}
                  className={styles.formCcontrol}
                  id="customerDNI"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerDOB" className={styles.labels}>
                  Fecha de nacimiento (AAAA-MM-DD):
                </label>
                <input
                  type="date"
                  placeholder="Fecha de nacimiento"
                  value={customerDOB}
                  onChange={(e) => setCustomerDOB(e.target.value)}
                  className={styles.formCcontrol}
                  id="customerDOB"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerType" className={styles.labels}>
                  Tipo de cliente (1: Classic, 2: Gold, 3: Black):
                </label>
                <input
                  type="text"
                  placeholder="Tipo de cliente"
                  value={customerType}
                  onChange={(e) => setCustomerType(e.target.value)}
                  className={styles.formCcontrol}
                  id="customerType"
                />
              </div>

              <div className="form-group">
                <label htmlFor="customerBranch" className={styles.labels}>
                  ID de sucursal:
                </label>
                <input
                  type="text"
                  placeholder="ID de sucursal"
                  value={customerBranch}
                  onChange={(e) => setCustomerBranch(e.target.value)}
                  className={styles.formCcontrol}
                  id="customerBranch"
                />
              </div>
              {/* Botón de registro */}
              <button
                onClick={handleRegister}
                className={styles["btn-primary"]}
                type="submit"
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

