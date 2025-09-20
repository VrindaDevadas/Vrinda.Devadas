// src/components/Hero.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
    return (

        <section className="pb-24">
            <div className="container mx-auto px-10 lg:px-40">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">

                    {/* The code-only fix for the off-center Spline character */}
                    <div className="w-full max-w-md lg:w-1/2 lg:max-w-none mx-auto aspect-[4/5] overflow-hidden">
                        <div className="w-[150%] h-full relative -translate-x-[15%]">
                            <Spline scene="https://prod.spline.design/zPYoxgn8YjTIK4-R/scene.splinecode" />
                        </div>
                    </div>

                    {/* The text container, now correctly centered on all screen sizes */}
                    <div className="w-full lg:w-1/2 text-center">
                        <h2 className="text-3xl font-bold text-brand-secondary-text">
                            Hello There!
                        </h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-brand-primary-text my-3">
                            I'm Vrinda Devadas
                        </h1>
                        <p className="text-lg text-brand-secondary-text leading-relaxed">
                            I'm an aspiring Front End Developer and a UI/UX Designer
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero; 