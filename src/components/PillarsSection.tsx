import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  Eye, 
  Brain, 
  Shield, 
  Cpu, 
  Radio,
  Zap,
  ArrowUpRight
} from 'lucide-react';

const PillarsSection = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';

  const iconMap: Record<string, any> = { Eye, Brain, Shield, Cpu, Radio };

  // Colores vibrantes para cada pilar
  const pillarColors = [
    {
      gradient: 'from-cyan-500 via-blue-500 to-cyan-600',
      glow: 'shadow-cyan-500/50',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      text: 'text-cyan-400'
    },
    {
      gradient: 'from-purple-500 via-violet-500 to-purple-600',
      glow: 'shadow-purple-500/50',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400'
    },
    {
      gradient: 'from-emerald-500 via-green-500 to-emerald-600',
      glow: 'shadow-emerald-500/50',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400'
    },
    {
      gradient: 'from-amber-500 via-orange-500 to-amber-600',
      glow: 'shadow-amber-500/50',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/30',
      text: 'text-amber-400'
    },
    {
      gradient: 'from-rose-500 via-pink-500 to-rose-600',
      glow: 'shadow-rose-500/50',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      text: 'text-rose-400'
    }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Efectos de fondo dinámicos */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6 backdrop-blur-sm">
            <Zap className="w-3 h-3" />
            {isEs ? 'ARQUITECTURA MODULAR' : 'MODULAR ARCHITECTURE'}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {data.pillars?.title || 'Los 5 Pilares de ARVIS'}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {data.pillars?.subtitle || 'Una arquitectura modular que cubre todo el ciclo de percepción-decisión-acción.'}
          </p>
        </div>

        {/* Bento Grid de Pilares */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.pillars?.items?.map((pillar: any, idx: number) => {
            const Icon = iconMap[pillar.icon] || Cpu;
            const colors = pillarColors[idx] || pillarColors[0];
            const isLarge = idx === 0; // El primer pilar es más grande

            return (
              <div 
                key={idx} 
                className={`group relative ${isLarge ? 'md:col-span-2 lg:col-span-2' : ''}`}
              >
                {/* Tarjeta con efectos */}
                <div className={`relative h-full bg-slate-900/40 backdrop-blur-xl rounded-3xl p-8 border ${colors.border} overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${colors.glow}`}>
                  
                  {/* Gradiente de fondo animado */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Glow del icono */}
                  <div className={`absolute top-8 right-8 w-32 h-32 ${colors.bg} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Badge de fase */}
                    <div className={`inline-block px-3 py-1 ${colors.bg} ${colors.border} border rounded-full text-xs font-mono font-semibold ${colors.text} mb-6`}>
                      {pillar.phase}
                    </div>

                    {/* Icono grande con glow */}
                    <div className={`w-20 h-20 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 border ${colors.border} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className={`w-10 h-10 ${colors.text}`} />
                    </div>

                    {/* Título */}
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {pillar.title}
                    </h3>

                    {/* Descripción */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {pillar.desc}
                    </p>

                    {/* Indicador de interacción */}
                    <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className={colors.text}>Explorar</span>
                      <ArrowUpRight className={`w-4 h-4 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Número de fondo grande */}
                  <div className="absolute -bottom-4 -right-4 text-[200px] font-bold text-white/5 leading-none pointer-events-none">
                    {idx + 1}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout destacado */}
        <div className="mt-16 relative bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-emerald-500/10 rounded-3xl p-8 md:p-12 border border-slate-700 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-emerald-500/5 rounded-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-semibold text-white">
                {isEs ? 'Seguridad de Nivel Industrial' : 'Industrial-Grade Safety'}
              </span>
            </div>
            
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
              {isEs 
                ? 'Diseñado para Producción, No Solo para Demostración' 
                : 'Designed for Production, Not Just Demonstration'}
            </h3>
            
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              {isEs
                ? 'ARVIS separa estrictamente la Percepción/Decisión del Control de Hardware y la Telemetría. Colas thread-safe, Hardware Abstraction Layer (HAL), y Pub/Sub desacoplado via MQTT.'
                : 'ARVIS strictly separates Perception/Decision from Hardware Control and Telemetry. Thread-safe queues, Hardware Abstraction Layer (HAL), and decoupled Pub/Sub via MQTT.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-slate-300">Thread-Safe Queues</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-sm text-slate-300">HAL (Hardware Agnostic)</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-900/50 rounded-lg border border-slate-700">
                <Radio className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-slate-300">MQTT Pub/Sub</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PillarsSection;