"use client";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="fixed w-full bg-white shadow-md top-0 z-[85]">
      <nav className="h-[50px] lg:h-[95px] w-full flex flex-row justify-between items-center">
        <a
          href="/"
          className="px-[12px] absolute left-[26px] md:left-[26px] lg:left-[5vw] xl:left-[14vw] 2xl:left-[18vw]"
        >
          <img
            src={"/img/logo.svg"}
            className="rounded-full w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]"
          />
        </a>

        <div
          className={`w-full lg:max-w-[800px] md:left-1/2  md:-translate-x-1/2 lg:top-10 px-[12px] fixed py-12  backdrop-blur-lg lg:backdrop-blur-none lg:py-0 transition-[top]
        duration-150  ${showMenu ? "top-0" : "top-[-100%]  "}`}
        >
          {/* mobile */}
          <ul className="text-center flex flex-col gap-4 lg:hidden">
            <li className="">
              <a
                href="/"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/profil"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Profil
              </a>
            </li>

            <li>
              <a
                href="/artikel"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Artikel
              </a>
            </li>

            <li>
              <a
                href="/kebudayaan"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Kebudayaan
              </a>
            </li>
            <li>
              <a
                href="/umkm"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                UMKM
              </a>
            </li>

            <li>
              <a
                href="/destinations"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Destinasi Wisata
              </a>
            </li>

            <li>
              <a
                href="#booklet"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Booklet
              </a>
            </li>

            <li>
              <a
                href="/galeri"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             active:after:w-[70%] "
              >
                Galeri
              </a>
            </li>
          </ul>

          {/* desktop */}
          <ul className="hidden lg:flex lg:flex-row lg:gap-[30px] z-[85]">
            <li className="">
              <a
                href="/"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Home
              </a>
            </li>

            <li className="">
              <a
                href="/profil"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Profil
              </a>
            </li>

            <li className="">
              <a
                href="/artikel"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Artikel
              </a>
            </li>

            <li>
              <a
                href="/kebudayaan"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Kebudayaan
              </a>
            </li>
            <li>
              <a
                href="/umkm"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                UMKM
              </a>
            </li>

            <li>
              <a
                href="/destinations"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Destinasi Wisata
              </a>
            </li>

            <li>
              <a
                href="#booklet"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Booklet
              </a>
            </li>

            <li>
              <a
                href="/galeri"
                className="relative text-[#304F47] after:w-0 after:h-[2px] after:bg-[#304F47] 
              after:transition-[width] after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[70%] "
              >
                Galeri
              </a>
            </li>
          </ul>

          <div
            className="absolute top-[16px] right-[24px] flex cursor-pointer lg:hidden"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            <IoClose size={24} />
          </div>
        </div>

        <div
          className="flex cursor-pointer text-[20px] lg:hidden ml-1"
          onClick={() => {
            setShowMenu(true);
          }}
        >
          <IoMenu size={24} color="#304F47" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
