import React, { useState, useEffect } from "react";
import Frame from "../assests/Frame.png";
import "../customStyle.css";

const LandingPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveUpStyle = {
    transform: `perspective(1000px) rotateX(${-scrollY * 0.05}deg)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="h-full flex justify-center items-center mx-28 p-10">
      <div
        className="bg-black border border-gray-50 border-opacity-30 rounded-lg w-6/6 h-full contain green-cursor moveup"
        style={moveUpStyle}
      >
        <div className="border border-gray-50 border-opacity-30 bg-gray-500 bg-opacity-30 flex ml-5 mr-10 mt-16 h-5/6 p-2 rounded-lg">
          <div className="w-1/2">
            <div className="mt-10 custom-button">
              ✨ $7.5M seed raised with Accel & Square Peg
            </div>
            <div className="text-6xl mt-5 w-5/6 font-bold text-white">
              Impactful stories. Made effortlessly
            </div>
            <div className="text-md mt-10 font-semibold text-opacity-50 text-gray-200">
              Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
          </div>
          <div className="flex justify-center items-center h-full">
            <img src={Frame} alt="s" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
