import React from "react";
import { AiFillHeart } from "react-icons/ai";

import profIm1 from "../assets/images/image_3.png";
import profIm2 from "../assets/images/image_5.png";
import profIm3 from "../assets/images/image_6.png";
import profIm4 from "../assets/images/image_7.png";
import profIm5 from "../assets/images/image_8.png";
import profIm6 from "../assets/images/image_9.png";

import img1 from "../assets/collection/1.png";
import img2 from "../assets/collection/2.png";
import img3 from "../assets/collection/3.png";
import img4 from "../assets/collection/4.png";
import img5 from "../assets/collection/5.png";
import img6 from "../assets/collection/6.png";
import img7 from "../assets/collection/7.png";
import img8 from "../assets/collection/8.png";
import img9 from "../assets/collection/9.png";
import img10 from "../assets/collection/10.png";
import img11 from "../assets/collection/11.png";
import img12 from "../assets/collection/12.png";
import img13 from "../assets/collection/13.png";
import img14 from "../assets/collection/5.png";
import img15 from "../assets/collection/15.png";
import img16 from "../assets/collection/2.png";
import img17 from "../assets/collection/9.png";
import img18 from "../assets/collection/18.png";
import img19 from "../assets/collection/10.png";

const CollectionNFT = [
  {
    profImage: profIm1,
    Title: "Splendid Fox",
    Created: "Created by",
    Name: "Ronald Richards",
    Bidg: "32",
    Image1: img1,
    Image2: img2,
    image3: img3,
  },
  {
    profImage: profIm2,
    Title: "Swagkids",
    Created: "Created by",
    Name: "Floyd Miles",
    Bidg: "57",
    Image1: img4,
    Image2: img5,
    image3: img6,
  },
  {
    profImage: profIm3,
    Title: "Uzumaki_Eve",
    Created: "Created by",
    Name: "Arlene McCoy",
    Bidg: "120",
    Image1: img7,
    Image2: img8,
    image3: img9,
  },
  {
    profImage: profIm4,
    Title: "Sussysmoke",
    Created: "Created by",
    Name: "Floyd Miles",
    Bidg: "250",
    Image1: img10,
    Image2: img11,
    image3: img12,
    image4: img13,
  },
  {
    profImage: profIm5,
    Title: "Prince Ape",
    Created: "Created by",
    Name: "Jereme Bell",
    Bidg: "320",
    Image1: img14,
    Image2: img15,
    image3: img16,
  },
  {
    profImage: profIm6,
    Title: "Amazing Laori",
    Created: "Created by",
    Name: "Courtney Henry",
    Bidg: "75",
    Image1: img17,
    Image2: img18,
    image3: img19,
  },
];

import { IoIosRocket } from "react-icons/io";
import Image from "next/image";
const Collection = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:justify-between pb-9">
          <h2 className="text-[2rem] mb-2 lg:text-[3rem] font-semibold">
            Popular Collections
          </h2>
          <div>
            <button
              href=""
              className="font-medium font-secondary h-11 px-6 bg-gradient-to-r from-[#EF18A5] to-[#C951E6] rounded text-[15px] hover:bg-gradient-to-b hover:from-[#5D4CEA] hover:to-[#C951E6] outline-none flex items-center gap-2 justify-center cursor-pointer"
            >
              <IoIosRocket />
              Explore All
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CollectionNFT.map((collection, index) => (
            <div key={index}>
              <div className="p-4 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
                <div className="flex justify-between mb-3">
                  <div className="flex gap-3">
                    <Image
                      src={collection.profImage}
                      alt=""
                      width="55px"
                      height="55px"
                      className="rounded-lg"
                    />
                    <div>
                      <p className="font-primary">{collection.Title}</p>
                      <div className="flex gap-1 items-center">
                        <p className="text-slate-400">{collection.Created}</p>
                        <p className="font-primary">{collection.Name}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-1 items-center bg-slate-500 rounded-lg p-1 text-sm">
                      <AiFillHeart />
                      {collection.Bidg}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap py-3 -m-2">
                  <div className="flex flex-wrap w-6/6">
                    <div className="w-full p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={collection.Image1}
                      />
                    </div>
                    <div className="w-2/4 p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={collection.Image2}
                      />
                    </div>
                    <div className="w-2/4 p-1 md:p-2">
                      <Image
                        alt="gallery"
                        className="block object-cover object-center w-full h-full rounded-lg"
                        src={collection.image3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;
