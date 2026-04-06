import React from 'react';

interface ProjectCardProps {
    imageUrl: string;
    title: string;
    technologies: string;
    githubUrl?: string;
    behanceUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, technologies, githubUrl, behanceUrl }) => {
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
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-button text-white font-semibold py-2 px-6 rounded-lg hover:opacity-80 transition-opacity"
                        >
                            Github Repo
                        </a>
                    )}
                    {behanceUrl && (
                        <a
                            href={behanceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-dark-button text-white font-semibold py-2 px-6 rounded-lg hover:opacity-80 transition-opacity"
                        >
                            Behance
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;