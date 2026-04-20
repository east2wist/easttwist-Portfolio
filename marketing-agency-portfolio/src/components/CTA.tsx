import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="bg-accent text-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Business?</h2>
                <p className="mb-8">Join us today and let our marketing experts help you achieve your goals.</p>
                <a href="/contact" className="bg-white text-accent py-3 px-6 rounded-full font-semibold hover:bg-gray-200 transition">
                    Get Started
                </a>
            </div>
        </section>
    );
};

export default CTA;