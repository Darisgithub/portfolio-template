import React, { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail } from 'react-icons/ai';
import { FaCertificate } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <>
            {/* Desktop Navbar (Right Vertical Dock) */}
            <div className='hidden md:block fixed right-8 top-1/2 -translate-y-1/2 z-50'>
                <div className='flex flex-col gap-4 bg-white/20 dark:bg-black/50 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full px-4 py-8 shadow-lg transition-colors duration-300'>
                    <button onClick={toggleTheme} className='p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 relative group' title="Toggle Theme">
                        {theme === 'dark' ? <BsSun size={24} /> : <BsMoon size={24} />}
                        <span className='absolute right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-black/90 px-2 py-1 rounded text-sm text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md'>
                            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                        </span>
                    </button>

                    <div className='w-full h-[1px] bg-black/10 dark:bg-white/10 my-1'></div>

                    <a href="#home" className='p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 relative group' title="Home">
                        <AiOutlineHome size={24} />
                        <span className='absolute right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-black/90 px-2 py-1 rounded text-sm text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md'>Home</span>
                    </a>
                    <a href="#services" className='p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 relative group' title="Services">
                        <AiOutlineUser size={24} />
                        <span className='absolute right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-black/90 px-2 py-1 rounded text-sm text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md'>Services</span>
                    </a>
                    <a href="#projects" className='p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 relative group' title="Projects">
                        <AiOutlineProject size={24} />
                        <span className='absolute right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-black/90 px-2 py-1 rounded text-sm text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md'>Projects</span>
                    </a>
                    <a href="#certifications" className='p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 relative group' title="Certifications">
                        <FaCertificate size={24} />
                        <span className='absolute right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-black/90 px-2 py-1 rounded text-sm text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md'>Certifications</span>
                    </a>
                    <a href="#contact" className='p-3 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 relative group' title="Contact">
                        <AiOutlineMail size={24} />
                        <span className='absolute right-14 top-1/2 -translate-y-1/2 bg-white dark:bg-black/90 px-2 py-1 rounded text-sm text-black dark:text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-md'>Contact</span>
                    </a>
                </div>
            </div>

            {/* Mobile Navbar (Bottom Bar) */}
            <div className='md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]'>
                <div className='flex justify-between items-center bg-white/10 dark:bg-black/30 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-full px-6 py-4 shadow-lg transition-colors duration-300'>
                    <a href="#home" className='p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300'>
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#services" className='p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300'>
                        <AiOutlineUser size={20} />
                    </a>
                    <a href="#projects" className='p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300'>
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#certifications" className='p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300'>
                        <FaCertificate size={20} />
                    </a>
                    <a href="#contact" className='p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300'>
                        <AiOutlineMail size={20} />
                    </a>

                    <div className='w-[1px] h-6 bg-black/10 dark:bg-white/10'></div>

                    <button onClick={toggleTheme} className='p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 text-gray-800 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300'>
                        {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
