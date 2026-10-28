import { useState } from "react";

const foods = [
  {
    name: "Chicken Special",
    category: "Main Courses",
    price: 180,
    image: "/img/specialmanok.jpeg",
    description: "Delicious chicken prepared with flavorful spices.",
  },
  {
    name: "Restaurant Special",
    category: "Main Courses",
    price: 220,
    image: "/img/restaurant.jpeg",
    description: "A satisfying meal prepared with care.",
  },
  {
    name: "Chef's Special",
    category: "Main Courses",
    price: 250,
    image: "/img/chefata.jpeg",
    description: "A special dish for your dining experience.",
  },
  {
    name: "Crispy Appetizer",
    category: "Appetizers",
    price: 100,
    image: "/img/crispy.jpeg",
    description: "A tasty starter to enjoy before your meal.",
  },
  {
    name: "Sweet Dessert",
    category: "Desserts",
    price: 90,
    image: "/img/tamis.jpeg",
    description: "A sweet treat to complete your dining experience.",
  },
];

const categories = ["All", "Appetizers", "Main Courses", "Desserts"];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFoods =
    selectedCategory === "All"
      ? foods
      : foods.filter((food) => food.category === selectedCategory);

  return (
    <section className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-600">
            Discover Our Food
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Our Menu
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            Explore our selection of delicious meals and find
            something perfect for your next dining experience.
          </p>
        </div>

        <div className="my-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2 font-semibold transition ${
                selectedCategory === category
                  ? "bg-red-700 text-white"
                  : "border border-white/20 text-gray-300 hover:bg-red-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFoods.map((food) => (
            <article
              key={food.name}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[#111111] transition hover:-translate-y-1 hover:border-red-700"
            >
              <img
                src={food.image}
                alt={food.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500">
                  {food.category}
                </p>

                <h2 className="mt-3 text-2xl font-bold">
                  {food.name}
                </h2>

                <p className="mt-3 min-h-12 leading-6 text-gray-400">
                  {food.description}
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xl font-bold text-red-500">
                    ₱{food.price.toFixed(2)}
                  </span>

                  <a
                    href="/contact"
                    className="rounded bg-red-700 px-4 py-2 text-sm font-bold hover:bg-red-800"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}