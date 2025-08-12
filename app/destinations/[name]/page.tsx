"use client";
import DisplayListImages from "@/app/ui/DisplayListImages";
import Footer from "@/app/ui/Footer";
import MapsPlace from "@/app/ui/MapPlace";
import Navbar from "@/app/ui/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { allLocations } from "@/data/allLocation";
import { destinations } from "@/data/destinations";
import { fetchDestinations, storageImageURL } from "@/lib/api";
import { fetchWeather, weatherCodesMap } from "@/lib/meteo";
import { Destination, ImageModal, ObjectLocation } from "@/type/type";
import Map, { Marker, NavigationControl, Popup } from "@vis.gl/react-maplibre";
import { FeatureCollection } from "geojson";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { MdOpenInFull } from "react-icons/md";
import { TbMapSearch } from "react-icons/tb";
import {
  TiContacts,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import ReactImageGallery from "react-image-gallery";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function DestinationPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenMap, setIsOpenMap] = useState(true);
  const [isOpenDestinationInfo, setIsOpenDestinationInfo] = useState(true);
  const [isOpenContact, setIsOpenContact] = useState(true);
  const [temperature2m, setTemperateure2m] = useState<number>(0);
  const [weatherCode, setWeatherCode] = useState<number>(0);
  const [showWeather, setShowWeather] = useState(false);
  const [saptosariGeojson, setSaptosariGeojson] = useState<FeatureCollection>();
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(null);
  const [modalDetailType, setModalDetailType] = useState<string>("false");

  const weatherCodeToIconString = (code: number) => {
    switch (code) {
      case 0:
        setWeatherIcon(<TiWeatherSunny size={74} />);
        break;
      case 1:
        setWeatherIcon(<TiWeatherPartlySunny size={74} />);
        break;
      case 2:
      case 3:
      case 45:
      case 48:
        setWeatherIcon(<TiWeatherCloudy size={74} />);
        break;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
        setWeatherIcon(<TiWeatherShower size={74} />);
        break;
      case 63:
      case 65:
      case 66:
        setWeatherIcon(<TiWeatherDownpour size={74} />);
        break;
      case 67:
        setWeatherIcon(<TiWeatherStormy size={74} />);
        break;
    }
  };

  const toggleInformation = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenDestinationInfo(!isOpenDestinationInfo);
  };

  const toggleOpenContact = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenContact(!isOpenContact);
  };

  const toggleMap = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenMap(!isOpenMap);
  };

  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [popupData, setPopupData] = React.useState<ObjectLocation | undefined>(
    undefined
  );
  const [viewState, setViewState] = React.useState({
    longitude: 100,
    latitude: -40,
    zoom: 15,
  });

  const [data, setData] = useState<Destination>();

  const { name }: { name: string } = useParams();

  const modalRef = React.useRef<ReactImageGallery>(null);

  const [imagesModal, setImagesModal] = React.useState<ImageModal[]>([]);

  const handleImageClick = (index: number) => {
    setIsOpen(true);
    modalRef.current?.slideToIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      let foundData = await fetchDestinations();
      let destData = foundData.find(
        (dest) => dest.name === name.replaceAll("%20", " ")
      );
      if (
        destData?.thumbnail.startsWith("img/") ||
        destData?.thumbnail.startsWith("images/")
      ) {
        destData = {
          ...destData,
          thumbnail: storageImageURL(destData?.thumbnail),
        };
      }

      if (destData && destData.images && destData.images.length > 0) {
        destData.images = destData.images.map((image: string) =>
          storageImageURL(image)
        );
        setImagesModal(
          destData.images.map((image) => ({
            original: image,
            thumbnail: image,
          }))
        );
        console.log("updated destData: ", destData);
      }
      setViewState({
        longitude: destData?.longitude || 100,
        latitude: destData?.latitude || -40,
        zoom: 15,
      });

      setData(destData);
      try {
        const weather = await fetchWeather({
          lat: destData?.latitude || -40,
          lon: destData?.longitude || 100,
        });
        setTemperateure2m(weather.temperature2m);
        setWeatherCode(weather.weatherCode);
        weatherCodeToIconString(weather.weatherCode);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }

      const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.7) {
          setShowWeather(true);
        } else {
          setShowWeather(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      const setGeojson = async () => {
        try {
          const response = await fetch("/saptosari.geojson");
          const dataGeojson = await response.json();
          setSaptosariGeojson(dataGeojson as FeatureCollection);
        } catch (e) {
          console.log("Failed to fetch geojson file: ", e);
        }
      };
      setGeojson();

      setDescriptions(
        destData?.description.split("\n").filter((p) => p.trim() !== "")!
      );
    };

    fetchData();
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="relative w-screen min-h-screen ">
      {/* image gallery modal */}
      <div
        className={` fixed z-100 pt-24 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.9)] 
        ${isOpen ? `block` : `hidden`} `}
      >
        {/* // close button */}
        <ImageGallery items={imagesModal} ref={modalRef} />;
        <div
          className="absolute top-[5vh] right-[4vw] z-14 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>
      <Navbar />
      {data ? (
        <div className="relative pt-20 lg:pt-32 container pr-6">
          <h1 className="!text-[#272726] font-bold">{data?.name}</h1>
          <span className="!text-[#F3C725] font-bold">
            Destinasi Wisata
          </span>{" "}
          <span className="!text-[#686867]">{data?.kelurahan}</span>
          <div className="relative h-[202px] md:h-[500px] lg:h-[670px] flex-shrink-0 cursor-pointer mt-6">
            <Image
              src={data?.thumbnail!}
              alt={data?.name!}
              fill
              className="rounded-lg object-cover"
              onClick={() => {
                setIsOpen(true);
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
          {/* map & contact */}
          <div className="grid grid-cols-2  gap-2 mt-3 md:hidden">
            <div
              className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg bg-[#F0EFEB] 
          cursor-pointer lg:hidden"
              onClick={() => {
                if (modalDetailType == "map") {
                  setModalDetailType("false");
                } else {
                  setModalDetailType("map");
                }
              }}
            >
              <TbMapSearch size={24} />
              <span className="!text[#272726] font-semibold text-sm ">Map</span>
            </div>
            <div
              className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg bg-[#F0EFEB] 
          cursor-pointer lg:hidden"
              onClick={() => {
                if (modalDetailType == "contact") {
                  setModalDetailType("false");
                } else {
                  setModalDetailType("contact");
                }
              }}
            >
              <TiContacts size={24} />
              <span className="!text[#272726] font-semibold text-sm ">
                Kontak
              </span>
            </div>
          </div>
          {/* modal dari map & contact */}
          <div
            className={`flex flex-col gap-1 mt-2 w-[90vw] items-start justify-center py-3 px-8 rounded-lg bg-[#F0EFEB]
        z-1 absolute  ${
          modalDetailType == "contact"
            ? `animate-open-modal origin-top`
            : `hidden`
        }`}
          >
            <div className="flex flex-col items-start ">
              <span className="!text-[#272726] font-bold">Kontak</span>
              <span className="!text-[#686867] font-semibold">
                {data?.information!.penanggungjawab}
              </span>

              <span className="!text-[#686867] font-semibold ">
                {data?.information!.noTelp
                  ? ` ${data?.information.noTelp}`
                  : ``}
              </span>
            </div>
          </div>
          <div
            className={`flex flex-col gap-1 mt-3 w-[90vw] items-start justify-center bg-[#F0EFEB]
        z-1 absolute  rounded-lg h-55 ${
          modalDetailType == "map" ? `animate-open-modal origin-top` : `hidden`
        }`}
          >
            <MapsPlace
              latitude={data?.latitude!}
              longitude={data?.longitude!}
              centerUsingDataCoord
              geojson={saptosariGeojson!}
            />
          </div>
          {/* content setelah gambar utama umkm */}
          <div className="md:grid md:grid-cols-6 md:gap-8">
            {/* bagian kiri */}
            <div className="col-span-4">
              <p className="!text-[#272726] font-semibold mt-6 text-2xl">
                {data?.summary}
              </p>
              <div className="w-screen h-[1px] bg-[#dbd9d2] mt-6 relative left-1/2 -ml-[50vw] md:hidden "></div>
              {data?.images!.length > 0 && (
                <>
                  <div className="flex justify-between mt-4">
                    <div className="flex flex-col gap-1">
                      <span className="!text-[#F3C725] text-xl">Images</span>
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
                </>
              )}
              {/* deskripsi */}
              <div className="mt-4">
                {descriptions?.length > 0 &&
                  descriptions.map((description, index) => {
                    return (
                      <p key={index} className="!text-[#686867] mt-2">
                        {description}
                      </p>
                    );
                  })}
              </div>
              <div className="w-screen h-[1px] bg-[#dbd9d2] mt-6 relative left-1/2 -ml-[50vw] md:hidden"></div>
              <div
                className="flex flex-row justify-between items-center cursor-pointer w-full py-2  mt-12 font-medium text-left"
                onClick={toggleInformation}
              >
                <h2 className="!text-[#272726] font-bold ">Informasi</h2>
                <span className="lg:hidden">
                  {isOpenDestinationInfo ? (
                    <FaAngleUp color="#dbd9d2" />
                  ) : (
                    <FaAngleDown color="#dbd9d2" />
                  )}
                </span>
              </div>
              {!isOpenDestinationInfo && (
                <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] md:hidden "></div>
              )}
              {isOpenDestinationInfo && (
                <div className="flex flex-col gap-5 mt-6">
                  <div className="md:grid md:grid-cols-8 md:items-baseline">
                    <span className="!text-[#272726] font-bold  text-lg">
                      Cocok Untuk
                    </span>

                    <div className="flex flex-col items-start justify-start gap-1 md:col-span-7">
                      <p className="!text-[#686867]">
                        {data?.information?.suitableFor}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>

                  <div className="md:grid md:grid-cols-8 md:items-baseline">
                    <span className="!text-[#272726] font-bold  text-lg">
                      Kategori
                    </span>

                    <div className="flex flex-col items-start justify-start gap-1 md:col-span-7">
                      <span className="!text-[#686867]">
                        {data?.information?.category.map((category, index) => {
                          if (index != data!.information!.category.length - 1) {
                            return <>{category}, </>;
                          }
                          return <>{category}</>;
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>

                  <div className="md:grid md:grid-cols-8 md:items-baseline">
                    <span className="!text-[#272726] font-bold  text-lg">
                      Tipe tempat
                    </span>

                    <div className="flex flex-col items-start justify-start gap-1 md:col-span-7">
                      <span className="!text-[#686867]">
                        {data?.information?.placeType}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                  <div className="md:grid md:grid-cols-8 md:items-baseline">
                    <span className="!text-[#272726] font-bold  text-lg">
                      Alamat
                    </span>

                    <div className="flex flex-col items-start justify-start gap-1 md:col-span-7">
                      <span className="!text-[#686867]">{data?.address}</span>
                    </div>
                  </div>

                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                  <div className="md:grid md:grid-cols-8 md:items-baseline ">
                    <span className="!text-[#272726] font-bold text-lg ">
                      Jam buka
                    </span>
                    <div className="flex flex-col items-start justify-start gap-1 mt-1 md:mt-0 md:col-span-7">
                      {data?.openingHours.map((jambuka, index) => (
                        <p key={index} className="!text-[#686867] text-lg ">
                          {jambuka}
                          <br />
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                </div>
              )}
              <div className="w-screen h-[1px] bg-[#dbd9d2] mt-12 relative left-1/2 -ml-[50vw] md:hidden "></div>
              <div
                className="flex flex-row justify-between items-center cursor-pointer w-full py-2 mt-12  font-medium text-left"
                onClick={toggleMap}
              >
                <h2 className="!text-[#272726] font-bold ">Lihat sekitar</h2>
                <span>
                  {isOpenMap ? (
                    <FaAngleUp color="#dbd9d2" />
                  ) : (
                    <FaAngleDown color="#dbd9d2" />
                  )}
                </span>
              </div>
              {!isOpenMap && (
                <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] md:hidden"></div>
              )}
              {isOpenMap && (
                <div className="w-[90vw] md:w-[45vw] lg:w-[47vw] h-[40vh] md:h-[50vh] lg:h-[60vh] relative rounded-xl shadow-md">
                  <Map
                    {...viewState}
                    style={{
                      width: "100%",
                      height: "100%",
                      marginTop: "8px",
                      borderRadius: "12px",
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
                            <div className="relative w-full h-full max-h-32 ">
                              <Image
                                src={popupData.thumbnail!}
                                alt={popupData.name}
                                fill
                                className="rounded-lg object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="!text-[#272726] font-bold text-lg">
                                {popupData.name}
                              </h4>
                              <span className="text-sm  !text-[#686867] mt-3">
                                {popupData.address}
                              </span>
                            </div>
                          </a>
                        </Popup>
                      ) : (
                        <></>
                      )}
                      <NavigationControl position="bottom-right" />
                      <div
                        onMouseEnter={() => {
                          if (window.innerWidth >= 768) {
                            setPopupData({
                              name: data?.name!,
                              latitude: data?.latitude!,
                              longitude: data?.longitude!,
                              summary: data?.summary!,
                              thumbnail: data?.thumbnail!,
                              hrefLink: `/umkm/${data?.name}`,
                              address: data?.address || "",
                            });
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
                            setPopupData({
                              name: data?.name!,
                              latitude: data?.latitude!,
                              longitude: data?.longitude!,
                              summary: data?.summary!,
                              thumbnail: data?.thumbnail!,
                              hrefLink: `/umkm/${data?.name}`,
                              address: data?.address || "",
                            });
                          }
                        }}
                      >
                        <Marker
                          key={`${data!.name}-0`}
                          longitude={data?.longitude!}
                          latitude={data?.latitude!}
                          anchor="center"
                          scale={1.4}
                        >
                          <FaLocationDot size={22} color="#3EA600" />
                        </Marker>
                      </div>

                      {allLocations.map((location, index) => {
                        if (location.name === data?.name) {
                          return null;
                        }
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
              )}
              {/* kontak */}
              <div className="w-screen h-[1px] bg-[#dbd9d2] mt-16 relative left-1/2 -ml-[50vw] md:hidden "></div>
              <div
                className="flex flex-row justify-between items-center cursor-pointer w-full py-2  font-medium text-left"
                onClick={toggleOpenContact}
              >
                <h2 className="!text-[#272726] font-bold mt-6">Kontak</h2>
                <span className="lg:hidden">
                  {isOpenContact ? (
                    <FaAngleUp color="#dbd9d2" />
                  ) : (
                    <FaAngleDown color="#dbd9d2" />
                  )}
                </span>
              </div>
              {!isOpenContact && (
                <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] md:hidden "></div>
              )}
              {isOpenContact && (
                <>
                  <div className="flex flex-col items-start justify-start pt-4">
                    <span className="!text-[#272726] font-bold">
                      {data?.information?.organisasi}
                    </span>
                    <p className="!text-[#686867]">
                      {data?.information?.penanggungjawab}
                      <br />

                      {data?.information?.noTelp
                        ? `Telepon ${data?.information?.noTelp}`
                        : ``}
                      <br />
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="hidden md:flex md:flex-col md:items-start md:gap-4 ">
              {showWeather && (
                <div className="sticky top-[28vh] max-height:140vh gap-6 flex flex-col">
                  <div className="rounded-lg w-92 h-64">
                    <MapsPlace
                      latitude={data?.latitude!}
                      longitude={data?.longitude!}
                      centerUsingDataCoord={false}
                      geojson={saptosariGeojson!}
                    />
                  </div>
                  <div className="p-6 rounded-lg bg-[#F0EFEB]  w-92 h-44  flex flex-col gap-3 ">
                    <span className="!text-[#272726] font-bold text-xl">
                      Cuaca hari ini
                    </span>

                    <div className="flex flex-col items-start gap-2">
                      <div className="flex flex-row items-center gap-4">
                        {weatherIcon}
                        <div className="flex flex-col items-start">
                          <span className="font-bold text-4xl">
                            {temperature2m.toPrecision(2)}°C
                          </span>
                          <span className="!text-[#686867] text-lg">
                            {
                              weatherCodesMap[
                                weatherCode as keyof typeof weatherCodesMap
                              ]
                            }
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded-lg bg-[#F0EFEB]  w-92 h-44 flex flex-col items-start gap-3">
                    <div className="flex flex-col items-start ">
                      <span className="!text-[#272726] font-bold text-xl">
                        Kontak
                      </span>
                    </div>
                    <div className="flex flex-col ">
                      <span className="!text-[#686867] font-semibold  text-lg ">
                        {data?.information!.penanggungjawab}
                      </span>

                      <span className="!text-[#686867] font-semibold  text-lg">
                        {data?.information!.noTelp
                          ? ` ${data?.information.noTelp}`
                          : ``}
                      </span>
                    </div>
                  </div>
                </div>
              )}
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

export default DestinationPage;
