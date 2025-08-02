import { dataUMKMUnggulanHome } from "@/data/umkm";
import Image from "next/image";
import React from "react";

function UMKMUnggulan() {
  return (
    //   <div
    //     className="mt-13 px-8 md:px-24 pt-14 pb-40 flex flex-col gap-14
    //  bg-linear-120 from-[#15334A] from-40%  to-[#15334A]/90 to-100%
    //  z-10
    // "
    //   >
    //     <div className="grid grid-cols-1 md:grid-cols-2">
    //       <h2 className="!text-white font-bold">UMKM Unggulan</h2>
    //       <div></div>
    //     </div>
    //     {dataUMKMUnggulanHome.map((umkm, idx) => (
    //       <div className="flex flex-col gap-2 md:grid md:grid-cols-2" key={idx}>
    //         <div
    //           className={`relative w-[240px] h-[240px] md:w-[90%] md:h-[100%] ${
    //             idx % 2 === 0 ? "md:order-last" : ""
    //           }`}
    //         >
    //           <Image
    //             src={umkm.image}
    //             alt="batik mojo"
    //             fill
    //             className="rounded-lg object-cover"
    //           />
    //         </div>
    //         <div className="flex flex-col gap-2 items-start">
    //           <h3 className="!text-white">{umkm.title}</h3>
    //           <p className="!text-white">{umkm.description}</p>
    //         </div>
    //       </div>
    //     ))}

    //   </div>

    <div className="flex flex-col gap-6 container">
      {dataUMKMUnggulanHome.map((umkm, idx) => (
        <div
          key={idx}
          className={`flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-6 py-10 md:items-center`}
        >
          <div
            className={`relative  flex-shrink-0 mx-auto w-[92vw] h-[35vh] md:w-[38vw] aspect-square md:h-[62vh] shadow-md ${
              idx % 2 == 0 ? "md:order-last" : ""
            } cursor-pointer hover:scale-[98%] active:scale-[98%] focus:hover-[98%] rounded-lg transition-all duration-400 ease-in-out overflow-hidden "
            }`}
          >
            <Image
              alt={umkm.title}
              src={umkm.image}
              fill
              className={`rounded-lg shadow-md object-cover group-hover:scale-[115%] group-active:scale-[115%] group-focus:scale-[115%] transform ease-in-out
                 duration-400 transition-transform`}
            />
          </div>
          <div className="flex flex-col gap-3 mt-2 pl-2 md:pl-0 ">
            <span className="text-4xl font-bold">{umkm.title}</span>
            <p className="leading-1.4">{umkm.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UMKMUnggulan;
