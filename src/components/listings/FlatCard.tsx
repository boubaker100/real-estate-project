// src/components/listings/FlatCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface FlatCardProps {
  item: {
    id: number;
    location: string;
    flatNumber: string;
    roomsAmount: string;
    metrics: number;
    description: string;
    type: string;
    ImageUrl: string;
    price: number;
  };
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "DZD", maximumFractionDigits: 0 }).format(price);

const FlatCard = ({ item }: FlatCardProps) => {
    const imageSrc = item.ImageUrl && typeof item.ImageUrl === 'string' && item.ImageUrl.length > 0
        ? item.ImageUrl
        : "/assets/adverts/flats/flat1.webp"; 
  return (
    <div className="item w-72 sm:w-80 boxShadowCustom2 rounded-xl relative hover:scale-105 transition-all overflow-hidden">
      <Link href={`/apartments/${item.id}`}>
        <Image src={imageSrc} alt="Apartment Image" className="rounded-t-xl w-full h-auto" width={640} height={400} />
        <p className={`absolute top-0 left-0 py-1 px-4 rounded-tl-xl font-medium text-white ${item.type === "For Sale" ? "bg-[#8fce00]" : "bg-[#6fa8dc]"}`}>
          {item.type}
        </p>

        {/* Price */}
        <p className="absolute top-0 right-0 py-1 px-4 rounded-tr-xl font-bold text-white bg-black/50">
          {formatPrice(item.price)}
        </p>

        <div className="flex py-2 px-2 rounded-b-xl bg-[#F0F0F0] flex-col sm:flex-row h-full">
          <div className="w-full sm:w-1/3">
            <p className="font-bold">{item.location}</p>
            <p className="text-sm">{item.flatNumber === "Ground Floor" ? "Ground Floor" : `${item.flatNumber} Floor`}</p>
            <p className="text-sm">{item.roomsAmount} {item.roomsAmount === "1" ? "Room" : "Rooms"}</p>
          </div>
          <div className="w-full sm:w-2/3">
            <p className="leading-4 text-sm pt-2 pb-3 ms-0 sm:ms-12">{item.description}</p>
            <p className="absolute right-2 bottom-1">{item.metrics}m<sup>2</sup></p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlatCard;
