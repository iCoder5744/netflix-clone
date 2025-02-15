import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_img from '../assets/profile_img.png';
import caret_icon from '../assets/caret_icon.svg';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >= 80);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-20 transition-all duration-300 ${isScrolled ? "bg-[#141414]" : "bg-transparent"}`}>
            <div className="container mx-auto flex justify-between items-center px-4 md:px-10 lg:px-16 max-w-[1600px] py-3 md:py-4">

                {/* Left: Logo and Navigation Links */}
                <div className="flex items-center gap-4 md:gap-6 lg:gap-10">
                    <Link to="/">
                        <img src={logo} alt="Logo" className="w-[70px] md:w-[90px] lg:w-[100px]" />
                    </Link>

                    {/* Desktop & Tablet Navigation */}
                    <ul className="hidden md:flex list-none gap-3 md:gap-4 lg:gap-6 text-xs md:text-sm lg:text-base">
                        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link to="/tvshows" className="hover:text-gray-300">TV Shows</Link></li>
                        <li><Link to="/movies" className="hover:text-gray-300">Movies</Link></li>
                        <li><Link to="/popular" className="hover:text-gray-300">New & Popular</Link></li>
                        <li><Link to="/mylist" className="hover:text-gray-300">My List</Link></li>
                        <li><Link to="/languages" className="hover:text-gray-300">Languages</Link></li>
                    </ul>
                </div>

                {/* Right: Icons & Profile */}
                <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
                    <img src={search_icon} alt="Search" className="w-5 cursor-pointer hidden md:block" />
                    <p className="hidden lg:block">Children</p>
                    <img src={bell_icon} alt="Notifications" className="w-5 cursor-pointer hidden md:block" />

                    {/* Profile Dropdown */}
                    <div className="relative flex items-center gap-2 cursor-pointer group">
                        <img src={profile_img} alt="Profile" className="w-8 md:w-9 rounded-md" />
                        <img src={caret_icon} alt="Dropdown" className="hidden md:block" />
                        <div className="absolute w-[150px] top-full right-0 bg-[#191919] p-2 hidden underline text-sm group-hover:block">
                            <p className="cursor-pointer">Click here to SignOut</p>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle Button */}
                    <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`absolute top-14 left-0 w-full bg-black text-white flex flex-col py-5 px-6 space-y-4 shadow-lg md:hidden transition-all duration-300 ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col gap-4 text-lg">
                    <li><Link to="/" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/tvshows" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>TV Shows</Link></li>
                    <li><Link to="/movies" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Movies</Link></li>
                    <li><Link to="/popular" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>New & Popular</Link></li>
                    <li><Link to="/mylist" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>My List</Link></li>
                    <li><Link to="/languages" className="hover:text-gray-300" onClick={() => setMenuOpen(false)}>Languages</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
