// Navbar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../utils/setActiveThrottled";

const sectionIds = ["home", "about", "projects"];

export const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [_, setMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const setActiveThrottled = useRef(
    throttle((id: string) => setActive(id), 200)
  ).current;

  const isRootPage =
    location.pathname === "/" || location.pathname === "/YongPortfolio";

  const scrollToSection = (id: string) => {
    if (!isRootPage) {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
      setActive(id);
      setMenu(false);
    }
  };

  useEffect(() => {
    if (!isRootPage) return;

    const id = location.state?.scrollTo;
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setActive(id);
      }

      // Reset scroll state to avoid re-triggering
      navigate(location.pathname, { replace: true, state: {} });
    }

    const timeout = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveThrottled(entry.target.id);
          }
        });
      }, observerOptions);

      observerRef.current = observer;

      const observedElements: HTMLElement[] = [];

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observedElements.push(el);
        }
      });

      return () => {
        observedElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      };
    }, 700); // Delay observer setup to allow scroll to finish

    return () => clearTimeout(timeout);
  }, [
    isRootPage,
    location.state,
    navigate,
    setActiveThrottled,
    location.pathname,
  ]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 shadow 

       from-blue-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 "
    >
      <div className="flex justify-center items-center sm:justify-end sm:gap-12 sm:pr-9 ">
        {sectionIds.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`capitalize sm:uppercase select-none transition 
              text-left w-20 md:w-auto tracking-widest focus:outline-none ${
                active === id
                  ? "text-blue-600 font-bold"
                  : "hover:text-blue-400"
              }`}
          >
            {id}
          </button>
        ))}
      </div>
    </nav>
  );
};
