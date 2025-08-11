"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";
import { dataUMKMUnggulan } from "@/data/umkm";
import {
  ImageModal,
  ObjectLocation,
  UMKMCard,
  UserLocation,
} from "@/type/type";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {
  GeolocateControl,
  Map,
  Marker,
  NavigationControl,
  Popup,
} from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useParams } from "next/navigation";
import {
  FaAngleDown,
  FaAngleUp,
  FaCheck,
  FaInstagram,
  FaLocationDot,
  FaTiktok,
} from "react-icons/fa6";
import { allLocations } from "@/data/allLocation";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { IoIosClose } from "react-icons/io";
import ReactImageGallery from "react-image-gallery";
import { MdOpenInFull } from "react-icons/md";
import {
  TiContacts,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import { fetchWeather, weatherCodesMap } from "@/lib/meteo";
import MapsPlace from "@/app/ui/MapPlace";
import { FeatureCollection } from "geojson";
import { TbMapSearch } from "react-icons/tb";
import DisplayListImages from "@/app/ui/DisplayListImages";
import DisplayListProductImages from "@/app/ui/DisplayListProductImages";
import toast from "react-hot-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { umkmFetcherCard } from "@/lib/api";

function UMKMDetail() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpenProductModal, setIsOpenProductModal] = React.useState(false);
  const [isOpenMap, setIsOpenMap] = useState(true);
  const [isOpenEventInfo, setIsOpenEventInfo] = useState(true);
  const [isOpenProducts, setIsOpenProducts] = useState(true);
  const [temperature2m, setTemperateure2m] = useState<number>(0);
  const [weatherCode, setWeatherCode] = useState<number>(0);
  const [showWeather, setShowWeather] = useState(false);
  const [saptosariGeojson, setSaptosariGeojson] = useState<FeatureCollection>();
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(null);
  const [modalDetailType, setModalDetailType] = useState<string>("false");
  const [userLoc, setUserLoc] = useState<UserLocation>({
    longitude: -100,
    latitude: 40,
  });

  const [currentItems, setCurrentItems] = useState<UMKMCard[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLoc({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          toast.error(error.message);
        }
      );
    } else {
      toast.error("Geolocation is not supported by this browser.");
    }
  }, []);

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
    setIsOpenEventInfo(!isOpenEventInfo);
  };
  const toggleProducts = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenProducts(!isOpenProducts);
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

  const [data, setData] = useState<UMKMCard | undefined>();
  const { name }: { name: string } = useParams();

  const modalRef = React.useRef<ReactImageGallery>(null);
  const modalProductRef = React.useRef<ReactImageGallery>(null);

  const [imagesModal, setImagesModal] = React.useState<ImageModal[]>([]);
  const [imagesProductModal, setImagesProductModal] = React.useState<
    ImageModal[]
  >([]);

  const saveImagesProductModal = (images: ImageModal[]) => {
    setImagesProductModal(images);
  };

  useEffect(() => {
    setViewState({
      longitude: data?.longitude || 100,
      latitude: data?.latitude || -40,
      zoom: 15,
    });

    if (data?.images) {
      setImagesModal(
        data.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      );
    }
  }, [data]);

  const handleImageClick = (index: number) => {
    setIsOpen(true);
    modalRef.current?.slideToIndex(index);
  };

  const handleProductImageClick = (index: number) => {
    setIsOpenProductModal(true);
    modalProductRef.current?.slideToIndex(index);
  };

  useEffect(() => {
    umkmFetcherCard().then((items) => setCurrentItems(items));

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowWeather(true);
      } else {
        setShowWeather(false);
      }
    };

    const setGeojson = async () => {
      try {
        const response = await fetch("/saptosari.geojson");
        const data = await response.json();
        setSaptosariGeojson(data as FeatureCollection);
      } catch (e) {
        console.log("Failed to fetch geojson file: ", e);
      }
    };
    setGeojson();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let foundData = currentItems.find(
      (item) => item.title === name.replaceAll("%20", " ")
    );
    console.log("foundData: ", foundData);
    setDescriptions(
      foundData?.description.split("\n").filter((p) => p.trim() !== "")!
    );
    setData(foundData);

    fetchWeather({
      lat: foundData?.latitude || -40,
      lon: foundData?.longitude || 100,
    })
      .then((weather) => {
        setTemperateure2m(weather.temperature2m);
        setWeatherCode(weather.weatherCode);
        weatherCodeToIconString(weather.weatherCode);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [currentItems]);

  return (
    <div className="relative w-screen min-h-screen">
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
          x
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>

      <div
        className={` fixed z-100 pt-24 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.9)] 
        ${isOpenProductModal ? `block` : `hidden`} `}
      >
        {/* // close button */}
        <ImageGallery items={imagesProductModal} ref={modalProductRef} />;
        <div
          className="absolute top-[5vh] right-[4vw] z-14 cursor-pointer"
          onClick={() => setIsOpenProductModal(false)}
        >
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>
      <Navbar />
      {data ? (
        <>
          {/* main content */}
          <div className="relative pt-20 lg:pt-32 container  pr-6">
            <h1 className="!text-[#272726] font-bold">{data?.title}</h1>
            <span className="!text-[#F3C725] font-bold">Produk UMKM</span>{" "}
            <span className="!text-[#686867]">{data?.dusun}</span>
            <div className="relative h-[202px] md:h-[500px] lg:h-[670px] flex-shrink-0 cursor-pointer mt-6">
              <Image
                src={data?.image!}
                alt={data?.alt!}
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
          cursor-pointer "
                onClick={() => {
                  if (modalDetailType == "map") {
                    setModalDetailType("false");
                  } else {
                    setModalDetailType("map");
                  }
                }}
              >
                <TbMapSearch size={24} />
                <span className="!text[#272726] font-semibold text-sm ">
                  Map
                </span>
              </div>
              <div
                className="flex flex-col gap-1 items-center justify-center p-2 rounded-lg bg-[#F0EFEB] 
          cursor-pointer"
                onClick={() => {
                  if (modalDetailType == "contact") {
                    setModalDetailType("false");
                  } else {
                    setModalDetailType("contact");
                  }
                }}
              >
                <TiContacts size={24} />
                <span className="!text[#272726] font-semifbold text-sm ">
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
                <span className="!text-[#686867]  font-semibold">
                  {data?.kontak!.namaPemilik}
                </span>
                <span className="!text-[#686867]  font-semibold">
                  {data?.kontak!.email}
                </span>
                <span className="!text-[#686867]  font-semibold">
                  {data?.kontak!.noTelp ? `Telepon ${data?.kontak.noTelp}` : ``}
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
                centerUsingDataCoord={false}
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
                {data!.images!.length > 0 && (
                  <>
                    <div className="flex justify-between mt-4">
                      <div className="flex flex-col gap-1">
                        <span className="!text-[#F3C725] text-lg">Images</span>
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
                    {isOpenEventInfo ? (
                      <FaAngleUp color="#dbd9d2" />
                    ) : (
                      <FaAngleDown color="#dbd9d2" />
                    )}
                  </span>
                </div>
                {!isOpenEventInfo && (
                  <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] md:hidden "></div>
                )}
                {isOpenEventInfo && (
                  <div className="flex flex-col gap-5 mt-3">
                    <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                    <div className="md:grid md:grid-cols-8 md:items-baseline ">
                      <span className="!text-[#272726] font-bold  text-lg">
                        Nama usaha
                      </span>
                      <div className="flex flex-col items-start justify-start gap-1 mt-1 md:mt-0 md:col-span-7">
                        <p className="!text-[#686867] text-lg ">
                          {data?.kontak.namaUsaha}{" "}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>

                    <div className="md:grid md:grid-cols-8 md:items-baseline">
                      <span className="!text-[#272726] font-bold  text-lg">
                        Kontak
                      </span>

                      <div className="flex flex-col items-start justify-start gap-1 md:col-span-7">
                        <p className="!text-[#686867]">
                          {data?.kontak?.namaPemilik}
                          <br />
                          {data?.kontak?.alamat}
                          <br />
                          {data?.kontak?.noTelp ? `${data?.kontak.noTelp}` : ``}
                          <br />
                          {data?.kontak?.email
                            ? `Email ${data?.kontak?.email}`
                            : ""}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>

                    <div className="md:grid md:grid-cols-8 md:items-baseline ">
                      <span className="!text-[#272726] font-bold  text-lg">
                        Kategori
                      </span>

                      <p className="!text-[#686867] md:col-span-7">
                        {data?.kategoriUsaha}
                      </p>
                    </div>

                    <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>

                    <div className="md:grid md:grid-cols-8 md:items-baseline ">
                      <span className="!text-[#272726] font-bold  text-lg">
                        Range harga
                      </span>

                      <p className="!text-[#686867] md:col-span-7">
                        {data?.rangeHarga}
                      </p>
                    </div>

                    {/* medsos */}
                    {data!.kontak.mediaSosial?.length! > 0 && (
                      <>
                        <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                        <div className="md:grid md:grid-cols-8 md:items-start ">
                          <span className="!text-[#272726] font-bold text-lg">
                            Media sosial
                          </span>
                          <div className="flex flex-row items-center justify-start gap-4 mt-1 md:mt-1 md:col-span-7">
                            {data?.kontak.mediaSosial?.map((medsos, index) => {
                              switch (medsos.platform) {
                                case "instagram":
                                  return (
                                    <a
                                      key={index}
                                      className="flex flex-col gap-2"
                                      href={`${medsos.link}`}
                                    >
                                      <FaInstagram size={24} />

                                      <span className="!text-[#686867] text-sm">
                                        {medsos.nama}
                                      </span>
                                    </a>
                                  );
                                case "tiktok":
                                  return (
                                    <a
                                      key={index}
                                      className="flex flex-col gap-2 "
                                      href={`${medsos.link}`}
                                    >
                                      <FaTiktok size={24} />
                                      <span className="!text-[#686867] text-sm">
                                        {medsos.nama}
                                      </span>
                                    </a>
                                  );
                              }
                            })}
                          </div>
                        </div>
                      </>
                    )}

                    {/* online shop */}
                    {data!.kontak!.onlineShop?.length! > 0 && (
                      <>
                        <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                        <div className="md:grid md:grid-cols-8 md:items-start ">
                          <span className="!text-[#272726] font-bold text-lg">
                            Online shop
                          </span>
                          <div className="flex flex-row items-center justify-start gap-4 mt-1 md:mt-1 md:col-span-7">
                            {data?.kontak.onlineShop?.map((shop, index) => {
                              switch (shop.platform) {
                                case "shopee":
                                  return (
                                    <a
                                      key={index}
                                      className="flex flex-col gap-2"
                                      href={`${shop.link}`}
                                    >
                                      <Image
                                        src={`/img/icons/icons8-shopee-100.svg`}
                                        alt={shop.namaToko}
                                        width={24}
                                        height={24}
                                      />

                                      <span className="!text-[#686867] text-sm">
                                        {shop.namaToko}
                                      </span>
                                    </a>
                                  );
                                case "tiktokshop":
                                  return (
                                    <a
                                      key={index}
                                      className="flex flex-col gap-2"
                                      href={`${shop.link}`}
                                    >
                                      <Image
                                        src={`/img/icons/tiktok-svgrepo-com.svg`}
                                        alt={shop.namaToko}
                                        width={24}
                                        height={24}
                                      />
                                      <span className="!text-[#686867] text-sm">
                                        {shop.namaToko}
                                      </span>
                                    </a>
                                  );
                                case "tokopedia":
                                  return (
                                    <a
                                      key={index}
                                      className="flex flex-col gap-2"
                                      href={`${shop.link}`}
                                    >
                                      <Image
                                        src={`/img/icons/tokopedia-svgrepo-com.svg`}
                                        alt={shop.namaToko}
                                        width={24}
                                        height={24}
                                      />
                                      <span className="!text-[#686867] text-sm">
                                        {shop.namaToko}
                                      </span>
                                    </a>
                                  );
                              }
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
                <div className="w-screen h-[1px] bg-[#dbd9d2] mt-12 relative left-1/2 -ml-[50vw] md:hidden "></div>
                <div
                  className="flex flex-row justify-between items-center cursor-pointer lg:cursor-auto w-full py-2 mt-12  font-medium text-left
              
              "
                  onClick={toggleMap}
                >
                  <h2 className="!text-[#272726] font-bold ">Lihat sekitar</h2>
                  <span className="lg:hidden">
                    {isOpenMap ? (
                      <FaAngleUp color="#dbd9d2" />
                    ) : (
                      <FaAngleDown color="#dbd9d2" />
                    )}
                  </span>
                  <a
                    className="group cursor-pointer items-center  gap-x-2 hidden lg:flex"
                    href={data?.googleMapsLink!}
                  >
                    <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
                      Lihat Di Google Maps
                    </span>
                    <FaArrowRight
                      color="#F3C725"
                      className="group-hover:animate-seemore-next"
                    />
                  </a>
                </div>
                <a
                  className="group cursor-pointer items-center  gap-x-2 flex mb-2 lg:hidden"
                  href={data?.googleMapsLink!}
                >
                  <span className="!text-[#F3C725] hover:text-[#dfc979] text-lg">
                    Lihat Di Google Maps
                  </span>
                  <FaArrowRight
                    color="#F3C725"
                    className="group-hover:animate-seemore-next"
                  />
                </a>
                {!isOpenMap && (
                  <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] md:hidden"></div>
                )}
                {isOpenMap && (
                  <div className="w-[90vw] md:w-[45vw] lg:w-[47vw] h-[40vh] md:h-[50vh] lg:h-[60vh] relative rounded-xl">
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
                        <GeolocateControl
                          position="bottom-right"
                          positionOptions={{ enableHighAccuracy: true }}
                          onGeolocate={(e) => {
                            setUserLoc({
                              latitude: e.coords.latitude,
                              longitude: e.coords.longitude,
                            });
                          }}
                          showAccuracyCircle={true}
                          showUserLocation={true}
                        />

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
                                name: data?.title!,
                                latitude: data?.latitude!,
                                longitude: data?.longitude!,
                                summary: data?.summary!,
                                thumbnail: data?.image!,
                                hrefLink: `/umkm/${data?.title}`,
                                address: data?.kontak?.alamat || "",
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
                                name: data?.title!,
                                latitude: data?.latitude!,
                                longitude: data?.longitude!,
                                summary: data?.summary!,
                                thumbnail: data?.image!,
                                hrefLink: `/umkm/${data?.title}`,
                                address: data?.kontak?.alamat || "",
                              });
                            }
                          }}
                        >
                          <Marker
                            key={`${data!.title}-0`}
                            longitude={data?.longitude!}
                            latitude={data?.latitude!}
                            anchor="center"
                            scale={1.4}
                          >
                            <FaLocationDot size={22} color="#3EA600" />
                          </Marker>
                        </div>

                        {allLocations.map((location, index) => {
                          if (location.name === data?.title) {
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

                <div className="w-screen h-[1px] bg-[#dbd9d2] mt-12 relative left-1/2 -ml-[50vw] md:hidden "></div>
                {data.products.length > 0 && (
                  <div
                    className="flex flex-row justify-between items-center cursor-pointer w-full py-2 mt-12  font-medium text-left"
                    onClick={toggleProducts}
                  >
                    <h2 className="!text-[#272726] font-bold ">Produk</h2>
                    <span>
                      {isOpenProducts ? (
                        <FaAngleUp color="#dbd9d2" />
                      ) : (
                        <FaAngleDown color="#dbd9d2" />
                      )}
                    </span>
                  </div>
                )}
                {!isOpenProducts && (
                  <div className="w-screen h-[1px] bg-[#dbd9d2]  relative left-1/2 -ml-[50vw] md:hidden "></div>
                )}
                {isOpenProducts && (
                  <div className="flex flex-col gap-7 mt-3">
                    {data?.products && data?.products.length > 0
                      ? data?.products.map((product, index) => {
                          return (
                            <div
                              key={index}
                              className="items-start  lg:grid lg:grid-cols-2 lg:gap-4"
                            >
                              <DisplayListProductImages
                                images={product.images}
                                handleImageClick={handleProductImageClick}
                                saveImagesProductModal={saveImagesProductModal}
                              />
                              <div className="mt-2 lg:mt-0">
                                <h3 className="!text-[#272726] font-bold">
                                  {product.nama}
                                </h3>

                                <div className="flex flex-col items-start justify-start gap-1 ">
                                  {product.deskripsi
                                    .split("\n")
                                    .filter((p) => p.trim() !== "")
                                    .map((description, index) => (
                                      <p
                                        key={index}
                                        className="!text-[#686867]"
                                      >
                                        {description}
                                      </p>
                                    ))}

                                  <span className="!text-[#686867]">
                                    Harga: {product.harga}
                                  </span>
                                  <span className="!text-[#686867] ">
                                    Category:
                                  </span>
                                  <div className="flex flex-row items-center flex-wrap gap-2 mt-2 ">
                                    {product.labels.map((label, index) => (
                                      <div
                                        key={index}
                                        className="p-2 bg-[#F0EFEB] rounded-3xl  
                                          items-center justify-center flex flex-row gap-2"
                                      >
                                        <FaCheck />
                                        <span className="!text-[#686867]">
                                          {label}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                )}
              </div>
              <div className="hidden md:flex md:flex-col md:items-start md:gap-4 ">
                {showWeather && (
                  <div className="sticky top-[28vh] max-height:140vh gap-6 flex flex-col">
                    <div className="rounded-lg w-92 h-64  ">
                      <MapsPlace
                        latitude={data?.latitude!}
                        longitude={data?.longitude!}
                        centerUsingDataCoord={false}
                        geojson={saptosariGeojson!}
                      />
                    </div>
                    <div className="p-6 rounded-lg bg-[#F0EFEB]  w-92 h-44  flex flex-col gap-3 ">
                      <span className="!text-[#272726] font-bold text-2xl">
                        Cuaca hari ini
                      </span>

                      <div className="flex flex-col items-start gap-2">
                        <div className="flex flex-row items-center gap-4">
                          {weatherIcon}
                          <div className="flex flex-col items-start">
                            <span className="font-bold text-4xl">
                              {temperature2m.toPrecision(2)}°C
                            </span>
                            <span className="!text-[#686867] font-semibold text-lg">
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
                    <div className="p-6 rounded-lg bg-[#F0EFEB]  w-92 h-38 flex flex-col items-start gap-3">
                      <div className="flex flex-col items-start ">
                        <span className="!text-[#272726] font-bold text-2xl">
                          Kontak
                        </span>
                      </div>
                      <div className="flex flex-col ">
                        <span className="!text-[#686867] font-semibold text-lg">
                          {data?.kontak!.namaPemilik}
                        </span>
                        {data?.kontak!.email ?? (
                          <span className="!text-[#686867] font-semibold   text-lg">
                            {data?.kontak!.email}
                          </span>
                        )}
                        <span className="!text-[#686867] font-semibold   text-lg">
                          {data?.kontak!.noTelp
                            ? ` ${data?.kontak.noTelp}`
                            : ``}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
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

export default UMKMDetail;
