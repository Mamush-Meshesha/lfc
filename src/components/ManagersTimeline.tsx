
import { useEffect, useRef, useState } from 'react';

interface Manager {
  id: number;
  name: string;
  period: string;
  trophies: number;
  image: string;
  description: string;
}

const managers: Manager[] = [
  {
    id: 1,
    name: "Jürgen Klopp",
    period: "2015-2024",
    trophies: 7,
    image: "https://motorcyclesports.net/wp-content/uploads/2025/02/Jurgen-Klopp.jpg",
    description: "Revitalized Liverpool with his 'heavy metal football', bringing the club their first Premier League title and sixth Champions League trophy."
  },
  {
    id: 2,
    name: "Brendan Rodgers",
    period: "2012-2015",
    trophies: 0,
    image: "https://images.unsplash.com/photo-1583292650898-7da54d818970",
    description: "Came close to winning the Premier League in 2013-14 with an exciting, attacking Liverpool side featuring Luis Suárez and Steven Gerrard."
  },
  {
    id: 3,
    name: "Kenny Dalglish",
    period: "2011-2012 (Second Spell)",
    trophies: 1,
    image: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c",
    description: "Liverpool legend who returned for a second spell as manager, winning the League Cup in 2012."
  },
  {
    id: 4,
    name: "Rafael Benítez",
    period: "2004-2010",
    trophies: 4,
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55",
    description: "Orchestrated the 'Miracle of Istanbul' in 2005, winning the Champions League in dramatic fashion against AC Milan."
  },
  {
    id: 5,
    name: "Bob Paisley",
    period: "1974-1983",
    trophies: 20,
    image: "https://images.unsplash.com/photo-1602319597478-30ca6d2d1dfd",
    description: "Liverpool's most successful manager, winning six league titles and three European Cups during his nine-year tenure."
  },
  {
    id: 6,
    name: "Bill Shankly",
    period: "1959-1974",
    trophies: 10,
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d68c48",
    description: "Transformed Liverpool from a Second Division club into one of England's most successful teams, laying the foundations for decades of glory."
  }
];

const ManagersTimeline = () => {
  const [activeManager, setActiveManager] = useState<Manager | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setActiveManager(managers[0]);
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section id="managers" className="py-20 bg-liverpool-cream/50 dark:bg-liverpool-dark/50">
      <div className="container mx-auto px-4 md:px-6" ref={timelineRef}>
        <div className="text-center mb-16">
          <h2 className="section-heading">Legendary Managers</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            The visionary leaders who shaped Liverpool FC through different eras, each leaving an indelible mark on the club's history.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className="timeline">
              {managers.map((manager, index) => (
                <div 
                  key={manager.id}
                  className={`timeline-item pb-8 cursor-pointer transition-all duration-300 ${
                    activeManager?.id === manager.id ? 'scale-105' : 'hover:scale-105'
                  }`}
                  onClick={() => setActiveManager(manager)}
                  style={{ 
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <h3 className={`font-bold text-xl ${
                    activeManager?.id === manager.id ? 'text-liverpool-red' : 'text-foreground'
                  }`}>
                    {manager.name}
                  </h3>
                  <p className="text-sm text-foreground/60">{manager.period}</p>
                  <p className="text-sm font-medium mt-1">
                    Trophies: <span className="text-liverpool-red">{manager.trophies}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            {activeManager && (
              <div className="glass-card p-6">
                <div className="mb-6 overflow-hidden rounded-lg h-64 relative">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 hover:scale-105"
                    style={{ backgroundImage: `url(${activeManager.image})` }}
                  ></div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{activeManager.name}</h3>
                <p className="text-sm text-foreground/60 mb-4">{activeManager.period}</p>
                <p className="text-foreground/80">{activeManager.description}</p>
                <div className="mt-4 pt-4 border-t border-liverpool-red/20">
                  <div className="flex items-center">
                    <span className="font-medium">Notable Achievements:</span>
                    <span className="ml-2 inline-flex items-center justify-center bg-liverpool-gold/20 px-3 py-1 rounded-full text-liverpool-darkRed text-sm">
                      {activeManager.trophies} Trophies
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagersTimeline;
