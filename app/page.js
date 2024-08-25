'use client'

import Link from "next/link";

export default function Home() {
  return (
      <main>
        <h1>Home Page</h1>
        <Link href={"/0"}>Go to Fate</Link>
      </main>
  );
}

// import styles from "./css.css";
// <main className={styles.main}>
// <div className={styles.description}>
