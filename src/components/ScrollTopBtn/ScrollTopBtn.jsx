import React, { useEffect } from "react";
import "./ScrollTopBtn.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopBtn = () => {
  useEffect(() => {
    const scrollUpBtn = document.querySelector(".scrollUpBtn");

    if (!scrollUpBtn) return;

    // toggle 'scroll to top' based on scroll position
    window.addEventListener("scroll", (e) => {
      scrollUpBtn.style.display = window.scrollY > 500 ? "flex" : "none";
    });
  }, []);

  // scroll to top of page when button clicked
  const scrollToTop = () => {
    const scrollUpBtn = document.querySelector(".scrollUpBtn");

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <button onClick={scrollToTop} className="scrollUpBtn">
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollTopBtn;
