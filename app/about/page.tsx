import Header from "../components/Header";
import styles from "./page.module.css";

export default function About() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className={styles.title}>Миний тухай</h2>
        <p className={styles.description}> Хүслэн гээд "Програмчин" залуу .</p>
      </main>
    </>
  );
}
