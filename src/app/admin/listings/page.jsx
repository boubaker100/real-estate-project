"use client";
import { useAdminStore } from "@/store/adminStore";

export default function AdminListings() {
  const { listings, approveListing, rejectListing } = useAdminStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Listings</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Owner</th>
            <th className="p-3 text-left">Price</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(l => (
            <tr key={l.id} className="border-t">
              <td className="p-3">{l.title}</td>
              <td className="p-3">{l.owner}</td>
              <td className="p-3">{l.price}</td>
              <td className="p-3">{l.status}</td>
              <td className="p-3 space-x-2">
                {l.status === "pending" && (
                  <>
                    <button onClick={() => approveListing(l.id)} className="bg-green-600 text-white px-3 py-1 rounded">Approve</button>
                    <button onClick={() => rejectListing(l.id)} className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
