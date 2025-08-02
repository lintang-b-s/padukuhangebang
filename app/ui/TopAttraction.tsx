"use client";
import { events } from "@/data/events";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const attractionDataMd = [
  {
    name: "Ketoprak",
    image: "/img/ketoprak-md.jpg",
    hrefLink: "/events/ketoprak",
  },
  {
    name: "Thek-Thek",
    image: "/img/thek-thek-md.jpeg",
  },
  {
    name: "Labuhan Laut Saptosari",
    image: "/img/labuhan-md.webp",
  },
  {
    name: "Rasulan",
    image: "/img/rasulan.jpeg",
  },
];

function TopAttraction() {
  const [clientWidth, setClientWidth] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);
  const router = useRouter();

  const attractionListRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setClientWidth(document.getElementById("attraction-list")?.clientWidth!);
    setMaxScrollLeft(
      document.getElementById("attraction-list")?.scrollWidth! -
        document.getElementById("attraction-list")?.clientWidth!
    );

    attractionListRef.current?.addEventListener("scroll", () => {});
  }, []);

  return (
    <div className="relative max-w-[1320px] mx-auto mt-[50px]">
      {/* medium screen */}
      <ul
        ref={attractionListRef}
        id="attraction-list"
        className={`px-2 w-full  flex flex-row relative md:w-auto  gap-x-2 items-center overflow-x-auto  
          hide-scrollbar  `}
      >
        {events.map((item, index) => {
          return (
            <div
              key={index}
              className={`relative rounded-lg flex-shrink-0 w-full h-[680px]  cursor-pointer `}
              // href={`/events/${item.name}`}
              onClick={(e) => {
                router.push(`/events/${item.name}`);
              }}
            >
              <Image
                src={item.thumbnail!}
                alt={item.name}
                fill
                className=" object-cover rounded-lg"
              />
              <div
                className="rounded-lg bg-white  absolute bottom-4 left-[50%]  translate-x-[-50%] sm:left-[30%]  w-[342px] h-[150px] 
             px-8 py-6
            "
              >
                <div className="flex flex-col items-start ">
                  <span className="text-[#77797B] text-lg italic">
                    Top attractions
                  </span>
                  <span className="text-black font-bold text-2xl">
                    {item.name}
                  </span>
                  <FaArrowRight color="#F3C725" size={16} className="mt-3" />
                </div>
              </div>

              <div className="absolute right-0 bottom-0 left-auto flex flex-row items-center justify-end">
                <div
                  className="rounded-tl-xl w-[60px] h-[60px] bg-[#e9e9e9] relative cursor-pointer z-2"
                  onClick={(event) => {
                    event.stopPropagation();
                    attractionListRef.current?.scrollBy({
                      left: -clientWidth,
                      behavior: "smooth",
                    });
                  }}
                >
                  <GrPrevious
                    size={16}
                    className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  />
                </div>
                <div className="border-l-1 rounded-br-xl border-solid border-[#77797b] h-[60px]"></div>
                <div
                  className="w-[60px] h-[60px] bg-[#e9e9e9] relative cursor-pointer z-2"
                  onClick={(event) => {
                    event.stopPropagation();
                    attractionListRef.current?.scrollBy({
                      left: clientWidth,
                      behavior: "smooth",
                    });
                  }}
                >
                  <GrNext
                    size={16}
                    className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
                    onClick={(event) => {
                      event.stopPropagation();
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TopAttraction;
