import ScrollSeperator from "@/components/ScrollSeperator";
import styles from "./page.module.css";

import Navigation from "@/components/Navigation";

export default function Home() {

  return (
    <>
      <Navigation />
      <header>
       <div className="overlay"></div>
       <article className="wrapper">
        <h1>
            Empowering<br />Businesses to <span>Reach</span><br /> New Digital <span>Heights</span>
          </h1>

          <button className="cta">
            Our Solutions
          </button>
       </article>

       <ScrollSeperator />

       <article className="wrapper">
        <h2>
          A Strategic <span>Partner</span>,<br />
          Not Just a Vendor
        </h2>
       </article>
      </header>
    </>
  );
}

//<Image src="/images/persons.png" alt="Mateusz Kaminski & Viktor Karpinski" width={862} height={470} id="us" />
