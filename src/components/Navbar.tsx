// Navbar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const sectionIds = ["home", "about", "projects", "contact"];

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, //60% visible it will active
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };

  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-zinc-900 px-6 py-4 shadow">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">Yong's Portfolio</div>
        <div className="space-x-6">
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`capitalize transition ${
                active === id
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-400"
              }`}
            >
              {id}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
