import { useState } from "react";

const CONTACT_EMAIL = "elvismurati15@gmail.com";
// FormSubmit forwards the form to the inbox below. The very first submission
// sends an activation email to this address — confirm it once to start receiving messages.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("_honey")) return;

    setStatus("sending");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) === "false") throw new Error(result.message);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contact section-block" id="contact">
      <div className="page-width contact-panel">
        <div className="contact-intro">
          <p className="eyebrow">Let’s work together</p>
          <h2>Have a role or project in mind?</h2>
          <p className="contact-description">
            I’m open to new opportunities. Leave your email and a short message — I’ll get back to you soon.
          </p>
          <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
            <span className="contact-email-icon" aria-hidden="true">@</span>
            <span>
              <small>Or email me directly</small>
              <strong>{CONTACT_EMAIL}</strong>
            </span>
          </a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input className="contact-honey" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <label className="field">
            <span>Your email</span>
            <input type="email" name="email" placeholder="you@example.com" autoComplete="email" required />
          </label>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="5" placeholder="Tell me about your project or role…" required />
          </label>

          <button className="button button-primary contact-submit" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send message"} <span aria-hidden="true">↗</span>
          </button>

          <p className={`contact-status is-${status}`} role="status" aria-live="polite">
            {status === "sent" && "Thanks! Your message was sent — I’ll reply soon."}
            {status === "error" && `Something went wrong. Please email me at ${CONTACT_EMAIL}.`}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
