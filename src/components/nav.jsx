import React, { useState } from "react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: "#home", label: "Home" },
        // { href: "#about", label: "About" },
        { href: "#events", label: "Events" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <header className="bg-[#0A2A4D] shadow-lg sticky top-0 z-50 opacity-90">
            <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
                <div className="flex items-center justify-between">
                    {/* Brand/Logo */}
                    <div className="flex items-center gap-2 text-white font-bold text-xl">
                        <span>Event Kampus</span>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white text-3xl focus:outline-none hover:text-yellow-400 transition-colors"
                        aria-controls="primary-navigation"
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                        title="Toggle menu"
                    >
                        {open ? "✕" : "☰"}
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-6">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                className="text-white hover:text-yellow-400 font-medium transition-colors duration-300 hover:scale-105 transform"
                                href={l.href}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div
                    id="primary-navigation"
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                        open ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                >
                    <div className="flex flex-col gap-3 py-2">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                className="text-white hover:text-yellow-400 hover:bg-white/10 px-4 py-2 rounded-lg font-medium transition-all duration-200"
                                href={l.href}
                                onClick={() => setOpen(false)}
                            >
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
}