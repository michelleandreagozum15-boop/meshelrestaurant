import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-600">
            Get in Touch
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-400">
            We'd love to hear from you!
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-[#111111] p-8">
            <h2 className="text-2xl font-bold">Our Information</h2>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="font-bold text-red-500">Address</h3>
                <p className="mt-2 text-gray-300">Brgy. Tiguma</p>
              </div>

              <div>
                <h3 className="font-bold text-red-500">Phone</h3>
                <p className="mt-2 text-gray-300">63+++++++</p>
              </div>

              <div>
                <h3 className="font-bold text-red-500">Email</h3>
                <p className="mt-2 break-words text-gray-300">
                  NoakRestaurant@Gmail.com
                </p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#111111] p-8"
          >
            <h2 className="text-2xl font-bold">Send Us a Message</h2>

            <label className="mt-6 block font-semibold" htmlFor="name">
              Your Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="mt-2 w-full rounded-lg border border-white/20 bg-black px-4 py-3 outline-none focus:border-red-600"
            />

            <label className="mt-5 block font-semibold" htmlFor="email">
              Your Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-2 w-full rounded-lg border border-white/20 bg-black px-4 py-3 outline-none focus:border-red-600"
            />

            <label className="mt-5 block font-semibold" htmlFor="message">
              Your Message
            </label>

            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Write your message here"
              className="mt-2 w-full resize-y rounded-lg border border-white/20 bg-black px-4 py-3 outline-none focus:border-red-600"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-red-700 px-6 py-3 font-bold transition hover:bg-red-800"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 text-green-400">
                Thank you! Your form was submitted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}