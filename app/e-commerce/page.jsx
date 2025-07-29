import ContactCTA from "@/components/ContactCTA"
import ScrollSeperator from "@/components/ScrollSeperator"
import TransitionLink from "@/components/TransitionLink"

export const metadata = {
  title: "E-Commerce Development Services | Scalable Online Store Solutions",
  description: "Custom e-commerce development by K2Integris. We build high-performance, conversion-driven online stores using Shopify, WooCommerce, or headless setups. Optimized for SEO, speed, and long-term growth.",
}

const Ecommerce = () => {
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
                        E-Commerce<br />Development
                    </h1>

                    <h3>
                        High-converting storefronts, custom-built for scale,<br />performance, and real revenue.
                    </h3>

                    <ScrollSeperator />

                    <TransitionLink href="contact" className="cta">
                        Request a Consultation
                    </TransitionLink>
                </div>

                <div className="transition"></div>
            </header>

            <section className="category-detail">
                <div className="wrapper">
                    <article>
                        <h3>Built to Sell, Built to Scale</h3>
                        <p>
                            Whether you're a DTC brand or B2B vendor, we craft tailored e-commerce platforms that convert, scale, and grow with your operations.
                        </p>
                    </article>

                    <article>
                        <h3>Custom Storefront Experiences</h3>
                        <p>
                            No generic templates — your store is uniquely designed to reflect your brand, streamline shopping, and boost customer lifetime value.
                        </p>
                    </article>

                    <article>
                        <h3>Tech Stacks That Fit You</h3>
                        <p>
                            Shopify, WooCommerce, or fully custom with headless architecture — we choose based on what drives your margins, not developer convenience.
                        </p>
                    </article>

                    <article>
                        <h3>Conversion-Optimized Checkout</h3>
                        <p>
                            Cart abandonment is revenue leakage. We streamline every step — from product discovery to payment — to close more sales.
                        </p>
                    </article>

                    <article>
                        <h3>Performance, Speed, and SEO</h3>
                        <p>
                            Your site loads fast, ranks high, and works everywhere — optimized for mobile, search, and conversion from day one.
                        </p>
                    </article>

                    <article>
                        <h3>Full Ownership & Control</h3>
                        <p>
                            You get full access to your platform, with no platform lock-in, hidden fees, or ecosystem traps. Your store, your rules.
                        </p>
                    </article>
                </div>
            </section>

            <section id="strategy">
                <div className="wrapper">
                    <article className="hero">
                        <h1>
                            End-to-End<br /><span>E-Commerce Strategy</span>
                        </h1>
                    </article>

                    <article className="step">
                        <h1><span>01</span></h1>
                        <h2>
                            Brand & Product Strategy
                            <br />
                            <span>Clarity before clicks.</span>
                        </h2>
                        <p>
                            - Market positioning<br />
                            - Audience personas<br />
                            - Product/category structure<br />
                            - Competitive insights
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>02</span></h1>
                        <h2>
                            Platform Architecture
                            <br />
                            <span>Match tech to growth goals.</span>
                        </h2>
                        <p>
                            - Shopify / Woo / Headless<br />
                            - Custom themes<br />
                            - Backend logic<br />
                            - Multi-language / multi-currency
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>03</span></h1>
                        <h2>
                            UX-Driven Design
                            <br />
                            <span>Built for shopper psychology.</span>
                        </h2>
                        <p>
                            - Wireframes<br />
                            - Visual direction<br />
                            - Mobile-first layouts<br />
                            - Checkout UX
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>04</span></h1>
                        <h2>
                            Development & Integration
                            <br />
                            <span>Robust under load.</span>
                        </h2>
                        <p>
                            - Storefront + backend dev<br />
                            - CRM & ERP integrations<br />
                            - Inventory sync<br />
                            - Payment & shipping APIs
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>05</span></h1>
                        <h2>
                            SEO & Performance
                            <br />
                            <span>Findable and fast.</span>
                        </h2>
                        <p>
                            - Core Web Vitals<br />
                            - Schema markup<br />
                            - Keyword strategy<br />
                            - Image & script optimization
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>06</span></h1>
                        <h2>
                            Launch & QA
                            <br />
                            <span>Polished and ready to scale.</span>
                        </h2>
                        <p>
                            - Full QA pass<br />
                            - Order flow testing<br />
                            - Analytics setup<br />
                            - Conversion tracking
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>07</span></h1>
                        <h2>
                            Marketing Integration
                            <br />
                            <span>More than a store — a growth engine.</span>
                        </h2>
                        <p>
                            - Email flows<br />
                            - Retargeting setup<br />
                            - Landing pages<br />
                            - Influencer/affiliate tools
                        </p>
                    </article>

                    <article className="step">
                        <h1><span>08</span></h1>
                        <h2>
                            Ongoing Optimization
                            <br />
                            <span>Adapt fast, grow faster.</span>
                        </h2>
                        <p>
                            - CRO & A/B testing<br />
                            - Upsell flows<br />
                            - Cart recovery<br />
                            - UX & feature iterations
                        </p>
                    </article>
                </div>
            </section>

            <ContactCTA />
        </>
    )
}

export default Ecommerce
