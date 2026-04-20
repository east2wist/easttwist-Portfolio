import React from 'react';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <div className="flex items-center gap-4 mb-4">
                <img src={service.icon} alt={`${service.title} icon`} className="w-12 h-12" />
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-700 mb-6 flex-grow">{service.description}</p>
              <div className="mt-auto">
                <a href={service.link || '#'} className="inline-flex items-center text-accent hover:underline">
                  Learn More
                  <img src="/icons/arrow-right.svg" alt="arrow" className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;