import { NavLink } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <NavLink to="/" className="text-2xl font-bold tracking-widest text-red-700">
          MESHEL
          <span className="text-white"> RESTAURANT</span>
        </NavLink>

        <div className="flex flex-wrap gap-5">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-red-500 ${
                  isActive ? "text-red-500" : "text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}