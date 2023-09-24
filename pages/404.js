import styles from "../styles/404.module.css";
import FloatingAstronaut from "@/components/floatingAstronaut";
import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const PageNotFound = () => {
  useEffect(() => {
    gsap.to(".hover", {
      duration: 3,
      x: gsap.utils.random(5, 10),
      y: gsap.utils.random(10, 100),
      rotation: gsap.utils.random(-20, 20),
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      transformOrigin: "50% 50%",
    });
  });

  return (
    <div className={styles.back}>
      <section className={styles.container}>
        <div className={`section-contain margintop-lg ${styles.content}`}>
          <h1 className={styles.h1}>404</h1>
          <h2 className={styles.h2}>Lost in space?</h2>
          <h3 className={styles.h3}>Page not found</h3>
          <Link href="/">
            <button className={styles.boton}>Go back home</button>
          </Link>
          <br />
        </div>
        <div className={`hover ${styles.floating}`}>
          <FloatingAstronaut />
        </div>
      </section>
    </div>
  );
};

export default PageNotFound;
