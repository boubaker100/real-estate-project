"use client";

import ProtectedRoute from "@/components/admin/ProtectedRoute";
import { useAuthStore } from "@/store/AuthStore";

export default function AdminDashboard() {
  const { user, logout } = useAuthStore();

  return (
    <ProtectedRoute>
      <div className="p-8">
        <h1 className="text-3xl font-bold">
          Welcome Admin {user?.email}
        </h1>
        <button
          onClick={logout}
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </ProtectedRoute>
  );
}
