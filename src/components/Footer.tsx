
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-liverpool-red text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">Liverpool FC</h3>
            <p className="text-white/80 mb-6 max-w-md">
              One of the most historic and successful football clubs in the world, 
              with a rich heritage and passionate global fanbase.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-liverpool-gold transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-liverpool-gold transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-liverpool-gold transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-liverpool-gold transition-colors duration-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/80 hover:text-white transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#trophies" className="text-white/80 hover:text-white transition-colors duration-300">Trophies</a>
              </li>
              <li>
                <a href="#managers" className="text-white/80 hover:text-white transition-colors duration-300">Managers</a>
              </li>
              <li>
                <a href="#players" className="text-white/80 hover:text-white transition-colors duration-300">Players</a>
              </li>
              <li>
                <a href="#status" className="text-white/80 hover:text-white transition-colors duration-300">Club Status</a>
              </li>
              <li>
                <a href="#records" className="text-white/80 hover:text-white transition-colors duration-300">Records</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Stadium</h4>
            <p className="text-white/80">Anfield</p>
            <p className="text-white/80">Anfield Road</p>
            <p className="text-white/80">Liverpool, L4 0TH</p>
            <p className="text-white/80">United Kingdom</p>
            <p className="mt-4 text-white/80">Capacity: 61,276</p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Liverpool FC Fan Site. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center mt-4 md:mt-0">
            Created with <Heart size={16} className="mx-1 text-white" /> by fans, for fans
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
