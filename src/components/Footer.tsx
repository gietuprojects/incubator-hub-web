
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TechIncubator</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Empowering the next generation of innovators and entrepreneurs through 
              world-class facilities, mentorship, and comprehensive education programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-xl">📘</a>
              <a href="#" className="text-gray-300 hover:text-white text-xl">🐦</a>
              <a href="#" className="text-gray-300 hover:text-white text-xl">💼</a>
              <a href="#" className="text-gray-300 hover:text-white text-xl">📷</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="#startups" className="text-gray-300 hover:text-white">Startups</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white">Courses</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Startup Incubation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Skill Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Mentorship</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Coworking Space</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Technical College Incubation Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
