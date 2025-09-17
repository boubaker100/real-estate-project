import { cities } from '@/utils/Constants';
export interface Filters {
  location: string;
  flat: string;
  minMetrics: string;
  maxMetrics: string;
  rooms: string;
  minPrice: string;
  maxPrice: string;
  transaction: string; // "all" | "sale" | "rent"
}

export interface FilterFormProps {
  onFilter: (filters: Filters) => void;
  location: string;
  flat: string;
  minMetrics: string;
  maxMetrics: string;
  rooms: string;
  minPrice: string;
  maxPrice: string;
  transaction: string;
}


import { LatLngExpression } from "leaflet";

export interface Property {
    id: number;
    title: string;
    location: string;
    flatNumber?: string;
    roomsAmount?: string;
    metrics: number;
    description: string;
    type: "For Sale" | "For Rent";
    ImageUrl: string;
    price: number;
    coordinates: LatLngExpression;
    isAvailable?: boolean;
    ownerEmail?: string;
    phone?: string;
}

export interface FilterState {
    location: string;
    flat: string;
    minMetrics: string;
    maxMetrics: string;
    rooms: string;
    minPrice: string;
    maxPrice: string;
    transaction: "all" | "For Sale" | "For Rent";
}

export interface FilterOption {
    value: string;
    label: string;
}

export interface IconData {
    id: number;
    icon_url: string;
    icon_description: string;
}

export interface MenuItem {
    site_url: string;
    site_name: string;
}

export interface Slide {
    id: number;
    content: string;
}

export interface Realization {
    id: number;
    description: string;
    ImageUrl: string;
    Location: string;
    title: string;
}

export interface TimelineItem {
    title: string;
    description: string;
    image: string;
}

export interface City {
    name: string;
    latitude: number;
    longitude: number;
}
export interface Cities {
    name: string;
    label: string;
    value: string;
}