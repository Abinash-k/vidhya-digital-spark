
import { 
  Globe, 
  Facebook, 
  Search, 
  Mail, 
  Instagram, 
  Pen, 
  Laptop, 
  Image, 
  Users, 
  MapPin 
} from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    { icon: <Globe size={32} />, name: "Google Ads", color: "bg-red-100 text-red-600" },
    { icon: <Facebook size={32} />, name: "Meta Ads", color: "bg-blue-100 text-blue-600" },
    { icon: <Search size={32} />, name: "SEO", color: "bg-green-100 text-green-600" },
    { icon: <Mail size={32} />, name: "Email Marketing", color: "bg-amber-100 text-amber-600" },
    { icon: <Instagram size={32} />, name: "Social Media", color: "bg-pink-100 text-pink-600" },
    { icon: <Pen size={32} />, name: "Canva Design", color: "bg-purple-100 text-purple-600" },
    { icon: <Laptop size={32} />, name: "Website Building", color: "bg-indigo-100 text-indigo-600" },
    { icon: <Image size={32} />, name: "Instagram Reels", color: "bg-rose-100 text-rose-600" },
    { icon: <Users size={32} />, name: "Lead Generation", color: "bg-cyan-100 text-cyan-600" },
    { icon: <MapPin size={32} />, name: "Google My Business", color: "bg-emerald-100 text-emerald-600" }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center p-6 rounded-xl hover:shadow-lg transition-all bg-white group card-hover"
            >
              <div className={`rounded-full p-4 ${skill.color} transition-all duration-300 mb-4 group-hover:scale-110`}>
                {skill.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
