import Image from "next/image";
import React from "react";
import icon1 from "../assets/icons/icons8-card-wallet-96.png";
import icon2 from "../assets/icons/icons8-collectibles-96.png";
import icon3 from "../assets/icons/icons8-exchange-bitcoin-96.png";
import icon4 from "../assets/icons/icons8-remove-tag-96.png";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const Data = [
  {
    icon: icon1,
    title: "Set up your wallet",
    paragraph:
      "Wallet tha is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
  },
  {
    icon: icon2,
    title: "Create your collection",
    paragraph:
      "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection.",
  },
  {
    icon: icon3,
    title: "Add your NFTs",
    paragraph:
      "We'll be building on a background of modern web development. Along the way, we'll get familiar with the core technologies that make NFTs possible. ",
  },
  {
    icon: icon4,
    title: "List them for sale",
    paragraph:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.",
  },
];

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible,
};

const Transaction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16" ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.02,.98,.71,.31) 0.5s",
        }}
        className="container mx-auto"
      >
        <h2 className="text-2xl font-secondary font-bold leading-3 mb-14">
          Create and sell your NFTs
        </h2>
        <motion.div
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 1 } }}
          variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 items-center"
        >
          {Data.map((data, i) => (
            <div key={i}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <Image src={data.icon} alt="" />
              </motion.div>
              <motion.h3
                variants={itemVariants}
                className="font-secondary text-xl py-4"
              >
                {data.title}
              </motion.h3>
              <motion.p
                variants={itemVariants}
                className="font-primary text-[15px] text-justify text-slate-300"
              >
                {data.paragraph}
              </motion.p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Transaction;
