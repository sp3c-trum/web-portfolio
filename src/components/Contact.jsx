import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

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
        alert("Something went wrong.");
      });
  };

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl mb-12">Kontakt</h2>

        {sent && (
          <p className="mb-8 text-sm text-gray-500">
            Twoja wiadomość została wysłana.
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
              placeholder="Twoje imię"
              required
              className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-black transition"
            />
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              placeholder="Twój email"
              required
              className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none focus:border-black transition"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Twoja wiadomość"
              required
              rows="4"
              className="w-full bg-transparent border-b border-gray-300 pb-3 outline-none resize-none focus:border-black transition"
            />
          </div>

          <button
            type="submit"
            className="mt-6 inline-block px-8 py-3 border border-black rounded-full text-sm tracking-wide hover:bg-black hover:text-white transition duration-300"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;