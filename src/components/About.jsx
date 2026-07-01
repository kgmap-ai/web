import React from 'react';

const About = () => {
  return (
    <section id="hakkimizda" className="section relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center py-20">
        <h2 className="subtitle">About Us</h2>
        <div className="w-px h-16 bg-gold mx-auto mb-12"></div>
        <p className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.3] text-title font-light">
          "KG-MAP AI Studio is a digital studio powered by AI, allowing brands to access <span className="italic text-burgundy">professional content</span> without the need for high-budget productions."
        </p>
      </div>
    </section>
  );
};

export default About;
