import React from 'react';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    technologies: string;
    githubUrl: string;
    figmaUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, technologies, githubUrl, figmaUrl }) => {
    return (

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">


            <img
                src={imageUrl}
                alt={title}
                className="w-full object-cover aspect-video"
            />

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