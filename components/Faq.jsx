"use client"

import { useState } from "react";

const Faq = () => {

    const [ category, setCategory ] = useState(0);

    const faq = [
        // 0: Web / App Development
        [
            {
                question: "How long will it take to develop my website / app?",
                answer: "The timeline depends on the complexity of your project and your requirements. We focus on quality, not shortcuts. For most projects, we provide clear milestones and realistic deadlines after a detailed consultation. Transparency is key — you will always know where we stand."
            },
            {
                question: "Do you build custom solutions or use templates/CMS like WordPress?",
                answer: "We specialize in tailored solutions. For business-critical systems, we recommend fully custom-built applications using modern frameworks like Laravel or Next.js. For smaller projects or landing pages, we may use WordPress if it fits the client's needs. The approach depends on what serves your goals best."
            },
            {
                question: "Can you integrate my current systems (CRM, ERP, payment gateways, etc.) with the new platform?",
                answer: "Yes, absolutely. We have experience with various third-party system integrations and APIs. We analyze your current setup and ensure a smooth connection between your tools and the new solution."
            },
            {
                question: "How scalable will the solution be if my business grows?",
                answer: "Scalability is part of our engineering mindset. We design systems that are prepared for growth — whether that means handling more users, transactions, or internationalization. Your infrastructure should never be the bottleneck of your success."
            },
            {
                question: "Can you guarantee the website/app speed and performance?",
                answer: "We build with performance-first principles. From clean code and optimized assets to proper caching and server configurations — speed and reliability are always part of the delivery. We use tools like Google PageSpeed, Lighthouse, and GTmetrix to ensure your website or app loads fast, works smoothly, and performs reliably on all devices."
            },
            {
                question: "Do you offer responsive design for mobile and tablet?",
                answer: "Yes, all our solutions are fully responsive and mobile-friendly by default. We design with every device in mind to ensure a seamless experience for your users."
            },
            {
                question: "Will I be able to update the content on my own after launch?",
                answer: "Absolutely. If needed, we provide intuitive admin panels or CMS solutions that allow you to manage your content without technical knowledge. Training and documentation can be included."
            },
            {
                question: "Can you assist with website security and data protection (e.g. GDPR compliance)?",
                answer: "Yes. Security is non-negotiable. We implement best practices for data protection, encryption, backups, and GDPR compliance, including cookie policies and data processing agreements if required."
            },
            {
                question: "Do you handle the deployment, hosting, and maintenance?",
                answer: "Yes, we can fully manage hosting and deployment for you — either on your infrastructure or on our own self-managed hosting solutions. We also offer maintenance packages to keep your system secure and up to date."
            },
            {
                question: "Will there be support after the project is finished?",
                answer: "Yes. We offer various post-launch support options, including retainers for continuous development, maintenance, or ad-hoc support. Our goal is to build long-term partnerships, not one-off projects."
            }
        ],

        // 1: Marketing / SEO
        [
            {
                question: "What advertising platforms do you work with (Google Ads, Facebook, LinkedIn, etc.)?",
                answer: "We work with Google Ads, Facebook/Meta, LinkedIn, and can advise on other platforms depending on your target audience. We also assist with SEO and organic strategies to complement paid advertising."
            },
            {
                question: "Can you help us rank on Google (SEO)?",
                answer: "Yes, we offer technical SEO optimization, including keyword analysis, page speed improvements, and on-page SEO. If needed, we work with content specialists for broader SEO campaigns."
            },
            {
                question: "Do you offer ongoing SEO optimization or only initial setup?",
                answer: "We offer both. You can choose a one-time SEO audit and optimization, or ongoing monthly work where we continue to improve your rankings and adapt strategies over time."
            },
            {
                question: "What's your approach to keyword research and content strategy?",
                answer: "We combine competitive analysis, keyword research tools, and our experience in your industry to define the right strategy. Content is crafted for your audience, not just for search engines."
            },
            {
                question: "Can you help improve my current website’s SEO performance without rebuilding it?",
                answer: "Yes, we can audit your existing site and optimize it without a full rebuild if the current structure allows. If major technical issues are found, we’ll advise transparently on whether a rebuild makes sense."
            },
            {
                question: "Do you offer analytics and reporting on campaign performance?",
                answer: "Yes. Our campaigns include performance dashboards and regular reports. We prioritize clarity: you will know exactly where your budget goes and what results it brings."
            }
        ],

        // 2: Design / Branding
        [
            {
                question: "Can you help with logo design and corporate identity?",
                answer: "Yes. We offer branding services including logo design, typography selection, color palettes, and full corporate identity packages. Whether you need a complete brand creation or a refinement of your existing style, we can ensure your visual identity matches your business values."
            },
            {
                question: "Do you create wireframes or prototypes before development?",
                answer: "Yes. Every serious project starts with a clear plan. We design wireframes and mockups so you can review and approve the structure, layout, and visual direction before we move into development."
            },
            {
                question: "What is your process for understanding our brand’s style and audience?",
                answer: "We start every project with a discovery phase. This includes strategic meetings, questionnaires, and audience research. Our goal is to fully understand your brand’s voice, mission, and target group — so we can translate that into effective digital experiences."
            },
            {
                question: "Do you offer UI/UX testing with real users?",
                answer: "If desired, yes. We can organize user testing sessions and feedback loops during the design phase to validate usability and gather insights directly from your target audience."
            },
            {
                question: "Can you help modernize or redesign our existing branding?",
                answer: "Yes, whether it’s a subtle refresh or a complete overhaul. We respect the core of your brand while ensuring your visual presence stays contemporary and relevant."
            }
        ],

        // 3: Process / Communication
        [
            {
                question: "How will communication work throughout the project? Slack, Email, Meetings?",
                answer: "Typically, we use email for formal communication and MS Teams for day-to-day coordination. WhatsApp is also an option. For milestone meetings and project reviews, we prefer Google Meet. No matter the channel, regular updates and full transparency are part of our process."
            },
            {
                question: "Will we have a dedicated project manager?",
                answer: "Yes. You will have a single point of contact who manages the project, coordinates the team, and ensures smooth communication at all stages."
            },
            {
                question: "What happens if we want to add features mid-project?",
                answer: "Flexibility is built into our process. We work in Agile iterations. If you want to add features mid-project, we assess the scope, provide a time and cost estimate, and proceed with mutual agreement."
            },
            {
                question: "How often will we receive progress updates?",
                answer: "We provide regular progress updates — the exact frequency (daily, weekly, or biweekly) is agreed with you at the start of the project. You will always know the current status and next steps."
            },
            {
                question: "What project management tools do you use (e.g. Jira, Trello, ClickUp)?",
                answer: "We work with ClickUp, Trello, or Jira, depending on the project scale and your preference. You’ll have full visibility into your project board."
            },
            {
                question: "Who will be working on our project? Do you outsource or is your team in-house?",
                answer: "Our core team handles strategy, project management, and development. We may involve trusted external specialists, but you’ll always work directly with K2INTEGRIS."
            }
        ],

        // 4: Pricing / Legal
        [
            {
                question: "How is pricing structured — fixed price, hourly rate, or retainer?",
                answer: "It depends: fixed price for clear scopes, hourly for flexible work, and retainers for long-term support. We always discuss and agree transparently."
            },
            {
                question: "Are there any hidden costs we should be aware of?",
                answer: "No. All costs are detailed in our offer and contract. Any additional charges (e.g. third-party tools) are pre-approved with you."
            },
            {
                question: "What is the payment schedule (e.g. upfront, milestones, monthly)?",
                answer: "We typically work with milestone-based payments: deposit, progress-based installments, and final delivery. Monthly invoicing applies for ongoing work."
            },
            {
                question: "Do we retain full ownership of the code/designs after the project is complete?",
                answer: "Yes — once paid in full, you own all code, designs, and IP. We only ask (but don’t require) for a small credit link, if you're open to it."
            },
            {
                question: "Do you provide NDAs or contracts to protect confidentiality?",
                answer: "Yes. We provide NDAs and contracts by default to safeguard your ideas and sensitive data. Confidentiality is a core value."
            },
            {
                question: "What happens if we decide to terminate the project early?",
                answer: "Our contracts include fair termination terms. Work completed to date is billed and handed over. We ensure a professional handoff."
            },
            {
                question: "How do you handle intellectual property rights?",
                answer: "You own all IP upon project completion and payment. If any third-party tools or licenses are involved, we’ll disclose and document them fully to avoid surprises."
            }
        ],

        // 5: Technical / Hosting
        [
            {
                question: "What technologies or frameworks do you specialize in?",
                answer: "Our core stack includes Laravel (PHP), Next.js (React), and React Native. We also work with WordPress, TYPO3, Vue.js, Java, Swift, and others depending on the project."
            },
            {
                question: "Can you recommend the best hosting solution for our project?",
                answer: "Yes — we offer three options: you host it, we help you host, or we fully manage it for you. Each offers full performance and security assurance."
            },
            {
                question: "Do you offer support packages or retainers for ongoing maintenance?",
                answer: "Yes. We offer monthly support retainers including monitoring, updates, backups, and security patches tailored to your needs."
            },
            {
                question: "How quickly can you respond to technical issues or emergencies?",
                answer: "Our response times vary by support level. Retainer clients receive priority responses — typically within hours for emergencies."
            }
        ],

        // 6: Strategy / Business
        [
            {
                question: "Can you advise on which features are must-haves vs. nice-to-haves?",
                answer: "Yes. We help you prioritize by ROI — launching core features first and planning enhancements for later stages."
            },
            {
                question: "Do you offer business analysis and strategy consulting before development?",
                answer: "Yes — we often visit clients in person to understand their operations before planning a solution. It leads to better business alignment."
            },
            {
                question: "What industries have you worked with before?",
                answer: "We’ve worked with startups, corporates, eCommerce, and NGOs. Our structured process fits any sector."
            },
            {
                question: "How do you ensure the solution aligns with our business goals?",
                answer: "We start with strategy sessions and align through regular check-ins. We don’t just build what you say — we build what gets you results."
            },
            {
                question: "Can you help us scale internationally or localize the product for different regions?",
                answer: "Yes. We support multilingual, multi-currency, and compliance-friendly development from the start."
            }
        ]
    ];


    const handle = (ev) => {
        let el = ev.target.parentElement

        el.classList.toggle('active')

        if (el.classList.length > 1) {
            el.children[1].style.height = `${el.children[1].scrollHeight + 30}px`
        } else {
            el.children[1].style.height = "0px"
        }

    }

    return (
        <section id="faq">
            <article className="wrapper">
                <h2>
                    Frequently<br />asked <span>Questions</span>
                </h2>
            </article>

            <article className="selection-box">
                <div className="row">
                    <button 
                        className={category === 0 ? "active" : ""}
                        onClick={() => { setCategory(0) }}
                    >
                        Web- / App-Development
                    </button>
                    <button 
                        className={category === 1 ? "active" : ""}
                        onClick={() => { setCategory(1) }}
                    >
                        Marketing / SEO
                    </button>
                    <button 
                        className={category === 3 ? "active" : ""}
                        onClick={() => { setCategory(3) }}
                    >
                        Process / Communication
                    </button>
                </div>
                <div className="row">
                    <button 
                        className={category === 2 ? "active" : ""}
                        onClick={() => { setCategory(2) }}
                    >
                        Design / Branding
                    </button>
                     <button 
                        className={category === 4 ? "active" : ""}
                        onClick={() => { setCategory(4) }}
                    >
                        Pricing / Legal
                    </button>
                    <button 
                        className={category === 5 ? "active" : ""}
                        onClick={() => { setCategory(5) }}
                    >
                        Technical / Hosting
                    </button>
                     <button 
                        className={category === 6 ? "active" : ""}
                        onClick={() => { setCategory(6) }}
                    >
                        Strategy / Business
                    </button>
                </div>
            </article>

            <article className="wrapper faq">
                {faq[category].map((faq, index) => (
                    <div className="faq-box" key={index} id={"faq-" + index}>
                        <button className="faq-button" onClick={(ev) => handle(ev)}>
                            <div className="faq-icon">
                                <span className="faq-line"></span>
                                <span className="faq-line"></span>
                            </div>
                            {faq.question}
                        </button>
                        <p>
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </article>
      </section>
    )
}

export default Faq;