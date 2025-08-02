import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const jarakTempat = [
  {
    namaTempat: "Balai Desa Ngloro",
    jarak: "1.9 km",
  },
  {
    namaTempat: "Kantor Kecamatan Saptosari",
    jarak: "3.0 km",
  },
  {
    namaTempat: "Kantor Pemerintah Kabupaten",
    jarak: "20.9 km",
  },
  {
    namaTempat: "Kantor Pemerintah Provinsi DIY",
    jarak: "42.6 km",
  },
  {
    namaTempat: "Ibukota Negara Jakarta",
    jarak: "604 km",
  },
];

function NgloroBoundary() {
  return (
    <div className="relative flex flex-col md:flex-row items-start  mt-13 ">
      <div className="flex flex-col gap-10 items-start max-w-[600px] ">
        <h2 className="font-bold ">Peta Batas Dusun Gebang</h2>
        <div className="relative w-[400px] h-[300px] md:hidden  ">
          <Image alt="peta dusun rt" fill src={"/img/peta-gebang.png"} />
        </div>
        <div className="grid grid-cols-2 gap-3 ">
          <div className="flex flex-col gap-2 items-start ">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex rounded-full w-4 h-4  bg-[#16C82F]"></div>
              <span className="font-bold ">Wilayah RT 16</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex rounded-full w-4 h-4  bg-[#FFFF00]"></div>

              <span className="font-bold ">Wilayah RT 17</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start ">
            <div className="flex flex-row gap-2 items-center">
              <div className="flex rounded-full w-4 h-4  bg-[#433070]"></div>

              <span className="font-bold ">Wilayah RT 18</span>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="flex rounded-full w-4 h-4  bg-[#8E2C9C]"></div>
              <span className="font-bold ">Wilayah RT 19</span>
            </div>
          </div>
        </div>

        <p className=" pr-4">
          Dusun Gobong merupakan salah satu Dusun di wilayah Kalurahan Ngloro
          Kapanewon Saptosari Kabupaten Gunungkidul dengan luas wilayah
          1.080,2550 Ha. Dusun Gobong memiliki topografi yang berbukit-bukit
          dengan ketinggian rata-rata 25 m di atas permukaan laut dengan suhu
          udara berkisar 27–32°C serta kontur tanah berupa dataran dan
          pegunungan
        </p>

        <div className="overflow-x-auto">
          <Table>
            <TableCaption>
              Jarak dari balai dusun ke kantor pemerintahan
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>No</TableHead>
                <TableHead>Destinasi</TableHead>
                <TableHead>Jarak Tempuh</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jarakTempat.map((tempat, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{index + 1}</TableCell>

                  <TableCell className="font-medium">
                    {tempat.namaTempat}
                  </TableCell>

                  <TableCell className="font-medium">{tempat.jarak}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="pr-4">
          Alamat balai dusun: Kayutowo RT 16 RW 04, Gebang, Kalurahan Ngloro,
          Kapanewon Saptosari, Gunung Kidul, Yogyakarta
        </p>
      </div>

      <div className="relative w-[400px] h-[300px] lg:w-[600px] lg:h-[400px] hidden md:block  ">
        <Image alt="peta dusun rt" fill src={"/img/peta-gebang.png"} />
      </div>
    </div>
  );
}

export default NgloroBoundary;
