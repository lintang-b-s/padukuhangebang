"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import { aboutGallery, photoGallery } from "@/data/gallery";
import ReactImageGallery from "react-image-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { ActivityGallery, ImageModal } from "@/type/type";
import { IoIosClose } from "react-icons/io";
import Footer from "../ui/Footer";
import { fetchArticles, fetchEvents, storageImageURL } from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";
import ReactPaginate from "react-paginate";

function Galeri() {
  const modalRef = React.useRef<ReactImageGallery>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState<ActivityGallery[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  const [imagesModal, setImagesModal] = React.useState<ImageModal[]>([]);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % itemCount;

    setItemOffset(newOffset);
  };
  const handleImageClick = (index: number) => {
    setIsOpen(true);
    modalRef.current?.slideToIndex(index);
  };

  useEffect(() => {
    fetchArticles().then((data) => {
      setPageCount(Math.ceil(data.length / itemsPerPage));
      setItemCount(data.length);
      const endOffset = itemOffset + itemsPerPage;
      let galleryItems: ActivityGallery[] = [];
      for (let item of data) {
        let currentItemImages = [];
        for (let curImage of item!.images!) {
          currentItemImages.push(storageImageURL(curImage));
        }
        if (currentItemImages.length === 0) {
          console.log("item: ", item, " skipped...");
          continue;
        }
        galleryItems.push({
          name: item.title,
          images: currentItemImages,
        });
      }
      setCurrentItems(galleryItems.slice(itemOffset, endOffset));
    });
  }, [itemOffset]);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
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
      <div className="relative h-dvh w-full overflow-hidden  ">
        <div className="relative h-full w-full ">
          <Image
            src={"/img/dokumentasi/galeri.jpg"}
            fill
            alt="galeri"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
                    -translate-y-[50%] text-center leading-[1.2] !text-headerOne
                    !text-white text-shadow-headerOne font-semibold"
          >
            Galeri
          </h1>
        </div>
      </div>

      <div className="mt-4 py-6 container ">
        <div className="gap-x-[2px] pb-12 gap-y-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {currentItems.length > 0
            ? currentItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2  w-full max-w-[180px] "
                >
                  <div
                    className="group relative w-full max-w-[250px] max-h-[250px] aspect-square h-full md:max-h-[250px] 
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
                    <span className="text-wrap pr-2">{item.name}</span>
                  </div>
                </div>
              ))
            : Array.from({ length: 9 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="relative  w-full max-w-[250px] max-h-[250px] aspect-square h-full md:max-h-[250px] 
              md:max-w-[250px] "
                ></Skeleton>
              ))}
        </div>

        <div className="mt-12 mx-auto">
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
      </div>
      <Footer />
    </div>
  );
}

export default Galeri;
