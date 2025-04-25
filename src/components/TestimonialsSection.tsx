
import { useState, useEffect } from 'react';
import { Star, ArrowLeft, ArrowRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mohan Kumar",
      company: "MSK Travels",
      text: "Sri Vidhya's Meta Ads campaign for our bus service was incredibly effective. We saw a 200% increase in bookings with minimal ad spend. Her targeting strategies are exceptional!",
      rating: 5
    },
    {
      name: "Rajesh Singh",
      company: "On Time Tourism",
      text: "Our website setup and promotion by Sri Vidhya was seamless. The posters she designed were eye-catching and our Shirdi flight bookings have increased significantly.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "Future Astro",
      text: "Sri completely transformed our Instagram presence. Her content strategy and Meta Ads approach helped us reach our target audience effectively. The Reels she created went viral!",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay, testimonials.length]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-purple-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Client <span className="text-gradient">Feedback</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-2xl text-purple-600 mb-6">"</div>
            
            <p className="text-gray-700 text-lg mb-6 min-h-[80px]">
              {testimonials[currentIndex].text}
            </p>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  fill={i < testimonials[currentIndex].rating ? "#8B5CF6" : "none"} 
                  className={i < testimonials[currentIndex].rating ? "text-purple-600" : "text-gray-300"} 
                />
              ))}
            </div>
            
            <div className="flex items-center">
              <div className="flex-1">
                <h4 className="font-bold text-gray-800">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].company}</p>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                >
                  <ArrowLeft size={16} />
                </button>
                <button 
                  onClick={handleNext}
                  className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                onClick={() => {
                  setIsAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 rounded-full mx-1 ${
                  index === currentIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold italic text-gray-800">
            "Make your brand impossible to ignore."
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
