import React from "react";
import Image from "next/image";
import profImage from "../assets/avt2.png";
import ethereum from "../assets/eth2.png";
import { BsArrowRightShort } from "react-icons/bs";

const Glassmorphism = () => {
  return (
    <div className="absolute flex justify-between bottom-2 left-[60px] p-4 lg:bottom-2 lg:left-[800px] lg:h-[200px] lg:w-[400px] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
      <div className="">
        <h2 className="mb-4 lg:font-semibold font-primary">3D Abstract Hand</h2>
        <div className="flex gap-2 mb-4">
          <Image src={profImage} alt="" width="25" height="8" />
          <p>@mushi</p>
        </div>
        <p className="text-[#5A658C] mb-4">Reserve price</p>
        <div className="flex gap-2 mb-4">
          <Image src={ethereum} alt="" width="15" height="14" />
          <p>
            <span className="font-semibold">Eth 8.61</span>
            <span className="text-[#5A658C] ">($29,8846)</span>
          </p>
        </div>
      </div>
      <div>
        <p className="text-[#5A658C] mb-3">Auction Ends in</p>
        <div className="flex order-1 gap-2 mb-4">
          <div>
            <p>18</p>
            <p>Hours</p>
          </div>
          <div>
            <p>25</p>
            <p>Mins</p>
          </div>
          <div>
            <p>44</p>
            <p>Secs</p>
          </div>
        </div>
        <button className="flex items-center gap-1 font-medium font-secondary h-10 px-4 lg:h-11 lg:px-6 bg-gradient-to-t from-[#5D4CEA] to-[#C951E6] rounded text-[15px] hover:bg-gradient-to-b hover:from-[#5D4CEA] hover:to-[#C951E6] outline-none justify-center cursor-pointer">
          Place Bid <BsArrowRightShort className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Glassmorphism;
