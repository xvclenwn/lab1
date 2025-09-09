import Header from "../components/Header";
import styles from "./page.module.css";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="p-6">
        <h2 className={styles.title}>Холбоо барих</h2>
        <p className={styles.description}>
          Доорх дугаар болон хаягаар надтай холбогдоорой бро:).
        </p>

        <ul className="mt-4 space-y-2">
          <li>
            Имэйл: sw23d031@mandakh.edu.mn
          </li>
          <li>
            Утас: 99999999
          </li>
        </ul>
      </main>
    </>
  );
}