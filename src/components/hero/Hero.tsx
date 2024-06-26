import LayoutWrapper from "../layoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1 className={styles.heading}>
              We build interactive and immersive web applications
            </h1>
          </div>
          <div className={styles.right}>
            {/* <div className={styles.sub}>
              ONE PLATFORM.
              <br />
              UNRIVALED PERFORMANCE.
            </div> */}
            <p className={styles.copy}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              maiores dolorum impedit similique quo sequi quaerat minus
              architecto ducimus. Autem voluptatum delectus voluptate cumque,
              alias odit eligendi totam eum mollitia.
            </p>
          </div>
        </div>
      </LayoutWrapper>
    </section>
  );
}
