import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Navbar } from "./components/Navbar";
import { HomeSection } from "./Pages/HomeSection";
import { AboutSection } from "./Pages/AboutSection";
import { ProjectsSection } from "./Pages/ProjectsSection";
// import { ContactSection } from "./Pages/ContactSection";
import ProjectDetail from "./features/projects/pages/ProjectDetails";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import { Background } from "./utils/Background";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div
      className="min-h-screen flex flex-col font-sans scroll-smooth
      text-zinc-800 dark:text-zinc-100 dark:bg-zinc-100 bg-zinc-100"
    >
      <div className={Background}>
        <Navbar />

        <div className="flex-1 h-screen  overflow-y-scroll">
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <main className="snap-y snap-mandatory main-scroll-bar">
                  <HomeSection />
                  <AboutSection />
                  <ProjectsSection />
                </main>
              }
            />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
