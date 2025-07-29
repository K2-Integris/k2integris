import TransitionLink from "./TransitionLink";

const ContactCTA = () => {
    return (
        <section id="contact-cta">
            <article className="wrapper">
            <h2>
                Let's talk about<br /><span>your project</span>
            </h2>

            <TransitionLink href="contact" className="btn-11">
                GET IN TOUCH
                <span></span><span></span><span></span><span></span>
            </TransitionLink>
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