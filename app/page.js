'use client'

import Link from "next/link";
import './css.css'

export default function Home() {
  return (
      <div className={'lowercase'}>
        <h1>Home Page</h1>
        <Link href={"/0"}>Go to Fate</Link>
      </div>
  );
}
