import React, { useState, useEffect } from "react";
import "./GoToTop.css";
import { FaArrowUp } from "react-icons/fa6";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      const heightToHidden = 250;
      const winScroll = window.scrollY;

      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", listenToScroll);

    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <a href="#" className="back-to-top d-flex align-items-center justify-content-center active">
          <FaArrowUp className="arrow" />
        </a>
      )}
    </>
  );
};

export default GoToTop;
