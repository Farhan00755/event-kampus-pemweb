import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 shadow-2xl sticky top-0 z-50 backdrop-blur-md bg-opacity-95 border-b border-white/10">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#home" className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                        📅
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            EventKampus
                        </h1>
                        <p className="text-xs text-gray-400 -mt-1">Platform Event Kampus</p>
                    </div>
                </a>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-2">
                    <li>
                        <a
                            href="#home"
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/10`}
                        >
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#events"
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/10`}
                        >
                            <span>Events</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#add-event"
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/10`}
                        >
                            <span>Tambah Event</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-white/10`}
                        >
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-all duration-300 ease-out transform origin-top ${
                isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
                <div className="px-6 py-4 space-y-2">
                    <a
                        href="#home"
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-white/10`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span>Home</span>
                    </a>
                    <a
                        href="#events"
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-white/10`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span>Events</span>
                    </a>
                    <a
                        href="#add-event"
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-white/10`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span>Tambah Event</span>
                    </a>
                    <a
                        href="#contact"
                        className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-white/10`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </header>
    );
}
