"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Mail, Pencil, Star, MapPin, Home } from "lucide-react";

export default function UpgradePlan() {
  const plans = [
    {
      name: "Basic",
      price: "50 DZD",
      description: "Limited visibility and a single standard listing.",
      features: ["1 Property Listing", "Standard Placement"],
    },
    {
      name: "Pro",
      price: "2,000 DZD / month",
      description: "Boost visibility to reach more serious buyers.",
      features: ["5 Property Listings", "Highlighted Placement", "Priority Support"],
    },
    {
      name: "Premium",
      price: "5,000 DZD / month",
      description: "Maximum exposure for professional sellers.",
      features: ["Unlimited Listings", "Top Placement", "Premium Badge", "Dedicated Support"],
    },
  ];

  return (
    <div className="w-full  mx-auto my-12">
  
      {/* === Upgrade Plans === */}
      <section className="mt-12  "> 
        <h2 className="text-2xl font-bold text-center mb-8">💳 Upgrade Your Plan</h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`rounded-2xl  p-6 shadow-2xl transition hover:shadow-xl flex flex-col ${
                plan.name === "Premium" ? "border-2 border-yellow-400" : ""
              }`}
            >
              <CardHeader className="text-center">
                <CardTitle className="flex justify-center text-2xl items-center gap-2">
                  {plan.name}
                  {plan.name === "Premium" && <Star className="text-yellow-500" />}
                </CardTitle>
                <CardDescription className="text-lg font-bold">
                  {plan.price}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex flex-col justify-between flex-1">
                <div className="space-y-4 mb-6">
                  <p className="text-sm text-gray-600">{plan.description}</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    {plan.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-auto">Subscribe</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
