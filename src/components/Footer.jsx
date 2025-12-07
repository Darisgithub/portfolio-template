import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full bg-white dark:bg-dark py-12 border-t border-gray-200 dark:border-[#222] transition-colors duration-300'>
            <div className='max-w-[1240px] mx-auto px-4 flex flex-col items-center gap-6'>

                {/* Brand */}
                <h1 className='text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent transform hover:scale-110 transition-transform cursor-pointer'>MD.</h1>

                {/* Navigation Links */}
                <div className='flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-400'>
                    <a href="#home" className='hover:text-primary transition-colors'>Home</a>
                    <a href="#services" className='hover:text-primary transition-colors'>Services</a>
                    <a href="#projects" className='hover:text-primary transition-colors'>Projects</a>
                    <a href="#certifications" className='hover:text-primary transition-colors'>Certifications</a>
                    <a href="#contact" className='hover:text-primary transition-colors'>Contact</a>
                </div>

                {/* Social Icons */}
                <div className='flex gap-6 mt-2'>
                    <a href="https://github.com/" className='p-3 bg-gray-100 dark:bg-[#252525] rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-sm'>
                        <FaGithub size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/md-daris/" className='p-3 bg-gray-100 dark:bg-[#252525] rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-sm'>
                        <FaLinkedin size={20} />
                    </a>
                    <a href="https://www.instagram.com/" className='p-3 bg-gray-100 dark:bg-[#252525] rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-sm'>
                        <FaInstagram size={20} />
                    </a>
                    <a href="https://x.com/" className='p-3 bg-gray-100 dark:bg-[#252525] rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-sm'>
                        <FaTwitter size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <p className='text-xs text-gray-500 dark:text-gray-600 mt-4'>
                    © {new Date().getFullYear()} MD. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
