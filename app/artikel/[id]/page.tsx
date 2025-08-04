"use client";
import Navbar from "@/app/ui/Navbar";
import { articles } from "@/data/articles";
import { Article } from "@/type/type";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOpenInFull } from "react-icons/md";
import ReactImageGallery from "react-image-gallery";
import { FiFacebook } from "react-icons/fi";
import { FaArrowRight, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import DisplayListImages from "@/app/ui/DisplayListImages";
import Footer from "@/app/ui/Footer";
import "react-image-gallery/styles/css/image-gallery.css";
import "maplibre-gl/dist/maplibre-gl.css";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchArticles } from "@/lib/api";

function KontenArtikel() {
  const { id }: { id: string } = useParams();

  const [imagesModal, setImagesModal] = useState<
    {
      original: string;
      thumbnail: string;
    }[]
  >([]);

  const [imageModalIndex, setImageModalIndex] = useState(0);

  const [data, setData] = useState<Article>();

  const [isOpen, setIsOpen] = React.useState(false);

  const handleImageClick = (index: number) => {
    setIsOpen(true);
    modalRef.current?.slideToIndex(index);
  };

  const modalRef = useRef<ReactImageGallery>(null);

  useEffect(() => {
    fetchArticles().then((data) => {
      for (let article of data) {
        if (article.id == id) {
          setData(article);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (data?.images) {
      setImagesModal(
        data.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      );
    }
  }, [data]);

  return (
    <div className="relative w-screen min-h-screen">
      {/* image gallery modal */}
      <div
        className={`fixed z-12 pt-24 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.9)] 
        ${isOpen ? `block` : `hidden`} z-100 `}
      >
        {/* close button */}
        <ReactImageGallery items={imagesModal} ref={modalRef} />;
        <div
          className="absolute top-[5vh] right-[4vw] z-14 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>
      <Navbar />
      {data ? (
        <div className="pt-24 container ">
          <h1 className="!text-[#272726] font-bold">{data?.title}</h1>
          <span className="!text-[#F3C725] font-bold">
            {data?.kategori}
          </span>{" "}
          <div className="flex flex-row gap-6 mt-2 items-center">
            <div className="flex flex-row gap-2">
              <CiCalendarDate size={20} />
              <span>{data?.postDate.toDateString()}</span>
            </div>
            <div className="flex flex-row gap-2">
              <IoPeopleOutline size={20} />
              <span>{data?.penulis}</span>
            </div>
          </div>
          <div
            className="relative w-full max-w-[380px] sm:max-w-[630px] md:max-w-[750px] lg:max-w-[1280px] h-[202px] md:h-[500px] lg:h-[670px] flex-shrink-0 
          cursor-pointer mt-4"
          >
            <Image
              src={data?.thumbnail!}
              alt={data?.title!}
              fill
              className="rounded-lg object-cover"
              onClick={() => {
                setIsOpen(true);
                setImageModalIndex(0);
              }}
            />

            <div
              className="absolute bottom-2  right-1 flex flex-row gap-2 items-center
                         rounded-2xl bg-black opacity-70 p-3 pointer-events-none"
            >
              <MdOpenInFull color="white" size={20} />
              <p className="!text-white">Media Library</p>
            </div>
          </div>
          <div className="py-6 pr-1">
            <div
              dangerouslySetInnerHTML={{
                __html: data.content,
              }}
            ></div>
            {data!.images!.length > 0 && (
              <div className="mt-6">
                <div className="flex justify-between mt-4">
                  <div className="flex flex-col gap-1">
                    <span className="!text-[#F3C725] text-lg">Images</span>
                    <div className="flex items-center h-[1.5px] ">
                      <div className="w-[10px]  h-[1.5px] bg-[#F3C725]"></div>
                      <div className="flex-grow  h-[1.5px] bg-[#ccc]"></div>
                    </div>
                  </div>

                  <div
                    className="group cursor-pointer flex items-center mt-1 gap-x-2"
                    onClick={() => {
                      setIsOpen(true);
                    }}
                  >
                    <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
                      See more
                    </span>
                    <FaArrowRight
                      color="#F3C725"
                      className="group-hover:animate-seemore-next"
                    />
                  </div>
                </div>
                <DisplayListImages
                  images={data?.images!}
                  handleImageClick={handleImageClick}
                />
              </div>
            )}
            <div className="flex flex-col gap-3 mt-10">
              <span className="font-bold">Bagikan artikel ini:</span>
              <div className="flex flex-row gap-3 items-center justify-start">
                <a
                  className="flex flex-row items-center justify-center p-3 
             rounded-full bg-[#1977F2] cursor-pointer hover:scale-105 active:scale-105
              transition-all duration-200"
                  href={data?.share.facebook}
                >
                  <FiFacebook color="white" size={22} />
                </a>
                <a
                  className="flex flex-row items-center justify-center p-3 
             rounded-full bg-[#23D366] cursor-pointer hover:scale-105 active:scale-105
             transition-all duration-200"
                  href={data?.share.whatsapp}
                >
                  <FaWhatsapp color="white" size={22} />
                </a>
                <a
                  className="flex flex-row items-center justify-center p-3 
             rounded-full bg-black cursor-pointer hover:scale-105 active:scale-105
              transition-all duration-200"
                  href={data?.share.twitter}
                >
                  <FaXTwitter color="white" size={22} />
                </a>
                <a
                  className="flex flex-row items-center justify-center p-3 
             rounded-full bg-[#0088CB] cursor-pointer hover:scale-105 active:scale-105
              transition-all duration-200"
                  href={data?.share.telegram}
                >
                  <PiTelegramLogo color="white" size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-24 container pr-6">
          <Skeleton className="relative h-[202px] md:h-[500px] lg:h-[670px] mt-6" />
          <div className="md:grid md:grid-cols-5 md:gap-8 mt-12">
            <Skeleton className="col-span-4 h-60" />
            <Skeleton className="h-60" />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default KontenArtikel;
