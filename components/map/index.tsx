import React, { FC } from "react";
import { MyMarker } from "./MapMarker";
import { DentistClinic } from "types";
import GoogleMapReact from "google-map-react";
import { Flex } from "@chakra-ui/react";

type Props = {
  clinics?: DentistClinic[];
};

export const Map: FC<Props> = ({ clinics }) => {
  const key = process.env.GOOGLE_MAP_API;
  const api = key ? key : "";
  const center = {
    lat: 57.7089,
    lng: 11.9746,
  };
  return (
    <>
      <Flex position="relative" minH="84vh" minW="100vw">
        <GoogleMapReact
          bootstrapURLKeys={{ key: api }}
          defaultCenter={center}
          defaultZoom={12}>
          {clinics?.map((clinic, index) => (
            <MyMarker
              key={index}
              lat={clinic.coordinate.latitude}
              lng={clinic.coordinate.longitude}
              value={clinic.name}
              clinic={clinic}
            />
          ))}
        </GoogleMapReact>
      </Flex>
    </>
  );
};
