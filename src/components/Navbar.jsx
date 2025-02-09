import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import search_icon from '../assets/search_icon.svg';
import bell_icon from '../assets/bell_icon.svg';
import profile_img from '../assets/profile_img.png';
import caret_icon from '../assets/caret_icon.svg';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Mock authentication state (Replace this with real auth logic)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Function to handle logout
    const handleLogout = () => {
        setIsAuthenticated(false); // Reset auth state (use Firebase/JWT/localStorage in real case)
    };

    return (
        <div className="fixed top-0 w-[90%] max-w-[90%] md:px-10 py-4 flex justify-between items-center text-[#e5e5e5] bg-gradient-to-b from-black/70 to-transparent z-10 mx-auto left-0 right-0">

            {/* Left Section */}
            <div className="flex items-center gap-5 md:gap-10">
                <img src={logo} alt="Logo" className="w-[80px] md:w-[100px]" />

                {/* Desktop Navigation */}
                <ul className="hidden md:flex list-none gap-5">
                    <li><Link to="/" className="cursor-pointer">Home</Link></li>
                    <li><Link to="/tvshows" className="cursor-pointer">TV Shows</Link></li>
                    <li><Link to="/movies" className="cursor-pointer">Movies</Link></li>
                    <li><Link to="/popular" className="cursor-pointer">New & Popular</Link></li>
                    <li><Link to="/mylist" className="cursor-pointer">My List</Link></li>
                    <li><Link to="/languages" className="cursor-pointer">Browse by Languages</Link></li>                </ul>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-5">
                <img src={search_icon} alt="Search" className="w-5 cursor-pointer" />
                <p className="hidden md:block">Children</p>
                <img src={bell_icon} alt="Notifications" className="w-5 cursor-pointer" />

                <div className="relative flex items-center gap-2 cursor-pointer group">
                    <img src={profile_img} alt="Profile" className="w-9 rounded-md" />
                    {isAuthenticated ? (
                        <div className="relative group">
                            {/* Profile Dropdown Button */}
                            <img src={caret_icon} alt="Dropdown" className="cursor-pointer" />

                            {/* Dropdown Menu (Appears on Hover) */}
                            <div className="absolute top-full right-0 w-[140px] bg-[#191919] p-2 hidden underline text-sm group-hover:block border rounded-md">
                                <p className="cursor-pointer">Sign Out of Netflix</p>
                            </div>
                        </div>
                    ) : (
                        <></>
                        
                    )}

                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
                <div className="absolute top-14 left-0 w-full bg-black text-white flex flex-col py-5 px-6 space-y-4 shadow-lg md:hidden">
                    <ul className="flex flex-col gap-4">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">TV Shows</li>
                        <li className="cursor-pointer">Movies</li>
                        <li className="cursor-pointer">New & Popular</li>
                        <li className="cursor-pointer">My List</li>
                        <li className="cursor-pointer">Browse by Languages</li>
                    </ul>
                </div>
            )}
            {/* Mobile Menu Toggle Button */}
            <button className="md:hidden text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? "✖" : "☰"}
            </button>
        </div>
    );
};

export default Navbar;
