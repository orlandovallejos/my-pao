import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-gray-800 py-4">
      <nav className="container mx-auto flex items-center justify-between">
        <ul className="flex space-x-4 text-white">
          <li>
            {/* <a href="#" className="hover:text-gray-300">
              Home
            </a> */}
            <Link href="/home" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
