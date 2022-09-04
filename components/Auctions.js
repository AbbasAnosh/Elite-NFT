import React from "react";
import AuctionsSlider from "../constants/AuctionsSlider";
import { useRef } from "react";
import { useInView } from "framer-motion";
const Auctions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="mb-64 lg:mb-48" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.56,1.31,.44,-0.73) 0.5s",
        }}
        className="container mx-auto"
      >
        <div className="bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Live auctions</h2>
            <p className="max-w-2xl mx-auto mb-12 lg:mb-24">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              provident deleniti. Eius soluta quisquam ex, nam dolor excepturi
              id accusamus.
            </p>
          </div>
          <div>
            <AuctionsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auctions;
