"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import { aboutGallery, photoGallery } from "@/data/gallery";
import ReactImageGallery from "react-image-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ImageModal } from "@/type/type";
import { IoIosClose } from "react-icons/io";
import Footer from "../ui/Footer";

function Galeri() {
  const modalRef = React.useRef<ReactImageGallery>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const [imagesModal, setImagesModal] = React.useState<ImageModal[]>([]);

  const handleImageClick = (index: number) => {
    setIsOpen(true);
    modalRef.current?.slideToIndex(index);
  };

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div
        className={` fixed z-12 pt-24 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.9)] 
        ${isOpen ? `block` : `hidden`} z-100  `}
      >
        {/* // close button */}
        <ImageGallery items={imagesModal} ref={modalRef} />;
        <div
          className="absolute top-[5vh] right-[4vw]  cursor-pointer z-100"
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>
      <Navbar />
      <div className="relative h-dvh w-screen overflow-hidden ">
        <div className="relative h-full w-full ">
          <Image
            src={"/img/dokumentasi/galeri.jpg"}
            fill
            alt="galeri"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
                    -translate-y-[50%] text-center leading-[1.2] !text-headerOne text-shadow-headerOne font-semibold"
          >
            Galeri
          </h1>
        </div>
      </div>

      <div className="mt-4 py-6 container gap-x-2 gap-y-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {photoGallery.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 ">
            <div
              className="group relative w-full max-w-[200px] max-h-[200px] aspect-square h-full md:max-h-[250px] 
              md:max-w-[250px]  flex-shrink-0 cursor-pointer mt-6 hover:scale-[98%]  active:scale-[98%]
               rounded-lg transition-all duration-400 ease-in-out overflow-hidden"
              onClick={() => {
                let currentImages = item.images.map((image, idx) => ({
                  thumbnail: image,
                  original: image,
                }));
                setImagesModal(currentImages);
                handleImageClick(index);
              }}
            >
              <Image
                src={item?.images![0]}
                alt={item?.name!}
                fill
                className="rounded-lg object-cover group-hover:scale-110 group-active:scale-110 transform ease-in-out
                  duration-400 transition-transform"
              />
            </div>
            <div className="text-center">
              <span className="text">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Galeri;
