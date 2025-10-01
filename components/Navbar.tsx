import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/10 shadow">
      <div className="mx-auto max-w-[1092px] flex items-center justify-between py-4 px-4">
        <div className="flex-shrink-0 text-xl font-bold text-blue-600">
          <Link href="/">Ticketer</Link>
        </div>
        <div className="hidden md:flex gap-8 mx-auto">
          <Link href="/" className="text-purple-800 hover:text-blue-600 font-medium">Inicio</Link>
          <Link href="/servicios" className="text-purple-800 hover:text-blue-600 font-medium">Servicios</Link>
          <Link href="/contacto" className="text-purple-800 hover:text-blue-600 font-medium">Contacto</Link>
        </div>
        <div className="flex-shrink-0">
          <Link href="/login" className="text-white bg-purple-800 px-4 py-2 rounded hover:bg-blue-700 font-medium">Iniciar sesión</Link>
        </div>
        <div className="md:hidden ml-4">
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}