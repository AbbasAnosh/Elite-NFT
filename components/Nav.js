import React from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="hidden lg:flex gap-10 items-center font-medium font-secondary">
        <li className="nav-link">
          <a href="#home">Home</a>
        </li>
        <li className="nav-link">
          <a href="#marketplace">Marketplace</a>
        </li>
        <li className="nav-link">
          <a href="#explore">Explore</a>
        </li>
        <li className="nav-link">
          <a href="#exhibition">Exhibition</a>
        </li>
        <li className="nav-link">
          <a href="#community">Community</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
