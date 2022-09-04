import React from "react";
import { motion } from "framer-motion";
import { RiWallet3Line } from "react-icons/ri";

import { IoClose } from "react-icons/io5";

const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
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
            className="btn"
          >
            <RiWallet3Line className="text-xl" /> Connect Wallet
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
