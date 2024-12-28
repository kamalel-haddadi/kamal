import { useState } from 'react';
import { DATA } from '../data/port_data';
// import { a } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/75 backdrop-blur-md border-b-[1px] z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    {/* Logo and brand name */}
                    <div className="flex items-center">
                        <a to="/NavbarLogo" className="flex items-center">
                            <span className="text-2xl font-bold text-green-600">Donate For Gaza</span>
                        </a>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="https://kparadise.org/malakfund/" className="text-gray-700 hover:text-green-600 text-sm md:text-base cursor-pointer">Join Malak's Lifeline for Gaza IDPs</a>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="https://kparadise.org/malakfund/" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
                            Donate Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-green-600"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden pb-4">
                        <a href="https://kparadise.org/malakfund/" to="/malak link" className="block py-2  text-gray-700 hover:text-green-600 cursor-pointer">Join Malak's Lifeline for Gaza IDPs
                        </a>
                        <a href="https://kparadise.org/malakfund/" className="block w-full mt-2 bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300 text-center">
                            Donate Now
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
}