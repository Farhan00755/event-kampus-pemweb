import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#0A2A4D] shadow-lg sticky top-0 z-50 opacity-90 relative">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="#home" className="text-xl font-bold text-white">
                    EventKampus
                </a>

                <ul className="hidden md:flex gap-6 text-sm text-gray-300">
                    <li>
                        <a href="#home" className="hover:text-yellow-400 transition-colors">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#events" className="hover:text-yellow-400 transition-colors">
                            Events
                        </a>
                    </li>
                    <li>
                        <a href="#add-event" className="hover:text-yellow-400 transition-colors">
                            Tambah Event
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-yellow-400 transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>

                <button
                    className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </nav>

            <ul
                className={`
                    md:hidden absolute top-full left-0 right-0 bg-[#0A2A4D] shadow-lg flex flex-col p-4 gap-4 transition-all duration-300 ease-out transform origin-top
                    ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}
                `}
            >
                <li>
                    <a href="#home" className="block py-2 text-gray-300 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#events" className="block py-2 text-gray-300 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                        Events
                    </a>
                </li>
                <li>
                    <a href="#add-event" className="block py-2 text-gray-300 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                        Tambah Event
                    </a>
                </li>
                <li>
                    <a href="#contact" className="block py-2 text-gray-300 hover:text-yellow-400" onClick={() => setIsMenuOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>
        </header>
    );
}
