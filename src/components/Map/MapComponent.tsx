"use client";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

interface MapComponentProps {
  flats: any[];
  center: L.LatLngExpression;
}

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export default function MapComponent({ flats, center }: MapComponentProps) {
  return (
    <div className="w-full h-96 mt-10">
      {/* ✅ إضافة key=center لإجبار إعادة التهيئة عند تغير المركز */}
      <MapContainer
        key={Array.isArray(center) ? center.join(",") : String(center)}
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full rounded-lg shadow-lg"
      >
        <ChangeView center={center} zoom={13} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* ماركر المدينة المحددة */}
        <Marker position={center} icon={customIcon}>
          <Popup>Selected City</Popup>
        </Marker>

        {/* ماركرات الشقق */}
        {flats
          .filter((flat) => flat.coordinates)
          .map((flat, index) => (
            <Marker key={index} position={flat.coordinates} icon={customIcon}>
              <Popup>
                <div>
                  <p><strong>{flat.title}</strong></p>
                  <p>السعر: {flat.price} دج</p>
                  <p>المساحة: {flat.metrics} م²</p>
                </div>
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
