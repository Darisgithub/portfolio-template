import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaNodeJs, FaAws, FaNetworkWired, FaServer, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Projects = () => {
    return (
        <div id='projects' className='w-full py-20 text-gray-900 dark:text-white bg-white dark:bg-dark px-4 transition-colors duration-300'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='mb-12'>
                    <p className='text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2'>My work</p>
                    <h2 className='text-5xl font-bold'>Projects.</h2>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Project 1 */}
                    <div className='relative group'>
                        <div className='relative w-full h-[300px] bg-gray-100 dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                            <div className='flex items-center justify-center h-full bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-black'>
                                <span className='text-4xl font-bold text-gray-400 dark:text-gray-700'>API V1</span>
                            </div>
                            {/* Hover Overlay */}
                            <div className='absolute inset-0 bg-white/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4'>
                                <h3 className='text-2xl font-bold text-primary mb-2'>E-commerce API</h3>
                                <p className='text-center text-gray-600 dark:text-gray-300 mb-4 text-sm'>A robust REST API for an e-commerce platform with stripe integration.</p>
                                <div className='flex gap-4'>
                                    <button className='p-3 bg-gray-200 dark:bg-[#252525] rounded-full hover:bg-primary hover:text-black transition-colors'>
                                        <FaGithub size={20} />
                                    </button>
                                    <button className='p-3 bg-gray-200 dark:bg-[#252525] rounded-full hover:bg-primary hover:text-black transition-colors'>
                                        <FaExternalLinkAlt size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xl font-bold mb-2'>E-commerce API</h3>
                            <div className='flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm'>
                                <div className="flex items-center gap-1"><FaNodeJs className="text-[#339933]" size={18} /> Node.js</div>
                                <div className="flex items-center gap-1"><SiExpress className="text-gray-700 dark:text-white" size={18} /> Express</div>
                                <div className="flex items-center gap-1"><SiMongodb className="text-[#47A248]" size={18} /> MongoDB</div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className='relative group'>
                        <div className='relative w-full h-[300px] bg-gray-100 dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                            <div className='flex items-center justify-center h-full bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-black'>
                                <span className='text-4xl font-bold text-gray-400 dark:text-gray-700'>NET LAB</span>
                            </div>
                            {/* Hover Overlay */}
                            <div className='absolute inset-0 bg-white/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4'>
                                <h3 className='text-2xl font-bold text-primary mb-2'>Network Lab</h3>
                                <p className='text-center text-gray-600 dark:text-gray-300 mb-4 text-sm'>Virtual lab environment for testing complex routing scenarios.</p>
                                <div className='flex gap-4'>
                                    <button className='p-3 bg-gray-200 dark:bg-[#252525] rounded-full hover:bg-primary hover:text-black transition-colors'>
                                        <FaGithub size={20} />
                                    </button>
                                    <button className='p-3 bg-gray-200 dark:bg-[#252525] rounded-full hover:bg-primary hover:text-black transition-colors'>
                                        <FaExternalLinkAlt size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xl font-bold mb-2'>Network Topologies</h3>
                            <div className='flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm'>
                                <div className="flex items-center gap-1"><FaNetworkWired className="text-[#1BA0D7]" size={18} /> Cisco</div>
                                <div className="flex items-center gap-1"><FaServer className="text-[#EC7C25]" size={18} /> GNS3</div>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className='relative group'>
                        <div className='relative w-full h-[300px] bg-gray-100 dark:bg-[#1a1a1a] rounded-xl overflow-hidden border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                            <div className='flex items-center justify-center h-full bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-black'>
                                <span className='text-4xl font-bold text-gray-400 dark:text-gray-700'>AWS OPS</span>
                            </div>
                            {/* Hover Overlay */}
                            <div className='absolute inset-0 bg-white/90 dark:bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center p-4'>
                                <h3 className='text-2xl font-bold text-primary mb-2'>Cloud Ops</h3>
                                <p className='text-center text-gray-600 dark:text-gray-300 mb-4 text-sm'>Automated deployment scripts for AWS infrastructure.</p>
                                <div className='flex gap-4'>
                                    <button className='p-3 bg-gray-200 dark:bg-[#252525] rounded-full hover:bg-primary hover:text-black transition-colors'>
                                        <FaGithub size={20} />
                                    </button>
                                    <button className='p-3 bg-gray-200 dark:bg-[#252525] rounded-full hover:bg-primary hover:text-black transition-colors'>
                                        <FaExternalLinkAlt size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h3 className='text-xl font-bold mb-2'>Cloud Automation</h3>
                            <div className='flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm'>
                                <div className="flex items-center gap-1"><FaCloud className="text-[#7B42BC]" size={18} /> Terraform</div>
                                <div className="flex items-center gap-1"><FaAws className="text-[#FF9900]" size={18} /> AWS</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
