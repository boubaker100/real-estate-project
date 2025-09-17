// app/profile/layout.jsx
import Sidebar from "@/components/profile/Sidebar";

export default function ProfileLayout({ children }) {
  return (
    <div className="flex min-h-screen mt-48 ml-5 overflow-hidden bg-gray-500">
     
      <Sidebar/>

    
      <main className="flex-1 p-6 bg-muted  ">{children}</main>
    </div>
  );
}
