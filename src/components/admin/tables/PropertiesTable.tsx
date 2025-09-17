"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Property {
  id: number;
  title: string;
  city: string;
  price: string;
  status: "Active" | "Pending";
}

const mockProps: Property[] = [
  { id: 1, title: "Luxury Apartment", city: "Algiers", price: "150,000 DZD", status: "Active" },
  { id: 2, title: "Coastal Villa", city: "Oran",   price: "1,200,000 DZD", status: "Pending" },
];

export default function PropertiesTable() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Property Management</h2>
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">City</th>
              <th className="p-2">Price</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockProps.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.title}</td>
                <td className="p-2">{p.city}</td>
                <td className="p-2">{p.price}</td>
                <td className="p-2">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
