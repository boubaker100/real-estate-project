import {
  MapPin, Home, Layers, Square, Phone, Mail,
  DollarSign, CheckCircle, XCircle, Hash
} from "lucide-react";
import { Property } from "@/types";

export default function FlatInfoCard({ flat }: { flat: Property }) {
  const {
    location, roomsAmount, flatNumber,
    metrics, price, isAvailable,
    ownerEmail, phone
  } = flat;

  const items: {
    label: string;
    icon: JSX.Element;
    text: string;
    bold?: boolean;
    textColor?: string;
  }[] = [
    { label: "Location:", icon: <MapPin className="text-blue-500" />, text: location, bold: true },
    { label: "Rooms:", icon: <Home className="text-green-500" />, text: `${roomsAmount} Room${roomsAmount !== "1" ? "s" : ""}` },
    { label: "Floor:", icon: <Layers className="text-purple-500" />, text: flatNumber === "Ground" ? "Ground Floor" : `${flatNumber} Floor` },
    { label: "Area:",  icon: <Square className="text-blue-500" />, text: `${metrics} m²` },
    flatNumber && { label: "Flat Number:", icon: <Hash className="text-orange-500" />, text: `Flat No: ${flatNumber}` },
    price && { label: "Price:", icon: <DollarSign className="text-yellow-500" />, text: `${price} DZD`, bold: true },
    isAvailable !== undefined && {
      label: "Status:",
      icon: isAvailable ? <CheckCircle className="text-green-600" /> : <XCircle className="text-red-600" />,
      text: isAvailable ? "Available" : "Not Available",
      bold: true,
      textColor: isAvailable ? "text-green-600" : "text-red-600"
    },
    ownerEmail && { label: "Owner Email", icon: <Mail className="text-blue-600" />, text: ownerEmail },
    phone && { label: "Owner Phone", icon: <Phone className="text-blue-600" />, text: phone }
  ].filter(Boolean) as any;

  return (
    <div className="w-5/6 sm:w-2/3 md:w-1/2 mt-4 bg-white p-6 flex flex-col gap-4 shadow-sm rounded-xl">
      {items.map((it, i) => (
        <div key={i} className="flex flex-col">
          <span className="text-gray-500 text-sm mb-1">{it.label}</span>
          <div className={`flex items-center gap-2 ${it.textColor || ""}`}>
            {it.icon}
            <p className={it.bold ? "font-semibold text-lg" : "text-base"}>{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
