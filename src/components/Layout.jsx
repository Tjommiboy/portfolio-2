import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--generic-1)] text-white p-6 flex flex-col space-y-4 sticky top-0 h-screen">
        <h2 className="text-xl font-bold mb-6">My Portfolio</h2>
        <NavBar />
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
