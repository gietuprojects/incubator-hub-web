
import React from 'react';

const Labs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Innovation Labs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            State-of-the-art facilities equipped with cutting-edge technology for research and development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Lab */}
          <div id="ai-lab" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop&crop=entropy&auto=format"
              alt="AI Lab"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Laboratory</h3>
              <p className="text-gray-600 mb-6">
                Our AI Lab is equipped with high-performance computing resources, GPU clusters, 
                and specialized software for machine learning, deep learning, and artificial intelligence research.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Equipment & Resources:</h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• NVIDIA RTX 4090 GPU Workstations</li>
                <li>• Cloud Computing Access (AWS, Google Cloud)</li>
                <li>• TensorFlow, PyTorch, and OpenAI Tools</li>
                <li>• Data Analytics and Visualization Software</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Current Projects:</h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Computer Vision for Healthcare</li>
                <li>• Natural Language Processing Applications</li>
                <li>• Predictive Analytics for Agriculture</li>
              </ul>
              
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Request Access
              </button>
            </div>
          </div>

          {/* Fabrication Lab */}
          <div id="fab-lab" className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop&crop=entropy&auto=format"
              alt="Fabrication Lab"
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fabrication Laboratory</h3>
              <p className="text-gray-600 mb-6">
                A fully equipped digital fabrication facility with 3D printing, laser cutting, 
                CNC machining, and electronics prototyping capabilities for hardware development.
              </p>
              
              <h4 className="font-semibold text-gray-900 mb-3">Manufacturing Tools:</h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Industrial 3D Printers (FDM & SLA)</li>
                <li>• Laser Cutting and Engraving Systems</li>
                <li>• CNC Milling Machines</li>
                <li>• Electronics Workbenches & Soldering Stations</li>
              </ul>
              
              <h4 className="font-semibold text-gray-900 mb-3">Safety & Access:</h4>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li>• Mandatory safety training required</li>
                <li>• Supervised access for beginners</li>
                <li>• Online booking system available</li>
              </ul>
              
              <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
                Book Session
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labs;
