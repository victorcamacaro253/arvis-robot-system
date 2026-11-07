import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import { ArrowRight, Eye, Shield, Radio, Zap } from 'lucide-react';

const Hero = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      
      {/* ============ 1. FONDO ============ */}
      <img
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
        alt="ARVIS Robot Vision System"
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-cyan-950/30"></div>
      
      {/* Efecto de ruido sutil para textura */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Contenido */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-8 tracking-wide backdrop-blur-sm">
              <Eye className="w-3.5 h-3.5" />
              {data.hero?.badge || 'Visión Computacional Contextual v4.0 · Edge Ready'}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2 leading-[1.0]">
              ARVIS
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-slate-300 mb-6 leading-tight">
              {data.hero?.title || 'Navegación Autónoma'}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                {data.hero?.highlight || 'con Conciencia de Seguridad'}
              </span>
            </h2>

            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {data.hero?.subtitle || 'ARVIS combina YOLOv8, MediaPipe, Filtros de Kalman y Campos Potenciales para crear robots que no solo "ven" obstáculos, sino que entienden el contexto, predicen trayectorias y evaden fluidamente. Todo con una cámara RGB, sin LiDAR.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                to="/ai-pipeline"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(8,145,178,0.6)]"
              >
                {data.hero?.ctaPrimary || 'Explorar el Pipeline de IA'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              {/* <a
                href="https://github.com/victorcamacaro253/arvis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all backdrop-blur-sm hover:border-cyan-500/30"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                {data.hero?.ctaSecondary || 'Ver en GitHub'}
              </a> */}
            </div>

            {/* Badges de confianza */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-800">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>E-STOP {isEs ? 'Industrial' : 'Industrial'}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-800">
                <Radio className="w-4 h-4 text-cyan-400" />
                <span>MQTT {isEs ? 'Bidireccional' : 'Bidirectional'}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/50 rounded-lg border border-slate-800">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Edge Ready</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Mockup del HUD de Visión ARVIS */}
          <div className="relative hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur opacity-20 animate-pulse"></div>
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl overflow-hidden">
              {/* Barra superior del HUD */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700/50 bg-slate-950/50">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-xs font-mono text-slate-400">ARVIS LIVE INFERENCE</span>
                </div>
                <span className="text-xs font-mono text-cyan-400">30.4 FPS</span>
              </div>
              
              {/* Simulación del HUD de OpenCV */}
              <div className="p-6 space-y-4">
                {/* Detección Principal */}
                <div className="relative bg-slate-950 rounded-xl border border-slate-800 p-4 h-48 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Bounding Box Simulado */}
                  <div className="relative border-2 border-emerald-500 bg-emerald-500/10 rounded p-2">
                    <span className="absolute -top-6 left-0 bg-emerald-500 text-slate-950 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      <Eye className="w-3 h-3" /> PERSON 98%
                    </span>
                    <div className="w-24 h-32 bg-slate-800/50 rounded flex items-center justify-center">
                      <span className="text-2xl">🚶</span>
                    </div>
                    {/* Landmarks de MediaPipe simulados */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                      <div className="flex gap-4">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Métricas en vivo */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Distancia</div>
                    <div className="text-xl font-bold text-white font-mono">1.8<span className="text-sm text-slate-500">m</span></div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">TTC</div>
                    <div className="text-xl font-bold text-amber-400 font-mono">2.4<span className="text-sm text-slate-500">s</span></div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50 text-center">
                    <div className="text-[10px] text-slate-400 uppercase mb-1">Riesgo</div>
                    <div className="text-xl font-bold text-emerald-400 font-mono">SAFE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;