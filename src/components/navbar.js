import React, { useState } from "react";
import Logo from "../assests/logo.png";

const Navbar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("product");

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    closeMobileNav();
  };

  const isTabActive = (tab) => activeTab === tab;

  return (
    <div>
      <nav className="p-8 hidden lg:flex ">
        <div className="container mx-10 flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <img src={Logo} alt="logo" draggable="false" />
          </div>
          <div className="flex space-x-4">
            <div
              onClick={() => handleTabClick("product")}
              className={`cursor-pointer text-white  px-3 py-2 rounded ${
                isTabActive("product") && "underline"
              }`}
            >
              Product
            </div>
            <div
              onClick={() => handleTabClick("ourStory")}
              className={`cursor-pointer text-white  px-3 py-2 rounded ${
                isTabActive("ourStory") && "underline"
              }`}
            >
              Our Story
            </div>
            <div
              onClick={() => handleTabClick("careers")}
              className={`cursor-pointer text-white  px-3 py-2 rounded ${
                isTabActive("careers") && "underline"
              }`}
            >
              Careers
            </div>
          </div>
          <div>
            <button className="bg-white px-3 py-2 rounded-lg">Join Beta</button>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <nav className="bg-black p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white font-bold text-xl">
              <img src={Logo} alt="logo" draggable="false" />
            </div>
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileNav}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </nav>

        {isMobileNavOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-75"
            onClick={closeMobileNav}
          >
            <div className="p-4">
              <div className="flex justify-end">
                <button
                  onClick={closeMobileNav}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-4 space-y-4">
                <div
                  onClick={() => handleTabClick("product")}
                  className={`cursor-pointer text-white block  px-3 py-2 rounded ${
                    isTabActive("product") && "underline"
                  }`}
                >
                  Product
                </div>
                <div
                  onClick={() => handleTabClick("ourStory")}
                  className={`cursor-pointer text-white block  px-3 py-2 rounded ${
                    isTabActive("ourStory") && "underline"
                  }`}
                >
                  Our Story
                </div>
                <div
                  onClick={() => handleTabClick("careers")}
                  className={`cursor-pointer text-white block  px-3 py-2 rounded ${
                    isTabActive("careers") && "underline"
                  }`}
                >
                  Careers
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
