import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "./Markers";
import places from "../assets/data.json";
import { useEffect, useState } from "react";

export const MapView = () => {
  const [ubication, setUbication] = useState({
    name: "local",
    localLocation: { lat: "-38.92637138166547", lng: "-67.99019178898176" },
    geometry: [-38.92637138166547, -67.99019178898176],
    zoom: 13,
  });

  const [userUbication, setUserUbication] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setUserUbication({ name: "user", geometry: [position.coords.latitude, position.coords.longitude] });
      },
      function (error) {
        console.error("Error", error);
      },
      {
        enableHighAccuracy: true,
      }
    );
  }, []);

  return (
    <MapContainer center={ubication.localLocation} zoom={ubication.zoom} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers userUbication={userUbication} localLocation={ubication} />
    </MapContainer>
  );
};
