import React from 'react';

const About = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4 rounded-lg shadow-2xl' src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/' />
                <div className='flex flex-col justify-center'>
                    <p className='text-primary font-bold uppercase'>About Me</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-dark'>Data-Driven Developer & Network Specialist</h1>
                    <p className='text-gray-700 py-4'>
                        I am passionate about building scalable backend services and ensuring network reliability. With a strong background in both software development and network administration, I bring a unique perspective to every project. I focus on efficiency, security, and clean code.
                    </p>
                    <button className='bg-dark text-primary w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-black transition-colors'>View Resume</button>
                </div>
            </div>
        </div>
    );
};

export default About;
