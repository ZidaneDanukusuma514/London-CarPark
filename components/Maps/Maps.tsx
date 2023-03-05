import { useStore, StoreRoot } from "@/store";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import * as React from "react";

export interface IMapsProps {}

export default function Maps(props: IMapsProps): any {
  const { centerPosition, Radiusdata, handleClickedmark } =
    useStore() as StoreRoot;
  const [Position, setPosition] = React.useState<google.maps.LatLngLiteral>();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_KEY || "",
  });

  if (!isLoaded) {
    <div>Loading...</div>;
  } else
    return (
      <GoogleMap
        mapContainerClassName="h-1/2 w-full z-5"
        zoom={10}
        center={centerPosition}
      >
        {Radiusdata?.places.map((point) => (
          <Marker
            clickable={true}
            title={point.commonName}
            onClick={() =>
              handleClickedmark({ lat: point.lat, lng: point.lon })
            }
            position={{ lat: point.lat, lng: point.lon }}
          />
        ))}
      </GoogleMap>
    );
}
