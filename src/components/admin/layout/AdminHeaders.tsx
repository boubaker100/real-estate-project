"use client";
import { Button } from "@/components/ui/button";

export default function AdminHeader() {
  return (
    <header className="bg-slate-800 border-b px-6 py-3 flex justify-between items-center shadow-sm">
      <h1 className="text-lg text-white font-semibold">Dashboard</h1>
      <Button variant="outline" size="sm">Logout</Button>
    </header>
  );
}
