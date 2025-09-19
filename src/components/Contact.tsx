// src/components/Contact.tsx
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FaLinkedin, FaGithub, FaBehance } from 'react-icons/fa';
const Contact: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-20">
            {/* Animated Section Title */}
            <h2
                ref={ref}
                className={`
          inline-block bg-brand-primary text-white font-bold text-3xl py-3 px-8 mb-12
          rounded-r-full
          transition-all duration-1000 ease-out
          ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
        `}
            >
                Get in Touch!
            </h2>

            {/* Form Container */}
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg">


                    <form action="https://formspree.io/f/movngjyj" method="POST" className="space-y-6">

                        {/* Name Input */}
                        <div>
                            <label htmlFor="name" className="block text-lg font-semibold text-gray-800 mb-2">Name :</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full bg-white/50 p-3 rounded-lg border-none focus:ring-2 focus:ring-brand-primary"
                            />
                        </div>

                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-lg font-semibold text-gray-800 mb-2">email id :</label>
                            <input
                                type="email"
                                id="email"
                                name="email" // <-- This is important
                                required
                                className="w-full bg-white/50 p-3 rounded-lg border-none focus:ring-2 focus:ring-brand-primary"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label htmlFor="message" className="block text-lg font-semibold text-gray-800 mb-2">Your Message :</label>
                            <textarea
                                id="message"
                                name="message" // <-- This is important
                                required
                                rows={6}
                                className="w-full bg-white/50 p-3 rounded-lg border-none focus:ring-2 focus:ring-brand-primary"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-dark-button text-white font-bold py-3 px-6 rounded-lg hover:opacity-80 transition-opacity text-lg"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-8 mt-8">
                        <a href="linkedin.com/in/vrinda-devadas-607b34251" target="_blank" rel="noopener noreferrer" className="text-linkedin hover:opacity-80 transition-opacity">
                            <FaLinkedin size={32} />
                        </a>
                        <a href="https://github.com/VrindaDevadas" target="_blank" rel="noopener noreferrer" className="text-black hover:opacity-80 transition-opacity">
                            <FaGithub size={32} />
                        </a>
                        <a href="https://www.behance.net/vrindadevadas" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-brand-primary transition-colors">
                            <FaBehance size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;