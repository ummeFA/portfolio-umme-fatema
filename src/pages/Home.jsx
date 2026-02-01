import Navbar from "../components/Navbar";
import Education from "../components/Education";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import { useEffect, useState } from "react";
import scrollTopIcon from "../../public/images/top-arrow.svg";
import Certificates from "../components/Certificates";

const Home = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    const onMenuToggle = (e) => {
      setMenuOpen(e.detail);
      if (e.detail === true) {
        setShowScrollTop(false); // force hide
      } else {
        setShowScrollTop(window.scrollY > 200); // restore
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("menuToggle", onMenuToggle);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("menuToggle", onMenuToggle);
    };
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-[linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[length:20px_20px] bg-[#f9f9f7]">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Certificates />
        <Projects />
        <ContactMe />
        <Footer />
      </div>

      {showScrollTop && !menuOpen && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 transition-transform hover:scale-110"
        >
          <img
            src={scrollTopIcon}
            alt="Scroll to Top"
            className="w-25 h-25 opacity-80 hover:opacity-100 cursor-pointer"
          />
        </button>
      )}
    </div>
  );
};

export default Home;
