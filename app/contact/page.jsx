import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | K2Integris - Custom Software & Web Solutions",
  description: "Get in touch with K2Integris. Reach out via email, phone, or contact form for tailored web development, app solutions, and digital strategy consulting.",
};

export default function ContactPage() {
  return (
    <section id="contact" className="default small">
      <div className="wrapper">
        <h1>Contact</h1>

        <ContactForm />
      </div>
    </section>
  )
}