import { create } from "zustand";

export const useAdminStore = create((set, get) => ({
  users: [
    { id: 1, name: "Amina", email: "amina@example.com", role: "user", status: "active", joined: "2024-11-02" },
    { id: 2, name: "Omar", email: "omar@example.com", role: "seller", status: "suspended", joined: "2024-10-10" },
  ],
  listings: [
    { id: 101, title: "Apartment in Algiers", price: 120000, status: "pending", views: 120, owner: "Amina" },
    { id: 102, title: "Villa Oran", price: 450000, status: "active", views: 820, owner: "Omar" },
  ],
  payments: [
    { id: "p1", user: "Amina", plan: "Premium", amount: 2000, status: "paid", date: "2025-01-10" },
  ],
  reports: [
    { id: "r1", targetType: "listing", targetId: 101, reason: "spam", reporter: "user123", createdAt: "2025-02-05" },
  ],

  banUser: (id) =>
    set(s => ({ users: s.users.map(u => u.id === id ? { ...u, status: "suspended" } : u) })),
  unbanUser: (id) =>
    set(s => ({ users: s.users.map(u => u.id === id ? { ...u, status: "active" } : u) })),
  approveListing: (id) =>
    set(s => ({ listings: s.listings.map(l => l.id === id ? { ...l, status: "active" } : l) })),
  rejectListing: (id) =>
    set(s => ({ listings: s.listings.map(l => l.id === id ? { ...l, status: "rejected" } : l) })),
  markPayment: (id, status) =>
    set(s => ({ payments: s.payments.map(p => p.id === id ? { ...p, status } : p) })),

  stats: () => {
    const s = get();
    return {
      totalUsers: s.users.length,
      activeListings: s.listings.filter(l => l.status === "active").length,
      pendingListings: s.listings.filter(l => l.status === "pending").length,
      revenue: s.payments.filter(p => p.status === "paid").reduce((a,b)=>a+(b.amount||0),0),
    };
  }
}));
