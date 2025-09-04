//import GoldButton from '@/components/GoldButton'
import Image from 'next/image'
import ComingSoon from '../../coming-soon'

const Services = () => {
    return <ComingSoon />

    return (
        <section className="gridContainer">
            <div className="wrapper">
                <div className="gridSection">
                    <div className='column1'>
                        <h3>
                            App Development
                        </h3>
                        <p>
                            We build apps tailored to your platform and needs — from mobile to desktop. Whether using React Native, Flutter, Kotlin, or Swift, we develop clean, scalable apps for iOS, Android, Windows, macOS, and Linux. From simple tools to full-scale enterprise systems, we can modernize your existing app or create something entirely new.
                        </p>
                        <GoldButton className="goldButton" children="More Details"/>
                    </div>
                    <Image
                        src="/images/appdev.png"
                        width={300}
                        height={300}
                        alt="App Development Icon"
                        className='AppImage column2'
                    />
                </div>
                <div className="gridSection">
                    <h3>
                        Web Development
                    </h3>
                    <p>
                        We craft websites and web applications tailored precisely to your requirements — from advanced web apps to sleek corporate sites. Whether it's Laravel, Symfony, Next.js, or Vue.js, we choose the best stack for your project, with a preference for Laravel and Next.js. If your needs are simpler, we also work with CMS platforms like WordPress or TYPO3. <br /><br />Our strength lies in flexibility: whatever your vision, we’ll build the right solution for it — scalable, robust, and future-proof.
                    </p>
                    <GoldButton className="goldButton" children="More Details"/>
                </div>
                <div className="gridSection">
                    <h3>
                        Marketing & SEO
                    </h3>
                    <p>
                        We focus on growth that matters — not just clicks. Our SEO and ad strategies are built around real goals like leads and sales, not vanity metrics. <br /><br />From technical audits and keyword research to Google Ads and conversion tracking, we handle everything with precision. Smart targeting, clean analytics, and ongoing optimization — all tailored to your business.
                    </p>
                    <GoldButton className="goldButton" children="More Details"/>
                </div>
                <div className="gridSection">
                    <h3>
                        Other Solutions
                    </h3>
                    <p>
                        Beyond our core services, we offer support wherever digital expertise is needed — from logo design to game development. If it’s tech-related, there’s a good chance we can help. <br /> <br />Just tell us what you’re looking for. If it’s a fit, we’ll bring our full expertise. And if not, we’ll say so — because we only deliver work we truly stand behind.
                    </p>
                    <GoldButton className="goldButton" children="More Details"/>
                </div>
                <div className="gridSection">
                    <h3>
                        E-Commerce
                    </h3>
                    <p>
                        We build custom e-commerce platforms that sell — fast, scalable, and conversion-focused. Whether you're DTC or B2B, your store is tailored to your brand and business model. <br />From Shopify to headless builds, we choose the tech that fits your goals. Optimized UX, smooth checkout, mobile performance, and full ownership — no templates, no lock-in. Just results.
                    </p>
                    <GoldButton className="goldButton" children="More Details"/>
                </div>
            </div>
        </section>
    )
}

export default Services