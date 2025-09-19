// src/components/AboutMe.tsx
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/self_img.jpeg';

const AboutMe: React.FC = () => {
    // State to manage which tab is currently active (this remains the same)
    const [activeTab, setActiveTab] = useState('education');

    // Hook for the scroll-triggered animation of the title (this remains the same)
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // We are removing the old `renderTabContent` function.

    return (
        <section className="py-20">
            {/* Section Title (this remains the same) */}
            <div className="flex justify-end mb-12">
                <h2
                    ref={ref}
                    className={`
                        inline-block text-white bg-brand-primary font-bold text-3xl py-3 px-8
                        rounded-l-full
                        transition-all duration-1000 ease-out
                        ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                    `}
                >
                    About Me
                </h2>
            </div>

            {/* Main Content Area (this remains the same) */}
            <div className="container mx-auto px-15">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
                    {/* Left Column: Bio and Tabs */}
                    <div className="lg:w-2/3">
                        <p className="text-lg text-gray-800 leading-relaxed">
                            I'm Vrinda Devadas, a front-end developer and UI/UX design enthusiast from Kerala, raised in New Delhi, India. I'm passionate about learning, adapting to emerging front-end and UI/UX technologies, and turning ideas into delightful user experiences. I'm driven, quick to master new concepts, and thrive under mentorship and collaborative guidance.
                        </p>

                        {/* Tab Buttons (this remains the same) */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button onClick={() => setActiveTab('education')} className={`font-semibold py-2 px-6 rounded-lg transition-colors ${activeTab === 'education' ? 'bg-brand-primary text-white' : 'bg-dark-button text-white'}`}>Education</button>
                            <button onClick={() => setActiveTab('skills')} className={`font-semibold py-2 px-6 rounded-lg transition-colors ${activeTab === 'skills' ? 'bg-brand-primary text-white' : 'bg-dark-button text-white'}`}>Skills</button>
                            <button onClick={() => setActiveTab('experience')} className={`font-semibold py-2 px-6 rounded-lg transition-colors ${activeTab === 'experience' ? 'bg-brand-primary text-white' : 'bg-dark-button text-white'}`}>Experience</button>
                        </div>

                        {/* --- THIS IS THE REWRITTEN TAB CONTENT SECTION --- */}
                        {/* 1. We've made this container a CSS Grid. */}
                        <div className="mt-8 grid">
                            {/* 
                                2. All three content panels are now rendered at once.
                                   - `col-start-1 row-start-1` forces them to stack in the same grid cell.
                                   - The grid's height automatically becomes as tall as the TALLEST panel.
                                   - We use opacity to smoothly fade between them.
                                   - `pointer-events-none` prevents interaction with hidden tabs.
                            */}

                            {/* Education Panel */}
                            <div className={`col-start-1 row-start-1 transition-opacity duration-300 ${activeTab === 'education' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <div className="space-y-4 text-back-700">
                                    <div>
                                        <p className="font-bold text-brand-primary">Ryan International School, New Delhi</p>
                                        <p>Grade 10 percentage - 89.2% (2020)</p>
                                        <p>Grade 12 percentage - 79.8% (2022)</p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-primary">VIT Bhopal University (2022-2026)</p>
                                        <p>B.Tech Computer Science</p>
                                        <p>CGPA - 7.94 (current)</p>
                                    </div>
                                </div>
                            </div>

                            {/* Skills Panel */}
                            <div className={`col-start-1 row-start-1 transition-opacity duration-300 ${activeTab === 'skills' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <div className="space-y-2 text-black-700">
                                    <p><strong className="text-brand-primary">Languages:</strong> HTML, CSS, Javascript, Python</p>
                                    <p><strong className="text-brand-primary">Developer Tools:</strong> Visual Studio Code, Figma, Wordpress</p>
                                    <p><strong className="text-brand-primary">Frameworks:</strong> Bootstrap, React.js</p>
                                    <p><strong className="text-brand-primary">Soft Skills:</strong> TeamWork and Collaboration, Creative Thinking</p>
                                    <p><strong className="text-brand-primary">Areas of Interest:</strong> Front End Web Development/Design</p>
                                </div>
                            </div>

                            {/* Experience Panel */}
                            <div className={`col-start-1 row-start-1 transition-opacity duration-300 ${activeTab === 'experience' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                <div className="space-y-4 text-black-700">
                                    <div>
                                        <p className="font-bold text-brand-primary"><a href="https://seospidy.com/" target="_blank" rel="noopener noreferrer">
                                            1. SeoSpidy
                                        </a><span className="font-normal text-sm text-brand-primary"> (20 May - 1 July, 2025)</span></p>
                                        <p className="text-brand-primary">WordPress Designer Intern, New Delhi (onsite)</p>
                                        <ul className="list-disc list-inside mt-1 space-y-1">
                                            <li>Designing and Developing WordPress websites. Ensuring responsive and user friendly websites.</li>
                                            <li>Customizing themes, plugins and layouts, Collaborating with the SEO and content teams.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-brand-primary">2. DY Intelligent Interior <span className="font-normal text-sm text-brand-primary">(27 August - 12 October, 2025)</span></p>
                                        <p className="text-brand-primary">UI/UX Intern, Singapore (remote)</p>
                                        <ul className="list-disc list-inside mt-1 space-y-1">
                                            <li>Designing Wireframes and Prototyping</li>
                                            <li>Collaborated with branding and design teams to align visuals with company identity.</li>
                                            <li>Developed a custom or theme-based site that balances aesthetic impact with technical performance</li>
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-4">
                                            {/* Button 1: View Wireframes */}
                                            <a
                                                href="public\Dy.pdf" // <-- Link to your wireframes PDF
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block border border-accent-text text-accent-text font-semibold py-1 px-4 rounded hover:bg-accent-text/10 transition-colors"
                                            >
                                                View Wireframes
                                            </a>
                                            {/* Button 2: View Final Work */}
                                            <a
                                                href="public\Dy_interiors[1] (1).pdf" // <-- Link to your final work PDF
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block border border-accent-text text-accent-text font-semibold py-1 px-4 rounded hover:bg-accent-text/10 transition-colors"
                                            >
                                                View Final Work
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Profile Picture (this remains the same) */}
                    <div className="lg:w-1/5 flex justify-center">
                        <img src={profileImage} alt="Vrinda Devadas" className="w-60 h-60 md:w-65 md:h-65 rounded-full object-cover shadow-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;