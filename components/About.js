import React from "react";
import { BsArrowRight } from "react-icons/bs";

import img1 from "../assets/newNFT/unnamed (1).jpg";
import img2 from "../assets/newNFT/unnamed (10).jpg";
import img3 from "../assets/newNFT/unnamed (12).jpg";
import img4 from "../assets/newNFT/unnamed (2).jpg";

import { RiShoppingBagFill } from "react-icons/ri";
import { TbArrowAutofitLeft } from "react-icons/tb";

import imgprof from "../assets/avt2.png";
import Image from "next/image";

const NFT = [
  {
    Image: img1,
    title: '"Baby Industry #69"',
    Badge: "SUG",
    ImageProf: imgprof,
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
    ImageProf: imgprof,
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
    ImageProf: imgprof,
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
    ImageProf: imgprof,
    Ownership: "Owned By",
    Name: "Jacob Jones",
    Bid: "Current Bid",
    Price: "3.72 ETH",
    Button: "Place Bid",
    History: "View History",
  },
];
const About = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="flex justify-between mb-20">
          <h2 className="text-2xl font-secondary font-bold leading-3">
            Editors Pick For This Week
          </h2>
          <button className="flex items-center gap-2 text-xl leading-3">
            See all artwork <BsArrowRight />
          </button>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-7">
          {NFT.map((nft, i) => (
            <div
              key={i}
              className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-3 rounded-lg"
            >
              <Image src={nft.Image} alt="" className="rounded-lg" />
              <div className="flex justify-between py-2">
                <p className="text-sm">{nft.title}</p>
                <p className="text-[9px] bg-[#5F55EA] rounded-full w-8 h-4 text-center">
                  {nft.Badge}
                </p>
              </div>
              <div className="flex gap-4 justify-between mb-4">
                <Image
                  src={nft.ImageProf}
                  alt=""
                  className=""
                  width="40px"
                  height="10px"
                />
                <div className="">
                  <p className="text-[12px] text-slate-400">{nft.Ownership}</p>
                  <p className="text-[12px]">{nft.Name}</p>
                </div>
                <div>
                  <p className="text-[12px] text-slate-400">{nft.Bid}</p>
                  <p className="text-[12px] text-semibold">{nft.Price}</p>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="flex items-center gap-1 text-[13px] font-secondary bg-gradient-to-r from-[#EF18A5] to-[#5D4CEA] h-[25px] px-2 rounded-3xl">
                  <RiShoppingBagFill />
                  Place Bid
                </button>
                <button className="flex items-center gap-2 text-[13px] font-secondary text-slate-400">
                  <TbArrowAutofitLeft /> View History
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
