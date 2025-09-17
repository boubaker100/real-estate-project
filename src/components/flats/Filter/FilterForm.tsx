"use client";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import Combobox from "./Combobox";
import {
  flatOptions,
  initialFilterState,
  roomsOptions,
} from "@/utils/Constants";

interface FilterFormProps {
  onFilter: (filters: {
    location: string;
    flat: string;
    minMetrics: string;
    maxMetrics: string;
    rooms: string;
    minPrice: string;
    maxPrice: string;
    transaction: string;
  }) => void;
}

const FilterForm = ({ onFilter }: FilterFormProps) => {
  const [filters, setFilters] = useState(initialFilterState);
  const [resetCombobox, setResetCombobox] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ استدعاء مع اسم الحقل location
  const handleSelectChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    setFilters(initialFilterState);
    setResetCombobox(true);
    setTimeout(() => setResetCombobox(false), 0); // لإعادة تهيئة combobox
    onFilter(initialFilterState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center gap-6 mt-8 items-end flex-wrap"
    >
      {/*  Location Combobox */}
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium my-1">Location:</p>
          <Combobox
            onSelectChange={(value: string) => handleSelectChange("location", value)}
            reset={resetCombobox}
          />
        </label>
      </div>

      {/* Floor */}
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium my-1">Floor:</p>
          <select
            name="flat"
            value={filters.flat}
            onChange={handleChange}
            className="w-[180px] py-2 px-3 border rounded-lg"
          >
            <option value="">All</option>
            {flatOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Area */}
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium">
            Area m<sup>2</sup>:
          </p>
          <div className="flex gap-4">
            <input
              type="number"
              name="minMetrics"
              value={filters.minMetrics}
              onChange={handleChange}
              className="w-[100px] py-2 px-3 border rounded-lg"
              placeholder="From"
            />
            <input
              type="number"
              name="maxMetrics"
              value={filters.maxMetrics}
              onChange={handleChange}
              className="w-[100px] py-2 px-3 border rounded-lg"
              placeholder="To"
            />
          </div>
        </label>
      </div>

      {/* Price */}
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium">Price:</p>
          <div className="flex gap-4">
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-[120px] py-2 px-3 border rounded-lg"
              placeholder="Min"
            />
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-[120px] py-2 px-3 border rounded-lg"
              placeholder="Max"
            />
          </div>
        </label>
      </div>

      {/* Rooms */}
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium my-1">Number of Rooms:</p>
          <select
            name="rooms"
            value={filters.rooms}
            onChange={handleChange}
            className="w-[140px] py-2 px-3 border rounded-lg"
          >
            <option value="">All</option>
            {roomsOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Transaction */}
      <div className="flex flex-col">
        <label>
          <p className="text-xl font-medium my-1">Transaction:</p>
          <select
            name="transaction"
            value={filters.transaction}
            onChange={handleChange}
            className="w-[140px] py-2 px-3 border rounded-lg"
          >
            <option value="all">All</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 -mt-4">
        <Button variant="outline" type="submit">
          Apply
        </Button>
        <Button variant="destructive" type="button" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
};

export default FilterForm;
