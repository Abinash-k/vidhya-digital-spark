
const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-purple-600 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Digital Marketing Specialist</h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate digital marketer with expertise in creating and implementing effective online marketing strategies. 
              My strengths lie in digital strategy development, SEO optimization, managing Google & Meta Ads campaigns, 
              social media marketing, and creating compelling content that drives engagement and conversions.
            </p>
            <p className="text-gray-600 mb-6">
              What sets me apart is my ability to achieve high conversion rates with low-budget advertising campaigns 
              through precision audience targeting and creative optimization. I believe in data-driven decisions and 
              continuous improvement to maximize your marketing ROI.
            </p>
            <p className="text-gray-600 mb-6">
              I'm committed to staying updated with the latest digital marketing trends and technologies to bring 
              innovative solutions to my clients' businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">Digital Strategy</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">SEO</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">Google Ads</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">Meta Ads</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">Content Creation</span>
              <span className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium">Social Media</span>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-purple-500 to-brand-secondary flex items-center justify-center text-white text-5xl font-bold">SV</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <div className="bg-gradient-to-br from-purple-600 to-brand-secondary rounded-full w-16 h-16 flex items-center justify-center text-white">
                  <span className="font-bold">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
