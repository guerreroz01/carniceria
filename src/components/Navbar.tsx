import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import CustomButton from "./CustomButton";

const navLinks = [
  { name: "Productos", href: "/", arrow: true },
  { name: "Soluciones", href: "/", arrow: true },
  { name: "Precios", href: "/", arrow: false },
  { name: "Dirección", href: "/", arrow: false },
];

export default function Navbar() {
  return (
    <nav className="flex py-2 gap-2 items-center">
      <div className="bg-active px-6 py-3 cursor-pointer rounded-lg font-extrabold">
        Logo
      </div>
      <ul className="flex flex-1 gap-6 px-4">
        {navLinks.map((li) => (
          <li key={`${li.name}-Link`}>
            <Link
              className="font-semibold text-sm flex items-center gap-4"
              href={li.href}
            >
              {li.name}
              {li.arrow && <IoIosArrowDown />}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex gap-6">
        <Link href="/sales" className="text-sm font-semibold">
          Contactanos
        </Link>
        <Link href="/login" className="text-sm font-semibold">
          ¿Ya tienes cuenta?
        </Link>
      </div>
      <CustomButton
        title="Unete"
        href="/signup"
        bg="bg-bgs"
        arrowBg="bg-active"
      />
    </nav>
  );
}
