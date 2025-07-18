import Link from "next/link";

const ContactCTA = () => {
    return (
        <section id="contact-cta">
            <article className="wrapper">
            <h2>
                Let's talk about<br /><span>your project</span>
            </h2>

            <Link href="contact" className="btn-11">
                GET IN TOUCH
                <span></span><span></span><span></span><span></span>
            </Link>
            </article>
            <div className="wrap">
                {Array.from({ length: 300 }).map((_, i) => (
                    <div className="c" key={i} />
                ))}
            </div>
      </section>
    )
}

export default ContactCTA