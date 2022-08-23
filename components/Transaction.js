import Image from "next/image";
import React from "react";
import icon1 from "../assets/icons/icons8-card-wallet-96.png";
import icon2 from "../assets/icons/icons8-collectibles-96.png";
import icon3 from "../assets/icons/icons8-exchange-bitcoin-96.png";
import icon4 from "../assets/icons/icons8-remove-tag-96.png";

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
const Transaction = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-secondary font-bold leading-3 mb-14">
          Create and sell your NFTs
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10 items-center">
          {Data.map((data, i) => (
            <div key={i}>
              <Image src={data.icon} alt="" />
              <h3 className="font-secondary text-xl py-4">{data.title}</h3>
              <p className="font-primary text-[15px] text-justify text-slate-300">
                {data.paragraph}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transaction;
