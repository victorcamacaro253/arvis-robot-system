import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  DollarSign, 
  Camera, 
  Zap, 
  Shield, 
  Radio, 
  Hand,
  Activity,
  Eye,
  Cpu
} from 'lucide-react';

const BentoGridSection = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';
  const metrics = data.metrics?.items || [];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-6">
            <Zap className="w-3 h-3" />
            {isEs ? 'POR QUÉ ARVIS' : 'WHY ARVIS'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {isEs ? 'Inteligencia que se ve, seguridad que se siente' : 'Intelligence you can see, safety you can feel'}
          </h2>
          <p className="text-lg text-slate-400">
            {isEs 
              ? 'La navegación autónoma del futuro, disponible hoy con una cámara de $20.'
              : 'The future of autonomous navigation, available today with a $20 camera.'}
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
          
          {/* CARD 1: Ahorro de costos (GRANDE - 2x2) */}
          <div className="md:col-span-2 md:row-span-2 group relative bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <DollarSign className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    {isEs ? 'Ahorro en Hardware' : 'Hardware Savings'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {isEs ? 'De $5,000 a $50' : 'From $5,000 to $50'}
                </h3>
                <p className="text-slate-400 text-sm">
                  {isEs 
                    ? 'Reemplaza costosos sensores LiDAR con una simple cámara RGB. Mismo resultado, 99% menos costo.'
                    : 'Replace costly LiDAR sensors with a simple RGB camera. Same result, 99% less cost.'}
                </p>
              </div>

              {/* Comparativa visual */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-500/5 border border-red-500/20 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs text-slate-300">LiDAR Tradicional</span>
                  </div>
                  <span className="text-sm font-bold text-red-400">$3,000 - $5,000</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs text-slate-300 font-semibold">ARVIS + Cámara RGB</span>
                  </div>
                  <span className="text-sm font-bold text-emerald-400">$20 - $50</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Rendimiento (1x1) */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 transition-all duration-500"></div>
            <div className="relative z-10">
              <Activity className="w-6 h-6 text-emerald-400 mb-3" />
              <div className="text-4xl font-bold text-white mb-1">
                {metrics[0]?.value || '9-10'}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {metrics[0]?.label || 'FPS en CPU'}
              </div>
              <div className="mt-3 text-[10px] text-slate-500">
                {metrics[0]?.sub || 'Intel i5/i7'}
              </div>
            </div>
          </div>

          {/* CARD 3: Gestos humanos (1x1) */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-purple-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/5 transition-all duration-500"></div>
            <div className="relative z-10">
              <Hand className="w-6 h-6 text-purple-400 mb-3" />
              <div className="text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {isEs ? 'Gestos Detectados' : 'Gestures Detected'}
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {['👋', '🛑', '👉', '🙏'].map((emoji, i) => (
                  <span key={i} className="text-lg">{emoji}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 4: Seguridad E-STOP (1x2 vertical) */}
          <div className="md:row-span-2 group relative bg-gradient-to-b from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-red-500/30 transition-all duration-500">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-all duration-500"></div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20 w-fit mb-4">
                <Shield className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                E-STOP {isEs ? 'Industrial' : 'Industrial'}
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                {isEs 
                  ? 'Bloqueo manual obligatorio tras emergencia. Cumple ISO 13850.'
                  : 'Mandatory manual lock after emergency. Complies with ISO 13850.'}
              </p>
              
              {/* Indicador visual de estado */}
              <div className="mt-auto space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">{isEs ? 'Estado' : 'Status'}</span>
                  <span className="text-emerald-400 font-mono font-bold">SAFE</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-full"></div>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  {isEs ? 'Sistema activo y monitoreando' : 'System active and monitoring'}
                </div>
              </div>
            </div>
          </div>

          {/* CARD 5: Latencia (1x1) */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-amber-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 transition-all duration-500"></div>
            <div className="relative z-10">
              <Zap className="w-6 h-6 text-amber-400 mb-3" />
              <div className="text-4xl font-bold text-white mb-1">
                {metrics[1]?.value || '<100ms'}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {metrics[1]?.label || 'Latencia YOLO'}
              </div>
              <div className="mt-3 text-[10px] text-slate-500">
                {metrics[1]?.sub || 'Inferencia optimizada'}
              </div>
            </div>
          </div>

          {/* CARD 6: Conectividad MQTT (1x1) */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-blue-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/5 transition-all duration-500"></div>
            <div className="relative z-10">
              <Radio className="w-6 h-6 text-blue-400 mb-3" />
              <div className="text-lg font-bold text-white mb-1">
                MQTT
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {isEs ? 'Bidireccional' : 'Bidirectional'}
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-3/4 animate-pulse"></div>
                </div>
                <span className="text-[10px] text-blue-400 font-mono">LIVE</span>
              </div>
            </div>
          </div>

          {/* CARD 7: Conciencia contextual (GRANDE - 2x1 horizontal) */}
          <div className="md:col-span-2 group relative bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 h-full">
              <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Eye className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-1">
                  {isEs ? 'Conciencia Contextual' : 'Contextual Awareness'}
                </h3>
                <p className="text-sm text-slate-400">
                  {isEs 
                    ? 'No solo detecta obstáculos. Entiende si es un humano, una mascota o un objeto estático, y reacciona acorde.'
                    : 'It doesn\'t just detect obstacles. It understands if it\'s a human, a pet, or a static object, and reacts accordingly.'}
                </p>
              </div>
              <div className="flex gap-2">
                {['🧍', '🐕', '📦'].map((emoji, i) => (
                  <div key={i} className="w-10 h-10 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                    {emoji}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 8: Precisión de profundidad (1x1) */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-indigo-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 transition-all duration-500"></div>
            <div className="relative z-10">
              <Camera className="w-6 h-6 text-indigo-400 mb-3" />
              <div className="text-4xl font-bold text-white mb-1">
                {metrics[2]?.value || '<20%'}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {metrics[2]?.label || 'Error Profundidad'}
              </div>
              <div className="mt-3 text-[10px] text-slate-500">
                {metrics[2]?.sub || 'Rango 1-3m'}
              </div>
            </div>
          </div>

          {/* CARD 9: Edge Ready (1x1) */}
          <div className="group relative bg-slate-900/50 border border-slate-800 rounded-3xl p-6 overflow-hidden hover:border-orange-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 transition-all duration-500"></div>
            <div className="relative z-10">
              <Cpu className="w-6 h-6 text-orange-400 mb-3" />
              <div className="text-lg font-bold text-white mb-1">
                {isEs ? 'Edge Ready' : 'Edge Ready'}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider">
                {isEs ? 'Multi-plataforma' : 'Multi-platform'}
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {['PC', 'RPi', 'Jetson'].map((platform, i) => (
                  <span key={i} className="px-2 py-0.5 bg-slate-800 border border-slate-700 rounded text-[10px] text-slate-300 font-mono">
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGridSection;