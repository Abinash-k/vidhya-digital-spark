
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose max-w-none">
          <p className="text-xl text-gray-700 mb-6">
            As a passionate digital marketer, I bring a unique blend of creativity and analytical thinking to every project. 
            My journey in digital marketing has been driven by a desire to help businesses thrive in the digital space.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">My Approach</h2>
          <p className="text-gray-700 mb-6">
            I believe in data-driven marketing strategies that deliver measurable results. By combining creative content 
            with strategic targeting, I help businesses reach their ideal audience and achieve their marketing goals efficiently.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Core Strengths</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li>Strategic campaign planning and execution</li>
            <li>Budget optimization for maximum ROI</li>
            <li>Creative content development</li>
            <li>Performance analysis and optimization</li>
            <li>Social media strategy and management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
