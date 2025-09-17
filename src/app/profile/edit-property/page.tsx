"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import {
  Card, CardHeader, CardTitle, CardContent, CardDescription
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select, SelectTrigger, SelectContent, SelectItem, SelectValue
} from "@/components/ui/select";
import { Loader2, Trash2, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  description: string;
  type: "For Sale" | "For Rent";
  roomsAmount: number;
  area: number;
  mediaUrl: string;       // image or video URL
  mediaType: "image" | "video";
}

export default function EditPropertyPage() {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [newMedia, setNewMedia] = useState<File | null>(null);
  
  const router = useRouter();
 
  // data from backend
  useEffect(() => {
    setTimeout(() => {
      setProperty({
        id: 101,
        title: "Modern Apartment in Algiers Downtown",
        location: "Didouche Mourad Street, Algiers",
        price: 14500000,
        description: "Spacious 3-bedroom apartment near city center with sea view.",
        type: "For Sale",
        roomsAmount: 3,
        area: 120,
        mediaUrl: "/assets/adverts/flats/flat4.webp",
        mediaType: "image",
      });
      setLoading(false);
    }, 800);
  }, []);

  const handleChange = (key: keyof Property, value: any) => {
    if (!property) return;
    setProperty({ ...property, [key]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNewMedia(e.target.files[0]);
    }
  };

  const handleDeleteMedia = () => {
    setProperty(p => p ? { ...p, mediaUrl: "", mediaType: "image" } : p);
    setNewMedia(null);
  };

  const handleSubmit = (e: FormEvent) => {
  try{
    e.preventDefault();
    if (!property) return;
    console.log("Updated Property:", property);
    if (newMedia) {
      console.log("New file selected:", newMedia.name);
    }
    alert("Property updated successfully!");
    router.push("/profile/page");
  }catch(error){
    console.error("Error saving data:", error);
  }
  };

  if (loading || !property) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 space-y-10">
      {/* --- Upgrade reminder --- */}
      <Card className="border-2 border-yellow-300 shadow-md">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-yellow-600">
            Boost Your Listing!
          </CardTitle>
          <CardDescription>
            Upgrade to <span className="font-semibold">Premium Plan</span> for higher visibility.
          </CardDescription>
        </CardHeader>
        <CardContent>
         <Link href="/profile/plans" >
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white w-full">
            Upgrade Now
          
          </Button>
           </Link>
        </CardContent>
      </Card>

      {/* --- Edit Form --- */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Property</CardTitle>
          <CardDescription>Update your property details below.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block mb-1 font-medium">Title</label>
              <Input
                value={property.title}
                onChange={(e) => handleChange("title", e.target.value)}
              />
            </div>

            {/* Location */}
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <Input
                value={property.location}
                onChange={(e) => handleChange("location", e.target.value)}
              />
            </div>

            {/* Price */}
            <div>
              <label className="block mb-1 font-medium">Price (DZD)</label>
              <Input
                type="number"
                value={property.price}
                onChange={(e) => handleChange("price", Number(e.target.value))}
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block mb-1 font-medium">Type</label>
              <Select
                value={property.type}
                onValueChange={(val) => handleChange("type", val as "For Sale" | "For Rent")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="For Sale">For Sale</SelectItem>
                  <SelectItem value="For Rent">For Rent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rooms & Area */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium">Rooms</label>
                <Input
                  type="number"
                  value={property.roomsAmount}
                  onChange={(e) => handleChange("roomsAmount", Number(e.target.value))}
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Area (m²)</label>
                <Input
                  type="number"
                  value={property.area}
                  onChange={(e) => handleChange("area", Number(e.target.value))}
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-1 font-medium">Description</label>
              <Textarea
                rows={4}
                value={property.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
            </div>

            {/* Current Media Preview */}
            <div>
              <label className="block mb-1 font-medium">Current Media</label>
              {property.mediaUrl ? (
                <div className="relative w-full sm:w-1/2">
                  {property.mediaType === "image" ? (
                    <img
                      src={property.mediaUrl}
                      alt="Property Media"
                      className="w-full rounded-lg border"
                    />
                  ) : (
                    <video
                      src={property.mediaUrl}
                      controls
                      className="w-full rounded-lg border"
                    />
                  )}
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={handleDeleteMedia}
                    className="absolute top-2 right-2 flex items-center gap-1"
                  >
                    <Trash2 size={16} /> Delete
                  </Button>
                </div>
              ) : (
                <p className="text-gray-500">No media attached.</p>
              )}
            </div>

            {/* Upload New Media */}
            <div>
              <label className="block mb-1 font-medium">Upload New Image or Video</label>
              <div className="flex items-center gap-3">
                <Input
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleFileChange}
                />
                {newMedia && (
                  <span className="text-sm text-gray-600">{newMedia.name}</span>
                )}
              </div>
            </div>

            {/* Save */}
            <Button type="submit" className="w-full flex items-center gap-2">
              <Upload size={18} /> Save Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
