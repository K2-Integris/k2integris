"use client"

import { useState } from "react";

const Faq = () => {

    const [ category, setCategory ] = useState(0);
    const [ renderedCategory, setRenderedCategory ] = useState(0);

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
                question: "Will I be able to update the content on my own after launch?",
                answer: "Absolutely. If needed, we provide intuitive admin panels or CMS solutions that allow you to manage your content without technical knowledge. Training and documentation can be included."
            },
            {
                question: "Do you offer responsive design for mobile and tablet?",
                answer: "Yes, all our solutions are fully responsive and mobile-friendly by default. We design with every device in mind to ensure a seamless experience for your users."
            }
        ],

        // 1: Marketing / SEO
        [
            {
                question: "Can you help us rank on Google (SEO)?",
                answer: "Yes, we offer technical SEO optimization, including keyword analysis, page speed improvements, and on-page SEO. If needed, we work with content specialists for broader SEO campaigns."
            },
            {
                question: "What advertising platforms do you work with (Google Ads, Facebook, LinkedIn, etc.)?",
                answer: "We work with Google Ads, Facebook/Meta, LinkedIn, and can advise on other platforms depending on your target audience. We also assist with SEO and organic strategies to complement paid advertising."
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
                question: "Do you offer UI/UX testing with real users?",
                answer: "If desired, yes. We can organize user testing sessions and feedback loops during the design phase to validate usability and gather insights directly from your target audience."
            },
            {
                question: "Can you help modernize or redesign our existing branding?",
                answer: "Yes, whether it’s a subtle refresh or a complete overhaul. We respect the core of your brand while ensuring your visual presence stays contemporary and relevant."
            },
            {
                question: "Can you design for accessibility and WCAG compliance?",
                answer: "Yes. We prioritize inclusive design practices, ensuring your digital product is usable and accessible for people with disabilities, in line with WCAG 2.1 standards."
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
                question: "What happens if we decide to terminate the project early?",
                answer: "Our contracts include fair termination terms. Work completed to date is billed and handed over. We ensure a professional handoff."
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
            },
            {
                question: "Do you offer uptime monitoring and automated backups?",
                answer: "Yes. We can set up proactive uptime monitoring and daily backups to ensure your website or application remains online and secure."
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
                question: "Can you help us scale internationally or localize the product for different regions?",
                answer: "Yes. We support multilingual, multi-currency, and compliance-friendly development from the start."
            },
            {
                question: "Do you provide competitor analysis to support product decisions?",
                answer: "Yes. We can benchmark your competitors, identify market gaps, and suggest features or positioning strategies that give you an edge."
            }
        ]
    ];


    const handle = (ev) => {
        let el = ev.currentTarget.parentElement

        el.classList.toggle('active')

        if (el.classList.length > 1) {
            el.parentElement.childNodes.forEach((faq, index) => {
                if (faq.id !== el.id) {
                    faq.classList.remove('active')
                    faq.children[1].style.height = "0px"
                } 
            })
            
            el.children[1].style.height = `${el.children[1].scrollHeight + 30}px`
        } else {
            el.children[1].style.height = "0px"
        }
    }

    const handleCategorySwitch = (newCategory) => {
        if (newCategory === category) return;

        setCategory(newCategory);

        const openFaq = document.querySelector(".faq-box.active");

        if (openFaq) {
            console.log('hure')
            openFaq.classList.remove("active");
            openFaq.children[1].style.height = "0px"

            setTimeout(() => {
                setRenderedCategory(newCategory)
            }, 350)
        } else {
            setRenderedCategory(newCategory)
        }
    };

    return (
        <section id="faq">
            <div className="faq-wrapper">
                <article className="wrapper">
                    <h2>
                        Frequently<br />asked <span>Questions</span>
                    </h2>
                </article>

                <article className="selection-box">
                    <div className="row">
                        <button 
                            className={category === 0 ? "active" : ""}
                            onClick={() => handleCategorySwitch(0) }
                        >
                            Web- / App-Development
                        </button>
                        <button 
                            className={category === 1 ? "active" : ""}
                            onClick={() => handleCategorySwitch(1) }
                        >
                            Marketing / SEO
                        </button>
                        <button 
                            className={category === 3 ? "active" : ""}
                            onClick={() => handleCategorySwitch(3) }
                        >
                            Process / Communication
                        </button>
                    </div>
                    <div className="row">
                        <button 
                            className={category === 2 ? "active" : ""}
                            onClick={() => handleCategorySwitch(2) }
                        >
                            Design / Branding
                        </button>
                        <button 
                            className={category === 4 ? "active" : ""}
                            onClick={() => handleCategorySwitch(4) }
                        >
                            Pricing / Legal
                        </button>
                        <button 
                            className={category === 5 ? "active" : ""}
                            onClick={() => handleCategorySwitch(5) }
                        >
                            Technical / Hosting
                        </button>
                        <button 
                            className={category === 6 ? "active" : ""}
                            onClick={() => handleCategorySwitch(6) }
                        >
                            Strategy / Business
                        </button>
                    </div>
                </article>

                <article className="wrapper faq" key={renderedCategory}>
                    {faq[renderedCategory].map((faq, index) => (
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
            </div>
        </section>
    )
}

export default Faq;