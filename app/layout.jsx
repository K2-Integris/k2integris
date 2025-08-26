import "./css/style.css";
import Navigation from "@/components/Navigation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
import GTMInjector from "@/components/GTMInjector";
import PageTransition from "@/components/PageTransition";
import { PageTransitionProvider } from "@/components/PageTransitionContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       {/*
        <link rel="preload" href="/css/base.css" as="style" />
        <link rel="stylesheet" href="/css/base.css" />
        */}
        <meta name="apple-mobile-web-app-title" content="K2Integris" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="application-name" content="K2Integris" />
      </head>
      <body>
        <GTMInjector />
        <PageTransitionProvider>
          <Navigation />

          <PageTransition />

          {children}

          <Faq />

          <Cookies />
          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
