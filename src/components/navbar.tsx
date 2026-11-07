import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Eye,
  Cpu,
  Building,
  Layers,
  Zap
} from 'lucide-react';
import { LanguageContext } from '../context/languageContext';

const Navbar = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Enlaces actualizados: limpio, directo y con las nuevas páginas
  const navLinks = [
    { path: '/', label: data.footer?.navHome || (isEs ? 'Inicio' : 'Home'), icon: Eye },
    { path: '/industries', label: isEs ? 'Industrias' : 'Industries', icon: Building },
    { path: '/architecture', label: isEs ? 'Arquitectura' : 'Architecture', icon: Layers },
    { path: '/ai-pipeline', label: isEs ? 'Pipeline de IA' : 'AI Pipeline', icon: Cpu },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/80 backdrop-blur-md shadow-lg border-b border-slate-800/80' 
          : 'bg-slate-950'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* ============ LOGO CON IMAGEN ============ */}
            <Link to="/" className="flex items-center group">
              {/* 
                IMPORTANTE: Guarda tu nuevo logo en la carpeta `public/images/` 
                y asegúrate de que el nombre del archivo coincida con el `src`.
                Usamos h-10 md:h-12 y w-auto para que la imagen mantenga sus 
                proporciones originales sin deformarse.
              */}
              <img 
                src={isEs ? "/images/logo-arvis-11.png" : "/images/logo-arvis-10.png"} 
                alt={isEs ? "ARVIS - Visión Robótica Autónoma" : "ARVIS - Autonomous Robot Vision"} 
                className="h-20 md:h-18 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300" 
              />
            </Link>

            {/* ============ DESKTOP MENU ============ */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isActive(link.path);
                return (
                  <Link 
                    key={link.path} 
                    to={link.path} 
                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      active 
                        ? 'text-cyan-400 bg-cyan-500/10' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-colors ${active ? 'text-cyan-400' : 'text-slate-400'}`} />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>

             {/* ============ CTA BUTTON ============ */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/simulation" className="group relative overflow-hidden px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)] transition-all duration-300 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>{language === 'es' ? 'Ver Simulación' : 'Live Demo'}</span>
              </Link>
            </div>

            {/* ============ MOBILE MENU BUTTON ============ */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden relative p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors" aria-label="Toggle menu">
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ============ MOBILE MENU ============ */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-slate-950 border-t border-slate-800 px-4 py-6 space-y-3 shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 mb-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="text-xs font-mono font-semibold text-cyan-400">SYSTEM ONLINE</span>
              </div>
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
            
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link key={link.path} to={link.path} className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400' : 'text-slate-300 hover:bg-slate-800 hover:text-white border border-transparent'
                }`}>
                  <Icon className={`w-5 h-5 ${active ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="font-medium">{link.label}</span>
                  {active && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                </Link>
              );
            })}
             <Link to="/simulation" className="group relative overflow-hidden px-5 py-2.5 bg-cyan-700 hover:bg-cyan-800 text-white text-sm font-semibold rounded-lg shadow-sm hover:shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)] transition-all duration-300 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>{language === 'es' ? 'Ver Simulación' : 'Live Demo'}</span>
              </Link>
          </div>
        </div>
      </nav>
      
      {/* Spacer para compensar el navbar fijo */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;