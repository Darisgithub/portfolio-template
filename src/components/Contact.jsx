import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { FaPaperPlane, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            setStatus('Please fill in all fields.');
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase
                .from('messages')
                .insert([{ name, email, message }]);

            if (error) throw error;

            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('Failed to send message. Please try again or check your connection.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id='contact' className='w-full py-20 bg-gray-50 dark:bg-dark text-gray-900 dark:text-white px-4 transition-colors duration-300'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='mb-12'>
                    <p className='text-gray-500 dark:text-gray-400 text-sm font-bold uppercase tracking-widest mb-2'>Connect</p>
                    <h2 className='text-5xl font-bold'>Contact Me.</h2>
                </div>

                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* Left Side - Info */}
                    <div className='lg:col-span-2 flex flex-col justify-between w-full h-full bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                        <div>
                            <h3 className='text-2xl font-bold mb-4 text-primary'>Let's talk about everything!</h3>
                            <p className='text-gray-600 dark:text-gray-400 mb-8'>
                                Don't like forms? Send me an email. 👋
                            </p>

                            <div className='flex flex-col gap-4'>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=darismuhammad098@gmail.com&su=Project%20Inquiry" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4 p-4 bg-gray-100 dark:bg-[#252525] rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#333] transition-colors group'>
                                    <div className='p-3 bg-primary/20 rounded-full text-primary group-hover:bg-primary group-hover:text-black transition-all'>
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>Mail me at</p>
                                        <p className='font-medium text-gray-800 dark:text-gray-200 break-all'>darismuhammad098@gmail.com</p>
                                    </div>
                                </a>
                                <div className='flex items-center gap-4 p-4 bg-gray-100 dark:bg-[#252525] rounded-lg group'>
                                    <div className='p-3 bg-primary/20 rounded-full text-primary'>
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-500 dark:text-gray-400'>Current Location</p>
                                        <p className='font-medium text-gray-800 dark:text-gray-200'>Jakarta, Indonesia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className='lg:col-span-3 w-full h-full bg-white dark:bg-[#1a1a1a] p-8 rounded-xl border border-gray-200 dark:border-[#333] shadow-lg dark:shadow-none'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                            <div className='grid md:grid-cols-2 gap-4'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2 font-bold text-gray-500 dark:text-gray-400'>Name</label>
                                    <input
                                        className='p-3 rounded-lg bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors'
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2 font-bold text-gray-500 dark:text-gray-400'>Email</label>
                                    <input
                                        className='p-3 rounded-lg bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors'
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your Email"
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2 font-bold text-gray-500 dark:text-gray-400'>Message</label>
                                <textarea
                                    className='p-3 rounded-lg bg-gray-50 dark:bg-[#252525] border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors h-32 resize-none'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                ></textarea>
                            </div>

                            <button
                                className={`w-full p-4 mt-4 bg-primary text-black rounded-lg font-bold hover:bg-secondary transition-all flex justify-center items-center gap-2 group ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                                {!loading && <FaPaperPlane className='group-hover:translate-x-1 transition-transform' />}
                            </button>

                            {status && (
                                <p className={`text-center mt-4 text-sm font-medium ${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                                    {status}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
