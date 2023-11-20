import React from "react";
import Rect from "../assests/Rectangle.png";
import icon1 from "../assests/icon1.png";
import icon2 from "../assests/icon2.png";

const Screen4 = () => {
  return (
    <div className="bg-black h-screen text-white flex justify-center overflow-hidden">
      <div className="w-2/3 h-3/4 flex ">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="text-purple-300">🔷Mobile experience</div>
          <div className="text-7xl font-bold">Korem ipsum dolor sit amet</div>
          <div className="text-md mt-4 text-gray-100 text-opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className=" w-1/2 my-10 ml-8 flex justify-center items-center">
          <div>
            <button></button>
            <button></button>
          </div>
          <div className="rounded-xl w-full h-full relative ">
            <div className="flex justify-center items-center w-full">
              <div className="flex justify-center mb-16 rounded-lg border border-white border-opacity-50 w-fit items-center">
                <button className="p-2 rounded-lg bg-gray-200">
                  <img src={icon1} alt="laptop" />
                </button>
                <button className="p-2 ">
                  <img src={icon2} alt="laptop" />
                </button>
              </div>
            </div>
              <img
                src={Rect}
                alt="rect"
                className="w-2/5 absolute -rotate-12 left-0 "
              />
              <img
                src={Rect}
                alt="rect"
                className="w-2/5 absolute z-10 left-36 top-20"
              />
              <img
                src={Rect}
                alt="rect"
                className="w-2/5 absolute rotate-12 left-72"
              />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen4;
