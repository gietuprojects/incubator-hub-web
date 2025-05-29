
import React from 'react';

const Amenities = () => {
  const amenities = [
    {
      icon: '🌐',
      title: 'High-Speed Internet',
      description: 'Fiber optic connection with 1Gbps speed for seamless collaboration'
    },
    {
      icon: '📞',
      title: 'Conference Rooms',
      description: 'Fully equipped meeting rooms with video conferencing facilities'
    },
    {
      icon: '☕',
      title: 'Cafeteria',
      description: 'On-site dining with healthy meals and refreshments'
    },
    {
      icon: '🔋',
      title: 'Power Backup',
      description: '24/7 uninterrupted power supply with backup generators'
    },
    {
      icon: '🅿️',
      title: 'Parking',
      description: 'Secure parking facility for cars and two-wheelers'
    },
    {
      icon: '🔒',
      title: 'Security',
      description: '24/7 security with CCTV monitoring and access control'
    },
    {
      icon: '📚',
      title: 'Library',
      description: 'Digital library with access to research papers and journals'
    },
    {
      icon: '🏃',
      title: 'Recreation Area',
      description: 'Gaming zone and relaxation area for stress relief'
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">World-Class Amenities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need for a productive and comfortable working environment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center bg-gray-50 rounded-lg p-6 hover:bg-blue-50 transition-colors duration-200">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
