'use client'
import Link from "next/link";
import './GoldButton.css';

const GoldButton = ({ href = "#", children = "Click Me" }) => {
    return (
        <Link href={href} className="btn-11">
            {children}
            <span></span><span></span><span></span><span></span>
        </Link>
    )
}

export default GoldButton;
