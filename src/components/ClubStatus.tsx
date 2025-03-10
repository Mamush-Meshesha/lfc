
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, TrendingUp, Users, Award, Landmark, DollarSign } from 'lucide-react';

interface StatusItem {
  id: number;
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  color: string;
}

const statusItems: StatusItem[] = [
  {
    id: 1,
    title: "League Position",
    value: "1st",
    icon: <TrendingUp size={20} />,
    trend: "Up 1 places",
    color: "bg-green-500"
  },
  {
    id: 2,
    title: "Stadium Capacity",
    value: "61,276",
    icon: <Landmark size={20} />,
    color: "bg-orange-500"
  },
  {
    id: 3,
    title: "Season Ticket Holders",
    value: "???",
    icon: <Users size={20} />,
    color: "bg-liverpool-red"
  },
  {
    id: 4,
    title: "European Qualification",
    value: "Champions League Round of 16",
    icon: <Award size={20} />,
    color: "bg-blue-500"
  },
  {
    id: 5,
    title: "Current Manager",
    value: "Arne Slot",
    icon: <Users size={20} />,
    color: "bg-purple-500"
  },
  {
    id: 6,
    title: "Club Value",
    value: "$5.37 billion",
    icon: <DollarSign size={20} />,
    trend: "Up 15% YoY",
    color: "bg-green-500"
  }
];

const ClubStatus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section id="status" className="py-20 bg-liverpool-cream/50 dark:bg-liverpool-dark/50">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="section-heading">Current Status</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A snapshot of Liverpool FC's current standing, infrastructure, and recent achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {statusItems.map((item, index) => (
            <div 
              key={item.id}
              className={`glass-card p-6 transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${item.color} text-white`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground/60">{item.title}</h3>
                  <p className="text-2xl font-bold">{item.value}</p>
                  {item.trend && (
                    <div className="flex items-center text-green-600 text-xs mt-1">
                      <ArrowUp size={12} className="mr-1" />
                      <span>{item.trend}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-6">
          <h3 className="text-xl font-bold mb-4">2024-25 Season Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h4 className="text-lg font-medium mb-2">Competitions</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>Premier League</span>
                  <span className="font-medium">1st Place</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>Champions League</span>
                  <span className="font-medium">Round of 16</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>FA Cup</span>
                  <span className="font-medium">Out</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>League Cup</span>
                  <span className="font-medium">Final</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-medium mb-2">Key Statistics</h4>
              <ul className="space-y-2">
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>Goals Scored</span>
                  <span className="font-medium">69</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>Goals Conceded</span>
                  <span className="font-medium">27</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>Clean Sheets</span>
                  <span className="font-medium">12</span>
                </li>
                <li className="flex items-center justify-between p-2 bg-white/50 dark:bg-white/5 rounded">
                  <span>Win Percentage</span>
                  <span className="font-medium">64%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubStatus;
