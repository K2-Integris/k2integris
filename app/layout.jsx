import "./css/style.css";
import Navigation from "@/components/Navigation";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Cookies from "@/components/Cookies";
import GTMInjector from "@/components/GTMInjector";

export const metadata = {
  title: "K2INTEGRIS",
  description: "Grow your business with our help",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        {/*<link rel="preload" href="/css/style-min.css" as="style" />
        <link rel="stylesheet" href="/css/style-min.css" />
        <meta name="apple-mobile-web-app-title" content="K2Integris" />*/}
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
