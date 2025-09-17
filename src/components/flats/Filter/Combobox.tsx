import React, { useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { cities } from "@/utils/Constants";

interface ComboboxProps {
  onSelectChange: (name: string, value: string) => void;
  reset: boolean;
}

const Combobox = ({ onSelectChange, reset }: ComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [cityValue, setCityValue] = useState("");

  const handleSelect = (currentValue: string) => {
    const newValue = currentValue === cityValue ? "" : currentValue;
    setCityValue(newValue);
    onSelectChange("location", newValue);
    setOpen(false);
  };

  useEffect(() => {
    if (reset) setCityValue("");
  }, [reset]);

  return (
    <div className="relative w-[200px]">
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="w-full justify-between font-normal"
      >
        {cityValue
          ? cities.find(city => city.value === cityValue)?.label
          : "Select city"}
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </Button>

      {open && (
        <div className="absolute mt-1 w-full rounded-md border bg-white shadow-md z-10">
          <Command>
            <CommandInput placeholder="Search ..." />
            <CommandList>
              <CommandEmpty>No results.</CommandEmpty>
              <CommandGroup>
                {cities.map(city => (
                  <CommandItem
                    key={city.value}
                    value={city.value}
                    onSelect={handleSelect}
                  >
                    <Check
                      className={`mr-2 h-4 w-4 ${
                        cityValue === city.value ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    {city.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      )}
    </div>
  );
};

export default Combobox;
