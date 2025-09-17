import { propertiesData } from "@/data";

interface Filters {
  location: string;
  minMetrics: string | number;
  maxMetrics: string| number;
  rooms: string| number ;
  minPrice: string| number;
  maxPrice: string| number;
  transaction: string;
}

export const applyFilters = (filters: Filters) => {
  const {
    location,
    minMetrics,
    maxMetrics,
    rooms,
    minPrice,
    maxPrice,
    transaction,
  } = filters;

  const minM = Number(minMetrics);
  const maxM = Number(maxMetrics);
  const minP = Number(minPrice);
  const maxP = Number(maxPrice);
  const mappedType =
    transaction === "sale"
      ? "For Sale"
      : transaction === "rent"
      ? "For Rent"
      : null;

  return propertiesData.filter((item) => {
  const matchesLocation = location
  ? item.location.toLowerCase().includes(location.toLowerCase())
  : true;


    const matchesRoom = rooms ? item.roomsAmount === String(rooms) : true;
    const matchesMinMetrics = !isNaN(minM) ? Number(item.metrics) >= minM : true;
    const matchesMaxMetrics = !isNaN(maxM) ? Number(item.metrics) <= maxM : true;
    const matchesMinPrice = !isNaN(minP) ? Number(item.price) >= minP : true;
    const matchesMaxPrice = !isNaN(maxP) ? Number(item.price) <= maxP : true;
    const matchesTransaction = mappedType ? item.type === mappedType : true;

    return (
      matchesLocation &&
      matchesRoom &&
      matchesMinMetrics &&
      matchesMaxMetrics &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesTransaction
    );
  });
};
