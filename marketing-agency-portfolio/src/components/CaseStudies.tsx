import React from 'react';

const caseStudies = [
  {
    title: 'Project Alpha',
    description: 'A comprehensive digital marketing campaign that increased client engagement by 150%.',
    image: '/images/case-study-alpha.jpg',
    link: '/case-studies/alpha',
  },
  {
    title: 'Project Beta',
    description: 'An innovative social media strategy that boosted brand awareness significantly.',
    image: '/images/case-study-beta.jpg',
    link: '/case-studies/beta',
  },
  {
    title: 'Project Gamma',
    description: 'A successful SEO overhaul that improved search rankings and organic traffic.',
    image: '/images/case-study-gamma.jpg',
    link: '/case-studies/gamma',
  },
];

const CaseStudies = () => {
  return (
    <section className="case-studies">
      <h2 className="text-3xl font-bold text-center mb-8">Our Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{study.title}</h3>
              <p className="text-gray-600">{study.description}</p>
              <a href={study.link} className="text-blue-500 hover:underline mt-2 block">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;