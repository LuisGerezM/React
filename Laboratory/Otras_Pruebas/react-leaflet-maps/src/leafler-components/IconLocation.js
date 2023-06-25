import L from "leaflet";

export const localUbicationMaker = L.icon({
  iconUrl: require("../assets/marker.svg").default,
  iconRetinaUrl: require("../assets/marker.svg").default,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});

export const userUbicationMaker = L.icon({
  iconUrl: require("../assets/ubication-map.svg").default,
  iconRetinaUrl: require("../assets/ubication-map.svg").default,
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: "leaflet-venue-icon",
});
