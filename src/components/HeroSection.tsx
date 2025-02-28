
import { useEffect, useState } from 'react';
import { ChevronDown, Trophy } from 'lucide-react';
import bgimage from "../../public/salah.png"

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
      
      <div className="absolute inset-0 md:bg-[url(/salah.png)] bg-no-repeat opacity-100 w-[40%] z-0"></div>
      
      <div 
        className={`container mx-auto px-4 md:px-6 relative z-20 text-center transform transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="inline-block mb-4 px-3 py-1 bg-liverpool-gold/20 backdrop-blur-sm rounded-full">
          <span className="text-sm font-medium text-liverpool-darkRed flex items-center justify-center">
            <Trophy size={16} className="mr-2" />
            Liverpool FC Legacy
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-liverpool-red mb-6 tracking-tight">
          You'll Never Walk Alone
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
          Celebrating the rich history, legendary figures, and countless achievements 
          of one of football's greatest clubs.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#trophies" 
            className="px-6 py-3 bg-liverpool-red text-white rounded-md hover:bg-liverpool-darkRed transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Explore History
          </a>
          <a 
            href="#players" 
            className="px-6 py-3 border border-liverpool-red text-liverpool-red rounded-md hover:bg-liverpool-red/10 transition-colors duration-300"
          >
            Meet the Legends
          </a>
        </div>
      </div>
      
      <a 
        href="#trophies" 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-liverpool-red animate-float z-30"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
