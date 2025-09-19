// src/components/ProjectCard.tsx
import React from 'react';

// Define the "shape" of the data each card will receive
interface ProjectCardProps {
    imageUrl: string;
    title: string;
    technologies: string;
    githubUrl: string;
    figmaUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, technologies, githubUrl, figmaUrl }) => {
    return (
        // --- THE FIX IS HERE ---
        // 1. We've made the card a vertical flex container. This is crucial for stacking the image and text.
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">

            {/* 
              2. THE MOST IMPORTANT CHANGE:
                 - We REMOVED the rigid `h-48` class.
                 - We ADDED `aspect-video`. This forces the image into a 16:9 ratio.
                   This makes the card more compact and visually balanced.
            */}
            <img
                src={imageUrl}
                alt={title}
                className="w-full object-cover aspect-video"
            />

            {/* 
              3. The text content now sits below the responsively-sized image.
                 We will keep the tighter padding from the last attempt.
            */}
            <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-brand-secondary-text">{title}</h3>
                <p className="text-gray-600 mt-1">Made With : {technologies}</p>

                <div className="mt-4 flex justify-center gap-4">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-button text-white font-semibold py-2 px-6 rounded-lg hover:opacity-80 transition-opacity"
                    >
                        Github Repo
                    </a>
                    <a
                        href={figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-dark-button text-white font-semibold py-2 px-6 rounded-lg hover:opacity-80 transition-opacity"
                    >
                        Figma Design
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;