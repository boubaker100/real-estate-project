import { propertiesData } from "@/data";
import { Filters } from "@/types";

export const applyFilters = (filters: Filters) => {
  const { location, flat, minMetrics, maxMetrics, rooms, minPrice, maxPrice, transaction } = filters;

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
      ? item.location.toLowerCase().trim() === location.toLowerCase().trim()
      : true;

    
    const matchesFlat = flat ? Number(item.flatNumber) === Number(flat) : true;
    const matchesRoom = rooms ? Number(item.roomsAmount) === Number(rooms) : true;

    const matchesMinMetrics = !isNaN(minM) ? item.metrics >= minM : true;
    const matchesMaxMetrics = !isNaN(maxM) ? item.metrics <= maxM : true;
    const matchesMinPrice = !isNaN(minP) ? item.price >= minP : true;
    const matchesMaxPrice = !isNaN(maxP) ? item.price <= maxP : true;
    const matchesTransaction = mappedType ? item.type === mappedType : true;

    return (
      matchesLocation &&
      matchesFlat &&
      matchesRoom &&
      matchesMinMetrics &&
      matchesMaxMetrics &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesTransaction
    );
  });
};
