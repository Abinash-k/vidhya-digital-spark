
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">My Skills & Expertise</h1>
        
        <div className="prose max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Digital Advertising</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>Google Ads campaign management and optimization</li>
                <li>Meta Ads strategy and implementation</li>
                <li>Audience targeting and segmentation</li>
                <li>A/B testing and performance optimization</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Content & Creative</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>Social media content strategy</li>
                <li>Instagram Reels production</li>
                <li>Graphic design using Canva</li>
                <li>Email marketing campaigns</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-3">
                <li>SEO optimization and implementation</li>
                <li>Website building and management</li>
                <li>Google Analytics and data analysis</li>
                <li>Lead generation and conversion optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SkillsPage;
