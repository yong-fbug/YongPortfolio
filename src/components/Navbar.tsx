// Navbar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../utils/setActiveThrottled";
import { MoonIcon, SunIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Background } from "../utils/Background";

const sectionIds = ["home", "about", "projects"];

export const Navbar = () => {
  const [active, setActive] = useState<string>("home");
  const [switchMode, setSwitchMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("switchMode") === "true";
    }
    return false;
  });
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

  useEffect(() => {
    if (switchMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("switchMode", switchMode.toString());
  }, [switchMode]);

  return (
    <nav
      className={`flex items-center justify-center w-full z-50 px-6 py-4 shadow  `}
    >
      <div className="flex mx-auto sm:gap-20">
        {sectionIds.map((id) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`capitalize p-1 sm:uppercase select-none transition 
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

      <motion.div
        onClick={() => setSwitchMode((prev) => !prev)}
        className=" flex justify-end"
      >
        {switchMode ? <SunIcon /> : <MoonIcon />}
      </motion.div>
    </nav>
  );
};
