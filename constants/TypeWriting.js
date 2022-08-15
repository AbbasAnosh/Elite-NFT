import React from "react";
import Typewriter from "typewriter-effect";

const TypeWriting = () => {
  return (
    <div>
      <Typewriter
        options={{ autoStart: true, loop: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<span style="color:#E50ED8; font-size:3rem; font-family: Akaya Telivigala, cursive">Collect <span style="color: #EAEAF0;">Digital</span></span>'
            )
            .pauseFor(2000)
            .deleteAll()
            .typeString(
              '<span style="color:#18EAB3; font-size:3rem; font-family: Akaya Telivigala, cursive">NFT <span style="color: #EAEAF0;">Items</span></span>'
            )
            .pauseFor(2000)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
};

export default TypeWriting;
