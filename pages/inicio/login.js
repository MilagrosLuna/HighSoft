import Link from "next/link";
import Image from "next/image";
export default function Login() {
  return (
    <div className="login-container">
      <div className="login-container-logo">
        <Image
          src="/img/logoB.png"
          alt="Logo highSoft"
          width={300}
          height={30}
          priority
        />
      </div>

      <form>
        <input
          type="text"
          placeholder="Nombre de usuario"
          onChange={(e) => {
            setUsername(e.target.value);
            setIsUsernameValid(true);
            setErrorMessage("");
          }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) => {
            setPassword(e.target.value);
            setIsPasswordValid(e.target.value.length >= 8); // Actualiza la validez de la contraseña
            setErrorMessage("");
          }}
        />

        <button>Iniciar sesión</button>
        <p>
          ¿No tienes una cuenta?{" "}
          <span>
            <Link href="/register/register">Regístrate aquí</Link>
          </span>
        </p>
      </form>
    </div>
  );
}
