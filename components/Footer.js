// import React from "react";
// import { MdSend } from "react-icons/md";
// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import { BsFacebook } from "react-icons/bs";
// import { AiFillTwitterCircle } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";
// import { BsTwitch } from "react-icons/bs";
// import { motion } from "framer-motion";
// const Footer = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <footer className="pb-[3rem]" ref={ref}>
//       <div
//         style={{
//           transform: isInView ? "none" : "translateY(-200px)",
//           opacity: isInView ? 1 : 0,
//           transition: "all 0.9s cubic-bezier(.09,1.94,1,-0.33) 0.5s",
//         }}
//         className="bg-purple-400 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
//       >
//         <div className="container mx-auto">
//           <div className="flex flex-col lg:flex lg:flex-row lg:gap-20 ">
//             <div className="flex flex-col gap-3">
//               <p className="font-primary text-2xl font-bold">Elite NFT</p>
//               <p className="font-primary text-lg">
//                 Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
//                 Totam incidunt iure laborum est.
//               </p>
//               <div className="flex gap-2">
//                 <motion.div whileHover={{ scale: 1.2 }}>
//                   <BsFacebook />
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.2 }}>
//                   <AiFillTwitterCircle />
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.2 }}>
//                   <AiFillInstagram />
//                 </motion.div>
//                 <motion.div whileHover={{ scale: 1.2 }}>
//                   <BsTwitch />
//                 </motion.div>
//               </div>
//             </div>

//             <div>
//               <p className="font-primary text-xl mb-4">My Account</p>

//               <div className="flex flex-col gap-2 text-slate-400">
//                 <p>Authors</p>
//                 <p>Collection</p>
//                 <p>Author Profiles</p>
//                 <p>Create Collection</p>
//               </div>
//             </div>
//             <div>
//               <p className="font-primary text-xl mb-4">Resources</p>
//               <div className="flex flex-col gap-2 text-slate-400">
//                 <p>Help & support</p>
//                 <p>Live Auctions</p>
//                 <p>Item Details</p>
//                 <p>Activity</p>
//               </div>
//             </div>
//             <div>
//               <p className="font-primary text-xl mb-4">Company</p>
//               <div className="flex flex-col gap-2 text-slate-400">
//                 <p>About Us</p>
//                 <p>Contact Us</p>
//                 <p>Our Blog</p>
//                 <p>Discover</p>
//               </div>
//             </div>
//             {/* <div>
//               <p className="font-primary text-xl mb-4">Subscribe Us</p>
//               <div className="relative lg:flex lg:justify-end">
//                 <input
//                   type="email"
//                   placeholder="info@yourgmail.com"
//                   className="p-2 rounded-lg"
//                 />

//                 <MdSend className="absolute bg-red-500 text-[42px] p-2 rounded-tr-lg rounded-br-lg " />
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//       {/* </div> */}
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitch } from "react-icons/bs";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer
      className="mb-20 bg-purple-400 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 "
      ref={ref}
    >
      <div
        style={{
          transform: isInView ? "none" : "translateY(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(.09,1.94,1,-0.33) 0.5s",
        }}
        className="container mx-auto"
      >
        <div className="grid grid-cols-2 space-y-3 space-x-3 lg:flex lg:justify-between mb-16">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-10 font-primary">Elite NFT</h1>
            <div className="flex gap-2">
              <motion.div whileHover={{ scale: 1.2 }}>
                <BsFacebook />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <AiFillTwitterCircle />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <AiFillInstagram />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }}>
                <BsTwitch />
              </motion.div>
            </div>
          </div>

          <div>
            <div>
              <p className="font-primary text-xl mb-4">My Account</p>

              <div className="flex flex-col gap-2 text-slate-400">
                <p>Authors</p>
                <p>Collection</p>
                <p>Author Profiles</p>
                <p>Create Collection</p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-primary text-xl mb-4">Resources</p>
            <div className="flex flex-col gap-2 text-slate-400">
              <p>Help & support</p>
              <p>Live Auctions</p>
              <p>Item Details</p>
              <p>Activity</p>
            </div>
          </div>
          <div>
            <p className="font-primary text-xl mb-4">Company</p>
            <div className="flex flex-col gap-2 text-slate-400">
              <p>About Us</p>
              <p>Contact Us</p>
              <p>Our Blog</p>
              <p>Discover</p>
            </div>
          </div>
        </div>
        <div className="text-center text-white/70">2022 Elite NFT Inc.</div>
      </div>
    </footer>
  );
};

export default Footer;
