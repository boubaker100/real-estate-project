import AdminSidebar from "@/components/admin/layout/AdminSidebar";

export default function AdminLayout({ children }:any) {
  return (
    <div className="mt-36 flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
