"use client";
import Image from "next/image";
import React from "react";
import OnlyNgloroBoundary from "./OnlyNgloroBoundary";
import NgloroBoundary from "./NgloroBoundary";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { TbBeach } from "react-icons/tb";
import UMKMUnggulan from "./UMKMUnggulan";

function About() {
  return (
    <>
      <div
        className="relative grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-2 
       px-2 py-4 container mt-10 justify-center items-center"
      >
        <Image
          className="absolute -bottom-20 -right-20 rotate-30"
          width={150}
          height={150}
          color="#000000"
          alt="motif walang"
          src={"/img/element/stroke-motif-walang.png"}
        />

        <div className="text-left lg:text-left text-[#111111]">
          <h2 className="pb-4 font-bold ">Padukuhan Gebang</h2>
          <p className="lg:text-xl pb-2">
            Padukuhan Gebang merupakan salah satu padukuhan yang terletak di
            Kelurahan Ngloro, Kapanewon Saptosari, Kabupaten Gunungkidul, Daerah
            Istimewa Yogyakarta.
          </p>

          <p className="lg:text-xl">
            Padukuhan Gebang menawarkan perpaduan langka{" "}
            <b>
              {" "}
              warisan budaya yang kaya, keindahan alam yang menakjubkan,
              penduduk yang ramah, dan beragam pengalaman
            </b>
          </p>
        </div>

        <div className="relative justify-self-center  overflow-hidden">
          <Image
            alt="about-peta-gebang"
            src={"/img/plat-gebang.jpg"}
            width={360}
            height={360}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <div
        className=" px-2 py-12  mt-10 z-10
    bg-linear-120 from-[#15334A] from-40%  to-[#15334A]/95 to-100%"
      >
        <div className="container grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:gap-x-2 ">
          <div className="relative ">
            <Image
              alt="peta rt dusun gebang"
              src={"/img/peta-rt.png"}
              unoptimized
              width={400}
              height={400}
            />
          </div>

          <div className="flex flex-col gap-10 items-start  lg:ml-0 ">
            <h2 className="text-white!  font-bold">
              Peta Batas Padukuhan Gebang
            </h2>
            <div className="grid grid-cols-2 gap-8 ">
              <div className="flex flex-col gap-2 items-start ">
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex rounded-full w-4 h-4  bg-[#16C82F]"></div>
                  <span className="font-bold text-white!">Wilayah RT 16</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex rounded-full w-4 h-4  bg-[#FFFF00]"></div>

                  <span className="font-bold text-white!">Wilayah RT 17</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start ">
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex rounded-full w-4 h-4  bg-[#433070]"></div>

                  <span className="font-bold  text-white!">Wilayah RT 18</span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="flex rounded-full w-4 h-4  bg-[#8E2C9C]"></div>
                  <span className="font-bold  text-white!">Wilayah RT 19</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative grid grid-cols-1 gap-y-4 lg:grid-cols-2 lg:gap-x-10  
      pt-12 pb-14 container mt-10  items-center"
      >
        <Image
          className="absolute -top-25 -left-15 rotate-30"
          width={150}
          height={150}
          color="#000000"
          alt="motif walang"
          src={"/img/element/stroke-motif-walang.png"}
        />

        <div className="text-left lg:text-left ">
          <h2 className="pb-4 font-bold">Mengenal Padukuhan Gebang</h2>

          <p className="lg:text-xl text-wrap pr-2">
            Dalam pembagian administratifnya Padukuhan Gebang terbagi menjadi 4
            RT yaitu : RT 16 (Kayutowo) RT 17 (Gebang) dan RT 18 RT 19
            (Sidowayah)
          </p>
          <br />
          <p className="lg:text-xl">
            Wilayah Padukuhan Gebang didominasi oleh lahan pertanian dan
            perbukitan, dengan vegetasi khas daerah karst yang subur dan potensi
            alam yang melimpah.
          </p>

          <div className="grid grid-cols-2 gap-x-2 mx-auto mt-4 pr-12 gap-y-2">
            <div className="rounded-lg bg-[#F5D573] pt-3 pb-3 flex flex-col gap-y-2 text-center ">
              <span className="font-bold text-white! text-3xl">3708</span>
              <span className="text-lg font-semibold  text-white!">Warga</span>
            </div>
            <div className="rounded-lg bg-[#F5D573] pt-3 pb-3 flex flex-col gap-y-2 text-center ">
              <span className="font-bold text-white! text-3xl">Bertani</span>
              <span className="text-lg font-semibold  text-white!">
                Mata Pencaharian Utama
              </span>
            </div>
          </div>
        </div>
        <div className="relative w-[85vw] mx-auto lg:mx-0 sm:w-[90vw] md:w-[90vw] lg:w-[480px] lg:h-[480px] aspect-square">
          <Image
            alt="perkebunan"
            src={"/img/kebun-singkong-gebang.jpg"}
            fill
            className="rounded-lg shadow-sm obect-cover"
          />
        </div>
      </div>

      <div
        className="grid grid-cols-1 gap-y-4 md:grid-cols-4 gap-x-3 lg:gap-x-1 items-center lg:px-2 py-12 
        container justify-center mt-10"
      >
        <div className="flex flex-col gap-y-2 order-last md:order-first ">
          <Popover>
            <PopoverTrigger
              className="flex items-center  gap-3 py-2 px-4 rounded-lg
          bg-[#F0EFEB] shadow-md md:w-50 cursor-pointer"
            >
              <TbBeach size={20} />
              <span className="!text[#272726] ">Wisata Pantai</span>
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col items-center gap-2 py-2 px-4 rounded-lg
          bg-white shadow-md md:w-50"
            >
              <div className="flex items-center gap-4 justify-start ">
                <TbBeach size={20} />
                <span>Wisata Pantai</span>
              </div>
              <div className="w-full h-[1px] bg-[#dbd9d2]"></div>
              <ol className="list-decimal px-4" type="1">
                <li>Pantai Ngrenehan</li>
                <li>Pantai Ngobaran</li>
                <li>Pantai Ngeden</li>
                <li>Pantai Jugala</li>
                <li>Pantai Nguyahan</li>
                <li>Pantai Pringjono</li>
              </ol>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              className="flex items-center  gap-3 py-2 px-4 rounded-lg
          bg-[#F0EFEB] shadow-md md:w-50 cursor-pointer"
            >
              <Image
                src="/img/icons/tradition.svg"
                alt="kebudayaan jawa"
                width={20}
                height={20}
              />
              <span className="!text[#272726] ">Kebudayaan Jawa</span>
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col items-center gap-2 py-2 px-4 rounded-lg
          bg-white shadow-md md:w-50"
            >
              <div className="flex items-center gap-4 justify-start ">
                <Image
                  src="/img/icons/tradition.svg"
                  alt="kebudayaan jawa"
                  width={20}
                  height={20}
                />
                <span className="!text[#272726] ">Kebudayaan Jawa</span>
              </div>
              <div className="w-full h-[1px] bg-[#dbd9d2]"></div>
              <ol className="list-decimal px-4" type="1">
                <li>Upacara Labuhan Laut Saptosari</li>
                <li>Kirab Budaya & Sedekah Bumi</li>
                <li>Gamelan</li>
                <li>Karawitan</li>
                <li>Ketoprak</li>
                <li>Reog</li>
                <li>Thek-Thek</li>
              </ol>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              className="flex items-center  gap-3 py-2 px-4 rounded-lg
          bg-[#F0EFEB] shadow-md md:w-50 cursor-pointer"
            >
              <Image
                src="/img/icons/muslim.svg"
                alt="kebudayaan islami"
                width={20}
                height={20}
              />

              <span className="!text[#272726] ">Tradisi Islami</span>
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col items-center gap-2 py-2 px-4 rounded-lg
          bg-white shadow-md md:w-50"
            >
              <div className="flex items-center gap-4 justify-start ">
                <Image
                  src="/img/icons/muslim.svg"
                  alt="kebudayaan jawa"
                  width={20}
                  height={20}
                />
                <span className="!text[#272726] ">Tradisi Islami</span>
              </div>
              <div className="w-full h-[1px] bg-[#dbd9d2]"></div>
              <ol className="list-decimal px-4" type="1">
                <li>Shalawat Terbangan</li>
                <li>Festival Hadroh</li>
                <li>Safari Tarawih</li>
                <li>Sedekah Labuh</li>
                <li>Mujahadah</li>
              </ol>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              className="flex items-center  gap-3 py-2 px-4 rounded-lg
          bg-[#F0EFEB] shadow-md md:w-50 cursor-pointer"
            >
              <Image
                src="/img/icons/mountain.svg"
                alt="kebudayaan jawa"
                width={20}
                height={20}
              />

              <span className="!text[#272726] ">Pegunungan</span>
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col items-center gap-2 py-2 px-4 rounded-lg
          bg-white shadow-md md:w-50"
            >
              <div className="flex items-center gap-4 justify-start ">
                <Image
                  src="/img/icons/mountain.svg"
                  alt="kebudayaan jawa"
                  width={20}
                  height={20}
                />
                <span className="!text[#272726] ">Pegunungan</span>
              </div>
              <div className="w-full h-[1px] bg-[#dbd9d2]"></div>
              <ol className="list-decimal px-4" type="1">
                <li>Bukit Patuk duwur</li>
                <li>Gunung Beluk Gunungkidul</li>
                <li>Perbukitan Karst Gunung Sewu</li>
              </ol>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger
              className="flex items-center  gap-3 py-2 px-4 rounded-lg
          bg-[#F0EFEB] shadow-md md:w-50 cursor-pointer"
            >
              <Image
                src="/img/icons/culture.svg"
                alt="kebudayaan jawa"
                width={20}
                height={20}
              />
              <span className="!text[#272726] ">Kesenian Tradisional</span>
            </PopoverTrigger>
            <PopoverContent
              className="flex flex-col items-center gap-2 py-2 px-4 rounded-lg
          bg-white shadow-md w-50"
            >
              <div className="flex items-center gap-4 justify-start ">
                <Image
                  src="/img/icons/culture.svg"
                  alt="kebudayaan jawa"
                  width={20}
                  height={20}
                />
                <span className="!text[#272726] ">Kesenian Tradisional</span>
              </div>
              <div className="w-full h-[1px] bg-[#dbd9d2]"></div>
              <ol className="list-decimal px-4" type="1">
                <li>Karawitan</li>
                <li>Ketoprak</li>
                <li>Reog</li>
                <li>Shalawatan</li>
                <li>Campursari</li>
              </ol>
            </PopoverContent>{" "}
          </Popover>
        </div>
        <div className="relative text-left lg:text-left col-span-3 ">
          <Image
            className="absolute -bottom-[430px] md:-bottom-34 md:-right-25 rotate-30"
            width={150}
            height={150}
            color="#000000"
            alt="motif walang"
            src={"/img/element/stroke-bunga-albd.png"}
          />
          <h2 className="pb-4 font-bold">
            Kebudayaan & Destinasi Wisata Terdekat
          </h2>

          <p className="lg:text-xl text-wrap pr-2">
            Padukuhan Gebang tak hanya menyuguhkan keindahan alam, tetapi juga
            kekayaan budaya yang kental dan masih lestari hingga kini.
            Masyarakat masih aktif melestarikan berbagai tradisi dan kesenian
            lokal seperti Jathilan, Tari Klasik Jawa, dan ritual-ritual adat
            lainnya yang kerap dipentaskan dalam berbagai acara desa dan
            perayaan keagamaan. Kegiatan budaya ini bukan hanya menjadi hiburan,
            namun juga sarana mempererat kebersamaan warga.
          </p>
          <br />
          <p className="lg:text-xl text-wrap pr-2">
            Di sekitar Padukuhan Gebang, terdapat pula berbagai destinasi wisata
            yang mudah dijangkau dan sangat menarik untuk dikunjungi.
            Pantai-pantai eksotis seperti Pantai Ngeden, Pantai Nglorong, dan
            Pantai Widodaren menawarkan panorama alam yang menakjubkan, cocok
            bagi wisatawan pencinta keindahan laut dan ketenangan alam.
            Kombinasi antara kekayaan budaya dan keindahan alam menjadikan
            Gebang sebagai tujuan wisata yang unik dan berkesan
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
