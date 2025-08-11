import Image from "next/image";
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";

const footerLinks = [
  {
    name: "Instagram",
    link: "https://www.instagram.com/saptosari.berseri",
    icon: <FaInstagram size={40} color="#77797B" />,
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@saptosari.berseri",
    icon: <FaTiktok size={40} color="#77797B" />,
  },
];

function Footer() {
  return (
    <>
      <div className="w-full h-[0.5px] bg-[#77797B] mt-24"></div>
      <footer className="w-full bg-white relative container py-8 ">
        <div className="flex flex-col gap-y-4 md:grid-y-0 md:grid md:grid-cols-2 items-start">
          <Image
            alt="logo gunungkidul"
            width={100}
            height={100}
            src="/img/gebang.svg"
          />
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-col gap-y-2">
              <span className="text-start text-lg text-[#77797B] font-bold ">
                Alamat
              </span>
              <span className="text-start text-lg text-[#77797B]  ">
                Padukuhan Gebang, Kalurahan Ngloro, Kecamatan Saptosari,
                Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta
              </span>
            </div>

            <div className="flex flex-col gap-y-2">
              <span className="text-start text-lg text-[#77797B] font-bold ">
                Informasi Pembuat Website
              </span>
              <span className="text-start text-lg text-[#77797B]  ">
                Dibuat Oleh: Lintang Birda Saputra (22/505034/PA/21737) Subunit
                Ngloro 4 KKN UGM kode YO-054
              </span>
            </div>
            <p className="text-start text-lg text-[#77797B] ">Follow us</p>

            <div className=" flex flex-row gap-x-4 items-center justify-start">
              {footerLinks.map((link, index) => {
                return (
                  <a href={link.link} key={index} className="cursor-pointer">
                    {link.icon}
                  </a>
                );
              })}
            </div>

            <div className="flex flex-row gap-x-4 items-center mt-6">
              <Image
                src="/img/kkn-ugm.jpg"
                width={40}
                height={40}
                alt="logo kkn ugm"
              />
              <Image
                src="/img/logo-ugm.png"
                width={40}
                height={40}
                alt="logo ugm"
              />
              <Image
                src="/img/logo-unit.png"
                width={40}
                height={40}
                alt="logo unit saptosari berseri"
              />
            </div>
          </div>
        </div>
        <p className="absolute left-[50%] -translate-x-[50%] mt-20 text-start text-base  text-[#77797B] ">
          @2025 Saptosari Berseri KKN UGM.
        </p>
      </footer>
    </>
  );
}

export default Footer;
