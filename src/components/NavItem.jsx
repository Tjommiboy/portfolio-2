import { NavLink } from "react-router-dom";

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      end={to === "/"}
      className={({ isActive }) =>
        `p-2 rounded block ${
          isActive
            ? "bg-[var(--generic-2)] text-[var(--generic-7)]"
            : "hover:bg-[var(--generic-5)] hover:text-[var(--generic-7)]"
        }`
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
