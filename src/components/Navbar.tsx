// Navbar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sectionIds = ["home", "about", "projects", "contact"];

export const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [menu, setMenu] = useState<boolean>(false)
  const navigate = useNavigate();
  const location = useLocation();

  const isRootPage = location.pathname === "/" || location.pathname === "/YongPortfolio";

  const scrollToSection = (id: string) => {
    if (!isRootPage) {
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
        
        <button
          onClick={() => setMenu((prev) => !prev)}
          className="md:hidden text-zinc-800 dark:text-zinc-100"
        >
          {menu ? <X size={24} /> : <Menu size={24} />  }

        </button>
        
        <div 
          className={`${
            menu ? "block" : "hidden"
            } md:flex md:space-x-6 space-y-2 md:space-y-0 absolute md:static
             bg-white dark:bg-zinc-900 left-0 w-full md:w-auto top-16 md:top-auto px-6
             md:px-0 py-4 md:py-0 transition`}
        >
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`capitalize transition text-left w-full md:w-auto ${
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
