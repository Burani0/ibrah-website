import React from 'react';
import { Menu, X, HardHat } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <HardHat className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Ibrahim Ssemakula</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#expertise" className="text-gray-600 hover:text-blue-600">Expertise</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#about" className="block text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" className="block text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#expertise" className="block text-gray-600 hover:text-blue-600">Expertise</a>
            <a href="#contact" className="block text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;