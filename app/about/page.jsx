import ScrollSeperator from "@/components/ScrollSeperator";
import Link from "next/link";

export const metadata = {
  title: "About Us - K2Integris • Custom Web, App, E‑Commerce & Digital Strategy Agency",
  description: "K2Integris is your strategic digital partner, delivering custom web development, application builds, e‑commerce platforms and SEO‑driven marketing. Empowering ambitious brands through innovation, technical precision and full ownership.",
};

const About = () => {
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

                <div className="wrapper">
                    <h1>
                        Your Strategic <span>Partner</span><br />for Growth - Centered<br />Digital <span>Solutions</span>
                    </h1>

                    <h3>
                        K2Integris empowers forward - thinking brands with bespoke web, app, e‑commerce, and marketing solutions - focused on conversion, scalability, and full control.
                    </h3>
                </div>

                <div className="transition"></div>
            </header>

            <section id="what-sets-us-apart">
                <div className="wrapper">
                    <h2>
                        What Sets Us Apart
                    </h2>

                    <p>
                        - Full ownership: no vendor lock-in or hidden fees <br />
                        - Technical excellence & performance-first code <br />
                        - Design-driven conversions, not just visuals
                    </p>
                </div>
            </section>

            <section id="philosophy">
                <div className="wrapper">
                    <h2>
                        Where Precision Meets Purpose: Our Digital Philosophy
                    </h2>

                    <p>
                        At K2Integris, we don’t believe in generic solutions — we believe in intentional digital craftsmanship. Every project begins with deep listening and strategy, not assumptions. From enterprise-grade apps to data-driven marketing, our work is guided by one principle: measurable business impact.

We merge design elegance with robust engineering to create solutions that don't just look great — they scale, convert, and endure.

Our agile methodology means you stay in control, with full transparency at every stage. We act not as vendors, but as strategic partners invested in your growth.

Clarity. Speed. Ownership. That’s our operating system.

                    </p>
                </div>
            </section>
        </>
    )
}

export default About