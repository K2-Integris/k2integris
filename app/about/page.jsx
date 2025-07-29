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

                        <p>
                            We are K2Integris — a name that reflects both our founders, Viktor Karpinski and Mateusz Kaminski (K2), and our commitment to integrity, clarity, and high-end digital craftsmanship. Just like the mountain we share a name with, we set the bar high — in standards, execution, and ambition.
                            <br />
                            <br />
                            We don't believe in bureaucracy, vague promises, or bloated processes. Every project we take on is executed directly by us — no middlemen. Just focused work, measurable results, and strong relationships with people who value ownership and innovation.
                            <br />
                            <br />
                            If you're someone who thinks long-term, embraces bold ideas, and expects more than cookie-cutter solutions — you're in the right place.
                        </p>
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