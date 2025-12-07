import React from 'react';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import { SiCisco, SiAmazon, SiJavascript } from 'react-icons/si';

const Certifications = () => {
    return (
        <div id='certifications' className='w-full py-20 bg-gray-50 dark:bg-dark text-gray-900 dark:text-white px-4 transition-colors duration-300'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='mb-12'>
                    <p className='text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2'>Learning path</p>
                    <h2 className='text-5xl font-bold'>Certifications.</h2>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {/* Certification 1 */}
                    <div className='relative group h-[300px] w-full bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                        {/* Default View */}
                        <div className='flex flex-col items-center justify-center h-full gap-4 transition-transform duration-300 group-hover:scale-105'>
                            <div className='w-20 h-20 bg-gray-100 dark:bg-[#252525] rounded-full flex items-center justify-center'>
                                <SiCisco className='text-5xl text-[#1BA0D7]' />
                            </div>
                            <h3 className='text-2xl font-bold'>CCNA</h3>
                            <span className='px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20'>2023</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className='absolute inset-0 bg-white/95 dark:bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center'>
                            <h3 className='text-2xl font-bold text-primary mb-2'>Cisco Certified Network Associate</h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed'>
                                Validated skills in network fundamentals, security, IP connectivity, and automation.
                            </p>
                            <button className='flex items-center gap-2 px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-secondary transition-colors'>
                                <FaExternalLinkAlt />
                                <span>View Credential</span>
                            </button>
                        </div>
                    </div>

                    {/* Certification 2 */}
                    <div className='relative group h-[300px] w-full bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                        {/* Default View */}
                        <div className='flex flex-col items-center justify-center h-full gap-4 transition-transform duration-300 group-hover:scale-105'>
                            <div className='w-20 h-20 bg-gray-100 dark:bg-[#252525] rounded-full flex items-center justify-center'>
                                <SiAmazon className='text-5xl text-[#FF9900]' />
                            </div>
                            <h3 className='text-2xl font-bold'>AWS SAA</h3>
                            <span className='px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20'>2024</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className='absolute inset-0 bg-white/95 dark:bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center'>
                            <h3 className='text-2xl font-bold text-primary mb-2'>Solutions Architect Associate</h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed'>
                                Designing available, cost-efficient, fault-tolerant, and scalable distributed systems on AWS.
                            </p>
                            <button className='flex items-center gap-2 px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-secondary transition-colors'>
                                <FaExternalLinkAlt />
                                <span>View Credential</span>
                            </button>
                        </div>
                    </div>

                    {/* Certification 3 */}
                    <div className='relative group h-[300px] w-full bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                        {/* Default View */}
                        <div className='flex flex-col items-center justify-center h-full gap-4 transition-transform duration-300 group-hover:scale-105'>
                            <div className='w-20 h-20 bg-gray-100 dark:bg-[#252525] rounded-full flex items-center justify-center'>
                                <SiJavascript className='text-5xl text-yellow-400' />
                            </div>
                            <h3 className='text-2xl font-bold'>JSE</h3>
                            <span className='px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20'>2024</span>
                        </div>

                        {/* Hover Overlay */}
                        <div className='absolute inset-0 bg-white/95 dark:bg-black/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-6 text-center'>
                            <h3 className='text-2xl font-bold text-primary mb-2'>JSE Certified Tech</h3>
                            <p className='text-gray-600 dark:text-gray-300 mb-6 text-sm leading-relaxed'>
                                Advanced proficiency in JavaScript ES6+, asynchronous programming, and DOM manipulation.
                            </p>
                            <button className='flex items-center gap-2 px-6 py-2 bg-primary text-black font-bold rounded-full hover:bg-secondary transition-colors'>
                                <FaExternalLinkAlt />
                                <span>View Credential</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certifications;
