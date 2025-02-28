
import { useEffect, useRef, useState } from 'react';
import PlayerCard, { Player } from './PlayerCard';

const legends: Player[] = [
  {
    id: 1,
    name: "Steven Gerrard",
    position: "Midfielder",
    era: "1998-2015",
    country: "England",
    image: "https://s.ndtvimg.com/images/content/2014/dec/806/steven-gerrard-liverpool-cl.jpg",
    stats: {
      appearances: 710,
      goals: 186,
      trophies: 9
    },
    isLegend: true
  },
  {
    id: 2,
    name: "Kenny Dalglish",
    position: "Forward",
    era: "1977-1990",
    country: "Scotland",
    image: "https://static.independent.co.uk/2023/03/20/15/dc407ff00c55c68a8c658bbc22271c2eY29udGVudHNlYXJjaGFwaSwxNjc5NDExMTU2-2.67021210.jpg",
    stats: {
      appearances: 515,
      goals: 172,
      trophies: 22
    },
    isLegend: true
  },
  {
    id: 3,
    name: "Ian Rush",
    position: "Striker",
    era: "1980-1996",
    country: "Wales",
    image: "https://tmssl.akamaized.net/images/foto/galerie/ian-rush-fc-liverpool-1994-1637762230-75367.jpg",
    stats: {
      appearances: 660,
      goals: 346,
      trophies: 18
    },
    isLegend: true
  },
  {
    id: 4,
    name: "Graeme Souness",
    position: "Midfielder",
    era: "1978-1984",
    country: "Scotland",
    image: "https://www.friendsofliverpool.com/wp-content/uploads/souness-playing-for-liverpool.jpg",
    stats: {
      appearances: 359,
      goals: 55,
      trophies: 15
    },
    isLegend: true
  }
];

const currentPlayers: Player[] = [
  {
    id: 101,
    name: "Mohamed Salah",
    position: "Forward",
    era: "2017-Present",
    country: "Egypt",
    image: "https://c4.wallpaperflare.com/wallpaper/980/804/922/soccer-mohamed-salah-liverpool-f-c-wallpaper-preview.jpg",
    stats: {
      appearances: 322,
      goals: 204,
      trophies: 7
    }
  },
  {
    id: 102,
    name: "Virgil van Dijk",
    position: "Defender",
    era: "2018-Present",
    country: "Netherlands",
    image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_3694,h_2077,x_0,y_140/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01jmvnkcepayfnvqr14p.jpg",
    stats: {
      appearances: 251,
      goals: 20,
      trophies: 7
    }
  },
  {
    id: 103,
    name: "Trent Alexander-Arnold",
    position: "Right-Back",
    era: "2016-Present",
    country: "England",
    image: "https://s.yimg.com/ny/api/res/1.2/6gxldnXhy.g1BjyDFGNKWg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM5MQ--/https://media.zenfs.com/en/football_espana_articles_993/45eaebdddcdfa2a900c2b337a4fad35d",
    stats: {
      appearances: 293,
      goals: 17,
      trophies: 7
    }
  },
  {
    id: 104,
    name: "Alisson Becker",
    position: "Goalkeeper",
    era: "2018-Present",
    country: "Brazil",
    image: "https://www.daveockop.com/wp-content/uploads/2024/05/Alisson-Becker.webp",
    stats: {
      appearances: 246,
      goals: 1,
      trophies: 7
    }
  }
];

const PlayersSection = () => {
  const [isLegendsVisible, setIsLegendsVisible] = useState(false);
  const [isCurrentVisible, setIsCurrentVisible] = useState(false);
  const legendsRef = useRef<HTMLDivElement>(null);
  const currentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const legendsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsLegendsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsCurrentVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (legendsRef.current) {
      legendsObserver.observe(legendsRef.current);
    }

    if (currentRef.current) {
      currentObserver.observe(currentRef.current);
    }

    return () => {
      if (legendsRef.current) {
        legendsObserver.unobserve(legendsRef.current);
      }
      if (currentRef.current) {
        currentObserver.unobserve(currentRef.current);
      }
    };
  }, []);

  return (
    <section id="players" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading">Iconic Players</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            From legendary figures who defined eras to current stars continuing the legacy, Liverpool FC has been home to some of football's greatest talents.
          </p>
        </div>

        <div ref={legendsRef} className="mb-16">
          <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-liverpool-red">Club Legends</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {legends.map((legend, index) => (
              <div 
                key={legend.id} 
                className={`transition-all duration-700 transform ${
                  isLegendsVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <PlayerCard player={legend} delay={index * 150} />
              </div>
            ))}
          </div>
        </div>

        <div ref={currentRef}>
          <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-liverpool-red">Current Stars</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentPlayers.map((player, index) => (
              <div 
                key={player.id} 
                className={`transition-all duration-700 transform ${
                  isCurrentVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <PlayerCard player={player} delay={index * 150} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayersSection;
