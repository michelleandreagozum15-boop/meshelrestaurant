import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Juvy Gozum",
    role: "Happy Customer",
    review:
      "Anak nako ang tag-iya.",
  },
  {
    name: "Lyka Fernandez",
    role: "Happy Customer",
    review:
      "Lami siya!",
  },
  {
    name: "Danile Samson",
    role: "Happy Customer",
    review:
      "I really enjoyed the food!",
  },
  {
    name: "Reanna ",
    role: "Happy Customer",
    review:
      "the staff are friendly and attentive",
    },
  {
    name: "PrincessJ ",
    role: "Happy Customer",
    review:
      "So yummy",
    },
  {
    name: "EricaB",
    role: "Happy Customer",
    review:
      "Iloveit",
    },
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="flex min-h-[80vh] items-center bg-[#060501] px-6 py-20 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-red-600">
              Welcome to
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              MESHEL
              <span className="block text-red-700">
                RESTAURANT
              </span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-gray-300">
              Experience delicious food, warm hospitality, and memorable
              moments with family and friends. Every meal is prepared
              with care to make your dining experience special.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="rounded bg-red-700 px-7 py-3 font-bold transition hover:bg-red-800"
              >
                Explore Our Menu
              </Link>

              <Link
                to="/contact"
                className="rounded border border-white px-7 py-3 font-bold transition hover:bg-white hover:text-black"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/img/makaon.jpeg"
              alt="Delicious restaurant food"
              className="h-[350px] w-full max-w-lg rounded-2xl object-cover shadow-2xl md:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS SECTION */}
      <section className="bg-[#0b0b0b] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-red-600">
              What Our Customers Say
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
              Customer Testimonials
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Your satisfaction is our priority. See what our customers
              say about their dining experience at Meshel Restaurant.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((customer) => (
              <article
                key={customer.name}
                className="rounded-2xl border border-white/10 bg-[#151515] p-8 transition duration-300 hover:-translate-y-2 hover:border-red-700"
              >
                {/* Star Rating */}
                <div
                  className="mb-5 text-2xl tracking-widest text-yellow-400"
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>

                {/* Customer Review */}
                <p className="leading-7 text-gray-300">
                  "{customer.review}"
                </p>

                {/* Customer Details */}
                <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-700 text-xl font-bold">
                    {customer.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {customer.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {customer.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">
              Thank you for choosing{" "}
              <span className="font-bold text-red-600">
                Meshel Restaurant!
              </span>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}