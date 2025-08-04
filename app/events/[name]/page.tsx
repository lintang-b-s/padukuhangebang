"use client";
import Footer from "@/app/ui/Footer";
import Navbar from "@/app/ui/Navbar";

import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { MdOpenInFull } from "react-icons/md";
import ReactImageGallery from "react-image-gallery";
import moment from "moment";
import {
  Calendar,
  Views,
  momentLocalizer,
  ToolbarProps,
} from "react-big-calendar";
import { CalendarEvent, EventSaptosari, ObjectLocation } from "@/type/type";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Map, { Marker, NavigationControl, Popup } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css"; // See notes below
import {
  FaAngleDown,
  FaAngleUp,
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";
import { allLocations } from "@/data/allLocation";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import "react-image-gallery/styles/css/image-gallery.css";
import { fetchWeather, weatherCodesMap } from "@/lib/meteo";
import {
  TiContacts,
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import MapsPlace from "@/app/ui/MapPlace";
import type { FeatureCollection } from "geojson";
import { Skeleton } from "@/components/ui/skeleton";
import { TbMapSearch } from "react-icons/tb";
import DisplayListImages from "@/app/ui/DisplayListImages";
import { fetchEvents } from "@/lib/api";
import "moment/locale/id";

moment.locale("id");

const mLocalizer = momentLocalizer(moment);

function EventDetail() {
  const { name }: { name: string } = useParams();
  const [imageModalIndex, setImageModalIndex] = useState(0);
  const [imagesModal, setImagesModal] = useState<
    {
      original: string;
      thumbnail: string;
    }[]
  >([]);

  const [isOpen, setIsOpen] = React.useState(false);
  const [data, setData] = useState<EventSaptosari>();
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [popupData, setPopupData] = useState<ObjectLocation>();
  const modalRef = useRef<ReactImageGallery>(null);
  const [endDateView, setEndDateView] = useState<Date>(new Date());
  const [currentDateView, setCurrentDateView] = useState<Date>(new Date());
  const [isOpenEventInfo, setIsOpenEventInfo] = useState(true);
  const [isOpenMap, setIsOpenMap] = useState(true);
  const [isOpenEventDates, setIsOpenEventDates] = useState(true);
  const [temperature2m, setTemperature2m] = useState<number>(0);
  const [weatherCode, setWeatherCode] = useState<number>(0);
  const [showWeather, setShowWeather] = useState<boolean>(false);
  const [saptosariGeojson, setSaptosariGeojson] = useState<FeatureCollection>();
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(null);
  const [isOpenContact, setIsOpenContact] = useState<boolean>(true);
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

  const [descriptions, setDescriptions] = useState<string[]>([]);
  const removedName = name.replaceAll(/%20/g, " ");

  const [viewState, setViewState] = React.useState({
    longitude: 100,
    latitude: -40,
    zoom: 15,
  });

  useEffect(() => {
    fetchEvents().then((events) => {
      let foundData = events.find((event) => event.name === removedName);
      setData(foundData);
      let dataStartDate = new Date(foundData!.startDate);
      dataStartDate.setDate(dataStartDate.getDate() - 5);
      setStartDate(dataStartDate);

      setCalendarEvents([
        ...calendarEvents,
        {
          title: foundData?.name!,
          start: foundData?.startDate!,
          end: foundData?.endDate!,
          allDay: true,
        },
      ]);

      setViewState({
        longitude: foundData?.longitude || 100,
        latitude: foundData?.latitude || -40,
        zoom: 15,
      });

      const dataEnd = new Date(foundData?.endDate!);
      const viewEnd = new Date(dataEnd);
      viewEnd.setDate(viewEnd.getDate() + 10);

      setEndDateView(viewEnd);

      fetchWeather({
        lat: foundData?.latitude || -40,
        lon: foundData?.longitude || 100,
      })
        .then((weather) => {
          setTemperature2m(weather.temperature2m);
          setWeatherCode(weather.weatherCode);
          weatherCodeToIconString(weather.weatherCode);
        })
        .catch((error) => {
          console.log("Error fetching weather data:", error);
        });

      setDescriptions(
        foundData?.description.split("\n").filter((p) => p.trim() !== "")!
      );
    });

    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setShowWeather(true);
      } else {
        setShowWeather(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (data?.images) {
      setImagesModal(
        data.images.map((image) => ({
          original: image,
          thumbnail: image,
        }))
      );
    }
  }, [data]);

  const toggleOpenContact = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenContact(!isOpenContact);
  };

  const toggleInformation = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenEventInfo(!isOpenEventInfo);
  };
  const toggleMap = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenMap(!isOpenMap);
  };
  const toggleEventDates = () => {
    if (window.innerWidth >= 1024) {
      return;
    }
    setIsOpenEventDates(!isOpenEventDates);
  };
  const handleImageClick = (index: number) => {
    setIsOpen(true);
    setImageModalIndex(index);
    modalRef.current?.slideToIndex(index);
  };

  return (
    <div className="relative w-screen min-h-screen">
      {/* image gallery modal */}
      <div
        className={`fixed z-100 pt-24 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.9)] 
        ${isOpen ? `block` : `hidden`} `}
      >
        {/* close button */}
        <ReactImageGallery items={imagesModal} ref={modalRef} />;
        <div
          className="absolute top-[5vh] right-[4vw] z-14 cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <IoIosClose size={36} color="#ffffff" />
        </div>
      </div>

      <Navbar />

      {data && calendarEvents.length > 0 ? (
        <div className="pt-24 container ">
          <h1 className="!text-[#272726] font-bold">{data?.name}</h1>
          <span className="!text-[#F3C725] font-bold">Acara</span>{" "}
          <span className="!text-[#686867]">{data?.kelurahan}</span>
          <div className="relative h-[202px] md:h-[500px] lg:h-[670px] flex-shrink-0 cursor-pointer mt-6">
            <Image
              src={data?.thumbnail!}
              alt={data?.name!}
              fill
              className="rounded-lg object-cover"
              onClick={() => {
                setIsOpen(true);
                setImageModalIndex(0);
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
              <span className="!text[#272726] font-semibold text-sm ">Map</span>
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
              <span className="!text[#272726] font-semibold text-sm ">
                Contact
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
              <span className="!text-[#272726] font-bold">
                {data?.information?.organisasi}
              </span>
              <span className="!text-[#686867]  font-semibold">
                {data?.information!.penanggungjawab}
              </span>
              {data?.information!.email ?? (
                <span className="!text-[#686867]  font-semibold">
                  {data?.information!.email}
                </span>
              )}

              <span className="!text-[#686867]  font-semibold">
                {data?.information!.noTelp
                  ? `Telepon ${data?.information.noTelp}`
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
              centerUsingDataCoord={false}
              geojson={saptosariGeojson!}
            />
          </div>
          <div className="md:grid md:grid-cols-6 md:gap-8">
            <div className="col-span-4">
              <p className="!text[#272726] font-semibold mt-6 text-2xl">
                {data?.summary}
              </p>
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
                    setImageModalIndex(0);
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
              <h3 className="!text-[#272726] font-bold mt-6">Deskripsi</h3>
              {descriptions?.length > 0 &&
                descriptions?.map((description, index) => (
                  <p key={index} className="!text-[#686867] mt-2">
                    {description}
                  </p>
                ))}

              <div className="w-screen h-[1px] bg-[#dbd9d2] mt-16 relative left-1/2 -ml-[50vw] md:hidden "></div>
              <div
                className="flex flex-row justify-between items-center cursor-pointer w-full py-2 pr-2 font-medium text-left
                mt-6"
                onClick={toggleInformation}
              >
                <h2 className="!text-[#272726] font-bold mt-6">Informasi</h2>
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
                      Lokasi
                    </span>
                    <div className="flex flex-col items-start justify-start gap-1 mt-1 md:mt-0 md:col-span-7">
                      <p className="!text-[#686867] text-lg ">
                        {data?.kelurahan}
                        <br />
                        {data?.address}
                        <br />
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                  <div className="md:grid md:grid-cols-8 md:items-baseline ">
                    <span className="!text-[#272726] font-bold text-lg ">
                      Jam dan tanggal
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
                  <div className="md:grid md:grid-cols-8 md:items-baseline ">
                    <span className="!text-[#272726] font-bold text-lg">
                      Cocok untuk umur
                    </span>
                    <div className="flex flex-col items-baseline justify-start gap-1 mt-1 md:mt-0 md:col-span-7">
                      <p className="!text-[#686867] text-lg ">
                        {data?.information?.umurMasuk}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-[0.5px] bg-[#dbd9d2] mt-1"></div>
                  <div className="md:grid md:grid-cols-8 md:items-baseline ">
                    <span className="!text-[#272726] font-bold text-lg ">
                      Kategori
                    </span>
                    <div className="flex flex-row items-start justify-start gap-1 mt-1 md:mt-0 md:col-span-7">
                      {data?.information?.category.map((category, index) => {
                        if (index != data?.information?.category.length! - 1) {
                          return (
                            <p key={index} className="!text-[#686867] text-lg ">
                              {category},
                            </p>
                          );
                        } else {
                          return (
                            <p key={index} className="!text-[#686867] text-lg ">
                              {category}
                            </p>
                          );
                        }
                      })}
                    </div>
                  </div>

                  <div className="w-screen h-[1px] bg-[#dbd9d2] mt-5 relative left-1/2 -ml-[50vw] md:hidden "></div>
                </div>
              )}
              <div
                className="flex flex-row justify-between items-center cursor-pointer w-full py-2 pr-2 font-medium text-left
                mt-6"
                onClick={toggleEventDates}
              >
                <h2 className="!text-[#272726] font-bold mt-6">
                  Tanggal acara
                </h2>
                <span className="lg:hidden">
                  {isOpenEventDates ? (
                    <FaAngleUp color="#dbd9d2" />
                  ) : (
                    <FaAngleDown color="#dbd9d2" />
                  )}
                </span>
              </div>
              {!isOpenEventDates && (
                <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] md:hidden "></div>
              )}
              {isOpenEventDates && (
                <>
                  <div className="h-[50vh] mt-3">
                    <Calendar
                      toolbar={true}
                      components={{
                        toolbar: CustomToolbar,
                        eventWrapper: ({ event }: { event: CalendarEvent }) => (
                          <div className="bg-[#F3C725] p-[1px] text-sm pl-1 text-white rounded-tl-lg rounded-tr-lg">
                            {event.title}
                          </div>
                        ),
                      }}
                      date={startDate}
                      events={calendarEvents}
                      localizer={mLocalizer}
                      max={endDateView}
                      onNavigate={(newDate) => setStartDate(newDate)}
                      showMultiDayTimes
                      step={60}
                      views={Object.keys(Views).map(
                        (k) => Views[k as keyof typeof Views]
                      )}
                    />
                  </div>
                  <div
                    className="p-3 bg-[#F0EFEB] rounded-lg 
        flex flex-row items-center gap-1 mt-3"
                  >
                    <CiCalendarDate />

                    <ul>
                      {data?.openingHours.map((jambuka, index) => (
                        <div key={index} className="!text-[#686867] ">
                          {jambuka}
                        </div>
                      ))}
                    </ul>
                  </div>
                  <div className="w-screen h-[1px] bg-[#dbd9d2] mt-5 relative left-1/2 -ml-[50vw] md:hidden"></div>
                </>
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
                  className="group cursor-pointer  items-center  gap-x-2 hidden lg:flex"
                  href="/umkms"
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
              {!isOpenMap && (
                <div className="w-screen h-[1px] bg-[#dbd9d2] relative left-1/2 -ml-[50vw] md:hidden"></div>
              )}
              {isOpenMap && (
                <div
                  className={`w-[90vw] md:w-[45vw] lg:w-[47vw] h-[40vh] md:h-[50vh] lg:h-[60vh] relative rounded-xl `}
                >
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
                    {popupData ? (
                      <Popup
                        longitude={popupData.longitude}
                        latitude={popupData.latitude}
                        anchor="bottom"
                        style={{ borderRadius: "12px", zIndex: 100 }}
                        closeButton={false}
                      >
                        <a
                          className="flex flex-row justify-center items-center gap-2 cursor-pointer
                                                  py-1"
                        >
                          <div className="relative w-24 h-24 md:w-38 md:h-24 ">
                            <Image
                              src={popupData.thumbnail!}
                              alt={popupData.name}
                              fill
                              className="rounded-lg object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="!text-[#272726] font-bold">
                              {popupData.name}
                            </h4>
                            <span className="text-sm !text-[#686867] mt-3">
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
                            summary: data?.description!,
                            thumbnail: data?.thumbnail!,
                            hrefLink: `/events/${data?.name}`,
                            address: data?.address!,
                          });
                        }
                      }}
                      onMouseLeave={() => {
                        if (window.innerWidth >= 768) {
                          setPopupData(undefined);
                        }
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (window.innerWidth < 768) {
                          setPopupData({
                            name: data?.name!,
                            latitude: data?.latitude!,
                            longitude: data?.longitude!,
                            summary: data?.description!,
                            thumbnail: data?.thumbnail!,
                            hrefLink: `/events/${data?.name}`,
                            address: data?.address!,
                          });
                        }
                      }}
                    >
                      <Marker
                        key={data?.name}
                        longitude={data?.longitude!}
                        latitude={data?.latitude!}
                        anchor="bottom"
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
                          key={index}
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
                  </Map>
                </div>
              )}
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
                    <p className="!text-[#686867] ">
                      {data?.information?.penanggungjawab}
                      <br />

                      {data?.information?.noTelp
                        ? `Telepon ${data?.information?.noTelp}`
                        : ``}
                      <br />
                      {data?.information?.email
                        ? `Email ${data?.information?.email}`
                        : ""}
                    </p>
                  </div>
                </>
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
                          <span className="!text-[#686867]  font-semibold text-lg">
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
                      <span className="!text-[#686867] font-semibold text-lg ">
                        {data?.information!.penanggungjawab}
                      </span>
                      <span className="!text-[#686867] font-semibold text-lg">
                        {data?.information!.email}
                      </span>
                      <span className="!text-[#686867] font-semibold text-lg">
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
        <div className="pt-24 container ">
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

function CustomToolbar({
  label,
  onNavigate,
  onView,
  view,
  views,
}: ToolbarProps<CalendarEvent, object>) {
  return (
    <div className="flex items-center justify-between mb-2">
      <button
        className="flex items-center justify-center p-2 border-1 border-[#e2e0d6] rounded-lg hover:bg-[#e2e0d6]
        hover:text-black transition-colors duration-300"
        onClick={() => onNavigate("PREV")}
      >
        Prev
      </button>
      <span className="font-bold">{moment(label).format("MMMM YYYY")}</span>
      <button
        className="flex items-center justify-center p-2 border-1 border-[#e2e0d6] rounded-lg hover:bg-[#e2e0d6]
        hover:text-black transition-colors duration-300"
        onClick={() => onNavigate("NEXT")}
      >
        Next
      </button>
    </div>
  );
}

export default EventDetail;
