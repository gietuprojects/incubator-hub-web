
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">About Our Center</h2>
          <p className="section-subtitle">
            Driving innovation and entrepreneurship through world-class facilities and mentorship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&crop=entropy&auto=format"
              alt="Innovation workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Vision</h3>
              <p className="text-black leading-relaxed">
                To be the premier hub for technological innovation and entrepreneurship, 
                fostering an ecosystem where ideas transform into impactful solutions that 
                benefit society and drive economic growth.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We empower students, entrepreneurs, and innovators by providing access to 
                cutting-edge technology, expert mentorship, and comprehensive support systems 
                that nurture ideas from conception to market success.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-black mb-4">Our Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">₹2.5Cr</div>
                  <div className="text-sm text-gray-600">Funding Raised</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">85%</div>
                  <div className="text-sm text-gray-600">Placement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
