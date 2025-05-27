import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <nav className="bg-blue-100 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
