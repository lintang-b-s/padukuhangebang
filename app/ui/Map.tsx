"use client";
import { MapsProps, ObjectLocation } from "@/type/type";
import React from "react";
import { Map, Marker, NavigationControl, Popup } from "@vis.gl/react-maplibre";
import { FaLocationDot } from "react-icons/fa6";
import "maplibre-gl/dist/maplibre-gl.css";
import Image from "next/image";
import Link from "next/link";

function Maps(props: MapsProps) {
  const { places, largeScreen, centerLatitude, centerLongitude } = props;
  const [selectedPlace, setSelectedPlace] = React.useState<ObjectLocation>();
  const [viewState, setViewState] = React.useState({
    longitude: centerLongitude,
    latitude: centerLatitude,
    zoom: 13,
  });
  
  const [popupData, setPopupData] = React.useState<ObjectLocation | undefined>(
    undefined
);
  return (
    <Map
      {...viewState}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: 12,
      }}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="https://tiles.openfreemap.org/styles/liberty"
    >
      <>
        {popupData && largeScreen ? (
          <Popup
            longitude={popupData.longitude}
            latitude={popupData.latitude}
            anchor="bottom"
            style={{ borderRadius: "12px", zIndex: 100, border: "none" }}
            closeButton={false}
          >
            <Link
              className="grid grid-cols-2 justify-center items-center gap-2 cursor-pointer
                                          py-1  no-underline focus:outline-none"
              style={{ textDecoration: "none", border: "none" }}
              href={`${popupData.hrefLink}`}
            >

              <div className="relative md:max-w-24 w-full md:h-24 ">
                <Image
                  src={popupData.thumbnail!}
                  alt={popupData.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h4 className="!text-[#272726] font-bold">{popupData.name}</h4>
                <span className="!text-[#686867] mt-3">
                  {popupData.address}
                </span>
              </div>
            </Link>
          </Popup>
        ) : (
          <></>
        )}

        <NavigationControl position="bottom-right" />

        {places.length > 0 &&
          places.map((location, index) => {
            return (
              <div key={index}>
                <Link
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) {
                      setPopupData(location);
                    }
                  }}
                  onMouseLeave={() => {
                    if (window.innerWidth >= 1024) {
                      setPopupData(undefined);
                    }
                  }}
                  onClick={(e) => {
                    if (window.innerWidth < 1024) {
                      e.preventDefault();
                    }
                  }}
                  href={`${location.hrefLink}`}
                >
                  <Marker
                    key={`${location!.name}-${location.id}`}
                    longitude={location?.longitude!}
                    latitude={location?.latitude!}
                    anchor="center"
                    scale={1.4}
                    onClick={() => {
                      setSelectedPlace(location);
                    }}
                  >
                    <FaLocationDot size={22} color="#3EA600" />
                  </Marker>
                </Link>

                {selectedPlace != null && !largeScreen && (
                  <a
                    className="absolute bottom-6 left-[50%] translate-x-[-50%] bg-white p-6
                  grid grid-cols-2 w-80  rounded-xl gap-2 "
                    href={`${selectedPlace.hrefLink}`}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={selectedPlace.thumbnail!}
                        alt={selectedPlace.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col justify-start items-center">
                      <h4 className="font-bold">{selectedPlace.name}</h4>
                      <span className="!text-[#686867]">
                        {selectedPlace.address}
                      </span>
                    </div>
                  </a>
                )}
              </div>
            );
          })}
      </>
    </Map>
  );
}

export default Maps;
