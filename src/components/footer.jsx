export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 text-gray-300 relative">
            <div className="relative py-12 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        {/* Brand Section */}
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-10 h-10 bg-linear-to-br from-blue-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                        EventKampus
                                    </h3>
                                    <p className="text-xs text-gray-400">Platform Event Kampus</p>
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed max-w-md">
                                Platform terpercaya untuk menemukan dan mengikuti berbagai event kampus yang menarik di seluruh Indonesia.
                            </p>

                            {/* Newsletter Signup */}
                            <div className="mt-6">
                                <h4 className="text-white font-semibold mb-3">Dapatkan Update Event</h4>
                                <div className="flex gap-2 max-w-xs">
                                    <input
                                        type="email"
                                        placeholder="Email Anda"
                                        className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                    />
                                    <button className="px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-lg font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                <li>
                                    <a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#events" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href="#add-event" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Tambah Event
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group">
                                        <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></span>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-white font-semibold mb-4 flex items-center">
                                <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                Hubungi Kami
                            </h4>
                            <ul className="space-y-3">
                                <li className="flex items-center text-gray-400">
                                    <svg className="w-4 h-4 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    info@eventkampus.com
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <svg className="w-4 h-4 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    +62 812-3456-7890
                                </li>
                                <li className="flex items-center text-gray-400">
                                    <svg className="w-4 h-4 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    Jakarta, Indonesia
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            {/* Copyright */}
                            <p className="text-gray-400 text-sm">
                                &copy; {currentYear} <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">EventKampus</span>. All rights reserved.
                            </p>

                            {/* Social Media Links */}
                            <div className="flex gap-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200 hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-200 hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="m12 6.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zM6.5 6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S7.83 5 7 5s-1.5.67-1.5 1.5z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-200 hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
