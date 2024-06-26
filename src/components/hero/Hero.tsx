import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <h1>Hero Section Here</h1>
      <p className={styles.copy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime maiores
        dolorum impedit similique quo sequi quaerat minus architecto ducimus.
        Autem voluptatum delectus voluptate cumque, alias odit eligendi totam
        eum mollitia.
      </p>
    </section>
  );
}
