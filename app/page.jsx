import ScrollSeperator from "@/components/ScrollSeperator";
import ServiceCards from "@/components/ServiceCards";
import ContactCTA from "@/components/ContactCTA";
import TransitionLink from "@/components/TransitionLink";

export const metadata = {
  title: "K2INTEGRIS - Custom Web, App & E-Commerce Solutions for Ambitious Brands",
  description: "K2INTEGRIS is your strategic digital partner. We build high-performance websites, apps, and e-commerce platforms tailored to business outcomes. Elevate your brand with powerful design, clean code, and long-term scalability.",
};

export default function Home() {
  return (
    <>
      <header>
        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

       <article className="wrapper">
        <h1>
          Empowering<br />Businesses to <span>Reach</span><br /> New Digital <span>Heights</span>
        </h1>

        <ScrollSeperator />

        <TransitionLink href="contact" className="cta">
          Request a Consultation
        </TransitionLink>
       </article>

       <div className="transition"></div>
      </header>

      <section id="service">
        <article className="wrapper">
          <h2>
            A Strategic <span>Partner</span>,<br />
            Not Just a Vendor
          </h2>
        </article>

        <ServiceCards />

        <article className="wrapper info">
          <div>
            <h3>
              Brand Identity
            </h3>

            <p>
              Forge a distinctive and memorable identity for your company with our expertise in brand creation, thereby strengthening your brand personality and establishing a lasting connection with your audience.
            </p>
          </div>

          <div>
            <h3>
              HOSTING
            </h3>

            <p>
              To ensure the best availability for your project, we have invested in a self-managed hosting infrastructure, allowing us to stay at the forefront in terms of quality and support.
            </p>
          </div>

          <div>
            <h3>
              Migration
            </h3>

            <p>
              Are you seeking a new digital partner or looking to transfer an existing project to our agency for further development and/or maintenance? We provide assistance throughout the entire process.
            </p>
          </div>
        </article>
      </section>

      <ContactCTA />
    </>
  );
}
