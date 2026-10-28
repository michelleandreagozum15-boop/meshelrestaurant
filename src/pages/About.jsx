export default function About() {
  return (
    <section className="min-h-[75vh] px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <img
          src="/img/meshelLogo.jpeg"
          alt="Food served at Meshel Restaurant"
          className="h-[350px] w-full rounded-2xl object-cover"
        />

        <div>
          <p className="font-bold uppercase tracking-widest text-red-600">
            About Us
          </p>

          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Welcome to Meshel Restaurant
          </h1>

          <p className="mt-6 leading-8 text-gray-300">
            Meshel Restaurant is dedicated to serving delicious meals
            in a welcoming atmosphere. We believe that good food brings
            people together and makes every occasion memorable.
          </p>

          <p className="mt-4 leading-8 text-gray-300">
            Our goal is to provide quality food, friendly service,
            and a comfortable place where customers can enjoy
            wonderful dining experiences.
          </p>

          <div className="mt-8 border-l-4 border-red-700 pl-4">
            <p className="text-xl font-bold">Our Mission</p>
            <p className="mt-2 text-gray-400">
              To serve satisfying food and create memorable moments
              for every customer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}