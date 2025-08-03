"use client";
import { useState } from "react";
import TransitionLink from "@/components/TransitionLink";
import BookingCalendar from "./BookingCalendar";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});


  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const formData = new FormData(ev.target);
    const name = formData.get("name")?.trim();
    const company = formData.get("company")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const message = formData.get("message")?.trim();
    const checkbox = formData.get("checkbox");

    const newErrors = {};

    if (!name) newErrors.name = "Please enter your full name.";
    if (!company) newErrors.company = "Please enter your company name.";
    if (!message) newErrors.message = "Please enter your message.";
    if (!phone) newErrors.phone = "Please enter your phone number.";
    if (!checkbox) newErrors.general = "Please agree to the privacy policy.";

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      company,
      name,
      email,
      phone,
      message,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      ev.target.reset();
      setErrors({});
    } else {
      setErrors({ general: "Something went wrong. Please try again." });
    }

    setIsSubmitting(false);
  };


  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group" data-field="company">
          <label className="input-box" htmlFor="company">
          Your Company
          <input type="text" placeholder="John Sp. z o.o." name="company" id="company" />
          {errors.company && <p className="form-error">{errors.company}</p>}
          </label>
      </div>

      <div className="form-group" data-field="name">
          <label className="input-box" htmlFor="name">
          Your Fullname
          <input type="text" placeholder="John Doe" name="name" id="name" />
          {errors.name && <p className="form-error">{errors.name}</p>}
          </label>
      </div>

      <div className="form-group" data-field="email">
          <label className="input-box" htmlFor="email">
          Your E-Mail
          <input type="email" placeholder="john@doe.com" name="email" id="email" />
          {errors.email && <p className="form-error">{errors.email}</p>}
          </label>
      </div>

      <div className="form-group" data-field="phone">
          <label className="input-box" htmlFor="phone">
          Your Phone
          <input type="tel" placeholder="+48 123 456 789" name="phone" id="phone" />
          {errors.phone && <p className="form-error">{errors.phone}</p>}
          </label>
      </div>

      <div className="form-group" data-field="message">
          <label className="input-box" htmlFor="message">
          Your Message
          <textarea name="message" id="message" placeholder="We need..." />
          {errors.message && <p className="form-error">{errors.message}</p>}
          </label>
      </div>

      <BookingCalendar />

      <div className="form-group" data-field="checkbox">
          <label className="check-box">
          <p>
              I agree to the processing of my personal data in accordance with the{" "}
              <TransitionLink href="/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</TransitionLink>.
          </p>
          <input type="checkbox" name="checkbox" />
          <span className="checkmark"></span>
          </label>
      </div>

      {errors.general && (
          <p className="form-error-general">{errors.general}</p>
      )}

      <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
