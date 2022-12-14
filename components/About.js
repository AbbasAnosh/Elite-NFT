import React from "react";
import { BsArrowRight } from "react-icons/bs";

import img1 from "../assets/newNFT/unnamed (1).jpg";
import img2 from "../assets/newNFT/unnamed (10).jpg";
import img3 from "../assets/newNFT/unnamed (12).jpg";
import img4 from "../assets/newNFT/unnamed (2).jpg";

import { RiShoppingBagFill } from "react-icons/ri";
import { TbArrowAutofitLeft } from "react-icons/tb";

import imgprof1 from "../assets/avt1.png";
import imgprof2 from "../assets/avt2.png";
import imgprof3 from "../assets/avt3.png";
import imgprof4 from "../assets/avt4.png";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

const NFT = [
  {
    Image: img1,
    title: '"Baby Industry #69"',
    Badge: "SUG",
    ImageProf: imgprof1,
    Ownership: "Owned By",
    Name: "Guy Hawkins",
    Bid: "Current Bid",
    Price: "4.52 ETH",
    Button: "Place Bid",
    History: "View History",
  },
  {
    Image: img2,
    title: '"Tiger Swag #342"',
    Badge: "BUS",
    ImageProf: imgprof2,
    Ownership: "Owned By",
    Name: "Esther Howard",
    Bid: "Current Bid",
    Price: "5.52 ETH",
    Button: "Place Bid",
    History: "View History",
  },
  {
    Image: img3,
    title: '"Amazing Cyborg #76"',
    Badge: "LIT",
    ImageProf: imgprof3,
    Ownership: "Owned By",
    Name: "Robert Fox",
    Bid: "Current Bid",
    Price: "2.72 ETH",
    Button: "Place Bid",
    History: "View History",
  },
  {
    Image: img4,
    title: '"Living Vase 01 by Lanz..."',
    Badge: "BSC",
    ImageProf: imgprof4,
    Ownership: "Owned By",
    Name: "Jacob Jones",
    Bid: "Current Bid",
    Price: "3.72 ETH",
    Button: "Place Bid",
    History: "View History",
  },
];
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-10" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.7,.1,.16,.7) 0.5s",
        }}
        className="container mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between mb-14 lg:mb-20 ">
          <div>
            <h2 className="text-2xl font-secondary font-bold leading-3 mb-7">
              Editors Pick For This Week
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }}>
            <button className="flex items-center gap-2 text-xl leading-3">
              See all artwork <BsArrowRight />
            </button>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
          {NFT.map((nft, i) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ ease: "easeOut", duration: 1 }}
              key={i}
              className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 rounded-lg"
            >
              <motion.div>
                <Image src={nft.Image} alt="" className="rounded-lg" />
              </motion.div>
              <div className="flex justify-between py-2">
                <p className="text-sm">{nft.title}</p>
                <p className="text-[9px] bg-[#5F55EA] rounded-full w-8 h-4 text-center">
                  {nft.Badge}
                </p>
              </div>
              <div className="flex gap-4 justify-between mb-4">
                <div className="flex gap-4">
                  <Image
                    src={nft.ImageProf}
                    alt=""
                    className=""
                    width="40px"
                    height="10px"
                  />
                  <div className="">
                    <p className="text-[12px] text-slate-400">
                      {nft.Ownership}
                    </p>
                    <p className="text-[12px]">{nft.Name}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">{nft.Bid}</p>
                  <p className="text-[12px] text-semibold">{nft.Price}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="flex items-center gap-1 text-[13px] font-secondary bg-gradient-to-r from-[#EF18A5] to-[#5D4CEA] h-[25px] px-2 rounded-3xl"
                >
                  <RiShoppingBagFill />
                  Place Bid
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="flex items-center gap-2 text-[13px] font-secondary "
                >
                  <TbArrowAutofitLeft />
                  <span className="text-slate-400">View History</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
