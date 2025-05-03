import { Outfit, Amiri } from "next/font/google";
import "./css/style.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const amiri = Outfit({
  variable: "--font-amiri",
  subsets: ["latin"],
});

export const metadata = {
  title: "K2INTEGRIS",
  description: "Grow your business with our help",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${amiri.variable}`}>{children}</body>
    </html>
  );
}
