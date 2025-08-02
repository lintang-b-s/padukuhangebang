import { dataUMKMUnggulanHome, saranaPrasarana } from "@/data/umkm";
import Image from "next/image";
import React from "react";

function SaranaPrasarana() {
  return (
    <div
      className="mt-13  pt-14 pb-40 
   bg-linear-120 from-[#15334A] from-40%  to-[#15334A]/90 to-100% 
   z-50 relative inset-0
  "
    >
      <div className="container flex flex-col gap-14">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <h2 className="!text-white font-bold">Sarana dan Prasarana</h2>
          <div className="ml-auto h-[6px] w-full  bg-white"></div>
        </div>
        {saranaPrasarana.map((tempat, idx) => (
          <div className="flex flex-col gap-2 md:grid md:grid-cols-2" key={idx}>
            <div
              className={`relative w-[240px] h-[240px] md:w-[90%] md:h-[100%] ${
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
