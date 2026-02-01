import React, { useState, useEffect, useRef } from "react";
import rough from "roughjs/bin/rough";
import navbarIcon from "../../public/images/navbar.png"; // adjust if needed

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Draw the sketchy close button background
  useEffect(() => {
    if (menuOpen && canvasRef.current) {
      const canvas = canvasRef.current;
      const rc = rough.canvas(canvas);
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rc.rectangle(0, 0, 100, 40, {
        roughness: 2.5,
        stroke: "black",
        strokeWidth: 2,
        fill: "rgba(255,255,0,0.3)",
        fillStyle: "hachure",
      });
    }
  }, [menuOpen]);

  // Scroll arrow hide or show in the Home.jsx
  useEffect(() => {
    const event = new CustomEvent("menuToggle", { detail: menuOpen });
    window.dispatchEvent(event);
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  const navLinks = [
    { href: "#about-me", label: "About Me" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#contact-me", label: "Contact Me" },
  ];

  return (
    <>
      {/* Main navbar */}
      <nav
        className={`text-black p-4 font-bold text-xl fixed w-full top-0 z-50 shadow transition duration-300 ${
          scrolled ? "bg-white/70 backdrop-blur-md " : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          {/* Desktop nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-2 py-1 transition duration-700 hover:bg-[linear-gradient(transparent_60%,#bbf7d0_60%)] no-underline
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#bbf7d0] after:transition-all after:duration-700 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger icon */}
          {!menuOpen && (
            <div className="md:hidden">
              <button
                className="hover:cursor-pointer hover:bg-[linear-gradient(transparent_60%,#bbf7ee_60%)] px-4 py-4 transition duration-300"
                onClick={() => setMenuOpen(true)}
              >
                <img src={navbarIcon} alt="Menu" className="w-8 h-8" />
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white/70 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 text-2xl text-black font-semibold">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:bg-[linear-gradient(transparent_60%,#bbf7d0_60%)] px-4 py-2 transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* RoughJS-style close button */}
          <div className="relative w-[100px] h-[40px]">
            <canvas
              ref={canvasRef}
              width={100}
              height={40}
              className="absolute top-0 left-0"
            />
            <button
              onClick={() => setMenuOpen(false)}
              className="relative z-10 w-full h-full text-black font-bold cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
