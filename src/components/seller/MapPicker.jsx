"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";


const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LocationMarker({ setCoords }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      setCoords(e.latlng);
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
}

export default function MapPicker({ onSelect }) {
  return (
    <div className="h-80 w-full rounded-lg overflow-hidden border">
      <MapContainer
        center={[36.75, 3.06]} // الجزائر العاصمة كنقطة افتراضية
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker setCoords={onSelect} />
      </MapContainer>
    </div>
  );
}
