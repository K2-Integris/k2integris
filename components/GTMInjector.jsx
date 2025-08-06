"use client";

import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-44XBTF444Z";

const injectGA = () => {
  if (document.getElementById("gtag-script")) return;

  // Load external GA script
  const scriptTag = document.createElement("script");
  scriptTag.id = "gtag-script";
  scriptTag.async = true;
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(scriptTag);

  // Inline config script
  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(inlineScript);
};

const injectStyle = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/css/rest.css';
  document.head.appendChild(link);
}

const GAInjector = () => {
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        injectStyle();

        const checkConsentAndInject = () => {
          if (window.localStorage.getItem("cookies") === "true") {
            injectGA();
            console.log("Injected GA4 gtag.js");
          }
        };

        checkConsentAndInject();
        window.addEventListener("cookieAccepted", checkConsentAndInject);
      }, 300)
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("cookieAccepted", handleLoad);
    };
  }, []);

  return null;
};

export default GAInjector;
