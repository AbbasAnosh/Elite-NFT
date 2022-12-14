import React from "react";
import { motion } from "framer-motion";
import { RiWallet3Line } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="flex">
      <ul className="hidden lg:flex font-secondary items-center space-x-12 font-medium">
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
        <li>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1.1 }}
            className="btn hidden lg:flex"
          >
            <RiWallet3Line className="text-xl" /> Connect Wallet
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
