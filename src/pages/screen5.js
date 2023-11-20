import React from "react";

const Screen5 = () => {
  return (
    <div className="bg-black max-h-screen text-white overflow-hidden">
      <div className="h-full flex w-full flex-col justify-start ">
        <div className="w-1/3 flex flex-col mt-32 ml-32 mb-10">
          <div className="text-purple-300">🔷Introducing Blocks</div>
          <div className="text-6xl font-bold">A new, easy way to create.</div>
          <div className="text-md mt-4 text-gray-100 text-opacity-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className="flex w-full h-screen">
          <div className="flex-3  flex-col mr-4 overflow-hidden">
            <div className="w-32 h-56 rounded-e-md mb-4 bg-gray-500 bg-opacity-25 "></div>
            <div className="w-32 h-32 rounded-e-md bg-gray-500 bg-opacity-75 "></div>
          </div>
          <div className="flex-1 mx-4 rounded-md overflow-hidden">
            <div className="w-full h-12 rounded-md mb-2 bg-black bg-opacity-25"></div>
            <div className="w-full h-32 rounded-md mb-4 bg-gray-500 bg-opacity-75"></div>
            <div className="w-full h-44 rounded-md bg-gray-600 bg-opacity-75"></div>
          </div>
          <div className="flex-1  rounded-md mx-4 overflow-hidden">
            <div className="w-full h-56 rounded-md mb-4 bg-gray-500 bg-opacity-25"></div>
            <div className="w-full h-44 rounded-md bg-gray-400 bg-opacity-75"></div>
          </div>
          <div className="flex-1  mx-4 rounded-md overflow-hidden">
            <div className="w-full h-32 rounded-md mb-4 bg-gray-500 bg-opacity-75"></div>
            <div className="w-full h-44 rounded-md mb-4 bg-gray-500 bg-opacity-25"></div>
            <div className="w-full h-32 rounded-md bg-black bg-opacity-75"></div>
          </div>
          <div className="flex-3 ml-4 rounded-md overflow-hidden">
            <div className="w-full h-32 rounded-s-md mb-2 bg-black bg-opacity-75"></div>
            <div className="w-32 h-44 rounded-s-md mb-4 bg-gray-500 bg-opacity-25"></div>
            <div className="w-32 h-32 rounded-s-md bg-gray-500 bg-opacity-75"></div>
            5
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen5;
