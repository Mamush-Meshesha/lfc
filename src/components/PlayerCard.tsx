
import { useState } from 'react';

export interface Player {
  id: number;
  name: string;
  position: string;
  era: string;
  country: string;
  image: string;
  stats: {
    appearances?: number;
    goals?: number;
    trophies?: number;
  };
  isLegend?: boolean;
}

interface PlayerCardProps {
  player: Player;
  delay?: number;
}

const PlayerCard = ({ player, delay = 0 }: PlayerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="player-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${delay}ms`,
      }}
    >
      <div className="aspect-[3/4] overflow-hidden rounded-lg relative">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          style={{ backgroundImage: `url(${player.image})` }}
        ></div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-liverpool-dark via-transparent to-transparent opacity-80"></div>
        
        {player.isLegend && (
          <div className="absolute top-3 right-3 bg-liverpool-gold text-liverpool-darkRed text-xs font-bold px-2 py-1 rounded-full">
            Legend
          </div>
        )}
        
        <div 
          className={`player-card-content transform ${
            isHovered ? 'translate-y-0' : 'translate-y-10'
          }`}
        >
          <h3 className="font-bold text-xl text-white mb-1">{player.name}</h3>
          <p className="text-sm text-white/80 mb-3">{player.position} | {player.country}</p>
          
          <div className="grid grid-cols-3 gap-2 text-center">
            {player.stats.appearances && (
              <div className="bg-white/10 backdrop-blur-sm rounded p-2">
                <p className="text-white/60 text-xs mb-1">Appearances</p>
                <p className="text-white font-bold">{player.stats.appearances}</p>
              </div>
            )}
            
            {player.stats.goals && (
              <div className="bg-white/10 backdrop-blur-sm rounded p-2">
                <p className="text-white/60 text-xs mb-1">Goals</p>
                <p className="text-white font-bold">{player.stats.goals}</p>
              </div>
            )}
            
            {player.stats.trophies && (
              <div className="bg-white/10 backdrop-blur-sm rounded p-2">
                <p className="text-white/60 text-xs mb-1">Trophies</p>
                <p className="text-white font-bold">{player.stats.trophies}</p>
              </div>
            )}
          </div>
          
          <div className="mt-3 text-xs text-white/70">
            {player.era}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
