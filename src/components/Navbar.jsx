import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Bio", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all duration-500">
      <nav
        className={cn(
          "w-full max-w-4xl rounded-full px-6 py-3 transition-all duration-500 flex items-center justify-between",
          isScrolled 
            ? "bg-white/40 dark:bg-black/40 backdrop-blur-md border border-white/30 dark:border-white/10 shadow-lg" 
            : "bg-transparent"
        )}
      >
        <a className="text-xl font-bold tracking-tight" href="#hero">
          Mansi<span className="text-primary"></span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-foreground"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-2xl font-medium">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};