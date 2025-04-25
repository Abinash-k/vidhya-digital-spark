
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex-grow">
        <Link to="/" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Let's Work Together</h2>
            <p className="text-gray-700 mb-8">
              I'm always excited to discuss new projects and opportunities. Whether you need help with 
              digital marketing strategy, social media management, or advertising campaigns, I'm here to help 
              your business grow.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:srividhya00178@gmail.com" className="text-purple-600 hover:text-purple-700">
                    srividhya00178@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-6 h-6 text-purple-600 mr-4" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+917904771037" className="text-purple-600 hover:text-purple-700">
                    +91 7904771037
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Work With Me?</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Proven track record of successful campaigns</li>
                <li>✓ Data-driven approach to marketing</li>
                <li>✓ Creative solutions within your budget</li>
                <li>✓ Clear communication and regular updates</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  rows={5}
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
