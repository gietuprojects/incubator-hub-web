
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Innovate. <span className="text-blue-600">Incubate.</span> 
            <br />
            <span className="text-purple-600">Inspire.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering the next generation of entrepreneurs and innovators through 
            cutting-edge facilities, mentorship, and comprehensive skill development programs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover:scale-105 transform">
              Apply Now
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200">
              Explore Programs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-700">Startups Incubated</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-purple-600 mb-2">5</h3>
              <p className="text-gray-700">Innovation Labs</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">1000+</h3>
              <p className="text-gray-700">Students Trained</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-blue-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
