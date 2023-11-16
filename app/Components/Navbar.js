"use client";
import React, { useState } from "react";
import Link from "next/link";


export default function NavComponent() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-transparent mt-5 rounded-3xl p-3 shadow-xl px-5 select-none">
        <div className="container  flex justify-between items-center">
          <div className=" text-lg flex  font-semibold hover:text-gray-300">
            <Link className="px-0" href="/">
              <span className="text-red-500">Y</span>T <span className="text-red-500">T</span>rending
            </Link>
          </div>
          <div className="hidden md:flex space-x-4 px-0">
            <Link href="/" className=" font-bold hover:text-gray-300">
              Home
            </Link>

            <Link
              href="/about"
              className=" font-bold hover:text-gray-300"
            >
              About
            </Link>
            <div className="relative group">
              <Link
                href="/contact"
                className=" font-bold hover:text-gray-300"
              >
                Contact
              </Link>
              <ul
                className={`absolute left-0 ${
                  isOpen ? "block" : "hidden"
                } mt-2 space-y-2 bg-white text-blue-500 border border-gray-300`}
              >
                {/* <li>
                  <Link href="#" className="block px-4 py-2">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2">
                    Service 2
                  </Link>
                </li>
                <li>
                  <Link href="#" className="block px-4 py-2">
                    Service 3
                  </Link>
                </li> */}
                
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className=" focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              id="mobile-menu"
              className={`${
                isOpen ? "block" : "hidden"
              } mt-2 space-y-2 rounded-xl font-bold`}
            >
              <Link href="/" className="block px-4 py-2">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2">
                About
              </Link>
              <div className="group">
                <Link href="/contact" className="block px-4 py-2">
                  Contact
                </Link>
                {/* <ul className="hidden mt-2 space-y-2   border border-gray-300">
                  <li>
                    <Link href="#" className="block px-4 py-2">
                      Service 1
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2">
                      Service 2
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="block px-4 py-2">
                      Service 3
                    </Link>
                  </li>
                </ul> */}
              </div>
             
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
