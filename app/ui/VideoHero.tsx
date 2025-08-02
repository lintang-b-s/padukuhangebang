import Image from "next/image";
import React from "react";

function getVideoTitle(slug: string) {
  switch (slug) {
    case "hiking":
      return "Hiking";
  }
  return "Unknown";
}

function VideoHero({ params: { slug } }: { params: { slug: string } }) {
  const videoTitle = getVideoTitle(slug);
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden ">
      <div className="relative h-full w-full">
        <Image
          src={"/img/hiking.jpeg"}
          fill
          alt="Video Hero"
          className=" object-cover"
        />

        <h1
          className="absolute left-[50%] top-[50%] -translate-x-[50%]
         -translate-y-[50%]"
        >
          {videoTitle}
        </h1>
      </div>
    </div>
  );
}

export default VideoHero;
