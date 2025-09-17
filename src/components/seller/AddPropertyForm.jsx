"use client";
import { useState } from "react";
import { usePropertyStore } from "@/store/propertyStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";
import MapPicker from "./MapPicker";

export default function AddPropertyForm() {
  const addProperty = usePropertyStore((state) => state.addProperty);

  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "",
    description: "",
    location: "",
    coords: null,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCoords = (coords) => {
    setForm({ ...form, coords });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProperty(form);
    alert("✅ Property added with coordinates (mock only)");
    setForm({
      title: "",
      price: "",
      type: "",
      description: "",
      location: "",
      coords: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input name="title" placeholder="Property Title" value={form.title} onChange={handleChange} required />
      <Input name="price" type="number" placeholder="Price ($)" value={form.price} onChange={handleChange} required />

      <Select onValueChange={(value) => setForm({ ...form, type: value })} value={form.type}>
        <SelectTrigger><SelectValue placeholder="Select Property Type" /></SelectTrigger>
        <SelectContent>
          <SelectItem value="apartment">Apartment</SelectItem>
          <SelectItem value="villa">Villa</SelectItem>
          <SelectItem value="land">Land</SelectItem>
          <SelectItem value="office">Office</SelectItem>
        </SelectContent>
      </Select>

      <Textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} rows={4} />
      <Input name="location" placeholder="Location (Address)" value={form.location} onChange={handleChange} required />

      {/* خريطة اختيار الموقع */}
      <MapPicker onSelect={handleCoords} />
      {form.coords && (
        <p className="text-sm text-gray-600">
          📍 Selected: {form.coords.lat.toFixed(4)}, {form.coords.lng.toFixed(4)}
        </p>
      )}

      {/* رفع صور */}
      <Input type="file" multiple />

      <Button type="submit" className="w-full">Submit Property</Button>
    </form>
  );
}
