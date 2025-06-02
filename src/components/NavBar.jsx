import React, { useState } from "react";
import NavItem from "./NavItem";

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger toggle (mobile only) */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="bg-gray-800 text-white px-3 py-1 rounded m-2 md:hidden fixed top-4 left-4 z-50 whitespace-nowrap"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar - visible on desktop or when open on mobile */}
      <aside
        className={`bg-[var(--natural-6)] text-white p-4 transition-all duration-300 z-40
        ${isSidebarOpen ? "flex" : "hidden"} md:flex
        flex-col space-y-4 md:w-64 lg:w-64 md:h-screen sticky top-0`}
      >
        <h2 className="text-xl font-bold mb-4">My Portfolio</h2>

        <nav className="flex flex-col space-y-2">
          <NavItem to="/" label="Home" />
          <NavItem to="/About" label="About Me" />
          <NavItem to="/Contact" label="Contact" />
        </nav>
      </aside>
    </>
  );
};

export default NavBar;
