"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { destinations } from "@/data/destinations";
import { fetchDestinations, storageImageURL } from "@/lib/api";
import { Destination } from "@/type/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function TopDestinations() {
  const [currentItems, setCurrentItems] = useState<Destination[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = 15;

  useEffect(() => {
    fetchDestinations().then((data) => {
      const currentDestinations = data.slice(0, 8).map((destination) => {
        let updatedDestination = destination;
        if (destination.thumbnail.startsWith("img/")) {
          updatedDestination = {
            ...destination,
            thumbnail: storageImageURL(destination.thumbnail),
          };
        }

        updatedDestination.images = destination.images.map((image: string) =>
          image.startsWith("img/") ? storageImageURL(image) : image
        );
        return updatedDestination;
      });
      setPageCount(Math.ceil(data.length / itemsPerPage));

      setCurrentItems(currentDestinations);
    });
  }, []);
  return (
    <div className="flex flex-col gap-y-4 pl-1 pr-6 pt-4 container mt-10">
      <div className="flex flex-col items">
        <h2 className="pb-1 hyphens-auto  font-bold">
          Destinasi Wisata Terdekat
        </h2>
        <a
          className="group cursor-pointer flex items-center mt-1 gap-x-2"
          href="/destinations"
        >
          <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
            Learn more
          </span>
          <FaArrowRight
            color="#F3C725"
            className="group-hover:animate-seemore-next"
          />
        </a>
      </div>

      <div className="flex gap-x-2 items-center overflow-x-scroll  hide-scrollbar flex-shrink-0">
        {currentItems.length > 0
          ? currentItems.map((destination, index) => (
              <a
                key={index}
                href={`/destinations/${destination.name}`}
                className="group relative w-[170px] h-[170px] lg:w-[347px] lg:h-[347px] flex-shrink-0 cursor-pointer
            hover:scale-[98%] active:scale-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden"
              >
                <Image
                  src={destination.thumbnail}
                  alt={destination.name}
                  fill
                  className={`rounded-lg object-cover group-hover:scale-110  group-active:scale-110 transform ease-in-out
               duration-400 transition-transform`}
                />
                <h3 className="font-bold !text-white absolute bottom-2 left-2  text-shadow-headerOne">
                  {destination.name}
                </h3>
              </a>
            ))
          : Array.from({ length: 9 }).map((_, index) => (
              <Skeleton
                key={index}
                className="group relative w-full h-full sm:max-w-[350px] sm:max-h-[350px]  lg:max-w-[350px] lg:max-h-[350px] aspect-square 
                         flex-shrink-0 cursor-pointer  hover:scale-[98%] active:scale-[98%]
                                     transition-all duration-400 ease-in-out overflow-hidden"
              />
            ))}
      </div>
    </div>
  );
}

export default TopDestinations;
