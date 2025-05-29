
import React from 'react';

const Coworking = () => {
  const testimonials = [
    {
      name: 'Rahul Sharma',
      company: 'TechStart Solutions',
      text: 'The coworking space provided the perfect environment for our team to grow. Amazing community and facilities!',
      avatar: '👨‍💼'
    },
    {
      name: 'Priya Gupta',
      company: 'InnovateLab',
      text: 'Networking opportunities here are incredible. We found our CTO through connections made in this space.',
      avatar: '👩‍💻'
    },
    {
      name: 'Mike Johnson',
      company: 'AI Ventures',
      text: 'Professional environment with all the amenities we need. Highly recommend for any growing startup.',
      avatar: '👨‍🔬'
    }
  ];

  return (
    <section id="coworking" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Coworking Space</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible workspace solutions designed for collaboration, productivity, and growth
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=entropy&auto=format"
              alt="Coworking space"
              className="rounded-lg shadow-xl"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Workspace Features</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Open desk spaces and private cabins
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  24/7 access with keycard entry
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  High-speed WiFi and printing facilities
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Meeting rooms and collaboration areas
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  Kitchen and coffee bar
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Membership Plans</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Hot Desk</h4>
                  <div className="text-2xl font-bold text-blue-600 mb-2">₹3,000/month</div>
                  <p className="text-gray-600 text-sm">Flexible seating, access during business hours</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-lg mb-2">Dedicated Desk</h4>
                  <div className="text-2xl font-bold text-purple-600 mb-2">₹6,000/month</div>
                  <p className="text-gray-600 text-sm">Your own desk, 24/7 access, storage included</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">What Our Members Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coworking;
