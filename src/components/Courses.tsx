
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'Placement Readiness Program',
      category: 'Career Development',
      duration: '8 weeks',
      schedule: 'Weekends',
      description: 'Comprehensive training in interview skills, resume building, and technical preparation for campus placements.',
      eligibility: 'Final year students',
      color: 'blue'
    },
    {
      title: 'AI & Machine Learning Bootcamp',
      category: 'Technical Upskilling',
      duration: '12 weeks',
      schedule: 'Evenings',
      description: 'Hands-on training in AI/ML concepts, Python programming, and real-world project implementation.',
      eligibility: 'Engineering students',
      color: 'purple'
    },
    {
      title: 'Startup Foundations',
      category: 'Entrepreneurship',
      duration: '6 weeks',
      schedule: 'Flexible',
      description: 'Learn the fundamentals of starting a business, from idea validation to funding strategies.',
      eligibility: 'All students',
      color: 'green'
    },
    {
      title: 'Digital Marketing Mastery',
      category: 'Technical Skills',
      duration: '10 weeks',
      schedule: 'Online',
      description: 'Master digital marketing strategies, social media, SEO, and content creation for businesses.',
      eligibility: 'Open to all',
      color: 'orange'
    },
    {
      title: 'Leadership & Management',
      category: 'Soft Skills',
      duration: '4 weeks',
      schedule: 'Intensive',
      description: 'Develop essential leadership skills, team management, and communication for career growth.',
      eligibility: 'Working professionals',
      color: 'red'
    },
    {
      title: 'Blockchain & Web3 Development',
      category: 'Emerging Tech',
      duration: '14 weeks',
      schedule: 'Part-time',
      description: 'Comprehensive course on blockchain technology, smart contracts, and decentralized applications.',
      eligibility: 'Programming background',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-50 text-blue-800 border-blue-200',
      purple: 'bg-purple-50 text-purple-800 border-purple-200',
      green: 'bg-green-50 text-green-800 border-green-200',
      orange: 'bg-orange-50 text-orange-800 border-orange-200',
      red: 'bg-red-50 text-red-800 border-red-200',
      indigo: 'bg-indigo-50 text-indigo-800 border-indigo-200'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Courses & Skill Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your skills and boost your career with our comprehensive training programs designed for industry success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 border ${getColorClasses(course.color)}`}>
                  {course.category}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar size={16} className="mr-2" />
                    <span>{course.schedule}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    <strong>Eligibility:</strong> {course.eligibility}
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors duration-200">
            View All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
