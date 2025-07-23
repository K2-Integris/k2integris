"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

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
                <Link id="logo" href="https://k2integris.com">
                    <Image src="/images/logo.png" width={29} height={17} alt="K2Integris Logo" />
                </Link>
                <Link className="text-logo" href="https://k2integris.com">
                    K2INTEGRIS
                </Link>

                <button id="hamburger" onClick={handleMenu} ref={burger}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <menu className="desktop">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/about", label: "About" },
                        { href: "/services", label: "Services", dropdown: [
                            { href: "/web-development", label: "Web - Development" },
                            { href: "/app-development", label: "App - Development" },
                            { href: "/e-commerce", label: "E - Commerce" },
                            { href: "/marketing-and-seo", label: "Marketing & SEO" },
                        ] },
                        { href: "/work", label: "Work" },
                        { href: "/contact", label: "Contact" }
                    ].map(({ href, label, dropdown }) => (
                        <div key={href}>
                            <Link
                                key={href}
                                href={href}
                                className={`link${isActive(href) ? " active" : ""}`}
                            >
                                {label}
                            </Link>
                            {dropdown !== undefined && (
                                <div className="dropdown">
                                    {dropdown.map(({href, label}) => (
                                        <Link
                                            key={href}
                                            href={href}
                                            className={`sublink${isActive(href) ? " active" : ""}`}
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </menu>
            </div>

            <menu className="mobile" ref={menu}>
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
                    <Link
                        key={href}
                        href={href}
                        className={`link${isActive(href) ? " active" : ""}`}
                    >
                        {svg}
                        {label}
                    </Link>
                ))}
            </menu>
        </nav>
    );
};

export default Navigation;

const HomeIcon = () => {
  return (
    <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 21V11H13V21M1 8L10 1L19 8V19C19 19.5304 18.7893 20.0391 18.4142 20.4142C18.0391 20.7893 17.5304 21 17 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const WorkIcon = () => {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19V3C15 2.46957 14.7893 1.96086 14.4142 1.58579C14.0391 1.21071 13.5304 1 13 1H9C8.46957 1 7.96086 1.21071 7.58579 1.58579C7.21071 1.96086 7 2.46957 7 3V19M3 5H19C20.1046 5 21 5.89543 21 7V17C21 18.1046 20.1046 19 19 19H3C1.89543 19 1 18.1046 1 17V7C1 5.89543 1.89543 5 3 5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const ServicesIcon = () => {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.5 3.21002L10 5.81002L14.5 3.21002M5.5 18.79V13.6L1 11M19 11L14.5 13.6V18.79M1.27 5.96002L10 11.01L18.73 5.96002M10 21.08V11M19 15V7.00002C18.9996 6.6493 18.9071 6.30483 18.7315 6.00119C18.556 5.69754 18.3037 5.44539 18 5.27002L11 1.27002C10.696 1.09449 10.3511 1.00208 10 1.00208C9.64893 1.00208 9.30404 1.09449 9 1.27002L2 5.27002C1.69626 5.44539 1.44398 5.69754 1.26846 6.00119C1.09294 6.30483 1.00036 6.6493 1 7.00002V15C1.00036 15.3508 1.09294 15.6952 1.26846 15.9989C1.44398 16.3025 1.69626 16.5547 2 16.73L9 20.73C9.30404 20.9056 9.64893 20.998 10 20.998C10.3511 20.998 10.696 20.9056 11 20.73L18 16.73C18.3037 16.5547 18.556 16.3025 18.7315 15.9989C18.9071 15.6952 18.9996 15.3508 19 15Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const ContactIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

const AboutIcon = () => {
    return (
        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M22 19V17C21.9993 16.1137 21.7044 15.2528 21.1614 14.5523C20.6184 13.8519 19.8581 13.3516 19 13.13M15 1.13C15.8604 1.35031 16.623 1.85071 17.1676 2.55232C17.7122 3.25392 18.0078 4.11683 18.0078 5.005C18.0078 5.89318 17.7122 6.75608 17.1676 7.45769C16.623 8.1593 15.8604 8.6597 15 8.88M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}