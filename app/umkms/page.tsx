"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { LiaMapMarkedAltSolid } from "react-icons/lia";
import { ObjectLocation, UMKMCard } from "@/type/type";
import ReactPaginate from "react-paginate";
import Maps from "../ui/Map";
import { RxHamburgerMenu } from "react-icons/rx";
import { dataUMKMUnggulan } from "@/data/umkm";
import { getDocs, query, collection } from "firebase/firestore";
import { db, umkmFetcher } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

function UMKMS() {
  const [showMap, setShowMap] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState<ObjectLocation[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemCount;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    umkmFetcher().then((items) => {
      const endOffset = itemOffset + itemsPerPage;
      setItemCount(items.length);
      setPageCount(Math.ceil(items.length / itemsPerPage));
      setCurrentItems(items.slice(itemOffset, endOffset));
    });
  }, [itemOffset]);
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      {!showMap && <Navbar />}

      <div
        className={`${
          showMap ? `block` : `hidden`
        } w-full h-full relative pt-2`}
      >
        <div className="flex flex-row justify-between items-center mb-4 px-4 ">
          <div>
            <span className="font-bold !text-[#F3C725] ">
              {dataUMKMUnggulan.length}
            </span>
            <span className="font-bold"> Results</span>
          </div>

          {/* map button */}
          <div
            className="flex items-center gap-x-2 mt-2 p-3 rounded-xl  bg-[#F0EFEB] cursor-pointer hover:bg-[#E8E6E2] transition-all duration-300
            lg:hidden"
            onClick={() => {
              setShowMap(false);
            }}
          >
            <RxHamburgerMenu size={24} />
            <span className="font-bold"> List</span>
          </div>
        </div>
        <div className="w-full h-[90vh]">
          {currentItems.length > 0 && (
            <Maps
              places={currentItems}
              largeScreen={false}
              centerLatitude={-8.039333447637466}
              centerLongitude={110.49658308527756}
            />
          )}
        </div>
      </div>

      <div
        className={`pt-20 lg:pt-32 container-list pr-6 ${
          showMap ? `hidden` : `block`
        }`}
      >
        <h1 className="!text-[#272726] font-semibold leading-[1.2]">UMKM</h1>

        <div className="mt-4  ">
          <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] "></div>

          <div className=" mt-4 flex flex-row justify-between items-center">
            <div>
              <span className="font-bold !text-[#F3C725] ">
                {dataUMKMUnggulan.length}
              </span>
              <span className="font-bold"> Results</span>
            </div>

            {/* map button */}
            <div
              className="flex items-center gap-x-2 mt-2 p-3 rounded-xl  bg-[#F0EFEB] cursor-pointer hover:bg-[#E8E6E2] transition-all duration-300
            lg:hidden"
              onClick={() => {
                setShowMap(true);
              }}
            >
              <LiaMapMarkedAltSolid size={24} />
              <span className="font-bold"> Map</span>
            </div>
          </div>
        </div>

        {/* list umkms & map (jika lg screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full justify-center">
          <div className="col-span-2">
            <div className="mt-4  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {currentItems.length > 0
                ? currentItems.map((umkm, index) => (
                    <UMKMCardComponent key={index} umkm={umkm} />
                  ))
                : Array.from({ length: 9 }).map((_, index) => (
                    <Skeleton
                      key={index}
                      className="relative w-full max-w-[350px] h-34 sm:w-44 sm:h-34 md:w-56 md:h-40 xl:w-70 xl:h-60"
                    ></Skeleton>
                  ))}
            </div>

            <ReactPaginate
              breakLabel="..."
              nextLabel=" >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< "
              renderOnZeroPageCount={null}
              breakClassName={"break-me"}
              activeClassName={"active"}
              containerClassName={"pagination"}
            />
          </div>
          <div className="hidden lg:block h-[95%]  w-full rounded-xl">
            {currentItems.length > 0 ? (
              <Maps
                places={currentItems}
                largeScreen={true}
                centerLatitude={-8.039333447637466}
                centerLongitude={110.49658308527756}
              />
            ) : (
              <Skeleton className="relative w-full h-full rounded-xl"></Skeleton>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function UMKMCardComponent({ umkm }: { umkm: ObjectLocation }) {
  return (
    <a
      className="group grid grid-cols-2 sm:grid-cols-1 gap-3"
      href={`/umkm/${umkm.name}`}
    >
      {/* umkm image */}
      <div
        className="group relative w-40 h-34 sm:w-44 sm:h-34 md:w-56 md:h-40 xl:w-70 xl:h-60
              group-hover:scale-[98%]  group-active:scale-[98%] rounded-lg transition-all duration-400 
              ease-in-out overflow-hidden"
      >
        <Image
          src={umkm.thumbnail!}
          alt={umkm.name}
          fill
          className="rounded-lg object-cover group-hover:scale-110 group-active:scale-110 transform ease-in-out
          duration-400 transition-transform"
        />
      </div>
      <div>
        <h4 className="!text-[#272726] font-bold">{umkm.name}</h4>
        <span className="text-sm !text-[#686867]">{umkm.address}</span>
      </div>
    </a>
  );
}

export default UMKMS;
