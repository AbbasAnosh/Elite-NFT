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
import svg10 from "../assets/images/image_12.png";

const SVG = [
  { Image: svg1, Title: "Super Mario", Price: "12456", badge: "+434534" },
  { Image: svg2, Title: "Eleanor Pena", Price: "67543", badge: "-123455" },
  { Image: svg3, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg4, Title: "", Price: "1245", badge: "+434534" },
  { Image: svg5, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg6, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg7, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg8, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg9, Title: "Super Mario", Price: "1245", badge: "+434534" },
  { Image: svg10, Title: "Super Mario", Price: "1245", badge: "+434534" },
];
import { BsArrowRight } from "react-icons/bs";
const Artist = () => {
  return (
    <section className="pt-[5rem]">
      <div className="container mx-auto">
        <div className="flex lg:justify-between mb-14 lg:mb-14 ">
          <h2 className="text-2xl font-secondary font-bold leading-3 mb-7">
            Editors Pick For This Week
          </h2>
          <button className="flex items-center gap-2 text-xl leading-3">
            See all artwork <BsArrowRight />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="box-content my-[2rem] mx-0 flex animate-[move_20s_linear_infinite]">
            <div className="">
              <Image src={svg1} alt="" />
            </div>
            <div className="">
              <Image src={svg2} alt="" />
            </div>
            <div className="">
              <Image src={svg3} alt="" />
            </div>
            <div className="">
              <Image src={svg4} alt="" />
            </div>
            <div className="">
              <Image src={svg5} alt="" />
            </div>
          </div>

          <div className="box-content my-[2rem] mx-0 flex flex-row-reverse animate-[Secondmove_20s_linear_infinite]">
            <div className="">
              <Image src={svg6} alt="" />
            </div>
            <div className="">
              <Image src={svg7} alt="" />
            </div>
            <div className="">
              <Image src={svg8} alt="" />
            </div>
            <div className="">
              <Image src={svg9} alt="" />
            </div>
            <div className="">
              <Image src={svg10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
