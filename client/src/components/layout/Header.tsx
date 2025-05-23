import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import EtnaLogo from "@assets/EtnaLogo.jpeg";

const Header = () => {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { path: "/", label: "Ana Sayfa" },
    { path: "/hakkimizda", label: "Hakkımızda" },
    { path: "/hizmetlerimiz", label: "Hizmetlerimiz" },
    { path: "/iletisim", label: "İletişim" },
    { path: "/blog", label: "Blog" }
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:space-x-10">
          <div className="flex justify-start items-center">
            <Link href="/" className="flex items-center">
              <span className="sr-only">Etna Genetik</span>
              <img 
                src={EtnaLogo} 
                alt="ETNA Genetik Logo" 
                className="h-20" 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`relative font-medium transition-colors ${
                  location === link.path
                    ? "text-gray-800 after:absolute after:w-full after:h-0.5 after:bg-primary-600 after:bottom-[-4px] after:left-0"
                    : "text-gray-600 hover:text-primary-600 after:absolute after:w-0 after:h-0.5 after:bg-primary-600 after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          {/* Contact Button (Desktop) */}
          <div className="hidden md:flex items-center justify-end">
            <Button asChild>
              <Link href="/iletisim" className="text-sm">
                Bize Ulaşın
              </Link>
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menüyü aç</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      href={link.path}
                      onClick={closeMenu}
                      className={`px-3 py-2 rounded-md text-base font-medium ${
                        location === link.path
                          ? "text-gray-800 bg-gray-100"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild className="w-full mt-4">
                    <Link href="/iletisim" onClick={closeMenu}>
                      Bize Ulaşın
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
