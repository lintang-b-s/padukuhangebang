"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DisplayCards from "../ui/DisplayCards";
import { FaArrowRight } from "react-icons/fa";
import { UMKMCard } from "@/type/type";
import { umkmFetcherCard } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import ReactPlayer from "react-player";
import VideoJS from "../ui/VideoJS";
import videojs from "video.js";

function UMKM() {
  const [currentItems, setCurrentItems] = useState<UMKMCard[]>([]);

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "https://firebasestorage.googleapis.com/v0/b/kkn-gebang-c3ff2.firebasestorage.app/o/master.m3u8?alt=media",
        type: "application/x-mpegURL",
      },
    ],
    controlBar: {
      children: [
        "playToggle",
        "volumePanel",
        "currentTimeDisplay",
        "timeDivider",
        "durationDisplay",
        "progressControl",
        "liveDisplay",
        "remainingTimeDisplay",
        "fullscreenToggle",
        "httpSourceSelector",
      ],
    },
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  useEffect(() => {
    umkmFetcherCard().then((items) => setCurrentItems(items));
  }, []);
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-screen overflow-hidden ">
        <div
          style={
            {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/img/batik.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            } as React.CSSProperties
          }
          className={`relative h-dvh w-full overflow-hidden 
                                            bg-cover bg-center `}
        >
          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
              -translate-y-[50%] text-center leading-[1.2] !text-headerOne 
              !text-white text-shadow-headerOne font-semibold"
          >
            Usaha Mikro, Kecil, dan Menengah (UMKM)
          </h1>
        </div>
      </div>
      <div className="mt-4 pl-2 pr-6 py-2 container ">
        <p className="text-xl ">
          Di balik perbukitan karst dan semilir angin selatan Gunungkidul,
          tersembunyi kisah-kisah ketekunan dan kreativitas dari dua kelurahan
          yang sarat potensi: Jetis dan Ngloro, Kecamatan Saptosari. Halaman ini
          memamerkan ragam produk UMKM unggulan—hasil tangan-tangan terampil,
          rasa lokal yang autentik, serta semangat usaha yang tak pernah padam.
          Setiap produk yang ditampilkan bukan sekadar barang—ia adalah cerita.
          Cerita tentang bahan alami yang diolah dengan kearifan tradisional,
          tentang kerajinan yang lahir dari budaya, dan tentang harapan yang
          tumbuh bersama cita rasa dan mutu.
        </p>
        <div className="w-full pb-12 pt-4">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>

        {currentItems.length > 0 ? (
          <DisplayCards cards={currentItems} />
        ) : (
          <>
            <Skeleton
              className="relative h-[168px] md:h-[360px] lg:h-[480px] *:
            flex-shrink-0 cursor-pointer group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 
                ease-in-out overflow-hidden"
            ></Skeleton>
            <div className="grid grid-cols-2 gap-1 md:grid-cols-3 mt-2">
              <Skeleton
                className="relative h-[168px] md:h-[360px] lg:h-[480px] flex-shrink-0 cursor-pointer
                 group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden "
              ></Skeleton>
              <Skeleton
                className="relative h-[168px] md:h-[360px] lg:h-[480px] flex-shrink-0 cursor-pointer
                 group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden "
              ></Skeleton>
              <Skeleton
                className="relative h-[168px] md:h-[360px] lg:h-[480px] flex-shrink-0 cursor-pointer
                 group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden "
              ></Skeleton>
            </div>
            <Skeleton
              className="relative h-[168px] md:h-[360px] lg:h-[480px] *:
            flex-shrink-0 cursor-pointer group hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 
                ease-in-out overflow-hidden"
            ></Skeleton>
          </>
        )}

        <a
          className="group cursor-pointer flex items-center mt-1 gap-x-2"
          href="/umkms"
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

export default UMKM;
