import Image from "next/image";
import styles from "./page.module.css";

import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <header>
        <Navigation />
        <div className="overlay">
          <div className="wrapper header">
            <h1>
              Empowering <span>Businesses</span> to Reach New Digital <span>Heights</span>
            </h1>

            <button>
              REQUEST A CONSULTATION
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

//<Image src="/images/persons.png" alt="Mateusz Kaminski & Viktor Karpinski" width={862} height={470} id="us" />
