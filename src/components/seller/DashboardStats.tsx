"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Stat = {
  title: string;
  value: string | number;
};

interface DashboardStatsProps {
  stats?: Stat[]; 
}

export default function DashboardStats({ stats = [] }: DashboardStatsProps) {
  if (!Array.isArray(stats) || stats.length === 0) {
    return <p>No stats available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((item, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{item.value}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
