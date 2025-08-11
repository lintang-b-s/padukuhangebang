"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import { cultures } from "@/data/culture";
import { events } from "@/data/events";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function Culture() {
  const [isClicked, setIsClicked] = useState(-1);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-screen overflow-hidden ">
        <div className="relative h-full w-full">
          <Image
            src={"/img/reog.jpg"}
            fill
            alt="culture"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
              -translate-y-[50%] text-center leading-[1.2] !text-headerOne
              !text-white
              text-shadow-headerOne font-semibold"
          >
            Kebudayaan
          </h1>
        </div>
      </div>
      <div className="mt-4 pr-4 py-1 container ">
        <div className="py-2">
          <p className="text-xl font-semibold ">
            Padukuhan Gebang, yang terletak di wilayah Saptosari, Gunungkidul,
            menyimpan kekayaan budaya dan tradisi yang menjadi cerminan
            identitas masyarakatnya. Setiap ritus dan kesenian yang dijalankan
            merupakan warisan leluhur yang terus dijaga lintas generasi—bukan
            sekadar seremonial, tetapi juga perekat sosial dan spiritual warga.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {cultures.map((culture, idx) => (
            <div
              onClick={() => {
                setIsClicked(idx);
                setTimeout(() => setIsClicked(-1), 400);
              }}
              key={idx}
              className={`flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-6 py-10 md:items-center`}
            >
              <div
                className={`relative  flex-shrink-0 mx-auto w-full w-[92vw] h-[35vh] md:max-w-[34vw] aspect-square md:h-[62vh] shadow-md ${
                  idx % 2 == 0 ? "md:order-last" : ""
                } cursor-pointer hover:scale-[98%] active:scale-[98%] focus:hover-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden ${
                  isClicked != -1 && isClicked == idx && "scale-[98%]"
                }`}
              >
                <Image
                  alt={culture.name}
                  src={culture.thumbnail}
                  fill
                  className={`rounded-lg shadow-md object-cover group-hover:scale-[115%] group-active:scale-[115%] group-focus:scale-[115%] transform ease-in-out
               duration-400 transition-transform ${
                 isClicked != -1 && isClicked == idx && "scale-[115%]"
               }`}
                />
              </div>
              <div className="flex flex-col gap-3 mt-2 pl-2 md:pl-0 ">
                <span className="text-4xl font-bold">{culture.name}</span>
                <p className="leading-1.4">{culture.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          className="group cursor-pointer flex items-center mt-1 gap-x-2"
          href="/events"
        >
          <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
            See more
          </span>
          <FaArrowRight
            color="#F3C725"
            className="group-hover:animate-seemore-next"
          />
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Culture;
