import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xlgapdrz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully ✅");
      e.target.reset();
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-50">

      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg">

        <h2 className="text-3xl font-extrabold text-center">
          Contact Me
        </h2>

        <p className="text-center text-gray-500 mt-2">
          Send me a message 🚀
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">

          <input
            name="name"
            type="text"
            placeholder="Your Name"
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="email"
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>

          <button
            type="submit"
            className="bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition"
          >
            Send Message
          </button>

        </form>

        {status && (
          <p className="text-center mt-4 text-sm text-gray-600">
            {status}
          </p>
        )}

      </div>

    </section>
  );
}