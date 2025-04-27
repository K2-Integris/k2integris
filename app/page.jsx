import Image from "next/image";
import styles from "./page.module.css";

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <header>
        <div className="overlay">
          <Navigation />
          <div className="wrapper">
            <h1>
              We help you grow <span>your business</span>
            </h1>
          </div>
          <Image src="/images/persons.png" alt="Mateusz Kaminski & Viktor Karpinski" width={862} height={470} id="us" />
          <button>
            OUR SERVICES
          </button>
        </div>
      </header>
    </>
  );
}
