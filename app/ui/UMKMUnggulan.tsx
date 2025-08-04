import { dataUMKMUnggulanHome } from "@/data/umkm";
import Image from "next/image";
import React from "react";

function UMKMUnggulan() {
  return (
    <div className="flex flex-col gap-6 container pt-14 pb-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <h2 className="font-bold">UMKM Unggulan</h2>
        <div></div>
      </div>
      {dataUMKMUnggulanHome.map((umkm, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:grid md:grid-cols-2 gap-3 md:gap-6 py-10 md:items-center`}
        >
          <div
            className={`relative flex-shrink-0 mx-auto w-full max-w-[92vw] h-[35vh] md:max-w-[38vw] aspect-square md:h-[62vh] shadow-md ${
              idx % 2 == 0 ? "md:order-last" : ""
            } cursor-pointer hover:scale-[98%] active:scale-[98%] focus:hover-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden "
            }`}
          >
            <Image
              alt={umkm.title}
              src={umkm.image}
              fill
              className={`rounded-lg shadow-md object-cover group-hover:scale-[115%] group-active:scale-[115%] group-focus:scale-[115%] transform ease-in-out
                 duration-400 transition-transform`}
            />
          </div>
          <div className="flex flex-col gap-3 mt-2 pl-2 md:pl-0 ">
            <span className="text-4xl font-bold">{umkm.title}</span>
            <p className="leading-1.4 text-wrap pr-2">{umkm.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UMKMUnggulan;
