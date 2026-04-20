import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Brand</h1>
                    <p className="text-lg mb-6 text-muted">We provide innovative marketing solutions to help your business thrive online — strategy, creative, and measurable results.</p>
                    <div className="flex items-center gap-4">
                        <a href="#contact" className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent-2 transition">
                            Get Started
                        </a>
                        <a href="/contact" className="inline-flex items-center text-gray-700 hover:text-accent">
                            <img src="/icons/arrow-right.svg" alt="arrow" className="w-5 h-5 mr-2"/>
                            Contact Us
                        </a>
                    </div>
                </div>
                <div className="hero-visual">
                    <img src="/images/hero.jpg" alt="Creative marketing illustration" className="w-full rounded-xl shadow-md object-cover"/>
                </div>
            </div>
        </section>
    );
};

export default Hero;