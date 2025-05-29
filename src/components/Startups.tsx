
import React, { useState } from 'react';
import { Link } from 'lucide-react';

const Startups = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'HealthTech', 'AI', 'EduTech', 'FinTech', 'AgriTech'];
  
  const startups = [
    {
      id: 1,
      name: 'MediCare AI',
      domain: 'HealthTech',
      founders: 'Sarah Johnson, Mike Chen',
      description: 'AI-powered diagnostic platform for early disease detection',
      logo: '🏥',
      link: '#'
    },
    {
      id: 2,
      name: 'EduSmart',
      domain: 'EduTech',
      founders: 'Alex Kumar, Priya Sharma',
      description: 'Personalized learning platform using adaptive algorithms',
      logo: '📚',
      link: '#'
    },
    {
      id: 3,
      name: 'FinSecure',
      domain: 'FinTech',
      founders: 'David Lee, Maria Garcia',
      description: 'Blockchain-based secure payment solutions for SMEs',
      logo: '💳',
      link: '#'
    },
    {
      id: 4,
      name: 'AgriBot',
      domain: 'AgriTech',
      founders: 'Raj Patel, Anita Singh',
      description: 'Autonomous farming robots for precision agriculture',
      logo: '🤖',
      link: '#'
    },
    {
      id: 5,
      name: 'VisionAI',
      domain: 'AI',
      founders: 'Emily Zhang, Tom Wilson',
      description: 'Computer vision solutions for manufacturing quality control',
      logo: '👁️',
      link: '#'
    },
    {
      id: 6,
      name: 'HealthLink',
      domain: 'HealthTech',
      founders: 'Dr. Lisa Brown, James Taylor',
      description: 'Telemedicine platform connecting rural patients with specialists',
      logo: '💊',
      link: '#'
    }
  ];

  const filteredStartups = activeFilter === 'All' 
    ? startups 
    : startups.filter(startup => startup.domain === activeFilter);

  return (
    <section id="startups" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Incubated Startups</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover innovative startups that are shaping the future across various domains
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStartups.map((startup) => (
            <div key={startup.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{startup.logo}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{startup.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {startup.domain}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{startup.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500">
                    <strong>Founders:</strong> {startup.founders}
                  </p>
                </div>
                
                <a 
                  href={startup.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Learn More <Link size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Startups;
