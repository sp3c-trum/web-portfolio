import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkTheme = false, lang = "pl" }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const copy = {
    pl: {
      title: "Kontakt",
      sent: "Twoja wiadomość została wysłana.",
      name: "Twoje imię",
      email: "Twój e-mail",
      message: "Twoja wiadomość",
      submit: "Wyślij wiadomość",
      error: "Coś poszło nie tak."
    },
    en: {
      title: "Contact",
      sent: "Your message has been sent.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send message",
      error: "Something went wrong."
    }
  };
  const t = copy[lang] || copy.pl;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch(() => {
        alert(t.error);
      });
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl mb-12">{t.title}</h2>

        {sent && (
          <p className={`mb-8 text-sm ${isDarkTheme ? "text-zinc-400" : "text-gray-500"}`}>
            {t.sent}
          </p>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-10"
        >
          <div>
            <input
              type="text"
              name="user_name"
              placeholder={t.name}
              required
              className={`w-full bg-transparent border-b pb-3 outline-none transition ${
                isDarkTheme
                  ? "border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-100"
                  : "border-gray-300 focus:border-black"
              }`}
            />
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder={t.email}
              required
              className={`w-full bg-transparent border-b pb-3 outline-none transition ${
                isDarkTheme
                  ? "border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-100"
                  : "border-gray-300 focus:border-black"
              }`}
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder={t.message}
              required
              rows="4"
              className={`w-full bg-transparent border-b pb-3 outline-none resize-none transition ${
                isDarkTheme
                  ? "border-zinc-700 placeholder:text-zinc-500 focus:border-zinc-100"
                  : "border-gray-300 focus:border-black"
              }`}
            />
          </div>

          <button
            type="submit"
            className={`mt-6 inline-block px-8 py-3 border rounded-full text-sm tracking-wide transition duration-300 ${
              isDarkTheme
                ? "border-zinc-100 hover:bg-zinc-100 hover:text-zinc-950"
                : "border-black hover:bg-black hover:text-white"
            }`}
          >
            {t.submit}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;