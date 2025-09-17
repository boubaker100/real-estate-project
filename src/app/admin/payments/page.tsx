"use client";
import { useAdminStore } from "@/store/adminStore";

export default function AdminPayments() {
  const { payments, markPayment } = useAdminStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Payments</h1>
      <table className="min-w-full bg-white rounded shadow">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Plan</th>
            <th className="p-3 text-left">Amount</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p: any) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.id}</td>
              <td className="p-3">{p.user}</td>
              <td className="p-3">{p.plan}</td>
              <td className="p-3">{p.amount}</td>
              <td className="p-3">{p.status}</td>
              <td className="p-3">
                {p.status !== "paid" && (
                  <button onClick={() => markPayment(p.id, "paid")} className="bg-green-600 text-white px-3 py-1 rounded">Mark Paid</button>
                )}
                {p.status === "paid" && (
                  <button onClick={() => markPayment(p.id, "refunded")} className="bg-yellow-600 text-white px-3 py-1 rounded">Refund</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
