import React from "react";
import Nav from "./Nav";
import { RiWallet3Line } from "react-icons/ri";

const Header = () => {
  return (
    <header className="py-9">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-primary font-bold">Elite NFT</h2>
          </div>

          <Nav />
          <div>
            <button className="btn hidden lg:flex">
              <RiWallet3Line className="text-xl" /> Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
