
import { useEffect, useRef, useState } from 'react';
import { BarChart, CalendarDays, ListChecks, Calendar, Target } from 'lucide-react';

interface Record {
  id: number;
  title: string;
  description: string;
  value: string;
  icon: React.ReactNode;
  year?: string;
}

const clubRecords: Record[] = [
  {
    id: 1,
    title: "Most League Points",
    description: "Highest points total in a Premier League season",
    value: "99 Points",
    icon: <BarChart className="text-liverpool-red" size={20} />,
    year: "2019-20"
  },
  {
    id: 2,
    title: "Longest Unbeaten Run",
    description: "Consecutive league games without defeat",
    value: "44 Games",
    icon: <ListChecks className="text-liverpool-red" size={20} />,
    year: "2019-20"
  },
  {
    id: 3,
    title: "Most Consecutive Wins",
    description: "Consecutive Premier League victories",
    value: "18 Wins",
    icon: <Target className="text-liverpool-red" size={20} />,
    year: "2019-20"
  },
  {
    id: 4,
    title: "Earliest Title Win",
    description: "Fastest Premier League title win by games remaining",
    value: "7 Games Remaining",
    icon: <Calendar className="text-liverpool-red" size={20} />,
    year: "2019-20"
  },
  {
    id: 5,
    title: "Most Goals in a Season",
    description: "Highest scoring player in a single season",
    value: "47 Goals (Ian Rush)",
    icon: <Target className="text-liverpool-red" size={20} />,
    year: "1983-84"
  },
  {
    id: 6,
    title: "Most Appearances",
    description: "Player with most appearances for Liverpool FC",
    value: "857 (Ian Callaghan)",
    icon: <CalendarDays className="text-liverpool-red" size={20} />,
    year: "1960-1978"
  }
];

const RecordsSection = () => {
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
    <section id="records" className="py-20">
      <div className="container mx-auto px-4 md:px-6" ref={containerRef}>
        <div className="text-center mb-16">
          <h2 className="section-heading">Club Records</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            Historic achievements and milestones that showcase Liverpool FC's excellence throughout the decades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clubRecords.map((record, index) => (
            <div 
              key={record.id}
              className={`glass-card transition-all duration-700 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6 border-b border-liverpool-red/10">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{record.title}</h3>
                  {record.icon}
                </div>
                <p className="text-sm text-foreground/60 mt-1">{record.description}</p>
              </div>
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold">{record.value}</p>
                  {record.year && (
                    <p className="text-xs text-foreground/60 mt-1">{record.year}</p>
                  )}
                </div>
                {record.year && (
                  <div className="text-xs px-2 py-1 rounded-full bg-liverpool-gold/20 text-liverpool-darkRed">
                    {record.year.split('-')[0]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-liverpool-red/10 px-6 py-4 rounded-lg">
            <p className="text-liverpool-red font-medium mb-2">Did You Know?</p>
            <p className="text-sm text-foreground/80">
              Liverpool holds the record for the most League Cup wins (9) and has scored more goals in a single Premier League game (9) than any other club.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordsSection;
