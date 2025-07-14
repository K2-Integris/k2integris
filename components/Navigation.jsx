"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";

const Navigation = () => {
    const menu = useRef();
    const navRef = useRef();

    const handleMenu = () => {
        menu.current.classList.toggle('open');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                navRef.current.classList.add("background");
            } else {
                navRef.current.classList.remove("background");
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav ref={navRef}>
            <div className="wrapper">
                <Link id="logo" href="https://k2integris.com">
                    <Image src="/images/logo.png" width={29} height={17} alt="K2Integris Logo" />
                </Link>
                <Link id="text-logo" href="https://k2integris.com">
                    K2INTEGRIS
                </Link>

                <button id="hamburger" onClick={handleMenu} ref={menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
