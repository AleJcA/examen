"use client";

import Link from "next/link";

export default function Navbar() {


  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <div className="text-white text-xl font-semibold tracking-tight cursor-pointer hover:opacity-80 transition">
          <Link href="">
          Controlador de gastos
          </Link>
        </div>
      </div>
    </nav>
  );
}