import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <div>
          <h4>Here comes the pigment!</h4>
          <canvas width="240" height="240" className={styles.canvasArea}></canvas>
        </div>
      </section>
    </main>
  );
}
