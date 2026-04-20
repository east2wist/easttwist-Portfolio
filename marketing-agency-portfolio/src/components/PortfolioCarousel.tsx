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
                        <img src={work.image} alt={work.title} />
                        <div className="carousel-caption">
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default PortfolioCarousel;