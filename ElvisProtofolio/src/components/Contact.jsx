import { useState } from "react";

const CONTACT_EMAIL = "elvismurati15@gmail.com";
// Web3Forms forwards submissions to the inbox tied to this access key.
// The key is meant to be public (it can only send to that inbox).
const WEB3FORMS_ACCESS_KEY = "89826620-1075-440a-9466-25137ae9c743";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.success) {
        throw new Error(result.message || `Request failed (${response.status})`);
      }
      form.reset();
      setStatus("sent");
    } catch (error) {
      console.error("Contact form error:", error);
      setErrorMessage(error instanceof TypeError ? "Network error — the request may be blocked by an ad-blocker." : error.message);
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy my email:", CONTACT_EMAIL);
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
          <div className="contact-email-row">
            <a className="contact-email" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="contact-email-icon" aria-hidden="true">@</span>
              <span>
                <small>Or email me directly</small>
                <strong>{CONTACT_EMAIL}</strong>
              </span>
            </a>
            <button className="contact-copy" type="button" onClick={copyEmail}>
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New message from your portfolio" />
          <input type="hidden" name="from_name" value="Portfolio contact form" />
          <input className="contact-honey" type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" />

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
            {status === "error" && `Couldn’t send (${errorMessage}). Please email me at ${CONTACT_EMAIL}.`}
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
