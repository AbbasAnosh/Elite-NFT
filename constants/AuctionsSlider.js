import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";
import { motion } from "framer-motion";

import Image from "next/image";

import img1 from "../assets/newNFT/unnamed (6).jpg";
import img2 from "../assets/newNFT/unnamed.jpg";
import img3 from "../assets/newNFT/unnamed (4).jpg";
import img4 from "../assets/newNFT/unnamed (12).jpg";
import img5 from "../assets/newNFT/unnamed (3).jpg";

import imgprof1 from "../assets/avt1.png";
import imgprof2 from "../assets/avt2.png";
import imgprof3 from "../assets/avt3.png";
import imgprof4 from "../assets/avt4.png";

import { RiVipCrownFill } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";

const Collections = [
  {
    Image: img1,
    profImage: imgprof1,
    title: "Cyber_Punk",
    Created: "created by",
    Name: "Jane Cooper",
    Time: "9d 12h 30m",
  },
  {
    Image: img2,
    profImage: imgprof2,
    title: "Ss_Parkline",
    Created: "created by",
    Name: "Robert Fox",
    Time: "10d 05h 52m",
  },
  {
    Image: img3,
    profImage: imgprof3,
    title: "Orga_Tent",
    Created: "created by",
    Name: "Guy Hawkins",
    Time: "02d 05h 30m",
  },
  {
    Image: img4,
    profImage: imgprof4,
    title: "Cyber_Punk",
    Created: "created by",
    Name: "Jane Cooper",
    Time: "9d 12h 30m",
  },
  {
    Image: img5,
    profImage: imgprof1,
    title: "Orga_Tent",
    Created: "created by",
    Name: "Robert Fox",
    Time: "9d 12h 30m",
  },
];

const AuctionsSlider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        modules={[Autoplay]}
      >
        {Collections.map((collection, index) => {
          return (
            <SwiperSlide
              className="bg-gray-400 p-4 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
              "
              key={index}
            >
              <Image src={collection.Image} alt="" className="rounded-lg" />
              <div className="flex gap-4 py-2">
                <div>
                  <Image
                    src={collection.profImage}
                    alt=""
                    width="40px"
                    height="40px"
                  />
                </div>
                <div className="">
                  <p className="font-secondary text-[13px]">
                    {collection.title}
                  </p>
                  <div className="flex gap-1">
                    <p className="text-[12px] text-slate-400">
                      {collection.Created}
                    </p>
                    <p className="text-[12px] ">{collection.Name}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-2 px-4 items-center">
                <div className="flex flex-col gap-1 text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="red"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />{" "}
                  </svg>
                  372
                </div>
                <div className="flex flex-col gap-1 text-[12px]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                    <rect width="256" height="256" fill="none" />
                    <path
                      d="M45.1,196a8.1,8.1,0,0,0,10,5.9,273,273,0,0,1,145.7,0,8.1,8.1,0,0,0,10-5.9L236.3,87.7a8,8,0,0,0-11-9.2L174.7,101a8.1,8.1,0,0,1-10.3-3.4L135,44.6a8,8,0,0,0-14,0l-29.4,53A8.1,8.1,0,0,1,81.3,101L30.7,78.5a8,8,0,0,0-11,9.2Z"
                      fill="#efb43e"
                      stroke="#000"
                    />
                    <path
                      d="M96,161.7a297.7,297.7,0,0,1,64,0"
                      fill="none"
                      stroke="#000"
                    />
                  </svg>
                  <p>
                    <span className="text-[#efb43e]">1</span>/100
                  </p>
                </div>
                <div className="flex flex-col gap-1 text-[12px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    fill="#7150d3"
                    width="25px"
                    height="25px"
                  >
                    <path d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z" />
                  </svg>
                  <p>
                    5.00<span className="text-slate-400">ETH</span>
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <a className=" text-[13px] flex items-center gap-1 font-secondary border cursor-pointer h-[30px] px-4 rounded-lg">
                  <AiFillClockCircle />
                  {collection.Time}
                </a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 1 }}
                  className="text-[13px] flex items-center gap-1 font-secondary cursor-pointer bg-gradient-to-r from-[#EF18A5] to-[#5D4CEA] h-[25px] px-4 rounded-lg"
                >
                  <RiVipCrownFill /> Place Bid
                </motion.a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AuctionsSlider;
