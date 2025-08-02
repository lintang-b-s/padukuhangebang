"use client";
import { MapsPlaceProps, MapsProps, UserLocation } from "@/type/type";
import React, { useEffect, useState } from "react";
import {
  GeolocateControl,
  Layer,
  Map,
  Marker,
  NavigationControl,
  Source,
} from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { FaCircleDot } from "react-icons/fa6";

function MapsPlace(props: MapsPlaceProps) {
  const [viewState, setViewState] = React.useState({
    longitude: 110.50104239125935,
    latitude: -8.060683222228368,
    zoom: 12,
  });

  useEffect(() => {
    if (props.centerUsingDataCoord) {
      setViewState({
        latitude: props.latitude,
        longitude: props.longitude,
        zoom: 12,
      });
    }
  }, []);

  return (
    <Map
      {...viewState}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        borderRadius: "8px",
      }}
      onMove={(evt) => setViewState(evt.viewState)}
      mapStyle="https://tiles.openfreemap.org/styles/positron"
      attributionControl={false}
    >
      <>
        {props.geojson && (
          <Source id="my-data" type="geojson" data={props.geojson}>
            <Layer
              id="boundary-lines"
              type="line"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "#A3C4CF",
                "line-width": 2,
              }}
            />
          </Source>
        )}

        <Marker latitude={props.latitude} longitude={props.longitude}>
          <div className="rounded-full w-5 h-5 bg-white ">
            <FaCircleDot size={20} color="#B50024" />
          </div>
        </Marker>
      </>
    </Map>
  );
}

export default MapsPlace;
