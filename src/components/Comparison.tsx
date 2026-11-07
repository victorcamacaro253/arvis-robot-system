import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  X, 
  Check, 
  DollarSign, 
  Brain, 
  Zap, 
  Hand, 
  Shield, 
  Trophy,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

const ComparisonSection = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';
  const comparison = data.comparison || {};
  const items = comparison.items || [];

  // Mapeo de iconos para cada característica
  const iconMap: Record<string, any> = {
    "Costo de Hardware de Sensores": DollarSign,
    "Sensor Hardware Cost": DollarSign,
    "Comprensión del Contexto": Brain,
    "Context Comprehension": Brain,
    "Toma de Decisiones": Zap,
    "Decision Making": Zap,
    "Interacción Humano-Robot": Hand,
    "Human-Robot Interaction": Hand,
    "Filosofía de Seguridad": Shield,
    "Safety Philosophy": Shield
  };

  const getIcon = (feature: string) => {
    return iconMap[feature] || TrendingUp;
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold mb-6">
            <Trophy className="w-3 h-3" />
            {isEs ? 'COMPARATIVA DEL MERCADO' : 'MARKET COMPARISON'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {comparison.title || 'ARVIS vs. Soluciones del Mercado'}
          </h2>
          <p className="text-lg text-slate-400">
            {comparison.subtitle || 'Por qué nuestra aproximación de software supera a las dependencias de hardware costoso.'}
          </p>
        </div>

        {/* TABLA COMPARATIVA */}
        <div className="relative">
          {/* Header de la tabla */}
          <div className="hidden md:grid md:grid-cols-[1.5fr_1fr_1fr] gap-4 mb-4 px-6">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              {isEs ? 'Característica' : 'Feature'}
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
                <X className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">
                  {isEs ? 'Tradicional' : 'Traditional'}
                </span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  ARVIS
                </span>
              </div>
            </div>
          </div>

          {/* Filas de comparación */}
          <div className="space-y-3">
            {items.map((item: any, idx: number) => {
              const Icon = getIcon(item.feature);
              
              return (
                <div 
                  key={idx}
                  className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-4 md:p-6 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden"
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-transparent to-emerald-500/0 group-hover:from-red-500/5 group-hover:to-emerald-500/5 transition-all duration-500"></div>

                  {/* Layout: Mobile (stacked) vs Desktop (3 columnas) */}
                  <div className="relative z-10 grid md:grid-cols-[1.5fr_1fr_1fr] gap-4 items-center">
                    
                    {/* Característica */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-slate-300 group-hover:border-emerald-500/30 group-hover:text-emerald-400 transition-all duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-mono text-slate-500 mb-0.5 hidden md:block">
                          {isEs ? 'Característica' : 'Feature'}
                        </div>
                        <h3 className="text-sm md:text-base font-bold text-white truncate">
                          {item.feature}
                        </h3>
                      </div>
                    </div>

                    {/* Competidor */}
                    <div className="flex md:justify-center">
                      <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-red-500/5 border border-red-500/10 rounded-xl md:rounded-2xl w-full md:w-auto group-hover:bg-red-500/10 transition-all duration-300">
                        <div className="w-8 h-8 bg-red-500/10 rounded-lg border border-red-500/20 flex items-center justify-center flex-shrink-0">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono text-red-400 uppercase tracking-wider mb-0.5 hidden md:block">
                            {isEs ? 'Limitación' : 'Limitation'}
                          </div>
                          <p className="text-xs md:text-sm text-slate-300 font-medium leading-tight">
                            {item.competitor}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ARVIS */}
                    <div className="flex md:justify-center">
                      <div className="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl md:rounded-2xl w-full md:w-auto group-hover:bg-emerald-500/15 group-hover:border-emerald-500/40 transition-all duration-300">
                        <div className="w-8 h-8 bg-emerald-500/20 rounded-lg border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-0.5 hidden md:block">
                            {isEs ? 'Ventaja ARVIS' : 'ARVIS Advantage'}
                          </div>
                          <p className="text-xs md:text-sm text-white font-bold leading-tight">
                            {item.arvis}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Línea divisoria decorativa */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent -translate-x-1/2 pointer-events-none"></div>
        </div>

        {/* CONCLUSIÓN / CTA */}
        <div className="mt-16 relative">
          <div className="group relative bg-gradient-to-br from-emerald-900/20 via-slate-900 to-slate-900 border border-emerald-500/20 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-emerald-500/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-500"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400 mb-4">
                  <Trophy className="w-3 h-3" />
                  {isEs ? 'VEREDICTO' : 'VERDICT'}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {isEs 
                    ? 'Software inteligente > Hardware costoso' 
                    : 'Smart software > Expensive hardware'}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {isEs 
                    ? 'ARVIS demuestra que la verdadera innovación en robótica no está en sensores de $5,000, sino en algoritmos que entienden el contexto, predicen movimientos y reaccionan de forma fluida. El resultado: 99% menos costo, 100% más inteligencia.'
                    : 'ARVIS proves that true innovation in robotics isn\'t in $5,000 sensors, but in algorithms that understand context, predict movements, and react fluidly. The result: 99% less cost, 100% more intelligence.'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">99%</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Menos costo' : 'Less cost'}
                  </div>
                </div>
                <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">5x</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Más contexto' : 'More context'}
                  </div>
                </div>
                <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">0</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Dependencias' : 'Dependencies'}
                  </div>
                </div>
                <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-5 border border-slate-800 text-center">
  <div className="text-3xl font-bold text-amber-400 mb-1">0</div>
  <div className="text-xs text-slate-400 uppercase tracking-wider">
    {isEs ? 'Colisiones' : 'Collisions'}
  </div>
</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        {/* <div className="mt-12 text-center">
          <a 
            href="https://github.com/victorcamacaro253/arvis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)] group"
          >
            {isEs ? 'Ver el código en GitHub' : 'View code on GitHub'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default ComparisonSection;