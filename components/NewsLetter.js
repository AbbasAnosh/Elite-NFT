import React from "react";

import Elite_NFT from "../assets/Elite-nft.jpg";

const NewsLetter = () => {
  return (
    <section className="pt-[5rem] pb-[6rem]">
      <div className="container mx-auto">
        <div className="bg-purple-400 rounded-md bg-clip-padding p-4 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <h2 className="font-primary text-[1.4rem] lg:text-[3.5rem] text-center">
            What are you waiting for <br /> Explore now!
          </h2>

          <div className="flex justify-center align-center pt-[3rem]">
            <button
              href=""
              className="font-medium font-secondary h-11 px-12 bg-gradient-to-r from-[#EF18A5] to-[#C951E6] rounded text-[15px] hover:bg-gradient-to-b hover:from-[#5D4CEA] hover:to-[#C951E6] outline-none flex items-center gap-2 justify-center cursor-pointer"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
