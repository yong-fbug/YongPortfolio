import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { HomeSection } from "./Pages/HomeSection";
import { AboutSection } from "./Pages/AboutSection";
import { ProjectsSection } from "./Pages/ProjectsSection";
import { ContactSection } from "./Pages/ContactSection";
import ProjectDetail from "./features/projects/pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Ensure DOM is mounted
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans scroll-smooth
     bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100">
      <Navbar />
      <div className="flex-1">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
              </main>
            }
          />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </div>
  );
}
