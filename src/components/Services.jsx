import React from 'react';
import { FaServer, FaNetworkWired, FaCloud } from 'react-icons/fa';

const Services = () => {
    return (
        <div id='services' className='w-full py-16 px-4 bg-gray-50 dark:bg-dark text-gray-900 dark:text-white transition-colors duration-300'>
            <div className='max-w-[1240px] mx-auto'>
                <p className='text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-4'>What I do?</p>
                <div className='grid md:grid-cols-3 gap-8'>
                    {/* Service 1 */}
                    <div className='flex flex-col p-8 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-[#333] hover:border-primary shadow-lg dark:shadow-none transition-all duration-300 group'>
                        <div className='w-12 h-12 bg-gray-100 dark:bg-[#252525] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                            <FaServer className='text-3xl text-primary' />
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Backend Development</h3>
                        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                            Designing and implementing scalable, secure, and high-performance server-side applications. Expertise in Node.js, Python, and SQL/NoSQL databases.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div className='flex flex-col p-8 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-[#333] hover:border-primary shadow-lg dark:shadow-none transition-all duration-300 group'>
                        <div className='w-12 h-12 bg-gray-100 dark:bg-[#252525] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                            <FaNetworkWired className='text-3xl text-primary' />
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Network Administration</h3>
                        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                            Managing complex network infrastructures, ensuring uptime, security, and optimal performance. VLAN configuration, routing protocols, and firewall management.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div className='flex flex-col p-8 bg-white dark:bg-[#1a1a1a] rounded-xl border border-gray-200 dark:border-[#333] hover:border-primary shadow-lg dark:shadow-none transition-all duration-300 group'>
                        <div className='w-12 h-12 bg-gray-100 dark:bg-[#252525] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
                            <FaCloud className='text-3xl text-primary' />
                        </div>
                        <h3 className='text-2xl font-bold mb-4'>Cloud Solutions</h3>
                        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
                            Deploying and maintaining cloud infrastructure on AWS and Azure. Implementing serverless architectures, containerization (Docker/Kubernetes), and CI/CD pipelines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
