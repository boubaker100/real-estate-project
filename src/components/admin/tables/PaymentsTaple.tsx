"use client";

import { Card, CardContent } from "@/components/ui/card";

interface Payment {
  id: number;
  user: string;
  amount: string;
  date: string;
}

const mockPayments: Payment[] = [
  { id: 1, user: "boubaker boudina ", amount: "5,000 DZD", date: "2025-09-10" },
  { id: 2, user: "boudina mojahid", amount: "10,000 DZD", date: "2025-09-11" },
];

export default function PaymentsTable() {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-4">Payment history</h2>
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">User</th>
              <th className="p-2">amount</th>
              <th className="p-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {mockPayments.map((p) => (
              <tr key={p.id} className="border-t">
                <td className="p-2">{p.user}</td>
                <td className="p-2">{p.amount}</td>
                <td className="p-2">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
