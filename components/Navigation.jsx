"use client"

import Image from "next/image";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "./TransitionLink";
import { AboutIcon, ContactIcon, HomeIcon, ServicesIcon, WorkIcon } from "./Icons";

const Navigation = () => {
    const burger = useRef();
    const menu = useRef();
    const nav = useRef();
    const pathname = usePathname();

    const handleMenu = () => {
        let isOpen = burger.current.classList.toggle('open');
        menu.current.classList.toggle('open')

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
            nav.current.classList.add('background')
        } else {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            handleScroll()
        }
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            nav.current.classList.add("background");
        } else {
            nav.current.classList.remove("background");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isActive = (href) => pathname === href;

    return (
        <nav id="nav" ref={nav}>
            <div className="wrapper">
                <TransitionLink id="logo" href="https://k2integris.com">
                    <Image src="/images/logo.png" width={29} height={17} alt="K2Integris Logo" />
                </TransitionLink>
                <TransitionLink className="text-logo" href="https://k2integris.com">
                    K2INTEGRIS
                </TransitionLink>

                <button id="hamburger" onClick={handleMenu} ref={burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                    Menu
                </button>

                <menu className="desktop">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/about", label: "About" },
                        {
                            href: "/services",
                            label: "Services",
                            dropdown: [
                            { href: "/web-development", label: "Web - Development" },
                            { href: "/app-development", label: "App - Development" },
                            { href: "/e-commerce", label: "E - Commerce" },
                            { href: "/marketing-and-seo", label: "Marketing & SEO" },
                            ],
                        },
                        { href: "/work", label: "Work" },
                        { href: "/contact", label: "Contact" },
                    ].map(({ href, label, dropdown }) => {
                        const isSubActive = dropdown?.some(d => isActive(d.href));
                        const activeClass = isActive(href) || isSubActive ? " active" : "";

                        return (
                            <div key={href}>
                                {dropdown ? (
                                    <span className={`link${activeClass}`}>{label}</span>
                                ) : (
                                    <TransitionLink
                                    href={href}
                                    className={`link${activeClass}`}
                                    >
                                    {label}
                                    </TransitionLink>
                                )}
                                {dropdown && (
                                    <div className="dropdown">
                                    {dropdown.map(({ href, label }) => (
                                        <TransitionLink
                                            key={href}
                                            href={href}
                                            className={`sublink${isActive(href) ? " active" : ""}`}
                                        >
                                            {label}
                                        </TransitionLink>
                                    ))}
                            </div>
                        )}
                    </div>
                    );
                    })}
                </menu>
            </div>

            <menu className="mobile" ref={menu}>
                <div className="transparent" onClick={handleMenu}></div>
                <div className="menu-container">
                    {[
                        { href: "/", label: "Home", svg: <HomeIcon /> },
                        { href: "/about", label: "About", svg: <AboutIcon /> },
                        //{ href: "/services", label: "Services", svg: <ServicesIcon /> },
                        { href: "/web-development", label: "Web - Development", svg: <ServicesIcon /> },
                        { href: "/app-development", label: "App - Development", svg: <ServicesIcon /> },
                        { href: "/e-commerce", label: "E - Commerce", svg: <ServicesIcon /> },
                        { href: "/marketing-and-seo", label: "Marketing & SEO", svg: <ServicesIcon /> },
                        { href: "/work", label: "Work", svg: <WorkIcon /> },
                        { href: "/contact", label: "Contact", svg: <ContactIcon /> }
                    ].map(({ href, label, svg }) => (
                        <TransitionLink
                            key={href}
                            href={href}
                            className={`link${isActive(href) ? " active" : ""}`}
                            onClicked={handleMenu}
                        >
                            {svg}
                            {label}
                        </TransitionLink>
                    ))}
                </div>
            </menu>
        </nav>
    );
};

export default Navigation;