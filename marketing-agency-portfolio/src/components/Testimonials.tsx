import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, Example Corp",
    feedback: "The marketing strategies implemented by this agency have significantly boosted our online presence and sales. Highly recommend!",
  },
  {
    name: "Jane Smith",
    position: "Marketing Director, Another Company",
    feedback: "Their creative approach and attention to detail made all the difference in our campaign. We saw results almost immediately!",
  },
  {
    name: "Emily Johnson",
    position: "Founder, Startup Inc.",
    feedback: "A fantastic team that truly understands the needs of their clients. They helped us reach our target audience effectively.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;