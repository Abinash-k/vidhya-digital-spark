
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experience & <span className="text-gradient">Education</span>
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            
            <div className="relative border-l-2 border-purple-200 pl-8 pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Office Administrator</h4>
                <p className="text-purple-600 font-medium">Crizone Business Centre</p>
                <p className="text-gray-500 text-sm">Aug 2023 - Aug 2024</p>
              </div>
              <p className="text-gray-600">
                Managed administrative duties while developing digital marketing skills and applying them to business operations.
              </p>
            </div>
            
            <div className="relative border-l-2 border-purple-200 pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Freelance Digital Marketer</h4>
                <p className="text-purple-600 font-medium">Self-employed</p>
                <p className="text-gray-500 text-sm">2023 - Present</p>
              </div>
              <p className="text-gray-600">
                Providing comprehensive digital marketing services to diverse clients, specializing in social media management, paid advertising, and content creation.
              </p>
            </div>
          </div>
          
          {/* Education */}
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center mb-8">
              <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-purple-200 pl-8 pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">B.Com (Computer Applications)</h4>
                <p className="text-gray-500 text-sm">2019 - 2022</p>
              </div>
              <p className="text-gray-600">
                Specialized in computer applications with focus on business administration and digital technologies.
              </p>
            </div>
            
            <div className="relative border-l-2 border-purple-200 pl-8 pb-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Digital Marketing Certification</h4>
                <p className="text-purple-600 font-medium">Famesale</p>
              </div>
              <p className="text-gray-600">
                Comprehensive training in digital marketing strategies, social media management, and online advertising.
              </p>
            </div>
            
            <div className="relative border-l-2 border-purple-200 pl-8">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-600"></div>
              <div className="mb-4">
                <h4 className="text-xl font-semibold text-gray-800">Data Analyst Training</h4>
                <p className="text-purple-600 font-medium">NIIT</p>
              </div>
              <p className="text-gray-600">
                Specialized training in data analysis techniques and tools to enhance marketing decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
