"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsCards() {
  const stats = [
    { title: "Users", value: 1250 },
    { title: "Listings", value: 320 },
    { title: "Total Payments", value: "$12,400" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {stats.map((s) => (
        <Card key={s.title} className="text-center">
          <CardContent className="p-6">
            <p className="text-gray-500">{s.title}</p>
            <p className="text-2xl font-bold mt-2">{s.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
