import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-primary">
                    <Link href="/">Marketing Agency</Link>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="text-gray-700 hover:text-accent">Home</Link>
                    </li>
                    <li>
                        <Link href="/services" className="text-gray-700 hover:text-accent">Services</Link>
                    </li>
                    <li>
                        <Link href="/portfolio" className="text-gray-700 hover:text-accent">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/case-studies" className="text-gray-700 hover:text-accent">Case Studies</Link>
                    </li>
                    <li>
                        <Link href="/testimonials" className="text-gray-700 hover:text-accent">Testimonials</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-gray-700 hover:text-accent">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;