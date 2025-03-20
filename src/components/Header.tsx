
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-cinematic-dark/90 backdrop-blur-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-display text-primary hover:text-white transition-colors duration-300"
        >
          Eonverse
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Development", "Pre-Production", "Production", "Post-Production", "Distribution"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("-", "")}`}
                    className="text-muted-foreground hover:text-white transition-colors duration-300 text-sm uppercase tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        <button
          className="block md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-cinematic-dark/95 backdrop-blur-md flex flex-col items-center justify-center md:hidden">
          <nav className="w-full">
            <ul className="flex flex-col items-center space-y-8">
              {["Development", "Pre-Production", "Production", "Post-Production", "Distribution"].map(
                (item) => (
                  <li key={item} className="w-full text-center">
                    <a
                      href={`#${item.toLowerCase().replace("-", "")}`}
                      className="text-xl font-display text-white hover:text-primary transition-colors duration-300 block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
