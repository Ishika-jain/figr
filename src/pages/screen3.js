import React, { useEffect, useState } from "react";

const Screen3 = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const percentage = (scrolled / scrollHeight) * 100;
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black h-screen text-white flex justify-center overflow-x-hidden">
      <div className="w-2/3 h-3/4 flex">
        <div className="w-1/2 m-10 flex flex-col justify-center">
          <div className="text-purple-300">🔷Workflow</div>
          <div className="text-7xl font-bold">Korem ipsum dolor sit amet</div>
          <div className="text-md mt-4 text-gray-100 text-opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
            interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className="w-1/2 my-10 ml-8 flex justify-center items-center">
          <div
            className="bg-gray-400 change rounded-xl w-full h-full"
            style={{ backgroundColor: `hsl(${scrollPercentage}, 50%, 50%)` }}
          ></div>
          <div className="h-full w-2 ml-4">
            <div>01</div>
            <div
              className="h-5/6 w-2 ml-1 my-4 bg-gray-200 bg-opacity-50  rounded-full"
            ></div>
            <div>03</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
