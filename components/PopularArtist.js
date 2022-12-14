import Image from "next/image";
import React from "react";
import svg1 from "../assets/images/image_3.png";
import svg2 from "../assets/images/image_4.png";
import svg3 from "../assets/images/image_5.png";
import svg4 from "../assets/images/image_6.png";
import svg5 from "../assets/images/image_7.png";
import svg6 from "../assets/images/image_8.png";
import svg7 from "../assets/images/image_9.png";
import svg8 from "../assets/images/image_10.png";
import svg9 from "../assets/images/image_11.png";
import ethereum from "../assets/eth2.png";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const SVG = [
  { Image: svg1, Title: "Super Mario", Price: "12456", badge: "+434534" },
  { Image: svg2, Title: "Eleanor Pena", Price: "67543", badge: "-123455" },
  { Image: svg3, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg4, Title: "Eleanor Pena", Price: "1245", badge: "+434534" },
  { Image: svg5, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg6, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg7, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg8, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg9, Title: "Super Mario", Price: "1245", badge: "+434534" },
];
import { BsArrowRight } from "react-icons/bs";

const PopularArtist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-[4rem]" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="container mx-auto"
      >
        <div className="flex flex-col lg:flex-row lg:justify-between mb-14 lg:mb-14 ">
          <div>
            <h2 className="text-2xl font-secondary font-bold leading-3 mb-7">
              Editors Pick For This Week
            </h2>
          </div>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
            <button className="flex items-center gap-2 text-xl leading-3">
              See all artwork <BsArrowRight />
            </button>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SVG.map((svg, i) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ ease: "easeOut", duration: 1 }}
              key={i}
              className="flex justify-between bg-gray-400 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
            "
            >
              <div className="flex gap-3">
                <Image
                  src={svg.Image}
                  alt=""
                  className="rounded-full"
                  width="50px"
                  height="50px"
                />
                <div>
                  <p className="font-secondary text-[1rem]">{svg.Title}</p>
                  <p className="flex gap-2 font-primary">
                    <Image src={ethereum} alt="" width="14px" height="8px" />
                    {svg.Price}
                  </p>
                </div>
              </div>
              <div>
                <p className="bg-green-400 p-2 rounded-[2rem] text-[10px] text-green-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                  {svg.badge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularArtist;
