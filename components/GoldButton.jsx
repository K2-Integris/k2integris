'use client'

//import './GoldButton.css';
import TransitionLink from "./TransitionLink";

const GoldButton = ({ href = "#", children = "Click Me" }) => {
    return (
        <TransitionLink href={href} className="btn-11">
            {children}
            <span></span><span></span><span></span><span></span>
        </TransitionLink>
    )
}

export default GoldButton;
