"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const scrollEffectPaths = [
    "/",
    "/umkm",
    "/artikel",
    "/profil",
    "/kebudayaan",
    "/galeri",
  ];

  const enableScrollEffect = scrollEffectPaths.includes(pathname);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.2;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full bg-white top-0 z-[85] ${
        !enableScrollEffect ? "duration-0 shadow-md" : "duration-300"
      } ${
        enableScrollEffect
          ? `${scrolled ? "bg-white  shadow-md" : `bg-white lg:bg-white/0`}  `
          : ``
      } `}
    >
      <nav
        className=" h-[80px] lg:h-[95px] w-full flex flex-row
       justify-between items-center"
      >
        <a
          href="/"
          className="px-[12px] absolute left-6 xl:left-10 lg:flex-shrink-0
           flex flex-row items-center space-x-3 "
        >
          <img
            src={"/img/gebang.svg"}
            className="rounded-full w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] 
             lg:pl-0"
            alt="Logo Padukuhan Gebang"
          />
          <div className="flex flex-col">
            <span
              className={`text-xl font-bold ${
                enableScrollEffect &&
                `${
                  scrolled
                    ? "!text-[#304F47]"
                    : "!text-[#304F47] lg:!text-white"
                }`
              } !text-[#304F47]`}
            >
              Padukuhan Gebang
            </span>
            <span
              className={`text-md  ${
                enableScrollEffect &&
                `${
                  scrolled
                    ? "!text-[#304F47]"
                    : "!text-[#304F47] lg:!text-white"
                }`
              } `}
            >
              Kal. Ngloro, Kec. Saptosari
            </span>
            <span
              className={`text-md  ${
                enableScrollEffect &&
                `${
                  scrolled
                    ? "!text-[#304F47]"
                    : "!text-[#304F47] lg:!text-white"
                }`
              } `}
            >
              Kabupaten Gunung Kidul
            </span>
          </div>
        </a>

        <div
          className={`w-full lg:max-w-[800px] lg:left-[94%] lg:-translate-x-[94%] xl:left-1/2 xl:-translate-x-1/2 lg:top-10 px-[12px] fixed pb-12 pt-4
             bg-white md:bg-transparent lg:py-0 transition-[top] duration-150  ${
               showMenu ? "top-0" : "top-[-100%]"
             }`}
        >
          {/* mobile */}
          <ul className="text-center flex flex-col gap-4 lg:hidden">
            <li>
              <a
                href="/"
                className="px-[12px] left-4 xl:left-10 flex-shrink-0
           flex flex-row items-center space-x-3 "
              >
                <img
                  src={"/img/gebang.svg"}
                  className="rounded-full w-[65px] h-[65px] lg:w-[75px] lg:h-[75px] 
             lg:pl-0"
                />
                <div className="flex flex-col">
                  <span
                    className={`text-xl font-bold ${
                      enableScrollEffect &&
                      `${
                        scrolled
                          ? "!text-[#304F47]"
                          : "!text-[#304F47] lg:!text-white"
                      }`
                    } !text-[#304F47]`}
                  >
                    Padukuhan Gebang
                  </span>
                  <span
                    className={`text-md  ${
                      enableScrollEffect &&
                      `${
                        scrolled
                          ? "!text-[#304F47]"
                          : "!text-[#304F47] lg:!text-white"
                      }`
                    } `}
                  >
                    Kal. Ngloro, Kec. Saptosari
                  </span>
                  <span
                    className={`text-md  ${
                      enableScrollEffect &&
                      `${
                        scrolled
                          ? "!text-[#304F47]"
                          : "!text-[#304F47] lg:!text-white"
                      }`
                    } `}
                  >
                    Kabupaten Gunung Kidul
                  </span>
                </div>
              </a>
            </li>
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
                Berita Padukuhan
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
                href="/booklet"
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
          <ul className="hidden lg:flex lg:flex-row lg:gap-[30px] xl:gap-[25px] z-[85]">
            <li className="">
              <a
                href="/"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                Home
              </a>
            </li>

            <li className="">
              <a
                href="/profil"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                Profil
              </a>
            </li>

            <li className="">
              <a
                href="/artikel"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                Berita Padukuhan
              </a>
            </li>

            <li>
              <a
                href="/kebudayaan"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                Kebudayaan
              </a>
            </li>
            <li>
              <a
                href="/umkm"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                UMKM
              </a>
            </li>

            <li>
              <a
                href="/destinations"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                Destinasi Wisata
              </a>
            </li>

            <li>
              <a
                href="/booklet"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
              >
                Booklet
              </a>
            </li>

            <li>
              <a
                href="/galeri"
                className={`relative ${
                  enableScrollEffect &&
                  `${scrolled ? "text-[#304F47]" : "text-white"}`
                }  text-[#304F47] font-medium after:w-0 after:h-[3px] after:bg-[#304F47] hover:text-[#304F47]/70 
                 lg:hover:text-gray-300   after:transition-all after:duration-300 after:absolute after:left-0 after:bottom-[-8px] 
             hover:after:w-[90%] `}
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
          className="flex cursor-pointer text-[20px] lg:hidden ml-2"
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
