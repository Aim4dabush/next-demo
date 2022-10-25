//components
import Head from "next/head";
import Link from "next/link";

//styles
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fake Api Store</title>
        <meta name="description" content="Welcome page to the store" />
      </Head>
      <div className={styles.card}>
        <h1>Enjoy Your Shopping Experience</h1>
        <Link href="/products">
          <button className={styles.button}>Start Shopping</button>
        </Link>
      </div>
    </div>
  );
}
