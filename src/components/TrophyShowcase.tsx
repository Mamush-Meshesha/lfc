
import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

interface Trophy {
  id: number;
  name: string;
  count: number;
  year: string;
  image: string;
  description: string;
}

const trophies: Trophy[] = [
  {
    id: 1,
    name: "Premier League",
    count: 19,
    year: "Last: 2019-20",
    image: "https://images-bucket.bonanzastatic.com/afu/images/907a/6f65/4fd2_12777609738/untitleddesign_13.png",
    description: "Liverpool has won England's top-flight league 19 times, with their first in 1901 and most recent in the 2019-20 season."
  },
  {
    id: 2,
    name: "Champions League",
    count: 6,
    year: "Last: 2018-19",
    image: "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2024/05/chleague.jpg",
    description: "The Reds have lifted the European Cup/Champions League 6 times, making them one of the most successful English clubs in European competition."
  },
  {
    id: 3,
    name: "FA Cup",
    count: 8,
    year: "Last: 2021-22",
    image: "https://assets.goal.com/images/v3/blte2712b3178d560b6/FA_Cup_trophy_general_view.jpg",
    description: "Liverpool has won the FA Cup 8 times, with their first victory in 1965 and their most recent in 2022."
  },
  {
    id: 4,
    name: "League Cup",
    count: 10,
    year: "Last: 2021-22",
    image: "https://s3.eu-west-1.amazonaws.com/gc-media-assets.gc.eflservices.co.uk/0ce98720-208e-11ee-b9c9-4d35e948fb91.jpg",
    description: "Liverpool holds the record for most League Cup wins with 9 titles, most recently winning in the 2021-22 season."
  },
  {
    id: 5,
    name: "UEFA Cup/Europa League",
    count: 3,
    year: "Last: 2000-01",
    image: "https://editorial.uefa.com/resources/0276-157f12f596be-fd128be790db-1000/eintracht_frankfurt_v_rangers_fc_-_uefa_europa_league_final_2021_22.jpeg",
    description: "Liverpool has won the UEFA Cup/Europa League 3 times, with victories in 1973, 1976, and 2001."
  },
  {
    id: 6,
    name: "UEFA Super Cup",
    count: 4,
    year: "Last: 2019",
    image: "https://editorial.uefa.com/resources/0250-0c50f1415505-b66c7bb7b61a-1000/the_uefa_super_cup_trophy.jpeg",
    description: "Liverpool has won the UEFA Super Cup 4 times, with victories in 1977, 2001, 2005, and 2019."
  },
  {
    id: 7,
    name: "FIFA Club World Cup",
    count: 1,
    year: "2019",
    image: "https://i0.wp.com/www.fanzword.com/wp-content/uploads/2024/03/fifa-club-world-cup-trophy.jpg",
    description: "Liverpool won the FIFA Club World Cup for the first time in 2019, defeating Flamengo in the final."
  }
];

const TrophyShowcase = () => {
  const [visibleTrophies, setVisibleTrophies] = useState<Trophy[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start revealing trophies one by one with delay
          trophies.forEach((trophy, index) => {
            setTimeout(() => {
              setVisibleTrophies(prev => [...prev, trophy]);
            }, index * 200);
          });
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
    <section id="trophies" className="py-20 relative" ref={containerRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Trophy Cabinet</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A storied history of domestic and international success, Liverpool FC has established itself as one of the most decorated clubs in world football.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trophies.map((trophy, index) => (
            <div 
              key={trophy.id}
              className={`trophy-card transform transition-all duration-500 ${
                visibleTrophies.includes(trophy) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="h-48 bg-gradient-to-b from-liverpool-red/20 to-liverpool-red/5 relative overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trophy.image})` }}
                ></div>
                <div className="absolute top-3 right-3 flex items-center justify-center">
                  <span className="trophy-count">{trophy.count}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2">
                  {trophy.name === "Champions League" && (
                    <Star size={16} className="text-liverpool-gold mr-2" />
                  )}
                  <h3 className="font-bold text-lg">{trophy.name}</h3>
                </div>
                <p className="text-sm text-foreground/60 mb-3">
                  {trophy.year}
                </p>
                <p className="text-sm text-foreground/80">
                  {trophy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="inline-block bg-liverpool-gold/20 px-4 py-2 rounded-md text-liverpool-darkRed font-medium">
            Total Major Trophies: 67
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrophyShowcase;
