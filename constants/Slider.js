import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "../styles/Slider.module.css";

import { EffectCards } from "swiper";

import img1 from "../assets/newNFT/unnamed (2).jpg";
import img2 from "../assets/newNFT/unnamed (3).jpg";
import img3 from "../assets/newNFT/unnamed (5).jpg";
import img4 from "../assets/newNFT/unnamed (6).jpg";
import Image from "next/image";

const Photos = [
  { Image: img1 },
  { Image: img2 },
  { Image: img3 },
  { Image: img4 },
];
const Slider = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {Photos.map((nft, i) => (
          <SwiperSlide key={i} className="styles.swiper-slide">
            <Image src={nft.Image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
