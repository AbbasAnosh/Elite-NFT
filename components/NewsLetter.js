import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
const NewsLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="pt-[5rem] pb-[6rem]" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.09,1.94,1,-0.33) 0.5s",
        }}
        className="container mx-auto"
      >
        <div className="bg-purple-400 rounded-md bg-clip-padding p-4 backdrop-filter backdrop-blur-sm bg-opacity-10 ">
          <h2 className="font-primary text-[1.4rem] lg:text-[3.5rem] text-center">
            What are you waiting for <br /> Explore now!
          </h2>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className="flex justify-center align-center pt-[3rem]"
          >
            <button
              href=""
              className="font-medium font-secondary h-11 px-12 bg-gradient-to-r from-[#EF18A5] to-[#C951E6] rounded text-[15px] hover:bg-gradient-to-b hover:from-[#5D4CEA] hover:to-[#C951E6] outline-none flex items-center gap-2 justify-center cursor-pointer"
            >
              Get Started Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
