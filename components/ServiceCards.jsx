"use client"

import { useEffect, useRef, useState } from "react";
import TransitionLink from "./TransitionLink";
import { LeftArrow, RightArrow } from "./Icons";

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
            <LeftArrow />
            left
          </button>
          <button id="right" onClick={() => handleArrow(1)} disabled={activeIndex === 3}>
            <RightArrow />
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
                Custom-built tools to streamline your operations.
              </h4>

              <p>
                We design and develop secure, scalable business applications tailored to your workflow — from internal platforms to client-facing portals. Seamless integration with your existing systems is our standard.
              </p>

              <TransitionLink href="app-development">
                details
              </TransitionLink>
              
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
                Your website is your digital flagship. We build modern, high-performance sites that reflect your brand and drive conversions. Designed from scratch, responsive on all devices and blazing fast.
              </p>

               <TransitionLink href="web-development">
                details
              </TransitionLink>
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

               <TransitionLink href="e-commerce">
                details
              </TransitionLink>
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

               <TransitionLink href="marketing-and-seo">
                details
              </TransitionLink>
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