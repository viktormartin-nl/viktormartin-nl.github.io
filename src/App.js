import { useEffect, useState } from "react";
import About from "./components/about/About";
import AppFooter from "./components/footer/AppFooter";
import SkillsPage from "./components/skills/SkillsPage";
import { motion } from "framer-motion";
import PreLoader from "./components/PreLoader/PreLoader";
import HeaderNav from "./components/header/HeaderNav";
import Contact from "./components/contact/ContactsPage";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import { Toaster } from "react-hot-toast";
import ContactMessage from "./components/ContactMessage/ContactMessage";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${darkMode && "dark"}`}>
      {loading ? (
        <PreLoader loading={loading} />
      ) : (
        <main className="bg-white dark:bg-[#0d0c0e] dark:text-white duration-700 ease-in-out">
          <Toaster position="top-center" reverseOrder={false} />
          <HeaderNav darkMode={darkMode} setDarkMode={setDarkMode} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.1, 0.2, 0.4, 0.8, 1] }}
            transition={{ duration: 0.2 }}
          >
            <Hero />
          </motion.div>
          <About />
          <Projects />
          <SkillsPage />
          <ContactMessage />
          <Contact />
          <AppFooter />
          <ScrollToTopButton />
        </main>
      )}
    </div>
  );
}

export default App;
