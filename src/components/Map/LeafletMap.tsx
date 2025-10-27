"use client";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { ReactNode } from "react";

export default function LeafletMap({ children }: { children: ReactNode }) {
  return (
    <MapContainer
      center={[36.75, 3.06]} // مركز افتراضي (الجزائر)
      zoom={13}
      scrollWheelZoom={false}
      className="h-full w-full rounded-lg shadow-lg"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {children}
    </MapContainer>
  );
}
