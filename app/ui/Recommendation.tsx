"use client";
import Image from "next/image";
import React from "react";

const recommendationData = [
  {
    title: "Kebudayaan",
    link: "/events",
    image: "/img/reog.jpg",
  },

  {
    title: "UMKM & Souvenir",
    link: "/umkm",
    image: "/img/batik.jpg",
  },
  {
    title: "Destinasi Wisata Terdekat",
    link: "/destinations",
    image: "/img/pantai_ngeden.jpg",
  },
];

function Recommendation() {
  return (
    <div className="flex flex-col gap-y-4 pl-1 pr-6 pt-8 container  ">
      <div className="grid grid-cols-1 gap-y-2 md:grid-cols-2 lg:gap-x-8 ">
        <h2 className="hyphens-auto font-bold ">Rekomendasi Tur</h2>

        <div
          // href="/about"
          className={` group relative max-w-[360px] h-[170px] md:max-w-[600px] md:h-[340px] lg:max-w-[720px] lg:h-[347px] flex-shrink-0 cursor-pointer
           hover:scale-[98%]  active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden`}
        >
          <Image
            src="/img/gunungkidul-nature.jpg"
            alt="Grand Tour of Ngloro"
            fill
            className={`rounded-lg object-cover group-hover:scale-110  group-active:scale-110 transform ease-in-out
               duration-400 transition-transform`}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-2 gap-x-2 sm:grid-cols-3 md:gap-x-2 md:gap-y-2">
        {recommendationData.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`group relative max-w-[178px] h-[178px] md:max-w-[480px] md:h-[360px] lg:max-w-[640px] lg:h-[480px] flex-shrink-0 cursor-pointer
            hover:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden
              `}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="rounded-lg object-cover  group-hover:scale-110 group-active:scale-110 transform ease-in-out duration-400 transition-transform "
            />
            <h3 className="!text-white absolute bottom-2 left-2 font-bold italic text-shadow-headerOne">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
