import React from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import NgloroPlace from "../ui/NgloroPlace";
import NgloroBoundary from "../ui/NgloroBoundary";
import SejarahDesa from "../ui/SejarahDesa";
import DestinationsAbout from "../ui/DestinationsAbout";
import Footer from "../ui/Footer";
import UMKMUnggulan from "../ui/UMKMUnggulan";
import AboutGallery from "../ui/AboutGallery";

function About() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-screen overflow-hidden ">
        <div className="relative h-full w-full ">
          <Image
            src={"/img/pantai-ngrenehan-full-hd.jpg"}
            fill
            alt="umkm"
            className=" object-cover"
          />

          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
              -translate-y-[50%] text-center leading-[1.2] !text-headerOne text-shadow-headerOne font-semibold"
          >
            Grand Tour of Ngloro
          </h1>
        </div>
      </div>
      <div className="mt-4 py-2 container ">
        <div
          className="grid grid-cols-1 md:grid-cols-3 md:gap-4 justify-center items-center
        mt-8 "
        >
          <div className="md:col-span-2">
            <p className="text-xl text-[#272726] font-bold break-words w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              convallis justo tempus dui pretium scelerisque. Nunc a tellus
              justo. Nunc semper odio odio, non dignissim neque molestie sit
              amet. Vivamus sit amet nisl aliquam, congue nunc in, dignissim ex.
              Etiam eu tortor massa. In eget diam at tortor blandit vulputate a
              a justo. Aliquam erat dolor, mattis ac est sit amet, euismod
              viverra odio.
            </p>
          </div>
          <div
            className="hidden md:block mx-auto w-80 h-64 md:w-[440px] md:h-[300px] flex-shrink-0 cursor-pointer 
           relative "
          >
            <Image
              src="/img/pantai-ngobaran.jpg"
              alt="pantai ngobaran"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <NgloroPlace />

        <NgloroBoundary />

        <SejarahDesa />

        <DestinationsAbout />
      </div>
      <UMKMUnggulan />
      <div className="mt-4 py-2 container">
        <AboutGallery />
      </div>
      <Footer />
    </div>
  );
}

export default About;
