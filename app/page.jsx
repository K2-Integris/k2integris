import ScrollSeperator from "@/components/ScrollSeperator";
import styles from "./page.module.css";

import Navigation from "@/components/Navigation";
import Link from "next/link";

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
            Request a Consultation
          </button>
       </article>

       <ScrollSeperator />

       <article className="wrapper">
        <h2>
          A Strategic <span>Partner</span>,<br />
          Not Just a Vendor
        </h2>
        <p>
          At K2Integris, we don't just write code or push pixels. We align digital solutions with your core business goals — delivering long-term value through strategic thinking, clean engineering, and operational insight.
        </p>
        <div className="info-box">
          <Link href="">
            Business Apps
          </Link>
          <Link href="">
            Websites
          </Link>
          <Link href="">
            eCommerce
          </Link>
          <Link href="">
            Advertisement
          </Link>
        </div>
       </article>

       <article className="snapp">
        <div className="card">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0833 13.125V15.3533C31.3892 16.3596 26.5198 18.2277 17.8354 18.2277C8.73687 18.2277 3.63708 16.2473 2.91667 15.1827V13.125H32.0833ZM35 10.2083H0V15.2994C0 19.1742 8.97458 21.1458 17.8354 21.1458C26.4717 21.1458 35 19.2733 35 15.4656V10.2083ZM32.0833 21.9829V29.1667H2.91667V21.8735C1.71646 21.3821 0.76125 20.8367 0 20.2752V32.0833H35V20.491C34.1498 21.0773 33.1596 21.5717 32.0833 21.9829ZM20.4167 24.8383C20.4167 26.4235 19.11 27.7083 17.5 27.7083C15.89 27.7083 14.5833 26.4235 14.5833 24.8383V23.3333H20.4167V24.8383ZM13.125 2.91666C11.515 2.91666 10.2083 4.22332 10.2083 5.83332V8.74999H13.125V6.56249C13.125 6.15999 13.4517 5.83332 13.8542 5.83332H21.1458C21.5483 5.83332 21.875 6.15999 21.875 6.56249V8.74999H24.7917V5.83332C24.7917 4.22332 23.485 2.91666 21.875 2.91666H13.125Z" fill="url(#paint0_linear_106_367)"/>
            <defs>
            <linearGradient id="paint0_linear_106_367" x1="23.4536" y1="9.44078" x2="44.4139" y2="21.9002" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D3A97C"/>
            <stop offset="0.543269" stopColor="#564533"/>
            </linearGradient>
            </defs>
          </svg>

          <h3>
            Tailored<br />Solutions
          </h3>

          <p>
            Custom-built platforms engineered to fit your operations — not the other way around.
          </p>
        </div>

        <div className="card">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_106_308)">
            <path d="M29.62 35C28.468 35 27.3387 34.532 26.524 33.7173L11.92 19.1147C11.5533 18.7493 11.0467 18.5387 10.528 18.5387L10.38 18.544C8.13867 18.716 5.88267 17.9027 4.268 16.288C2.80533 14.8227 2 12.8733 2 10.7987C2 9.404 2.316 7.832 2.95333 6.42667L8.032 11.508C8.61333 11.4107 9.32267 10.984 9.90533 10.2613C10.2827 9.79467 10.4747 9.36133 10.5267 9.048L5.42533 3.94667C6.83333 3.312 8.384 3 9.76533 3C11.8093 3 13.8227 3.80133 15.2893 5.26933C16.9 6.88133 17.72 9.10933 17.5427 11.3813C17.5013 11.952 17.7093 12.516 18.116 12.9227L32.7173 27.524C33.544 28.352 34 29.452 34 30.62C34 33.0347 32.0347 35 29.62 35ZM10.528 15.876C11.748 15.876 12.9413 16.3707 13.8027 17.2333L28.4067 31.8347C28.7253 32.1547 29.168 32.3373 29.6187 32.3373C30.5653 32.3373 31.336 31.568 31.336 30.6213C31.336 30.1627 31.1573 29.732 30.832 29.4067L16.2333 14.8053C15.28 13.8507 14.7893 12.5293 14.888 11.1813C15.0053 9.67867 14.4653 8.212 13.4067 7.152C12.7493 6.496 11.9427 6.04133 11.0627 5.81867L13.0493 7.80667C13.34 9.14133 13.216 10.4027 11.9773 11.936C10.6413 13.5933 8.92133 14.512 6.804 14.0507L4.81867 12.064C5.04133 12.944 5.496 13.752 6.152 14.4093C7.21333 15.468 8.676 16.0093 10.1747 15.8893L10.528 15.876ZM29.6 29.9333C29.232 29.9333 28.9333 30.232 28.9333 30.6C28.9333 30.968 29.232 31.2667 29.6 31.2667C29.968 31.2667 30.2667 30.968 30.2667 30.6C30.2667 30.232 29.9693 29.9333 29.6 29.9333ZM14.5067 25.472L8.17333 31.8573C7.952 32.0787 7.59067 32.0787 7.36933 31.8573C7.14933 31.636 7.148 31.276 7.36933 31.0547L13.704 24.6693L12.4547 23.4213L6.13067 29.796C5.91067 30.02 5.55067 30.0187 5.32933 29.7973C5.108 29.5747 5.108 29.216 5.32933 28.9947L11.6533 22.62L10.3133 21.28L3.396 28.248L2 35L8.93733 33.784L15.8533 26.8173L14.5067 25.472ZM21.5813 12.6147L28.164 5.97867C28.3867 5.756 28.744 5.756 28.968 5.97733C29.1893 6.19867 29.1893 6.56 28.968 6.78133L22.384 13.4173L23.6307 14.664L30.2067 8.036C30.4267 7.816 30.7867 7.816 31.008 8.036C31.2293 8.25867 31.2293 8.61867 31.0093 8.83867L24.432 15.4667L25.7813 16.816L34 8.536L28.464 3L20.2453 11.2787L21.5813 12.6147Z" fill="url(#paint0_linear_106_308)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_106_308" x1="23.4433" y1="10.1579" x2="44.2684" y2="20.4737" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D3A97C"/>
            <stop offset="0.543269" stopColor="#564533"/>
            </linearGradient>
            <clipPath id="clip0_106_308">
            <rect width="32" height="32" fill="white" transform="translate(2 3)"/>
            </clipPath>
            </defs>
          </svg>

          <h3>
            Seamless<br />Integrations
          </h3>

          <p>
            We connect your systems, tools, and teams into one coherent digital ecosystem.
          </p>
        </div>

        <div className="card">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_106_316)">
            <path d="M11.334 35H3.33398V27H11.334V35ZM22.0007 23H14.0007V35H22.0007V23ZM32.6673 17.6667H24.6673V35H32.6673V17.6667ZM32.6673 3L24.6673 4.628L26.9553 6.90533L17.822 15.8827L13.8207 11.88L3.36598 22.276L5.24598 24.1667L13.8153 15.6467L17.8033 19.6373L28.8433 8.788L31.066 11.0013L32.6673 3Z" fill="url(#paint0_linear_106_316)"/>
            </g>
            <defs>
            <linearGradient id="paint0_linear_106_316" x1="22.9903" y1="10.1579" x2="42.7003" y2="19.1077" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D3A97C"/>
            <stop offset="0.543269" stopColor="#564533"/>
            </linearGradient>
            <clipPath id="clip0_106_316">
            <rect width="32" height="32" fill="white" transform="translate(2 3)"/>
            </clipPath>
            </defs>
          </svg>

          <h3>
            Scalable<br />by Design
          </h3>

          <p>
            Everything we build is prepared to grow with your business. From MVP to global rollout.
          </p>
        </div>

        <div className="card">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32.0833 13.125V15.3533C31.3892 16.3596 26.5198 18.2277 17.8354 18.2277C8.73687 18.2277 3.63708 16.2473 2.91667 15.1827V13.125H32.0833ZM35 10.2083H0V15.2994C0 19.1742 8.97458 21.1458 17.8354 21.1458C26.4717 21.1458 35 19.2733 35 15.4656V10.2083ZM32.0833 21.9829V29.1667H2.91667V21.8735C1.71646 21.3821 0.76125 20.8367 0 20.2752V32.0833H35V20.491C34.1498 21.0773 33.1596 21.5717 32.0833 21.9829ZM20.4167 24.8383C20.4167 26.4235 19.11 27.7083 17.5 27.7083C15.89 27.7083 14.5833 26.4235 14.5833 24.8383V23.3333H20.4167V24.8383ZM13.125 2.91666C11.515 2.91666 10.2083 4.22332 10.2083 5.83332V8.74999H13.125V6.56249C13.125 6.15999 13.4517 5.83332 13.8542 5.83332H21.1458C21.5483 5.83332 21.875 6.15999 21.875 6.56249V8.74999H24.7917V5.83332C24.7917 4.22332 23.485 2.91666 21.875 2.91666H13.125Z" fill="url(#paint0_linear_106_367)"/>
            <defs>
            <linearGradient id="paint0_linear_106_367" x1="23.4536" y1="9.44078" x2="44.4139" y2="21.9002" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D3A97C"/>
            <stop offset="0.543269" stopColor="#564533"/>
            </linearGradient>
            </defs>
          </svg>

          <h3>
            Tailored<br />Solutions
          </h3>

          <p>
          Custom-built platforms engineered to fit your operations — not the other way around.
          </p>
        </div>
       </article>
      </header>

      <section id="service">
        <div className="overlay"></div>

        <div className="wrapper">
          <article className="card">
            <div className="content">
              <h2>
                Business Applications
              </h2>

              <h3>
                Custom-built tools to streamline your operations.
              </h3>

              <p>
                We design and develop secure, scalable business applications tailored to your workflow — from internal platforms to client-facing portals. Seamless integration with your existing systems is our standard.
              </p>
            </div>
          </article>

          <article className="card">
            <dic className="content">
              <h2>
                Custom Websites
              </h2>

              <h3>
                More than just beautiful — engineered for results.
              </h3>

              <p>
                Your website is your digital flagship. We build modern, high-performance sites that reflect your brand and drive conversions. Designed from scratch, responsive on all devices, and blazing fast.
              </p>
            </dic>
          </article>

          <article className="card">
            <div className="content">
              <h2>
                E - Commerce
              </h2>

              <h3>
                Enterprise-grade online stores that scale.
              </h3>

              <p>
                Whether B2B or B2C, we create e-commerce platforms that deliver. From UX to payment integrations, multilingual and multicurrency support, we optimize every step of the buyer journey for growth.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h2>
                Digital<br />Marketing & SEO
              </h2>

              <h3>
                We don't just build — we help you grow.
              </h3>

              <p>
                Get found, get clicks, get results. We offer full-service SEO, Google Ads, LinkedIn, and Meta campaigns tailored to your market. Backed by analytics and ROI tracking, always focused on business outcomes.
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}

//<Image src="/images/persons.png" alt="Mateusz Kaminski & Viktor Karpinski" width={862} height={470} id="us" />
