import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `p-2 rounded block ${
          isActive
            ? "bg-[var(--generic-3)] text-[var(--generic-1)]"
            : "hover:bg-[var(--generic-2)]"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
