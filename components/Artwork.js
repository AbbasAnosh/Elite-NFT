import Image from "next/image";
import React from "react";

import img1 from "../assets/collection/13.png";
import img2 from "../assets/newNFT/unnamed (3).jpg";
import img3 from "../assets/collection/11.png";
import img4 from "../assets/newNFT/unnamed (6).jpg";

import img5 from "../assets/collection/5.png";
import img6 from "../assets/collection/6.png";

const Artwork = () => {
  return (
    <section className="pt-[10rem] lg:pt-[15rem]">
      <div className="container mx-auto">
        <div className="lg:flex lg:items-center lg:gap-6">
          <div className="text-center lg:text-start ">
            <h1 className="text-[3rem] font-primary font-bold mb-7">
              <span className="text-[#EF18A5]">Get more</span> beautiful <br />
              <span className="text-[#18EAB3]"> artwork</span> here
            </h1>
            <p className="font-primary mb-7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              consequatur provident accusantium officia excepturi.
            </p>

            <div className="flex justify-center align-center mb-3 lg:flex-start lg:justify-start">
              <button className="btn">Explore Now</button>
            </div>
          </div>

          <div>
            <section className="overflow-hidden text-gray-700">
              <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-6">
                <div className="flex flex-wrap -m-1 md:-m-4">
                  <div className="flex flex-wrap w-1/2">
                    <div className="w-1/2 p-1 md:p-2 self-start ">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img1}
                      />
                    </div>
                    <div className="w-1/2 p-1 md:p-2 self-end">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img2}
                      />
                    </div>
                    <div className="w-full p-1 md:p-2 self-start">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img3}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap w-1/2">
                    <div className="w-full p-1 md:p-2 self-end">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img4}
                      />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img5}
                      />
                    </div>
                    <div className="w-1/2 p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img6}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artwork;
