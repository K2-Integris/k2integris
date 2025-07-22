import ContactCTA from "@/components/ContactCTA"
import ScrollSeperator from "@/components/ScrollSeperator"
import Link from "next/link"

const MarketingAndSeo = () => {
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
                        Marketing &<br />SEO Services
                    </h1>

                    <h3>
                        Data-backed, performance-focused, and engineered<br />to grow your brand and revenue — not just your traffic.
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
                        <h3>Strategic Marketing That Converts</h3>
                        <p>
                            We build custom marketing plans based on your business goals — not copy-paste tactics. From positioning to funnel strategy, we help you generate leads and sales that last.
                        </p>
                    </article>

                    <article>
                        <h3>SEO That Drives Revenue</h3>
                        <p>
                            We don’t chase vanity keywords. Our SEO strategy is focused on technical excellence, search intent, and conversion — so the right people find you, and take action.
                        </p>
                    </article>

                    <article>
                        <h3>Performance Campaigns, Not Guesswork</h3>
                        <p>
                            We manage paid media with precision. Google Ads, Meta, LinkedIn — optimized for ROI, tracked down to the last click. Every euro you spend works harder.
                        </p>
                    </article>

                    <article>
                        <h3>Conversion Optimization</h3>
                        <p>
                            We audit your customer journey, identify drop-offs, and redesign experiences that guide users to action. Small tweaks, big wins.
                        </p>
                    </article>

                    <article>
                        <h3>Analytics & Attribution</h3>
                        <p>
                            We implement clean tracking, set up reporting dashboards, and help you make smart decisions based on real data — not assumptions.
                        </p>
                    </article>

                    <article>
                        <h3>Brand Awareness, Built for Digital</h3>
                        <p>
                            Beyond keywords and clicks, we create lasting impressions. Positioning, messaging, content — designed to resonate and convert.
                        </p>
                    </article>
                </div>
            </section>

            <section id="strategy">
                <div className="wrapper">
                    <article className="hero">
                        <h1>
                            Full-Funnel<br /><span>Growth Strategy</span>
                        </h1>
                    </article>

                    <article className="step">
                        <h1><span>01</span></h1>
                        <h2>
                            Research & Positioning
                            <br />
                            <span>Know your market. Own your niche.</span>
                        </h2>
                        <p>
                            - Competitive audits<br />
                            - ICP definition<br />
                            - Messaging strategy<br />
                            - Funnel mapping
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>02</span></h1>
                        <h2>
                            Technical SEO & Setup
                            <br />
                            <span>Build a solid foundation.</span>
                        </h2>
                        <p>
                            - Site audits<br />
                            - Speed & core vitals<br />
                            - Schema markup<br />
                            - Indexing strategy
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>03</span></h1>
                        <h2>
                            Content Strategy
                            <br />
                            <span>Publish what people search for.</span>
                        </h2>
                        <p>
                            - Keyword research<br />
                            - Topic clusters<br />
                            - Copywriting<br />
                            - Content calendar
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>04</span></h1>
                        <h2>
                            Campaign Execution
                            <br />
                            <span>Launch, measure, repeat.</span>
                        </h2>
                        <p>
                            - Google Ads / Meta Ads<br />
                            - Retargeting<br />
                            - Newsletter & email<br />
                            - Social campaigns
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>05</span></h1>
                        <h2>
                            Onsite Optimization
                            <br />
                            <span>Every page should sell.</span>
                        </h2>
                        <p>
                            - UX audits<br />
                            - CTA experiments<br />
                            - CRO tactics<br />
                            - A/B testing
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>06</span></h1>
                        <h2>
                            Tracking & Analytics
                            <br />
                            <span>Numbers that tell the truth.</span>
                        </h2>
                        <p>
                            - GA4 / GTM setup<br />
                            - Custom dashboards<br />
                            - Attribution modeling<br />
                            - Revenue tracking
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>07</span></h1>
                        <h2>
                            Growth Retainers
                            <br />
                            <span>We don’t disappear after launch.</span>
                        </h2>
                        <p>
                            - Monthly optimizations<br />
                            - Reporting & analysis<br />
                            - Strategy adjustments<br />
                            - Stakeholder calls
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>08</span></h1>
                        <h2>
                            Scale & Automate
                            <br />
                            <span>More reach, less effort.</span>
                        </h2>
                        <p>
                            - CRM integrations<br />
                            - Automated lead funnels<br />
                            - AI content workflows<br />
                            - Email + retargeting loops
                        </p>
                    </article>
                </div>
            </section>

            <ContactCTA />
        </>
    )
}

export default MarketingAndSeo
