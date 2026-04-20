import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import works from '../data/works';

const PortfolioCarousel: React.FC = () => {
    return (
        <div className="portfolio-carousel">
            <Carousel 
                showArrows={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                autoPlay={true} 
                interval={5000}
                transitionTime={600}
            >
                {works.map((work) => (
                    <div key={work.id} className="carousel-item">
                        <img src={work.image} alt={work.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
                        <div className="carousel-caption p-4 bg-white bg-opacity-90 rounded-b-lg -mt-4">
                            <h3 className="text-lg font-semibold">{work.title}</h3>
                            <p className="text-sm text-gray-600">{work.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default PortfolioCarousel;