
import { Cities, FilterOption, FilterState } from "@/types";

export const initialFilterState: FilterState = {
    location: "",
    flat: "",
    minMetrics: "",
    maxMetrics: "",
    rooms: "",
    minPrice: "",
    maxPrice: "",
    transaction: "all",
};

export const flatOptions: FilterOption[] = [
    { value: "Ground Floor", label: "Ground Floor" },
    { value: "1", label: "1st Floor" },
    { value: "2", label: "2nd Floor" },
    { value: "3", label: "3rd Floor" },
    { value: "4", label: "4th Floor" },
];

export const roomsOptions: FilterOption[] = [
    { value: "1", label: "1 Room" },
    { value: "2", label: "2 Rooms" },
    { value: "3", label: "3 Rooms" },
    { value: "4", label: "4 Rooms" },
    { value: "5", label: "5 Rooms" },
    { value: "6", label: "6 Rooms" },
    { value: "7", label: "7 Rooms" },
    { value: "8", label: "8 Rooms" },
];
export const cities: Cities[] = [
  { name: "Algiers", label: "Algiers", value: "Algiers" },
  { name: "Oran", label: "Oran", value: "Oran" },
  { name: "Constantine", label: "Constantine", value: "Constantine" },
];
