import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top bar with contact info and social links */}
      <div className="bg-white h-10">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex items-center space-x-3 ml-16">
            <Facebook className="w-7 h-7 text-blue-600" />
            <Instagram className="w-7 h-7 text-pink-600" />
            <Mail className="w-7 h-7 text-gray-600" />
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-0.5 bg-gray-600 transform rotate-90"></div>
            <Phone className="w-8 h-9 text-gray-600" />
            <span className="text-black text-2xl font-normal tracking-wider font-roboto">
              +54 11 7600-8507
            </span>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="w-60 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-600 font-bold text-lg">
                  CFP 408 LOGO
                </span>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-0">
              <Button
                variant="ghost"
                className="h-32 px-16 text-black text-2xl font-bold tracking-wider hover:bg-gray-50 rounded-none font-roboto"
              >
                Sobre Nosotros
              </Button>
              <Button
                variant="ghost"
                className="h-32 px-16 text-black text-2xl font-bold tracking-wider hover:bg-gray-50 rounded-none font-roboto"
              >
                Cursos
              </Button>
              <Button
                variant="ghost"
                className="h-32 px-16 text-black text-2xl font-bold tracking-wider hover:bg-gray-50 rounded-none font-roboto"
              >
                Contacto
              </Button>
            </nav>

            {/* Contact info (right side) */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-0.5 bg-gray-800 transform rotate-90"></div>
              <Phone className="w-8 h-9 text-gray-800" />
              <span className="text-black text-2xl font-normal tracking-wider font-roboto">
                +54 11 7600-8507
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
