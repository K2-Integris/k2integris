"use client"

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Navigation = () => {

    const menu = useRef()

    const handleMenu = () => {
        menu.current.classList.toggle('open')
    }

    return (
        <nav>
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
    )
}

export default Navigation;