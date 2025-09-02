"use client";
import { useEffect, useState } from "react";
import TransitionLink from "./TransitionLink";
import ParticleStyles from "./ParticleStyles";

const ContactCTA = () => {
  const [isDesktop, setIsDesktop] = useState(null);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 860px)").matches);
  }, []);

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
  {Array.from({ length: isDesktop ? 300 : 200 }).map((_, i) => <div className="c" key={i} />)}
</div>
<ParticleStyles
  total={isDesktop ? 300 : 200}
  orbSize={isDesktop ? "300px" : "100px"}
  time="14s"
  colors={["#434343bd","var(--gold)","var(--gold-transparent)","var(--white)"]}
/>

    </section>
  );
};

export default ContactCTA;
