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
        <nav id="nav" ref={navRef}>
            <div className="wrapper">
                <Link id="logo" href="https://k2integris.com">
                    <Image src="/images/logo.png" width={29} height={17} alt="K2Integris Logo" />
                </Link>
                <Link className="text-logo" href="https://k2integris.com">
                    K2INTEGRIS
                </Link>

                <button id="hamburger" onClick={handleMenu} ref={menu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <menu className="desktop">
                    <Link href="" className="link">
                        Home
                    </Link>
                    <Link href="" className="link">
                        About
                    </Link>
                    <Link href="" className="link">
                        Services
                    </Link>
                    <Link href="" className="link">
                        Work
                    </Link>
                    <Link href="" className="link">
                        Contact
                    </Link>
                </menu>
            </div>
        </nav>
    );
};

export default Navigation;
