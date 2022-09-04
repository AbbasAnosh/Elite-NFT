import React from "react";
import Nav from "./Nav";
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-primary font-bold">Elite NFT</h2>
          </div>

          <Nav />

          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
