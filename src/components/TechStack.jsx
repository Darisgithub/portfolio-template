import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaDocker, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiPostgresql, SiFirebase, SiMysql } from 'react-icons/si';

const TechStack = () => {
    const techs = [
        { icon: <FaHtml5 />, name: 'HTML5', color: 'text-orange-500' },
        { icon: <FaCss3Alt />, name: 'CSS3', color: 'text-blue-500' },
        { icon: <FaJs />, name: 'JavaScript', color: 'text-yellow-400' },
        { icon: <FaReact />, name: 'React', color: 'text-blue-400' },
        { icon: <SiTailwindcss />, name: 'Tailwind', color: 'text-cyan-400' },
        { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-500' },
        { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-600' },
        { icon: <SiPostgresql />, name: 'PostgreSQL', color: 'text-blue-300' },
        { icon: <FaAws />, name: 'AWS', color: 'text-orange-400' },
        { icon: <FaDocker />, name: 'Docker', color: 'text-blue-500' },
        { icon: <FaPython />, name: 'Python', color: 'text-yellow-300' },
        { icon: <FaGitAlt />, name: 'Git', color: 'text-red-500' },
        { icon: <SiFirebase />, name: 'Firebase', color: 'text-yellow-500' },
        { icon: <SiMysql />, name: 'MySQL', color: 'text-blue-600' },
    ];

    return (
        <div className='w-full bg-white dark:bg-dark py-10 transition-colors duration-300'>
            <div
                className='max-w-[1000px] mx-auto overflow-hidden whitespace-nowrap relative'
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                }}
            >
                <div className='inline-flex animate-infinite-scroll'>
                    {techs.map((tech, index) => (
                        <div key={index} className='mx-12 flex items-center gap-2 group cursor-pointer'>
                            <span className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                {tech.icon}
                            </span>
                            <span className='text-gray-500 dark:text-gray-400 font-medium text-lg group-hover:text-black dark:group-hover:text-white transition-colors'>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                    {/* Duplicate for seamless looping */}
                    {techs.map((tech, index) => (
                        <div key={`duplicate-${index}`} className='mx-12 flex items-center gap-2 group cursor-pointer'>
                            <span className={`text-5xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                                {tech.icon}
                            </span>
                            <span className='text-gray-500 dark:text-gray-400 font-medium text-lg group-hover:text-black dark:group-hover:text-white transition-colors'>
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;
