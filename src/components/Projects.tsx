
import React from 'react';
import ProjectCard from './ProjectCard';
import { useInView } from 'react-intersection-observer';

import projectOneImage from '../assets/homedec.png';
import projectTwoImage from '../assets/portfolio.png';


const projectData = [
    {
        imageUrl: projectOneImage,
        title: 'Heaven & Hearth',
        technologies: 'React.js, Figma',
        githubUrl: '#',
        figmaUrl: '#',
    },
    {
        imageUrl: projectTwoImage,
        title: 'Personal Portfolio',
        technologies: 'React.js, Figma, Spline',
        githubUrl: '#',
        figmaUrl: '#',
    },

];

const Projects: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (

        <section className="py-20">


            <h2
                ref={ref}
                className={`
          inline-block bg-brand-primary text-white font-bold text-3xl py-3 px-10 mb-12
          rounded-r-full  
          transition-all duration-1000 ease-out
          ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
        `}
            >
                My Projects
            </h2>


            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {projectData.map((project, index) => (
                            <ProjectCard
                                key={index}
                                imageUrl={project.imageUrl}
                                title={project.title}
                                technologies={project.technologies}
                                githubUrl={project.githubUrl}
                                figmaUrl={project.figmaUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;