
import { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface AnimatedProjectCardProps {
  title: string;
  description: string;
  achievements: string[];
  index: number;
  image: string;
}

const AnimatedProjectCard = ({ title, description, achievements, index, image }: AnimatedProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn(
        "opacity-0 transform translate-y-8",
        "transition-all duration-1000 ease-out",
        "animate-water-drop",
        `delay-${index * 200}`
      )}
    >
      <Card className="border-b border-gray-200 pb-8 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow overflow-hidden">
        <div className="h-48 w-full relative">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        </div>
        <CardContent className="pt-6">
          <h2 className="text-2xl font-semibold mb-4">{title}</h2>
          <p className="text-gray-700 mb-4">{description}</p>
          <h3 className="font-medium mb-2">Key Achievements:</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnimatedProjectCard;
