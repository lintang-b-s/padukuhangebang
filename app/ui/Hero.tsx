"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const heroImages = [
  {
    src: "/img/hero/balai-dusun.jpg",
    alt: "Balai Dusun Gebang",
    title: "Selamat datang di Dusun Gebang",
    subtitle:
      "Dusun Asri di Perbukitan Karst, Kaya Potensi Alam dan Kearifan Lokal",
  },
  {
    src: "/img/hero/kebun-singkong-gebang2.jpg",
    alt: "Kebun Singkong Gebang",
    title: "Jelajahi permata tersembunyi Dusun Gebang",
    subtitle:
      "Temukan kekayaan budaya dan hasil bumi yang diolah dengan kearifan lokal",
  },
  {
    src: "/img/hero/lapangan-voli.jpg",
    alt: "Pantai Lombok 3",
    title: "Bersama Tumbuh, Bersama Bergerak",
    subtitle:
      "Lapangan, peluh, dan semangat remaja di tengah desa yang penuh potensi",
  },
];

function Hero() {
  const [slideType, setSlideType] = useState("next");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeAutoplay, setActiveAutoplay] = useState(true);
  const [prevIndex, setPrevIndex] = useState(0);
  const autoplayRef = useRef<ReturnType<typeof setTimeout>>(null);

  const autoplaySettings = {
    maxItems: heroImages.length,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const goTo = (index: number) => {
    setCurrentIndex(index);
    setPrevIndex(currentIndex);
  };

  const goNext = () => {
    goTo(currentIndex >= autoplaySettings.maxItems - 1 ? 0 : currentIndex + 1);
    setSlideType("next");
  };

  const goPrev = () => {
    goTo(currentIndex <= 0 ? autoplaySettings.maxItems - 1 : currentIndex - 1);
    setSlideType("prev");
  };

  const playTimer = () => {
    setActiveAutoplay(true);
  };

  const pauseTimer = () => {
    setActiveAutoplay(false);
  };

  useEffect(() => {
    if (autoplaySettings.autoplay && activeAutoplay) {
      clearTimeout(autoplayRef.current!);
      autoplayRef.current = setTimeout(() => {
        goNext();
      }, autoplaySettings.autoplaySpeed);
    }
  }, [currentIndex, activeAutoplay]);

  return (
    <section className="relative h-dvh w-screen overflow-hidden ">
      <div className={`relative h-full w-full`}>
        {heroImages.map((image, index) => {
          let animate = "";
          if (index === currentIndex) {
            animate += "z-2 animate-slider-in active";
          } else if (index === prevIndex) {
            animate += "z-1 animate-slider-out";
          } else {
            animate += "z-0";
          }
          return (
            <div
              key={index}
              style={
                {
                  "--transform": `${slideType === "next" ? "100%" : "-100%"}`,
                } as React.CSSProperties
              }
              className={`absolute w-full h-full item ${animate} `}
            >
              <Image
                src={image.src}
                width={1200}
                height={150}
                alt={image.alt}
                className="size-full absolute object-cover"
              />

              <div
                className="relative max-w-[669px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
         lg:translate-x-0 lg:translate-y-0 lg:top-[200px] lg:left-[136px]  animate-text  px-8"
              >
                <div className="text-left">
                  <h1 className="text-center leading-[1.2] !text-headerOne !text-white text-shadow-headerOne font-semibold ">
                    {image.title}
                  </h1>
                  <span className="!text-white text-center text-shadow-headerOne">
                    {image.subtitle}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="absolute top-[80%] z-100  flex gap-[10px]
      items-center right-[20px] lg:right-[105px]"
      >
        <button
          className="w-[40px] h-[40px] rounded-[50%] bg-[#f9e2e244] border-none text-white 
        duration-[50ms] border-8 border-white flex items-center justify-center hover:bg-white "
        >
          <MdNavigateNext
            size={40}
            onClick={() => {
              goNext();
            }}
          />
        </button>
      </div>

      <div
        className="absolute top-[80%] z-100  flex gap-[10px]
      items-center left-[20px] lg:left-[105px]"
      >
        <button
          className="w-[40px] h-[40px] rounded-[50%] bg-[#f9e2e244] border-none text-white 
        duration-[50ms] border-8 border-white flex items-center justify-center hover:bg-white "
        >
          <MdNavigateBefore
            size={40}
            onClick={() => {
              goPrev();
            }}
          />
        </button>
      </div>
    </section>
  );
}

export default Hero;
