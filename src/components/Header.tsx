import React, { useState } from 'react';
import MenuIcon from './MenuIcon'; // Import the icon

const Header: React.FC = () => {
    // State to manage the visibility of the mobile menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="p-4 md:p-6">
            <div className="container mx-auto flex justify-between items-center">
                {/* Name "Logo" - consistent across all screen sizes */}
                <div className="bg-brand-primary text-white font-bold py-2 px-10 rounded-full text-lg">
                    Vrinda Devadas
                </div>

                {/* Hamburger Menu Icon - visible only on smaller screens */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none bg-brand-primary p-2 rounded-md"
                    >
                        <MenuIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* Desktop Navigation - hidden on small screens, visible on large */}
                <nav className="hidden lg:block bg-brand-primary rounded-full">
                    <ul className="flex items-center text-white font-semibold">
                        <li><a href="#home" className="block py-3 px-10 hover:bg-white/20 rounded-full">Home</a></li>
                        <li><a href="#projects" className="block py-3 px-6 hover:bg-white/20 rounded-full">Projects</a></li>
                        <li><a href="#about" className="block py-3 px-6 hover:bg-white/20 rounded-full">About Me</a></li>
                        <li><a href="#contact" className="block py-3 px-6 hover:bg-white/20 rounded-full">Contact</a></li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu - conditionally rendered based on state */}
            {isMenuOpen && (
                <nav className="lg:hidden mt-4">
                    <ul className="flex flex-col items-center bg-brand-primary rounded-lg p-4 space-y-2">
                        <li><a href="#home" className="block w-full text-center text-white font-semibold py-2 px-6 hover:bg-white/20 rounded-full" onClick={() => setIsMenuOpen(false)}>Home</a></li>
                        <li><a href="#projects" className="block w-full text-center text-white font-semibold py-2 px-6 hover:bg-white/20 rounded-full" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
                        <li><a href="#about" className="block w-full text-center text-white font-semibold py-2 px-6 hover:bg-white/20 rounded-full" onClick={() => setIsMenuOpen(false)}>About Me</a></li>
                        <li><a href="#contact" className="block w-full text-center text-white font-semibold py-2 px-6 hover:bg-white/20 rounded-full" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;