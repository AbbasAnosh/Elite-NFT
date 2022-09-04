import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import img1 from "../assets/collection/13.png";
import img2 from "../assets/newNFT/unnamed (3).jpg";
import img3 from "../assets/collection/11.png";
import img4 from "../assets/newNFT/unnamed (6).jpg";

import img5 from "../assets/collection/5.png";
import img6 from "../assets/collection/6.png";
import { motion } from "framer-motion";

const Artwork = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-[10rem] lg:pt-[15rem]" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.35,1.56,.87,-0.21) 0.5s",
        }}
        className="container mx-auto"
      >
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

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="flex justify-center align-center mb-3 lg:flex-start lg:justify-start"
            >
              <button className="btn">Explore Now</button>
            </motion.div>
          </div>

          <div>
            <section className="overflow-hidden text-gray-700">
              <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-6">
                <div className="flex flex-wrap -m-1 md:-m-4">
                  <div className="flex flex-wrap w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="w-1/2 p-1 md:p-2 self-start "
                    >
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img1}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="w-1/2 p-1 md:p-2 self-end"
                    >
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img2}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="w-full p-1 md:p-2 self-start"
                    >
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img3}
                      />
                    </motion.div>
                  </div>
                  <div className="flex flex-wrap w-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="w-full p-1 md:p-2 self-end"
                    >
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img4}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="w-1/2 p-1 md:p-2"
                    >
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img5}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ ease: "easeOut", duration: 1 }}
                      className="w-1/2 p-1 md:p-2"
                    >
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={img6}
                      />
                    </motion.div>
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
