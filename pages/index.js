import React, { Component } from "react";
import Carousel from "@/components/carrousel";
import Image from "next/image";
import styles from "../styles/inicio.module.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Navbar className={styles.nav}>
          <NavbarBrand>
            <Image src="/img/logoW.png" width={350} height={80}></Image>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link className={styles.buttonLink} color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link className={styles.buttonLink} href="#" aria-current="page">
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link className={styles.buttonLink} color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Link className={styles.buttonLogin} href="/inicio/login">
                LOGIN
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>

      <main className={styles.main}>
        <section>
          <h1>Bienvenido a Banco HIGHSOFT</h1>
          <p>Tu banco de confianza desde 1905.</p>
        </section>
        <section className="features">
          <div className="feature">
            <h2>Servicio 24/7</h2>
            <p>
              Accede a tus cuentas en cualquier momento, en cualquier lugar.
            </p>
          </div>
          <div className="feature">
            <h2>Seguridad</h2>
            <p>
              Tu seguridad es nuestra prioridad. Protegemos tus datos y
              transacciones.
            </p>
          </div>
          <div className="feature">
            <h2>Asistencia</h2>
            <p>
              Nuestro equipo de soporte está aquí para ayudarte en todo momento.
            </p>
          </div>
        </section>
        <div className={styles.centeredCarousel}>
          <Carousel></Carousel>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Banco HIGHSOFT</p>
      </footer>
    </div>
  );
}
