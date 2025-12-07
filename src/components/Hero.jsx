import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';

const Hero = () => {
    return (
        <div id='home' className='text-gray-900 dark:text-textMain h-screen flex flex-col justify-center items-center bg-transparent transition-colors duration-300'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='max-w-[800px] w-full h-full mx-auto text-center flex flex-col justify-center items-center'
            >
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>
                        I'm <span className='text-primary'>Muhammad Daris</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Backend Developer',
                            2000,
                            'Network Administrator',
                            2000,

                        ]}
                        wrapper="span"
                        speed={50}
                        className='md:text-5xl sm:text-4xl text-2xl font-bold text-gray-600 dark:text-gray-400'
                        repeat={Infinity}
                    />
                </div>

                <p className='md:text-lg text-base text-gray-600 dark:text-gray-500 pt-8 px-4 max-w-[600px] mx-auto leading-relaxed'>
                    I specialize in building robust backend systems and managing complex network infrastructures. Focused on efficiency, security, and scalability.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className='flex gap-6 mt-8'
                >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='p-4 bg-white dark:bg-[#202020] rounded-full border border-gray-200 dark:border-[#333] hover:border-primary hover:text-primary hover:scale-110 shadow-lg dark:shadow-none transition-all duration-300 group' aria-label="GitHub">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className='p-4 bg-white dark:bg-[#202020] rounded-full border border-gray-200 dark:border-[#333] hover:border-primary hover:text-primary hover:scale-110 shadow-lg dark:shadow-none transition-all duration-300 group' aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=darismuhammad098@gmail.com&su=Project%20Inquiry" target="_blank" rel="noopener noreferrer" className='p-4 bg-white dark:bg-[#202020] rounded-full border border-gray-200 dark:border-[#333] hover:border-primary hover:text-primary hover:scale-110 shadow-lg dark:shadow-none transition-all duration-300 group' aria-label="Email">
                        <BiEnvelope size={24} />
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;
