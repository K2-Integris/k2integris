"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Footer = () => {
    const footerRef = useRef();

    useEffect(() => {
        const updateBodyPadding = () => {
            if (footerRef.current) {
                const footerHeight = footerRef.current.offsetHeight;
                document.body.style.paddingBottom = `${footerHeight}px`;
            }
        };

        updateBodyPadding();
        window.addEventListener("resize", updateBodyPadding);

        return () => {
            window.removeEventListener("resize", updateBodyPadding);
        };
    }, []);

    return (
        <footer ref={footerRef}>
            <article className="wrapper">
                <Link className="logo" href="https://k2integris.com">
                    <Image src="/images/logo-black.png" width={79} height={50} alt="K2Integris Logo" />
                </Link>

                <ul className="horizontal">
                    <li>
                        <Link href="www.linkedin.com/company/k2integris/" target="_blank" className="link social" title="Our LinkedIn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                        </Link>
                    </li>

                    <li>
                        <Link href="https://www.instagram.com/k2integris/" target="_blank" className="link social" title="Our Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </Link>
                    </li>

                    <li>
                        <Link href="https://x.com/k2integris" target="_blank" className="link social" title="Our X">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="x">
                                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                            </svg>
                        </Link>
                    </li>
                </ul>
                
                <ul className="horizontal">
                    <li>
                        <Link href="imprint" className="link legal">
                            Imprint
                        </Link>
                    </li>
                    <li>
                        <Link href="terms-of-use" className="link legal">
                            Terms of Use
                        </Link>
                    </li>
                    <li>
                         <Link href="privacy-policy" className="link legal">
                            Privacy Policy
                        </Link>
                    </li>
                </ul>
            </article>

            <article className="wrapper">
                <ul className="list">
                    <li className="heading">
                        Our Offers
                    </li>
                    <li className="heading"></li>
                    <li>
                        <Link href="app-development" className="link page">
                            Business Apps
                        </Link>
                    </li>
                    <li>
                        <Link href="web-development" className="link page">
                            Custom Websites
                        </Link>
                    </li>
                    <li>
                         <Link href="e-commerce" className="link page">
                            E-Commerce
                        </Link>
                    </li>
                    <li>
                        <Link href="marketing-and-seo" className="link page">
                           Marketing and SEO
                        </Link>
                    </li>
                </ul>

                <ul className="list">
                    <li className="heading">
                        About Us
                    </li>
                    <li className="heading"></li>
                    <li>
                        <Link href="work" className="link page">
                            Our Work
                        </Link>
                    </li>
                    <li>
                        <Link href="testimonials" className="link page">
                            Testimonials
                        </Link>
                    </li>
                    <li>
                         <Link href="strategy" className="link page">
                            Strategy
                        </Link>
                    </li>
                    <li>
                         <Link href="philosophy" className="link page">
                            Philosophy
                        </Link>
                    </li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer;