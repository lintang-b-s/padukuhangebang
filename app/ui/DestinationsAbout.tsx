import Image from "next/image";
import React from "react";
import { TbBeach } from "react-icons/tb";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function DestinationsAbout() {
  return (
    <div className="mt-20 pr-3 md:pr-0">
      {/* galeri destinasi wisata & kebudayaan */}
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-3 gap-y-3 md:grid-rows-2">
        <div
          className="group relative flex-shrink-0 row-span-2 max-w-[94%]  h-[300px]  md:h-full rounded-lg
            hover:scale-104  active:scale-104 transition-all duration-400 ease-in-out  overflow-hidden
        "
        >
          <Image
            src={"/img/pantai-ngrenehan.jpg"}
            fill
            alt="umkm"
            className=" object-cover rounded-lg 
            group-hover:scale-105  group-active:scale-105 ease-in-out duration-400 "
          />
        </div>

        <div
          className="group relative flex-shrink-0 col-span-2  max-w-[94%]  h-[300px] rounded-lg
         hover:scale-104  active:scale-104 transition-all duration-400 ease-in-out  overflow-hidden
        "
        >
          <Image
            src={"/img/reog.jpg"}
            fill
            alt="umkm"
            className=" object-cover rounded-lg
              hover:scale-105 active:scale-105 ease-in-out duration-400
            "
          />
        </div>

        <div
          className="group relative flex-shrink-0 col-span-2  max-w-[94%] h-[300px] rounded-lg
         hover:scale-104  active:scale-104 transition-all duration-400 ease-in-out  overflow-hidden
        "
        >
          <Image
            src={"/img/ketoprak.jpg"}
            fill
            alt="umkm"
            className=" object-cover rounded-lg
             hover:scale-105 active:scale-105 ease-in-out duration-400
            "
          />
        </div>

        <div
          className="group relative flex-shrink-0 col-span-2  max-w-[94%] h-[300px] rounded-lg
                 hover:scale-104 active:scale-104 transition-all duration-400 ease-in-out  overflow-hidden
        "
        >
          <Image
            src={"/img/madya-laras.jpg"}
            fill
            alt="umkm"
            className=" object-cover rounded-lg
              hover:scale-105 active:scale-105  ease-in-out duration-400
            "
          />
        </div>
        <div
          className="group relative flex-shrink-0 col-span-2 max-w-[94%] h-[300px] rounded-lg
                         hover:scale-104 active:scale-104 transition-all duration-400 ease-in-out  overflow-hidden
        "
        >
          <Image
            src={"/img/pantai-nguyahan.jpg"}
            fill
            alt="umkm"
            className=" object-cover rounded-lg
            hover:scale-105 active:scale-105 ease-in-out duration-400
            "
          />
        </div>
      </div>

      {/* deskripsi destinasi wisata & kebudayaan */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 items-center mt-12  ">
        {/* deskripsi destinasi wisata & kebudayaan */}
        <div className="md:col-span-2">
          <h2>Kebudayaan & Destinasi Wisata</h2>
          <p className="!text-[#686867] break-words w-full ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            hendrerit cursus tellus. Nullam sollicitudin tincidunt venenatis.
            Duis tincidunt orci magna, ut mollis dui congue nec. Quisque
            interdum nunc vel gravida aliquam. Fusce vestibulum eget diam quis
            aliquet. Donec consequat, arcu dictum cursus blandit, leo nunc
            fringilla enim, eu cursus dolor quam eu lorem. Pellentesque ut neque
            sed odio tristique tincidunt eu vitae nunc. Nam in nibh at tortor
            ultrices semper vitae quis lectus.
          </p>

          <p className="!text-[#686867]  mt-2 break-words w-full">
            Mauris lacinia lorem vel ipsum dictum varius. Suspendisse posuere mi
            ac metus pharetra iaculis. Praesent velit risus, rhoncus ut
            porttitor non, vestibulum non velit. Fusce sit amet urna sed tellus
            tempor blandit sed vel metus. Vivamus placerat lorem lacus, cursus
            cursus orci molestie sed. Quisque a nibh et ex aliquam auctor vitae
            nec nibh. Nulla eu suscipit enim, non sagittis dui. Morbi et
            tincidunt mauris, eget congue arcu. Mauris sed metus vel risus
            dapibus feugiat ac vel magna.
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:flex md:flex-col gap-3 items-start mt-3
        pr-3 md:pr-0"
        >
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
      </div>
    </div>
  );
}

export default DestinationsAbout;
