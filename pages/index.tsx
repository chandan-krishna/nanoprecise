import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Counter } from "./components/counter/Counter";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Basic counter application</title>
        <meta name="description" content="Basic counter application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Counter />
    </div>
  );
}
