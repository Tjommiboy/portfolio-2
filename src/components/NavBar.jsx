import React from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const NavBar = () => {
  return (
    <nav className="flex flex-col space-y-2">
      <NavItem to="/" label="Home" />
      <NavItem to="/About" label="About Me" />
      <NavItem to="/Contact" label="Contact" />
    </nav>
  );
};

export default NavBar;
