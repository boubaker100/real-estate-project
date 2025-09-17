"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Mail, Pencil, Star, MapPin, Home, HeartIcon } from "lucide-react";
import Link from "next/link";
import UpgradePlan from "../UpgradePlan/UpagradePlane";


export default function StatusPage() {

  return (
    <div className="max-w-4xl mx-auto mt-16  space-y-12">
      {/* === Featured Property Card === */}
      <Card className="rounded-2xl shadow-lg overflow-hidden">
        <CardHeader className="bg-gray-100 p-4">
          <CardTitle className="text-xl p-2  font-bold">
            Modern Apartment for Sale
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <img
            src="/assets/adverts/flats/flat4.webp"
            alt="Apartment in Algiers"
            className="w-full h-64 object-cover"
          />

          <div className="px-4 py-8 space-y-2">
            <p className="text-gray-800 text-lg font-semibold flex items-center gap-2">
              <MapPin size={18} className="text-blue-600" />
              Hydra, Algiers
            </p>
            <p className="text-gray-600">
              Spacious 3-bedroom apartment with a sunny balcony and panoramic city views.
              Perfect for families seeking comfort and convenience.
            </p>

            <div className="flex flex-wrap gap-4 text-gray-700 font-medium pt-2">
              <span className="flex items-center gap-1">
                <Home size={18} /> 110 m²
              </span>
              <span>3 Bedrooms</span>
              <span>2 Bathrooms</span>
            </div>

            <p className="text-2xl font-bold text-primary mt-2">
              18,500,000 DZD
            </p>
          </div>

          {/* Bottom bar: Views + Messages + Edit button */}
          <div className="flex justify-between items-center border-t px-4 py-3 bg-gray-50">
            <div className="flex items-center gap-6 text-sm font-medium">
              <span className="flex items-center gap-1 text-blue-600">
                <Eye size={18} /> 1,250 views
              </span>
              <span className="flex items-center gap-1 text-green-600">
                <Mail size={18} /> 42 messages
              </span>
              <span className="flex items-center gap-1 text-red-600">
                <HeartIcon size={18} /> 67 favorites
              </span>
            </div>
            <Link href="/profile/edit-property">
              <Button variant="outline" className="flex items-center gap-2">
                <Pencil size={16} /> Edit Listing
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
      
      
      {/* Upgrade plan */}
       <UpgradePlan/>

       
    </div>
  );
}
