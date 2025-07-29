import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | K2Integris - Custom Software & Web Solutions",
  description: "Get in touch with K2Integris. Reach out via email, phone, or contact form for tailored web development, app solutions, and digital strategy consulting.",
}

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="wrapper">
                    <h1>
                        Contact
                    </h1>

                    <div className="container">
                        <article>
                            <ul>
                                <li>
                                    <Link href="mailto:partner@k2integris.com" className="link">
                                        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 3C21 1.9 20.1 1 19 1H3C1.9 1 1 1.9 1 3M21 3V15C21 16.1 20.1 17 19 17H3C1.9 17 1 16.1 1 15V3M21 3L11 10L1 3" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        partner@k2integris.com
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:+48731499788" className="link">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.05 5C15.0267 5.19057 15.9244 5.66826 16.6281 6.37194C17.3317 7.07561 17.8094 7.97326 18 8.95M14.05 1C16.0793 1.22544 17.9716 2.13417 19.4162 3.57701C20.8609 5.01984 21.772 6.91101 22 8.94M21 16.92V19.92C21.0011 20.1985 20.9441 20.4742 20.8325 20.7293C20.7209 20.9845 20.5573 21.2136 20.3521 21.4019C20.1468 21.5901 19.9046 21.7335 19.6407 21.8227C19.3769 21.9119 19.0974 21.9451 18.82 21.92C15.7428 21.5856 12.787 20.5341 10.19 18.85C7.77382 17.3147 5.72533 15.2662 4.18999 12.85C2.49997 10.2412 1.44824 7.27099 1.11999 4.18C1.095 3.90347 1.12787 3.62476 1.21649 3.36162C1.30512 3.09849 1.44756 2.85669 1.63476 2.65162C1.82196 2.44655 2.0498 2.28271 2.30379 2.17052C2.55777 2.05833 2.83233 2.00026 3.10999 2H6.10999C6.5953 1.99522 7.06579 2.16708 7.43376 2.48353C7.80173 2.79999 8.04207 3.23945 8.10999 3.72C8.23662 4.68007 8.47144 5.62273 8.80999 6.53C8.94454 6.88792 8.97366 7.27691 8.8939 7.65088C8.81415 8.02485 8.62886 8.36811 8.35999 8.64L7.08999 9.91C8.51355 12.4135 10.5864 14.4864 13.09 15.91L14.36 14.64C14.6319 14.3711 14.9751 14.1858 15.3491 14.1061C15.7231 14.0263 16.1121 14.0555 16.47 14.19C17.3773 14.5286 18.3199 14.7634 19.28 14.89C19.7658 14.9585 20.2094 15.2032 20.5265 15.5775C20.8437 15.9518 21.0122 16.4296 21 16.92Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        +48 731 499 788
                                    </Link>
                                </li>
                                <li>
                                    <Link href="tel:+48453633138" className="link">
                                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.05 5C15.0267 5.19057 15.9244 5.66826 16.6281 6.37194C17.3317 7.07561 17.8094 7.97326 18 8.95M14.05 1C16.0793 1.22544 17.9716 2.13417 19.4162 3.57701C20.8609 5.01984 21.772 6.91101 22 8.94M21 16.92V19.92C21.0011 20.1985 20.9441 20.4742 20.8325 20.7293C20.7209 20.9845 20.5573 21.2136 20.3521 21.4019C20.1468 21.5901 19.9046 21.7335 19.6407 21.8227C19.3769 21.9119 19.0974 21.9451 18.82 21.92C15.7428 21.5856 12.787 20.5341 10.19 18.85C7.77382 17.3147 5.72533 15.2662 4.18999 12.85C2.49997 10.2412 1.44824 7.27099 1.11999 4.18C1.095 3.90347 1.12787 3.62476 1.21649 3.36162C1.30512 3.09849 1.44756 2.85669 1.63476 2.65162C1.82196 2.44655 2.0498 2.28271 2.30379 2.17052C2.55777 2.05833 2.83233 2.00026 3.10999 2H6.10999C6.5953 1.99522 7.06579 2.16708 7.43376 2.48353C7.80173 2.79999 8.04207 3.23945 8.10999 3.72C8.23662 4.68007 8.47144 5.62273 8.80999 6.53C8.94454 6.88792 8.97366 7.27691 8.8939 7.65088C8.81415 8.02485 8.62886 8.36811 8.35999 8.64L7.08999 9.91C8.51355 12.4135 10.5864 14.4864 13.09 15.91L14.36 14.64C14.6319 14.3711 14.9751 14.1858 15.3491 14.1061C15.7231 14.0263 16.1121 14.0555 16.47 14.19C17.3773 14.5286 18.3199 14.7634 19.28 14.89C19.7658 14.9585 20.2094 15.2032 20.5265 15.5775C20.8437 15.9518 21.0122 16.4296 21 16.92Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>

                                        +48 453 633 138
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://maps.app.goo.gl/h22Nohht5ykbB88j7" target="_blank" className="link">
                                        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 17L1 21V5L8 1M8 17L16 21M8 17V1M16 21L23 17V1L16 5M16 21V5M16 5L8 1" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        os. Szymony 7, 34-500 Zakopane, Poland
                                    </Link>
                                </li>
                            </ul>

                            <ul className="horizontal">
                                <li>
                                    <Link href="https://www.linkedin.com/company/k2integris/" target="_blank" className="social" title="Our LinkedIn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="https://www.instagram.com/k2integris/" target="_blank" className="social" title="Our Instagram">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </Link>
                                </li>

                                <li>
                                    <Link href="https://x.com/k2integris" target="_blank" className="social" title="Our X">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="x">
                                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </article>

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
                                <input type="phone" placeholder="+48 123 456 789" name="email" id="email" />
                            </label>

                            <label className="input-box" htmlFor="message">
                                Your Message
                                <textarea name="message" id="message" placeholder="We need..."></textarea>
                            </label>

                            <label className="check-box">
                                <p>I agree to the processing of my personal data in accordance with the <Link href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</Link>.</p>
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                            </label>

                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;