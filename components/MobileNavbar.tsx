"use client";
import { useState } from "react";
import Link from "next/link";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>
        <span className="sr-only">Abrir menú</span>
        <svg width="24" height="24" fill="none" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-50 flex flex-col items-center py-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium mb-2">Inicio</Link>
          <Link href="/servicios" className="text-gray-700 hover:text-blue-600 font-medium mb-2">Servicios</Link>
          <Link href="/contacto" className="text-gray-700 hover:text-blue-600 font-medium mb-2">Contacto</Link>
          <Link href="/login" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 font-medium mt-2">Iniciar sesión</Link>
        </div>
      )}
    </div>
  );
}