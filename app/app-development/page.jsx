import ContactCTA from "@/components/ContactCTA"
import ScrollSeperator from "@/components/ScrollSeperator"
import Link from "next/link"

export const metadata = {
  title: "Custom App Development Services | Mobile & Business Solutions | K2Integris",
  description: "Scalable, high-performance mobile and business applications custom-built for growth. From UX design to backend architecture — K2Integris delivers end-to-end app development that solves real problems and integrates with your systems.",
}

const AppDevelopment = () => {
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
                        Mobile & Business<br />Application Development
                    </h1>

                    <h3 >
                        Fully custom, user-tested, and engineered to solve<br />real business problems at scale.
                    </h3>

                    <ScrollSeperator />

                    <Link href="contact" className="cta">
                        Request a Consultation
                    </Link>
                </div>

                <div className="transition"></div>
            </header>

            <section className="category-detail">
                <div className="wrapper">
                    <article>
                        <h3>Apps That Power Businesses</h3>
                        <p>
                            From internal platforms to customer-facing mobile apps, we build custom applications that solve real problems — and scale with your operations.
                        </p>
                    </article>

                    <article>
                        <h3>Designed Around the User</h3>
                        <p>
                            User experience isn’t a layer — it’s the foundation. Our interfaces are crafted to be intuitive, frictionless, and optimized for action on any device.
                        </p>
                    </article>

                    <article>
                        <h3>Robust, Scalable Architecture</h3>
                        <p>
                            Whether it’s real-time data sync, role-based access, or cross-platform deployment, we architect apps for security, speed, and flexibility from day one.
                        </p>
                    </article>

                    <article>
                        <h3>Mobile-First, Cross-Platform</h3>
                        <p>
                            Cross-platform doesn’t mean second-rate. Whether React Native, Flutter, Kotlin, or Swift — we deliver sleek, high-performance apps that feel native and ship fast.
                        </p>
                    </article>

                    <article>
                        <h3>Integrations That Unlock Efficiency</h3>
                        <p>
                            CRMs, ERPs, APIs, payment gateways — your app doesn’t live in isolation. We connect it to the systems that power your business.
                        </p>
                    </article>

                    <article>
                        <h3>Ownership Without Limitations</h3>
                        <p>
                            Full codebase, full autonomy. Our builds are engineered to evolve with your operations — not tie you down. You stay in control, always.
                        </p>
                    </article>
                </div>
            </section>

            <section id="strategy">
                <div className="wrapper">
                    <article className="hero">
                        <h1>
                            End-to-End<br />App <span>Strategy</span>
                        </h1>
                    </article>

                    <article className="step">
                        <h1><span>01</span></h1>
                        <h2>
                            Product Discovery
                            <br />
                            <span>Understand the real need.</span>
                        </h2>
                        <p>
                            - Business objectives<br />
                            - User journeys<br />
                            - Feature mapping<br />
                            - Risk assessment
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>02</span></h1>
                        <h2>
                            Technical Planning
                            <br />
                            <span>Foundations that scale.</span>
                        </h2>
                        <p>
                            - App architecture<br />
                            - Database schema<br />
                            - API endpoints<br />
                            - Tech stack decisions
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>03</span></h1>
                        <h2>
                            UX/UI Design
                            <br />
                            <span>Visual clarity with business intent.</span>
                        </h2>
                        <p>
                            - Wireframes<br />
                            - Prototypes<br />
                            - Design system<br />
                            - Interaction flows
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>04</span></h1>
                        <h2>
                            Agile Development
                            <br />
                            <span>Rapid builds with full control.</span>
                        </h2>
                        <p>
                            - React Native, Flutter, Kotlin or Swift<br />
                            - Laravel, Java or Node.js backend<br />
                            - Dev staging environments<br />
                            - Continuous delivery
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>05</span></h1>
                        <h2>
                            QA & Stress Testing
                            <br />
                            <span>Stable under pressure.</span>
                        </h2>
                        <p>
                            - Functional testing<br />
                            - Device/browser checks<br />
                            - Bug logging systems<br />
                            - Performance tuning
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>06</span></h1>
                        <h2>
                            Launch & Distribution
                            <br />
                            <span>Ready for the real world.</span>
                        </h2>
                        <p>
                            - App Store / Play Store deployment<br />
                            - CI/CD setup<br />
                            - Analytics integration<br />
                            - Access control
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>07</span></h1>
                        <h2>
                            Post-Launch Iteration
                            <br />
                            <span>Respond to real usage.</span>
                        </h2>
                        <p>
                            - Feature rollouts<br />
                            - User feedback loops<br />
                            - Heatmaps / session replays<br />
                            - Roadmap updates
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>08</span></h1>
                        <h2>
                            Maintenance & Growth
                            <br />
                            <span>Your long-term partner.</span>
                        </h2>
                        <p>
                            - Support packages<br />
                            - SLA uptime<br />
                            - Scaling infrastructure<br />
                            - Ongoing analytics
                        </p>
                    </article>
                </div>
            </section>

            <ContactCTA />
        </>
    )
}

export default AppDevelopment