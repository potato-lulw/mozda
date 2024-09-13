"use client"
import React, { useEffect, useState } from 'react';
import { ThemeToggler } from './theme-toggler';
import { Menu, Search } from 'lucide-react';
import { FaDiscord, FaReddit, FaLinkedin, FaGithub } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter;
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
                className={`from-myPurple to-myPink bg-gradient-to-r hidden lg:flex justify-between rounded-sm p-3 items-center text-white transition-all duration-300 ${isScrolled ? 'w-full rounded-none z-100 m-0 fixed top-0 lg:px-80 md:px-40' : 'lg:w-[1024px] w-auto m-3 z-100'
                    }`}
            >
                {/* Left Section */}
                <div className="flex gap-4 items-center w-1/2">
                    <div className="hover:cursor-pointer">
                        <Menu />
                    </div>

                    <div className="gap-2 flex text-xl px-3 ">
                        <FaDiscord />
                        <FaReddit />
                        <FaLinkedin />
                        <FaGithub />
                    </div>
                </div>

                {/* Center Section */}
                <h1 className="text-3xl font-bold"><Link href={"/"}>MAYUR</Link></h1>

                {/* Right Section */}
                <div className="flex gap-2 items-center w-1/2 justify-end">
                    <div className="">
                        <ThemeToggler />
                    </div>
                    <Search />
                </div>
            </header>

            <header className='top-0 fixed lg:hidden flex w-full bg-gradient-to-r from-myPurple to-myPink justify-between items-center p-1 text-white'>

                <div className='flex justify-center items-center gap-4 '>

                    <div className="hover:cursor-pointer w-12 h-full border-r border-white flex justify-center items-center ">
                        <Menu />
                    </div>

                    <h1 className="text-xl font-bold"><Link href={"/"}>MAYUR</Link></h1>
                </div>

                <div className='flex gap-2 justify-center items-center'>
                    <ThemeToggler />
                    <Search size={20} />
                </div>
            </header>
        </>
    );
};

export default Header;
