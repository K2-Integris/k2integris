import ContactCTA from "@/components/ContactCTA";
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

               
                <div className="wrapper" id="about">
                    <article className="heading">
                        <h1>
                            About <span>Us</span>
                        </h1>

                        <h3>
                            We are K2Integris — a name that reflects both our founders, Viktor Karpinski and Mateusz Kaminski (K2), and our commitment to integrity, clarity, and high-end digital craftsmanship. Just like the mountain we share a name with, we set the bar high — in standards, execution, and ambition.
                            <br />
                            <br />
                            We don't believe in bureaucracy, vague promises, or bloated processes. Every project we take on is executed directly by us — no middlemen. Just focused work, measurable results, and strong relationships with people who value ownership and innovation.
                            <br />
                            <br />
                            If you're someone who thinks long-term, embraces bold ideas, and expects more than cookie-cutter solutions — you're in the right place.
                        </h3>
                    </article>

                    <article className="team">
                        <div className="box">
                            <div className="info-box">
                                <h2>
                                    <span className="ceo">
                                        CO-founder
                                    </span>
                                    Viktor Karpinski
                                </h2>

                                <p>
                                    Viktor is a full-stack developer with a love for bridging the technical and the human — clean backend logic meets thoughtful front-end execution. After building multiple projects with Mateusz in school and in the professional world, he knew this partnership had more potential.
                                    <br />
                                    <br />
                                    When he’s not coding, you’ll probably find him training Muay Thai, doing calisthenics, or fixing something under the hood of an old car.
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="info-box">
                                <h2>
                                    <span className="ceo">
                                        CO-founder
                                    </span>
                                    Mateusz Kaminski
                                </h2>

                                <p>
                                    Mateusz is a creative problem-solver and full-stack developer with a drive to explore new ideas — technically, visually, and strategically. Currently finishing his degree at Hochschule Campus Wien, he brings academic structure into a fast-moving, design-driven mindset.
                                    <br />
                                    <br />
                                    He’s all about 3D design, psychology, and pushing limits — both in the gym and in code. Also: never afraid to outwork everyone in the room (even if it involves a whiskey or two).
                                </p>
                            </div>
                        </div>
                    </article>
               </div>

                <div className="transition"></div>
            </header>
        </>
    )
}

export default About

/*
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
*/