"use client"

import { useEffect, useRef } from "react"

const Cookies = () => {

    const banner = useRef()

    useEffect(() => {
        if (!window.localStorage.getItem("cookies") || window.localStorage.getItem("cookies") === "false") {
            banner.current.classList.add("active")
        }
    }, [])


    const handleAccept = () => {
        banner.current.classList.remove("active")
        window.localStorage.setItem("cookies", true)
        window.dispatchEvent(new Event("cookieAccepted"));
    }

    const handleReject = () => {
        banner.current.classList.remove("active")
        window.localStorage.setItem("cookies", false)
    }
    
    return (
        <article id="cookiebanner" ref={banner}>
            <div className="wrapper">
                <h3>We value your privacy</h3>
                <p>
                    We use cookies solely to analyze website traffic through Google Analytics. No personal data is stored or shared for advertising purposes. 
                    By clicking "Accept", you agree to the use of these cookies. For more details, see our Cookie Policy.
                </p>
                <div className="actions">
                    <button id="accept" onClick={handleAccept}>Accept</button>
                    <button id="reject" onClick={handleReject}>Reject</button>
                </div>
            </div>
        </article>
    )
}

export default Cookies