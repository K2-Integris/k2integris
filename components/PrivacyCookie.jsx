"use client"

const { useState, useEffect } = require("react")

const PrivacyCookie = () => {
    const [cookiesAccepted, setCookiesAccepted] = useState(null)

    useEffect(() => {
        const storedValue = window.localStorage.getItem("cookies")
        setCookiesAccepted(storedValue === "true")
    }, [])

    const handleApproval = () => {
        window.localStorage.setItem("cookies", true)
        setCookiesAccepted(true)
        window.dispatchEvent(new Event("cookieAccepted"));
    }

    const handleRejection = () => {
        window.localStorage.setItem("cookies", false)
        setCookiesAccepted(false)
    }

    return (
        <div>
            {cookiesAccepted ? (
                <button onClick={handleRejection}>REJECT COOKIES</button>
            ) : (
                <button onClick={handleApproval}>ACCEPT COOKIES</button>
            )}
        </div>
    )
}

export default PrivacyCookie