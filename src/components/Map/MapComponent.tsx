"use client";
import { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import LeafletMap from "./LeafletMap";

function ChangeView({ center, zoom }: { center: L.LatLngExpression; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom, { animate: true });
      setTimeout(() => map.invalidateSize(), 200);
    }
  }, [center, zoom, map]);
  return null;
}

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

interface MapComponentProps {
  flats: any[];
  center: L.LatLngExpression;
}

export default function MapComponent({ flats, center }: MapComponentProps) {
  return (
    <div className="w-full h-96 mt-10">
      <LeafletMap>
        <ChangeView center={center} zoom={13} />

        <Marker position={center} icon={customIcon}>
          <Popup>Selected City</Popup>
        </Marker>

        {flats
          .filter((flat) => flat.coordinates)
          .map((flat, index) => (
            <Marker key={index} position={flat.coordinates} icon={customIcon}>
              <Popup>
                <div>
                  <p><strong>{flat.title}</strong></p>
                  <p>Price: {flat.price} dzd</p>
                  <p>Area: {flat.metrics} m</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </LeafletMap>
    </div>
  );
}
