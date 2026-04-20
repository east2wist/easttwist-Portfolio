import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <Link href="/">
                        <img src="/images/logo.jpg" alt="logo" className="w-10 h-10 rounded" />
                    </Link>
                    <div className="text-xl font-bold text-primary">
                        <Link href="/">Marketing Agency</Link>
                    </div>
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
                <div className="hidden md:flex items-center gap-4">
                    <a href="mailto:info@example.com" className="text-gray-700 hover:text-accent"><img src="/icons/mail.svg" alt="mail" className="w-5 h-5"/></a>
                    <a href="tel:+123456789" className="text-gray-700 hover:text-accent"><img src="/icons/phone.svg" alt="phone" className="w-5 h-5"/></a>
                    <a href="https://wa.me/" className="text-gray-700 hover:text-accent"><img src="/icons/whatsapp.svg" alt="whatsapp" className="w-5 h-5"/></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;