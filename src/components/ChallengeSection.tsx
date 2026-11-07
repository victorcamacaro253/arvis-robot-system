import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  AlertTriangle, 
  Zap, 
  TrendingUp, 
  DollarSign, 
  Activity, 
  Brain, 
  Scan, 
  Shield, 
  Radio,
  ArrowRight
} from 'lucide-react';

const ChallengeSection = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const challenge = data.challenge || {};

  // Mapeo de iconos para dar identidad visual a cada tarjeta
  const iconMap: Record<string, any> = {
    "cost": DollarSign,
    "evasion": Activity,
    "context": Brain,
    "noise": Scan,
    "safety": Shield,
    "isolation": Radio
  };

  // Asignamos un "tema" de icono a cada item basado en su problema (lógica simple por índice o palabra clave)
  const getIcon = (index: number, problem: string) => {
    const lowerProblem = problem.toLowerCase();
    if (lowerProblem.includes("costoso") || lowerProblem.includes("cost")) return <DollarSign className="w-6 h-6" />;
    if (lowerProblem.includes("binaria") || lowerProblem.includes("binary")) return <Activity className="w-6 h-6" />;
    if (lowerProblem.includes("contexto") || lowerProblem.includes("context")) return <Brain className="w-6 h-6" />;
    if (lowerProblem.includes("ruido") || lowerProblem.includes("noise")) return <Scan className="w-6 h-6" />;
    if (lowerProblem.includes("peligrosa") || lowerProblem.includes("dangerous")) return <Shield className="w-6 h-6" />;
    return <Radio className="w-6 h-6" />;
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-semibold mb-6">
            <AlertTriangle className="w-3 h-3" />
            {language === 'es' ? 'EL PROBLEMA ACTUAL' : 'THE CURRENT PROBLEM'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {challenge.title || 'El Desafío de la Navegación Autónoma'}
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
            {challenge.subtitle || 'Los robots tradicionales dependen de sensores costosos y reglas binarias rígidas, fallando en entornos dinámicos.'}
          </p>
        </div>

        {/* Grid de Tarjetas Interactivas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenge.items?.map((item: any, idx: number) => {
            const Icon = getIcon(idx, item.problem);
            
            return (
              <div 
                key={idx} 
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.2)] overflow-hidden"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Icono principal */}
                  <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-slate-300 mb-6 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all duration-300">
                    {Icon}
                  </div>

                  {/* Flujo: Problema -> Solución -> Impacto */}
                  <div className="space-y-4">
                    {/* Problema */}
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider block mb-1">
                          {language === 'es' ? 'Limitación' : 'Limitation'}
                        </span>
                        <p className="text-sm text-slate-300 font-medium leading-snug">
                          {item.problem}
                        </p>
                      </div>
                    </div>

                    {/* Flecha de transformación */}
                    <div className="flex justify-center">
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>

                    {/* Solución */}
                    <div className="flex items-start gap-3">
                      <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block mb-1">
                          {language === 'es' ? 'Solución ARVIS' : 'ARVIS Solution'}
                        </span>
                        <p className="text-sm text-slate-200 font-semibold leading-snug">
                          {item.solution}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-800 group-hover:bg-cyan-500/20 transition-colors duration-300"></div>

                    {/* Impacto */}
                    <div className="flex items-center gap-2 pt-1">
                      <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <p className="text-sm font-bold text-emerald-400">
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action sutil al final de la sección */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            {language === 'es' 
              ? '¿Cansado de las limitaciones de los sistemas tradicionales?' 
              : 'Tired of the limitations of traditional systems?'}
          </p>
          <a 
            href="#ai-pipeline" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
          >
            {language === 'es' ? 'Descubre cómo funciona nuestra IA' : 'Discover how our AI works'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ChallengeSection;