"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { usePropertyStore } from "@/store/propertyStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "@/components/ui/select";

export default function AddPropertyForm() {
  const addProperty = usePropertyStore((state) => state.addProperty);

  const [form, setForm] = useState({
    title: "",
    price: "",
    type: "",
    description: "",
    location: "",
    length: "",
    width: "",
    floors: "",
    transaction: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProperty(form);
    alert(" Property added (mock only)");
    setForm({
      title: "",
      price: "",
      type: "",
      description: "",
      location: "",
      length: "",
      width: "",
      floors: "",
      transaction: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="mt-24 bg-gray-50 border max-w-lg w-full border-gray-700 space-y-6 md:max-w-6xl mx-auto mb-24 shadow-lg p-8 rounded-2xl"
      >
        <h2 className="text-2xl font-bold text-center mb-10">
          Add New Property
        </h2>

        {/* العنوان + السعر */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block font-medium">Property Title</label>
            <Input
              name="title"
              placeholder="e.g. Modern Apartment Downtown"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Price ($)</label>
            <Input
              name="price"
              type="number"
              placeholder="e.g. 250000"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* الطول + العرض */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block font-medium">Length (m)</label>
            <Input
              name="length"
              type="number"
              placeholder="e.g. 20"
              value={form.length}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <label className="block font-medium">Width (m)</label>
            <Input
              name="width"
              type="number"
              placeholder="e.g. 15"
              value={form.width}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* عدد الطوابق */}
        <div className="space-y-2">
          <label className="block font-medium">Floors</label>
          <Input
            name="floors"
            type="number"
            placeholder="e.g. 3"
            value={form.floors}
            onChange={handleChange}
          />
        </div>

        {/* نوع العقار */}
        <div className="space-y-2">
          <label className="block font-medium">Property Type</label>
          <Select
            onValueChange={(value) => setForm({ ...form, type: value })}
            value={form.type}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Property Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartment">Apartment</SelectItem>
              <SelectItem value="villa">Villa</SelectItem>
              <SelectItem value="land">Land</SelectItem>
              <SelectItem value="office">Office</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* البيع أو الكراء */}
        <div className="space-y-2">
          <label className="block font-medium">Transaction</label>
          <Select
            onValueChange={(value) => setForm({ ...form, transaction: value })}
            value={form.transaction}
          >
            <SelectTrigger>
              <SelectValue placeholder="For Sale or For Rent" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sale">For Sale</SelectItem>
              <SelectItem value="rent">For Rent</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* الوصف */}
        <div className="space-y-2">
          <label className="block font-medium">Description</label>
          <Textarea
            name="description"
            placeholder="Write a short description..."
            value={form.description}
            onChange={handleChange}
            rows={4}
          />
        </div>

        {/* الموقع */}
        <div className="space-y-2">
          <label className="block font-medium">Location</label>
          <Input
            name="location"
            placeholder="e.g. Algiers, Oran"
            value={form.location}
            onChange={handleChange}
            required
          />
        </div>

        {/* البريد الإلكتروني للتواصل */}
        <div className="space-y-2">
          <label className="block font-medium">Contact Email</label>
          <Input
            name="email"
            type="email"
            placeholder="e.g. owner@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* رقم الهاتف للتواصل */}
        <div className="space-y-2">
          <label className="block font-medium">Phone Number</label>
          <Input
            name="phone"
            type="tel"
            placeholder="e.g. +213 555 000 000"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        {/* صور */}
        <div className="space-y-2">
          <label className="block font-medium">Upload Images</label>
          <Input type="file" multiple />
        </div>

        <Button type="submit" className="w-full">
          Submit Property
        </Button>
      </form>
    </div>
  );
}
