import Image from "next/image";
import styles from "./page.module.css";

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <div className="wrapper">
          <h1>
            We help you grow <span>your business</span>
          </h1>
        </div>
      </header>
    </>
  );
}
