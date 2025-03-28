
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
          className="flex items-center gap-2"
        >
          <img 
            src="/lovable-uploads/51af723e-d40a-4d3c-97b3-4ff3fb42d57b.png" 
            alt="Eonverse Logo" 
            className="h-8 w-auto object-contain" 
          />
          <span className="text-2xl font-openSauce text-cinematic-blue hover:text-white transition-colors duration-300">
            Eonverse
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Development", "Pre-Production", "Production", "Post-Production", "Distribution"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("-", "")}`}
                    className="text-white hover:text-cinematic-blue transition-colors duration-300 text-sm font-openSauce uppercase tracking-wide"
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
                      className="text-xl font-openSauce text-white hover:text-cinematic-blue transition-colors duration-300 block py-2"
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
