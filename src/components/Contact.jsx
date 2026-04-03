import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = ({ isDarkTheme = false, lang = "pl" }) => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const copy = {
    pl: {
      title: "Kontakt",
      intro: "Masz pomysł na projekt kreatywny, stronę, kierunek wizualny lub muzykę? Napisz, odpowiadam zwykle w 24-48h.",
      sent: "Twoja wiadomość została wysłana.",
      name: "Twoje imię",
      email: "Twój e-mail",
      message: "Twoja wiadomość",
      submit: "Wyślij wiadomość",
      sending: "Wysyłanie...",
      error: "Coś poszło nie tak.",
      nameError: "Podaj imię (min. 2 znaki).",
      emailError: "Podaj poprawny adres e-mail.",
      messageError: "Wiadomość powinna mieć min. 10 znaków.",
      reachOut: "Możesz też napisać tutaj"
    },
    en: {
      title: "Contact",
      intro: "Got an idea for a creative project, website, visual direction, or music? Reach out, I usually reply within 24-48h.",
      sent: "Your message has been sent.",
      name: "Your name",
      email: "Your email",
      message: "Your message",
      submit: "Send message",
      sending: "Sending...",
      error: "Something went wrong.",
      nameError: "Please enter your name (at least 2 characters).",
      emailError: "Please enter a valid email address.",
      messageError: "Message should be at least 10 characters long.",
      reachOut: "You can also reach me here"
    }
  };
  const t = copy[lang] || copy.pl;

  const validate = (nextValues) => {
    const errors = {};
    if (!nextValues.user_name || nextValues.user_name.trim().length < 2) {
      errors.user_name = t.nameError;
    }
    if (!nextValues.user_email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.user_email)) {
      errors.user_email = t.emailError;
    }
    if (!nextValues.message || nextValues.message.trim().length < 10) {
      errors.message = t.messageError;
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    setFieldErrors(validate(nextValues));
    setSent(false);
    setFormError("");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const errors = validate(values);
    setFieldErrors(errors);
    setSent(false);
    setFormError("");

    if (Object.keys(errors).length > 0) {
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      );
      setSent(true);
      setValues({ user_name: "", user_email: "", message: "" });
      setFieldErrors({});
      form.current.reset();
    } catch {
      setFormError(t.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-[60vh] pt-10 sm:pt-14 pb-8 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl mb-4">{t.title}</h2>
        <p className={`mb-10 text-sm leading-relaxed ${isDarkTheme ? "text-zinc-400" : "text-zinc-500"}`}>
          {t.intro}
        </p>

        {sent && (
          <p className={`mb-8 text-sm ${isDarkTheme ? "text-emerald-300" : "text-emerald-700"}`}>
            {t.sent}
          </p>
        )}

        {formError && (
          <p className={`mb-8 text-sm ${isDarkTheme ? "text-rose-300" : "text-rose-700"}`}>
            {formError}
          </p>
        )}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-8"
        >
          <div>
            <input
              type="text"
              name="user_name"
              placeholder={t.name}
              value={values.user_name}
              onChange={handleChange}
              required
              className={`w-full bg-transparent border-b pb-3 outline-none transition ${
                isDarkTheme
                  ? "border-zinc-700 placeholder:text-zinc-500 focus:border-emerald-300"
                  : "border-gray-300 focus:border-emerald-600"
              }`}
            />
            {fieldErrors.user_name && (
              <p className={`mt-2 text-xs ${isDarkTheme ? "text-amber-300" : "text-amber-700"}`}>
                {fieldErrors.user_name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder={t.email}
              value={values.user_email}
              onChange={handleChange}
              required
              className={`w-full bg-transparent border-b pb-3 outline-none transition ${
                isDarkTheme
                  ? "border-zinc-700 placeholder:text-zinc-500 focus:border-emerald-300"
                  : "border-gray-300 focus:border-emerald-600"
              }`}
            />
            {fieldErrors.user_email && (
              <p className={`mt-2 text-xs ${isDarkTheme ? "text-amber-300" : "text-amber-700"}`}>
                {fieldErrors.user_email}
              </p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder={t.message}
              value={values.message}
              onChange={handleChange}
              required
              rows="4"
              className={`w-full bg-transparent border-b pb-3 outline-none resize-none transition ${
                isDarkTheme
                  ? "border-zinc-700 placeholder:text-zinc-500 focus:border-emerald-300"
                  : "border-gray-300 focus:border-emerald-600"
              }`}
            />
            {fieldErrors.message && (
              <p className={`mt-2 text-xs ${isDarkTheme ? "text-amber-300" : "text-amber-700"}`}>
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={sending}
            className={`mt-6 inline-block px-8 py-3 border rounded-full text-sm tracking-wide transition duration-300 ${
              isDarkTheme
                ? "border-zinc-100 hover:bg-zinc-100 hover:text-zinc-950 disabled:opacity-50"
                : "border-black hover:bg-black hover:text-white disabled:opacity-50"
            }`}
          >
            {sending ? t.sending : t.submit}
          </button>
        </form>

        <div className={`mt-8 pt-6 border-t ${isDarkTheme ? "border-zinc-800" : "border-zinc-200"}`}>
          <p className={`text-xs uppercase tracking-[0.2em] mb-3 ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
            {t.reachOut}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.instagram.com/m1kolajk0per/"
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-2 rounded-full border text-xs uppercase tracking-wider transition ${
                isDarkTheme
                  ? "border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400"
                  : "border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-700"
              }`}
            >
              Instagram
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className={`px-4 py-2 rounded-full border text-xs uppercase tracking-wider transition ${
                isDarkTheme
                  ? "border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400"
                  : "border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-700"
              }`}
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;