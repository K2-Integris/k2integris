//import { Outfit, Amiri, Syncopate } from "next/font/google";
//import "./css/style-min.css";
import Navigation from "@/components/Navigation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
import GTMInjector from "@/components/GTMInjector";

/*const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap", 
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  display: "swap", 
  weight: ["400", "700"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  display: "swap", 
  weight: ["400", "700"],
});*/

export const metadata = {
  title: "K2INTEGRIS",
  description: "Grow your business with our help",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/css/style-min.css" as="style" />
        <link rel="stylesheet" href="/css/style-min.css" />
      </head>
      <body>
        <GTMInjector />
        <Navigation />

        {children}

         <Faq />

         <Cookies />
        <Footer />
      </body>
    </html>
  );
}
