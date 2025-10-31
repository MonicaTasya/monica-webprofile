"use client";
import Link from "next/link";
import { HA4 } from "./Typography";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center px-8 py-4 bg-[#DEEAFF] shadow-md fixed top-0 left-0 w-full z-50">
      {/* Menu Links */}
      <ul className="flex gap-6 text-[#152746] font-medium">
        <li>
          <Link href="/">
            <HA4 className="hover:scale-110 duration-300 hover:text-shadow-lg">
              Home
            </HA4>
          </Link>
        </li>
        <li>
          <Link href="/project">
            <HA4 className="hover:scale-110 duration-300 hover:text-shadow-lg">
              Project
            </HA4>
          </Link>
        </li>
        <li>
          <Link href="/journey">
            <HA4 className="hover:scale-110 duration-300 hover:text-shadow-lg">
              Journey
            </HA4>
          </Link>
        </li>
        <li>
          <Link href="/experience">
            <HA4 className="hover:scale-110 duration-300 hover:text-shadow-lg">
              Experience
            </HA4>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
