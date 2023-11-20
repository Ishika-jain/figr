import React, { useEffect, useState, useRef } from "react";

const Screen2 = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const wordRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isTextVisible = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  };

  const text = `
    Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
    libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur
    neque.
  `;

  const words = text.split(" ");

  return (
    <div className={`h-screen bg-black text-white font-bold flex justify-start items-center overflow-x-hidden`}>
      <div className="w-3/6 m-16 text-5xl">
        {words.map((word, index) => (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            style={{
              transition: "color 5s",
              color: isTextVisible(wordRefs.current[index]) ? "white" : "black",
            }}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Screen2;
