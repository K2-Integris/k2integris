import { Outfit, Amiri, Syncopate } from "next/font/google";
import "./css/style.css";
import Navigation from "@/components/Navigation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
import GTMInjector from "@/components/GTMInjector";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata = {
  title: "K2INTEGRIS",
  description: "Grow your business with our help",
};

export default function RootLayout({ children }) {

  const handleCookies = (state) => {
    console.log("Cookie Attribute: ", state)
  }

  return (
    <html lang="en">
      <body className={`${outfit.variable} ${amiri.variable}  ${syncopate.variable}`}>
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
