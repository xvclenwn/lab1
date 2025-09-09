"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ backgroundColor: "#1e3a8a", padding: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>

        <h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
          <Link href="/">MySite</Link>
        </h1>

        <div style={{ marginLeft: "auto", display: "flex", gap: "15px" }}>
          <Link href="/" style={{ color: "white" }}>Нүүр</Link>
          <Link href="/about" style={{ color: "white" }}>Миний тухай</Link>
          <Link href="/contact" style={{ color: "white" }}>Холбоо барих</Link>
        </div>

      </div>
    </nav>
  );
}