import { Marker } from "react-leaflet";
import { localUbicationMaker, userUbicationMaker } from "./IconLocation";

export const Markers = ({ userUbication, localLocation }) => {
  const places = userUbication.geometry ? [userUbication, localLocation] : [localLocation];

  const defineIcon = (WhoIs) => {
    return WhoIs === "user" ? userUbicationMaker : localUbicationMaker;
  };

  const markers = places.map((place) => <Marker key={place.name} position={place.geometry} icon={defineIcon(place.name)} />);

  return markers;
};
