"use client"
import React, { useEffect, useState } from 'react';
import { ThemeToggler } from './theme-toggler';
import { MenuSquare, Search } from 'lucide-react';
import { FaDiscord, FaReddit, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <>
            <header
                className={`from-myPurple to-myPink bg-gradient-to-r hidden lg:flex justify-between rounded-sm p-3 items-center text-white transition-all duration-300 ${isScrolled ? 'w-full z-50 m-0 fixed top-0 lg:px-80 md:px-40' : 'lg:w-[1024px] w-auto m-3 '
                    }`}
            >
                {/* Left Section */}
                <div className="flex gap-4 items-center w-1/2">
                    <div className="hover:cursor-pointer">
                        <MenuSquare />
                    </div>

                    <div className="gap-2 flex text-xl px-3 ">
                        <FaDiscord />
                        <FaReddit />
                        <FaLinkedin />
                        <FaGithub />
                    </div>
                </div>

                {/* Center Section */}
                <h1 className="text-3xl font-bold">MAYUR</h1>

                {/* Right Section */}
                <div className="flex gap-2 items-center w-1/2 justify-end">
                    <div className="">
                        <ThemeToggler />
                    </div>
                    <Search />
                </div>
            </header>
        </>
    );
};

export default Header;
