//components
import Link from "next/link";

//styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1>Enjoy Your Shopping Experience</h1>
        <Link href="/products">
          <button className={styles.button}>Start Shopping</button>
        </Link>
      </div>
    </main>
  );
}
