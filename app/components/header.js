import React from 'react';
import { ThemeToggler } from './theme-toggler';
import { MenuSquare, Search } from 'lucide-react';
import { FaDiscord, FaReddit, FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
    return (
        <div className="from-myPurple to-myPink bg-gradient-to-r flex rounded-sm m-3 justify-between p-3 items-center w-full text-white">
            {/* Left Section */}
            <div className="flex gap-4 items-center w-[30%]">
                <div className="hover:cursor-pointer">
                    <MenuSquare />
                </div>

                <div className="gap-2 flex text-xl px-3 border-l border-r border-white">
                    <FaDiscord />
                    <FaReddit />
                    <FaLinkedin />
                    <FaGithub />
                </div>


            </div>

            <ul className="flex gap-2">
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
            </ul>
            {/* Center Section */}
            <h1 className="text-3xl font-bold ">MAYUR</h1>
            <ul className="flex gap-2">
                <li>link1</li>
                <li>link2</li>
                <li>link3</li>
            </ul>

            {/* Right Section */}
            <div className="flex gap-4 items-center w-[30%] justify-end">


                <div className="flex gap-2 items-center">
                    <ThemeToggler />
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default Header;
