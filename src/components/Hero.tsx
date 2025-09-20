// src/components/Hero.tsx
import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen pb-20">
            <div className="container mx-auto px-4 lg:px-50">

                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">


                    <div className="w-full max-w-lg lg:w-1/2 lg:max-w-none mx-auto aspect-[4/5] overflow-hidden">
                        <div className="w-[150%] h-full relative -translate-x-[15%] ">
                            <Spline scene="https://prod.spline.design/zPYoxgn8YjTIK4-R/scene.splinecode" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-center pt-5 ">
                        <h2 className="text-2xl font-bold text-brand-secondary-text ">
                            Hello There!
                        </h2>

                        <h1 className="text-3xl md:text-5xl font-bold text-brand-primary-text my-1.5">
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