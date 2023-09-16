import Link from "next/link";
import Image from "next/image";
export default function Register() {
  return (
    <div className="register-container">
      <div className="register-container-logo">
        <Image
          src="/img/logoB.png"
          alt="Logo highSoft"
          width={300}
          height={30}
          priority
        />
      </div>
      <form>
        <input type="text" placeholder="Nombre de usuario" />
        <input type="password" placeholder="Contraseña" />
        <input type="password" placeholder="Confirma tu contraseña" />
        <button>Registrarse</button>
      </form>
      <p>
        ¿Ya tienes una cuenta?{" "}
        <span><Link href="/login/login">Inicia sesión aquí</Link></span>
      </p>
    </div>
  );
}
