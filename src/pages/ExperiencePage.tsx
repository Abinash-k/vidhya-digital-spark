
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Experience & Education</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">Office Administrator</h3>
                <p className="text-purple-600">Crizone Business Centre</p>
                <p className="text-gray-500">Aug 2023 - Aug 2024</p>
                <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                  <li>Managed administrative operations while developing digital marketing expertise</li>
                  <li>Implemented digital solutions for business processes</li>
                  <li>Coordinated with clients and team members</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Freelance Digital Marketer</h3>
                <p className="text-purple-600">Self-employed</p>
                <p className="text-gray-500">2023 - Present</p>
                <ul className="list-disc pl-6 mt-4 text-gray-700 space-y-2">
                  <li>Managing multiple client projects across various industries</li>
                  <li>Developing and executing digital marketing strategies</li>
                  <li>Creating and optimizing ad campaigns</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Education & Certifications</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold">B.Com (Computer Applications)</h3>
                <p className="text-gray-500">2019 - 2022</p>
                <p className="text-gray-700 mt-2">
                  Focused on business administration and digital technologies, providing a strong foundation 
                  for my career in digital marketing.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Digital Marketing Certification</h3>
                <p className="text-purple-600">Famesale</p>
                <p className="text-gray-700 mt-2">
                  Comprehensive training in digital marketing strategies, social media management, 
                  and online advertising platforms.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold">Data Analyst Training</h3>
                <p className="text-purple-600">NIIT</p>
                <p className="text-gray-700 mt-2">
                  Advanced training in data analysis techniques and tools, enabling data-driven 
                  marketing decisions and campaign optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
