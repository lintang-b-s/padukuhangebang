"use client";
import React from "react";
import Navbar from "../ui/Navbar";
import Image from "next/image";
import NgloroBoundary from "../ui/NgloroBoundary";
import Footer from "../ui/Footer";
import UMKMUnggulan from "../ui/UMKMUnggulan";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SaranaPrasarana from "../ui/SaranaPrasarana";
import { Pie, PieChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";
import { Map, Marker, NavigationControl, Popup } from "@vis.gl/react-maplibre";
import { ObjectLocation } from "@/type/type";
import { allLocations } from "@/data/allLocation";
import { FaLocationDot } from "react-icons/fa6";
import "maplibre-gl/dist/maplibre-gl.css";
import { potensiAlam } from "@/data/potensiAlam";

const dataKelamin = [
  { kelamin: "Laki-Laki", jumlah: 221, fill: "#F5D573" },
  { kelamin: "Perempuan", jumlah: 220, fill: "#CE921A" },
];

const dataRT = [
  { rt: "RT 16", jumlah: 31, fill: "#126B00" },
  { rt: "RT 17", jumlah: 19, fill: "#F5D573" },
  { rt: "RT 18", jumlah: 19, fill: "#15334A" },
  { rt: "RT 19", jumlah: 30, fill: "#CE921A" },
];

const kelaminChartConfig = {
  laki: {
    label: "Laki-Laki",
  },
  perempuan: {
    label: "Perempuan",
  },
} satisfies ChartConfig;

const rtChartConfig = {
  rt16: {
    label: "RT 16",
  },
  rt17: {
    label: "RT 17",
  },
  rt18: {
    label: "RT 18",
  },
  rt19: {
    label: "RT 19",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const pejabats = [
  {
    nama: "Hendra Wijaya",
    jabatan: "Kepala Padukuhan",
  },
  {
    nama: "Nursinta Hanafi",
    jabatan: "Ketua PKK",
  },
  {
    nama: "Marsini",
    jabatan: "Wakil PKK",
  },
  {
    nama: "Suwardi Atmojo",
    jabatan: "Ketua RW 04",
  },
  {
    nama: "Tuparianto",
    jabatan: "Ketua RT 16",
  },
  {
    nama: "Jumirin",
    jabatan: "Ketua RT 17",
  },
  {
    nama: "Sugeng",
    jabatan: "Ketua RT 18",
  },
  {
    nama: "Timbul Iswanto",
    jabatan: "Ketua RT 19",
  },
  {
    nama: "Tukari",
    jabatan: "Sekretaris 1",
  },
  {
    nama: "Christina Rinandari",
    jabatan: "Bendahara 1",
  },
  {
    nama: "Eva Rosida",
    jabatan: "Sekretaris 2",
  },
  {
    nama: "Sumarsih",
    jabatan: "Bendahara 2",
  },
];

const dataProfesi = [
  { profesi: "Petani", jumlah: 128 },
  { profesi: "Buruh", jumlah: 60 },
  { profesi: "Pedagang", jumlah: 20 },
  { profesi: "Peternak", jumlah: 2 },
  { profesi: "Karyawan", jumlah: 7 },
  { profesi: "Guru", jumlah: 3 },
  { profesi: "PNS", jumlah: 1 },
];

const profesiChartConfig = {
  jumlah: {
    label: "Jumlah",
    color: "#F5D573",
  },
} satisfies ChartConfig;

function TabelOrganisasiPadukuhan() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Jabatan</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pejabats.map((pejabat, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>

            <TableCell className="font-medium">{pejabat.nama}</TableCell>

            <TableCell className="font-medium">{pejabat.jabatan}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

function About() {
  const [viewState, setViewState] = React.useState({
    longitude: 110.49544742696055,
    latitude: -8.062175602110191,
    zoom: 15,
  });
  const [popupData, setPopupData] = React.useState<ObjectLocation | undefined>(
    undefined
  );

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Navbar />
      <div className="relative h-dvh w-full overflow-hidden ">
        <div
          style={
            {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/img/balai-dusun-gebang/balai-dusun-gebang1.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            } as React.CSSProperties
          }
          className={`relative h-dvh w-full overflow-hidden 
                        bg-cover bg-center `}
        >
          <h1
            className="absolute left-[50%] top-[50%] -translate-x-[50%]
              -translate-y-[50%] text-center leading-[1.2] !text-headerOne
              !text-white text-shadow-headerOne font-semibold"
          >
            Profil Padukuhan
          </h1>
        </div>
      </div>
      <div className="mt-4 py-2 container ">
        <div
          className="grid grid-cols-1 gap-y-3 md:grid-cols-3 md:gap-4 items-center
          justify-items-center
        mt-8 "
        >
          <div className="md:col-span-2">
            <p className="text-xl text-[#272726]  break-words w-full pr-4">
              Padukuhan Gebang merupakan salah satu wilayah administratif yang
              berada di bawah naungan Kalurahan Ngloro, Kapanewon Saptosari,
              Kabupaten Gunungkidul. Sebagian besar wilayah di Padukuhan Gebang
              dimanfaatkan sebagai lahan pertanian oleh masyarakat setempat,
              dengan beragam jenis tanaman yang tumbuh subur seperti singkong,
              ubi, kentang, kacang tanah, dan kacang tolo. Hasil tani ini tidak
              hanya dijual dalam bentuk mentah, tetapi juga dimanfaatkan sebagai
              bahan baku berbagai makanan olahan khas lokal yang bernilai
              ekonomi, seperti keripik singkong, tiwul, dan brownis singkong.
              Selain pertanian, wilayah Gebang juga dikenal dengan kawasan hutan
              rakyat yang ditanami pohon jati, kayu akasia, dan mahoni.
              Kayu-kayu ini digunakan sebagai bahan utama dalam pembuatan mebel
              berkualitas serta bahan bangunan rumah, yang menjadi salah satu
              potensi ekonomi kreatif masyarakat.
            </p>
          </div>
          <div
            className="order-first md:order-last w-80 h-80 md:w-[440px] md:h-[400px] flex-shrink-0 cursor-pointer 
           relative mx-auto"
          >
            <Image
              src="/img/balai-dusun2.jpg"
              alt="foto pak dukuh"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="relative mt-20 pr-5 md:pr-0 ">
          <h2 className="font-bold">Struktur Organisasi Padukuhan</h2>

          <div className="flex flex-col items-center gap-6 mt-12">
            <div className="relative w-full max-w-[400px] md:max-w-[800px] h-[200px] md:h-[400px] lg:h-[600px] flex-shrink-0 cursor-pointer mt-6">
              <Image
                alt="struktur organisasi dusun"
                src="/img/struktur-organisasi-dusun.drawio.png"
                fill
              />
            </div>

            <TabelOrganisasiPadukuhan />
          </div>
        </div>

        <NgloroBoundary />
      </div>

      <SaranaPrasarana />

      <div className="mt-4 pt-10 pb-30 container">
        <h2 className="font-bold">Data Demografi</h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 mt-4">
          <div className="flex flex-col items-center">
            <div className="w-full h-[250px]">
              <ChartContainer
                config={kelaminChartConfig}
                className="[&_.recharts-pie-label-text]:fill-foreground mx-auto  max-h-[250px] pb-0"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    startAngle={-270}
                    endAngle={180}
                    data={dataKelamin}
                    dataKey="jumlah"
                    label
                    nameKey="kelamin"
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="font-bold text-lg">Data Jenis Kelamin</span>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">
            <div className="w-[400px] h-[250px]">
              <ChartContainer
                config={rtChartConfig}
                className="[&_.recharts-pie-label-text]:fill-foreground mx-auto  max-h-[250px] pb-0"
              >
                <PieChart>
                  <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                  <Pie
                    startAngle={-270}
                    endAngle={180}
                    data={dataRT}
                    dataKey="jumlah"
                    label
                    nameKey="rt"
                  />
                </PieChart>
              </ChartContainer>
            </div>
            <div className="flex flex-col gap-2 ">
              <span className="font-bold text-lg">
                Data Populasi Per Wilayah
              </span>
            </div>
          </div>
        </div>
        <div className="mt-6 pr-4 flex flex-col gap-8 items-center">
          <div className="w-[90%] ">
            <ChartContainer config={profesiChartConfig}>
              <BarChart
                accessibilityLayer
                data={dataProfesi}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="profesi"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />

                <Bar dataKey="jumlah" fill="var(--color-jumlah)" radius={8}>
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </div>
          <span className="font-bold leading-none text-lg ">Data Profesi</span>
        </div>
      </div>

      <div
        className="mt-13  pt-14 pb-40 
          bg-linear-120 from-[#15334A] from-40%  to-[#15334A]/90 to-100% 
          z-50 relative inset-0
         "
      >
        <div className="container flex flex-col gap-14">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <h2 className="!text-white font-bold">Potensi Alam</h2>
            <div className="ml-auto h-[6px] w-full  bg-white"></div>
          </div>
          {potensiAlam.map((potensi, idx) => (
            <div
              className="flex flex-col gap-2 md:grid md:grid-cols-2"
              key={idx}
            >
              <div
                className={`relative w-[300px] h-[300px] md:w-[90%] md:h-[100%] ${
                  idx % 2 === 0 ? "md:order-last" : ""
                }`}
              >
                <Image
                  src={potensi.gambar}
                  alt={potensi.potensi}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h3 className="!text-white">{potensi.potensi}</h3>
                <p className="!text-white text-wrap pr-2">
                  {potensi.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <UMKMUnggulan />
      {/* map */}
      <div className="mt-4 pt-10 pb-30 container relative">
        <Image
          className="absolute -bottom-15 -right-4 rotate-30"
          width={150}
          height={150}
          color="#000000"
          alt="motif walang"
          src={"/img/element/stroke-motif-walang.png"}
        />
        <h2 className="font-bold mt-12">Peta Padukuhan</h2>
        <div className="w-[90%] lg:w-[80vw] h-[50vh] md:h-[70vh] mt-4">
          <Map
            {...viewState}
            style={{
              width: "100%",
              height: "100%",
              marginTop: "8px",
              borderRadius: "14px",
            }}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="https://tiles.openfreemap.org/styles/liberty"
          >
            <>
              {popupData ? (
                <Popup
                  longitude={popupData.longitude}
                  latitude={popupData.latitude}
                  anchor="bottom"
                  style={{
                    borderRadius: "16px",
                    zIndex: 100,
                  }}
                  closeButton={false}
                >
                  <a
                    className="grid grid-cols-2 justify-center items-center gap-3 cursor-pointer 
                              py-1"
                  >
                    {/* restaurant image */}
                    <div className="relative md:max-w-24 w-full md:h-24 ">
                      <Image
                        src={popupData.thumbnail!}
                        alt={popupData.name}
                        fill
                        className="rounded-lg object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="!text-[#272726] font-bold ">
                        {popupData.name}
                      </h4>
                      <span className="!text-[#686867] mt-3">
                        {popupData.address}
                      </span>
                    </div>
                  </a>
                </Popup>
              ) : (
                <></>
              )}
              <NavigationControl position="bottom-right" />

              {allLocations.map((location, index) => {
                return (
                  <div
                    onMouseEnter={() => {
                      if (window.innerWidth >= 768) {
                        setPopupData(location);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 768) {
                        setPopupData(undefined);
                      }
                    }}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent propagation to the map
                      if (window.innerWidth < 768) {
                        setPopupData(location);
                      }
                    }}
                  >
                    <Marker
                      key={`${location!.name}`}
                      longitude={location?.longitude!}
                      latitude={location?.latitude!}
                      anchor="center"
                      scale={1.4}
                    >
                      <FaLocationDot size={22} color="#F3C725" />
                    </Marker>
                  </div>
                );
              })}
            </>
          </Map>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
