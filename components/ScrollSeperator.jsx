"use client"

import { useEffect } from "react";

const ScrollSeperator = () => {
    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
          const scrollSeperator = document.querySelector(".scroll-seperator");
          if (scrollSeperator) {
            scrollSeperator.style.transform = `translateX(-${scrollY * 0.5}px)`;
          }
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="scroll-seperator">
            <p>
              Your Partner in Digital Growth
            </p>
            <div className="seperator"></div>
            <p>
              Custom Web Development
            </p>
            <div className="seperator"></div>
            <p>
              UX & UI Design
            </p>
            <div className="seperator"></div>
            <p>
              Enterprise-Grade E-Commerce Development
            </p>
            <div className="seperator"></div>
            <p>
              Your End-to-End Digital Agency Partner
            </p>
            <div className="seperator"></div>
            <p>
              Digital Strategy That Drives Results
            </p>
            <p>
              Future-Proof Software for Modern Companies
            </p>
            <p>
              SEO & Marketing That Converts
            </p>
            <div className="seperator"></div>
       </div>
    )
}

export default ScrollSeperator