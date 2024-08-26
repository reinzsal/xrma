'use client'

import Link from "next/link";
import {lowercase} from './css.css'

export default function Home() {
  return (
      <main className={lowercase}>
        <h1>Home Page</h1>
        <Link href={"/0"}>Go to Fate</Link>
      </main>
  );
}
