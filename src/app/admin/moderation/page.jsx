"use client";
import { useAdminStore } from "@/store/adminStore";

export default function AdminModeration() {
  const { reports, approveListing, rejectListing } = useAdminStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Moderation</h1>
      {reports.map(r => (
        <div key={r.id} className="bg-white p-4 mb-3 rounded shadow flex justify-between">
          <div>
            <p className="font-semibold">{r.reason}</p>
            <p className="text-sm text-gray-500">Listing #{r.targetId} — {r.reporter}</p>
          </div>
          <div className="space-x-2">
            <button onClick={() => approveListing(r.targetId)} className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
            <button onClick={() => rejectListing(r.targetId)} className="bg-red-600 text-white px-3 py-1 rounded">Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
