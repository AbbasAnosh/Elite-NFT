import React from "react";
import TypeWriting from "../constants/TypeWriting";
import { IoIosRocket, IoIosCreate } from "react-icons/io";
import HomePic from "../assets/home.gif";
import Image from "next/image";
import profImage from "../assets/avt2.png";
import ethereum from "../assets/eth2.png";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

// import Glassmorphism from "../constants/Glassmorphism";

const Home = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-[50px]">
            <div className="min-h-[200px]">
              <h2 className="text-[#EF18A5] text-[3rem] font-primary">
                Create, Sell and
              </h2>
              <TypeWriting />
            </div>
            <p className="tracking-wide font-secondary text-lg min-h-[100px]">
              The worlds best and safest nft platform with <br /> ethereum
              currency
            </p>
            <div className="flex gap-3 min-h-[100px]">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className=" flex items-center font-secondary gap-2 h-10 px-4 bg-[#EB128A] rounded-lg"
              >
                <IoIosRocket />
                Explore
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className=" flex items-center gap-2 h-10 px-4 border-2 border-x-[#5D4CEA] border-y-[#C951E6] rounded-lg "
              >
                <IoIosCreate />
                Create
              </motion.button>
            </div>
            <div className="flex order-1 gap-5 font-primary ">
              <div>
                <h2 className="text-[#EF18A5] text-[1.5rem]">50M+</h2>
                <p>Executive Assets</p>
              </div>
              <div>
                <h2 className="text-[#EF18A5] text-[1.5rem]">350H+</h2>
                <p>NFT Best Creator</p>
              </div>
              <div>
                <h2 className="text-[#EF18A5] text-[1.5rem]">100+</h2>
                <p>Platform Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image src={HomePic} alt="loading" className="rounded-lg" />

            {/* <Glassmorphism /> */}
            <div className="absolute flex justify-between bottom-2 left-[20px] h-[200px] w-[330px] p-4 md:ml-20 lg:bottom-0 lg:left-[-100px] lg:h-[200px] lg:w-[400px] bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100">
              <div className="">
                <h2 className="mb-4 lg:font-semibold font-primary">
                  3D Abstract Hand
                </h2>
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
                <div className="flex order-1 gap-2 mb-4 ">
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
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-1 font-medium font-secondary h-10 px-4 lg:h-11 lg:px-6 bg-gradient-to-t from-[#5D4CEA] to-[#C951E6] rounded text-[15px] hover:bg-gradient-to-b hover:from-[#5D4CEA] hover:to-[#C951E6] outline-none justify-center cursor-pointer"
                >
                  Place Bid <BsArrowRightShort className="text-lg" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
