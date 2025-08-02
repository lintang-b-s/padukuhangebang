import { dataUMKMUnggulanHome, saranaPrasarana } from "@/data/umkm";
import Image from "next/image";
import React from "react";

function SaranaPrasarana() {
  return (
    <div
      className="mt-13  pt-14 pb-40 
   bg-linear-120 from-[#15334A] from-40%  to-[#15334A]/90 to-100% 
   z-10
  "
    >
      <div className="container flex flex-col gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h2 className="!text-white font-bold">Potensi Alam</h2>
          <div></div>
        </div>
        {saranaPrasarana.map((tempat, idx) => (
          <div
            className="flex flex-col gap-2 md:grid md:grid-cols-2 h-[500px] items-start"
            key={idx}
          >
            <div
              className={`relative  w-[300px] h-[400px] md:w-[100%] md:h-[700px] flex-shrink-0 ${
                idx % 2 === 0 ? "md:order-last" : ""
              }`}
            >
              <Image
                src={tempat.gambar}
                alt={tempat.nama}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 items-start">
              <h3 className="!text-white">{tempat.nama}</h3>
              <p className="!text-white">{tempat.deskripsi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaranaPrasarana;
