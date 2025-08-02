import { aboutGallery } from "@/data/gallery";
import Image from "next/image";
import React from "react";

function AboutGallery() {
  return (
    <div className="flex flex-col justify-center">
      <h2 className="mx-auto !text-[#272726] font-bold ">Gallery</h2>
      <div
        className="mt-4 mx-auto  md:mx-0
      grid gap-2 gap-y-3 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {aboutGallery.map((image, index) => (
          <div
            key={index}
            className="group relative flex-shrink-0 w-40 h-40 md:w-50 md:h-50 rounded-lg
           hover:scale-105 active:scale-105 transition-all duration-400 ease-in-out  overflow-hidden
           "
          >
            <Image
              src={image.image}
              fill
              alt={image.name}
              className="object-cover rounded-lg
              group-hover:scale-110  group-active:scale-110 ease-in-out duration-400
              "
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutGallery;
