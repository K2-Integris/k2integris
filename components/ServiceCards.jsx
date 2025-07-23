"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const ServiceCards = () => {
  const cardWrapperRef = useRef();
  const cursorRef = useRef(null);
  const isManuallyScrolling = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index) => {
    const cardWidth = cardWrapperRef.current.firstChild.offsetWidth;
    isManuallyScrolling.current = true;

    cardWrapperRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActiveIndex(index);

    setTimeout(() => {
      isManuallyScrolling.current = false;
    }, 500); 
  };

  const handleArrow = (direction) => {
    const totalCards = cardWrapperRef.current.children.length;
    const nextIndex = Math.max(0, Math.min(activeIndex + direction, totalCards - 1));
    scrollToCard(nextIndex);
  };

useEffect(() => {
  const cursor = cursorRef.current;
  const wrapper = cardWrapperRef.current;

  if (!cursor || !wrapper) return;

  let visible = false;

  const handleMouseMove = (e) => {
    const x = e.clientX - 150;
    const y = e.clientY - 150;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;

    if (!visible) {
      cursor.style.display = "block";
      requestAnimationFrame(() => {
        cursor.style.transform = "scale(1)";
      });
      visible = true;
    }
  };

  const handleLeave = () => {
    if (visible) {
      cursor.style.transform = "scale(0)";
      setTimeout(() => {
        cursor.style.display = "none";
      }, 200);
      visible = false;
    }
  };

  const handleScroll = () => {
    if (isManuallyScrolling.current) return;

    const cardWidth = wrapper.firstChild.offsetWidth;
    const scrollLeft = wrapper.scrollLeft;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };


  wrapper.addEventListener("mousemove", handleMouseMove);
  wrapper.addEventListener("mouseleave", handleLeave);
  wrapper.addEventListener("scroll", handleScroll);

  return () => {
    wrapper.removeEventListener("mousemove", handleMouseMove);
    wrapper.removeEventListener("mouseleave", handleLeave);
    wrapper.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <>
        <div className="wrapper card-wrapper-arrows">
          <button id="left" onClick={() => handleArrow(-1)} disabled={activeIndex === 0}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_23_4" fill="white">
              <path d="M15 19L8 12L15 5"/>
              </mask>
              <path d="M14.6464 19.3536L15 19.7071L15.7071 19L15.3536 18.6464L14.6464 19.3536ZM8 12L7.64645 11.6464C7.45118 11.8417 7.45118 12.1583 7.64645 12.3536L8 12ZM15.3536 5.35355L15.7071 5L15 4.29289L14.6464 4.64645L15.3536 5.35355ZM15 19L15.3536 18.6464L8.35355 11.6464L8 12L7.64645 12.3536L14.6464 19.3536L15 19ZM8 12L8.35355 12.3536L15.3536 5.35355L15 5L14.6464 4.64645L7.64645 11.6464L8 12Z" fill="#1A1A1A" mask="url(#path-1-inside-1_23_4)"/>
            </svg>
            left
          </button>
          <button id="right" onClick={() => handleArrow(1)} disabled={activeIndex === 3}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_25_18" fill="white">
              <path d="M9 19L16 12L9 5"/>
              </mask>
              <path d="M9.35355 19.3536L9 19.7071L8.29289 19L8.64645 18.6464L9.35355 19.3536ZM16 12L16.3536 11.6464C16.5488 11.8417 16.5488 12.1583 16.3536 12.3536L16 12ZM8.64645 5.35355L8.29289 5L9 4.29289L9.35355 4.64645L8.64645 5.35355ZM9 19L8.64645 18.6464L15.6464 11.6464L16 12L16.3536 12.3536L9.35355 19.3536L9 19ZM16 12L15.6464 12.3536L8.64645 5.35355L9 5L9.35355 4.64645L16.3536 11.6464L16 12Z" fill="#1A1A1A" mask="url(#path-1-inside-1_25_18)"/>
            </svg>
            right
          </button>
        </div>

        <div className="card-wrapper" ref={cardWrapperRef}>
          <article className="card">
            <div className="content">
              <h3>
                Business Applications
              </h3>

              <h4>
                Custom-built toolsto streamline your operations.
              </h4>

              <p>
                We design and develop secure, scalable business applications tailored to your workflow — from internal platforms to client-facing portals. Seamless integration with your existing systems is our standard.
              </p>

              <Link href="app-development">
                details
              </Link>
              
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3>
                Custom Websites
              </h3>

              <h4>
                More than just beautiful — engineered for <span className="small"></span>results.
              </h4>

              <p>
                Your website is your digital flagship. We build modern, high-performance sites that reflect your brand and drive conversions. Designed from scratch, responsive on all devices<br />and blazing fast.
              </p>

               <Link href="web-development">
                details
              </Link>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3>
                E-Commerce
              </h3>

              <h4>
                Enterprise-grade online stores that <span className="small"></span>scale.
              </h4>

              <p>
                Whether B2B or B2C, we create e-commerce platforms that deliver. From UX to payment integrations, multilingual and multicurrency support, we optimize every step of the buyer journey for growth.
              </p>

               <Link href="e-commerce">
                details
              </Link>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3>
                Marketing & SEO
              </h3>

              <h4>
                We architect digital growth — not just <span className="small"></span>presence.
              </h4>

              <p>
                Get found, get clicks, get results. We offer full-service SEO, Google Ads, LinkedIn, and Meta campaigns tailored to your market. Backed by analytics and ROI tracking, always focused on business outcomes.
              </p>

               <Link href="marketing-and-seo">
                details
              </Link>
            </div>
          </article>
          <div className="cursor" ref={cursorRef}></div>
        </div>

        <div className="wrapper card-wrapper-bullets">
          {[0, 1, 2, 3].map((index) => (
            <div
              key={index}
              className={`bullet ${activeIndex === index ? "active" : ""}`}
            />
          ))}
        </div>
    </>
  )
}

export default ServiceCards;