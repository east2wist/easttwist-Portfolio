import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center h-screen bg-hero-pattern bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center text-white">
                <h1 className="text-5xl font-bold mb-4">Elevate Your Brand</h1>
                <p className="text-lg mb-8">We provide innovative marketing solutions to help your business thrive.</p>
                <a href="#contact" className="inline-block px-6 py-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent-dark transition">
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default Hero;