import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import LightLogo from "@/assets/title-logo-light.svg";
import DarkLogo from "@/assets/title-logo-dark.svg";
import { useThemeContext } from "@/context/ThemeContext";
import { useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  {
    name: "Resume",
    href: "/mahesh_babu_resume.pdf",
  },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const { isDarkMode } = useThemeContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between md:px-18">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isDarkMode ? (
              <img src={DarkLogo} className="h-8 w-8" />
            ) : (
              <img src={LightLogo} className="h-8 w-8" />
            )}

            <span className="text-glow text-foreground">Mahesh Babu</span>
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary  transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
          {/* logout button (desktop) */}
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 rounded bg-primary text-white font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          <button
            onClick={handleLogout}
            className="mt-8 px-4 py-2 rounded bg-primary text-white font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
