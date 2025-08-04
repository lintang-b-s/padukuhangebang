import React from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import Footer from "../ui/Footer";

function LaporanPengaduan() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-full overflow-hidden ">
        <div className="relative h-full w-full ">
          <Image
            src={"/img/dokumentasi/sidowayah.jpg"}
            fill
            alt="galeri"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
                          -translate-y-[50%] text-center leading-[1.2] !text-headerOne text-shadow-headerOne font-semibold"
          >
            Articles
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LaporanPengaduan;
