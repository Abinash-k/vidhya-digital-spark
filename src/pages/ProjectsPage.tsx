
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        
        <div className="space-y-12">
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-4">MSK Travels</h2>
            <p className="text-gray-700 mb-4">
              Led a comprehensive Meta Ads campaign for bus services, achieving exceptional results with minimal budget 
              through strategic audience targeting and creative optimization.
            </p>
            <h3 className="font-medium mb-2">Key Achievements:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>200% increase in booking conversions</li>
              <li>Reduced cost per acquisition by 40%</li>
              <li>Improved ad engagement rates by 150%</li>
            </ul>
          </div>

          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold mb-4">On Time Tourism</h2>
            <p className="text-gray-700 mb-4">
              Complete digital presence development including website creation, domain setup, and promotional material design 
              for Shirdi flight booking services.
            </p>
            <h3 className="font-medium mb-2">Project Scope:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Website development and optimization</li>
              <li>Brand identity and promotional materials</li>
              <li>Online booking system implementation</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Future Astro</h2>
            <p className="text-gray-700 mb-4">
              Developed and executed a comprehensive social media strategy, including Instagram presence development 
              and engaging content creation.
            </p>
            <h3 className="font-medium mb-2">Achievements:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>300% increase in Instagram followers</li>
              <li>High engagement rates on Reels content</li>
              <li>Successful Meta Ads campaigns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
