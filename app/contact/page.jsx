import Link from "next/link";


const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="wrapper">
                     <h1>
                        Contact
                    </h1>

                    <p>
                        Fill out the form below and we will get back to you as soon as possible
                    </p>

                    <form>
                        <label className="input-box" htmlFor="company">
                            Your Company
                            <input type="text" placeholder="John Sp. z o.o." name="company" id="company" />
                        </label>

                        <label className="input-box" htmlFor="name">
                            Your Fullname
                            <input type="text" placeholder="John Doe" name="name" id="name" />
                        </label>

                        <label className="input-box" htmlFor="email">
                            Your E-Mail
                            <input type="email" placeholder="john@doe.com" name="email" id="email" />
                        </label>

                        <label className="input-box" htmlFor="phone">
                            Your Phone
                            <input type="phone" placeholder="+48 620 388 677" name="email" id="email" />
                        </label>

                        <label className="input-box" htmlFor="message">
                            Your Message
                            <textarea name="message" id="message" placeholder="We want..."></textarea>
                        </label>

                        <button type="submit">
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="wrapper">
                    <h2>
                        Offices
                    </h2>

                    <ul>
                        <li>
                            <Link href="/">
                                plac Dworcowy 4, 34-480 Jabłonka, Polen
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                contact@k2integeis.pl
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                +48 731 499 788
                            </Link>
                        </li>
                    </ul>

                    <ul className="horizontal">
                        <li>
                            <Link href="www.linkedin.com/company/k2integris/" target="_blank" className="link" title="Our LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </Link>
                        </li>

                        <li>
                            <Link href="https://www.instagram.com/k2integris/" target="_blank" className="link" title="Our Instagram">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </Link>
                        </li>

                        <li>
                            <Link href="https://x.com/k2integris" target="_blank" className="link" title="Our X">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="x">
                                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Contact;