"use client";
import { useAdminStore } from "@/store/adminStore";
import { useState } from "react";

export default function AdminUsers() {
  const { users, banUser, unbanUser } = useAdminStore();
  const [q, setQ] = useState("");

  const list = users.filter((u:any) =>
    u.name.toLowerCase().includes(q.toLowerCase()) ||
    u.email.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <input
        className="border rounded px-3 py-2 mb-4 w-64"
        placeholder="Search..."
        value={q}
        onChange={e => setQ(e.target.value)}
      />
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {list.map((u:any )=> (
            <tr key={u.id} className="border-t">
              <td className="p-3">{u.name}</td>
              <td className="p-3">{u.email}</td>
              <td className="p-3">{u.status}</td>
              <td className="p-3">
                {u.status === "suspended" ? (
                  <button onClick={() => unbanUser(u.id)} className="bg-green-600 text-white px-3 py-1 rounded">Unban</button>
                ) : (
                  <button onClick={() => banUser(u.id)} className="bg-red-600 text-white px-3 py-1 rounded">Ban</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
