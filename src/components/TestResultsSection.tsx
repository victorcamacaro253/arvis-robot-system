import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  CheckCircle2, 
  Activity, 
  Heart, 
  Hand, 
  Cat, 
  Clock, 
  Target,
  Zap
} from 'lucide-react';

const TestResultsSection = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';
  const validation = data.validation || {};
  const featured = validation.featured || {};
  const items = validation.items || [];

  // Mapeo de iconos para cada caso de uso
  const iconMap: Record<string, any> = {
    "Heart": Heart,
    "Hand": Hand,
    "Cat": Cat,
    "Activity": Activity
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/5 via-slate-950 to-slate-950"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-6">
            <CheckCircle2 className="w-3 h-3" />
            {isEs ? 'PRUEBAS VALIDADAS' : 'VALIDATED TESTS'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {validation.title || 'Resultados de Pruebas Reales'}
          </h2>
          <p className="text-lg text-slate-400">
            {validation.subtitle || 'Métricas validadas en escenarios de navegación dinámica.'}
          </p>
        </div>

        {/* CASO DESTACADO (Full width) */}
        <div className="mb-12">
          <div className="group relative bg-gradient-to-br from-slate-900 to-slate-900/50 border border-emerald-500/20 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-emerald-500/40 transition-all duration-500">
            {/* Efecto de brillo */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/15 transition-all duration-500"></div>
            
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              {/* Columna izquierda: Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400 mb-4">
                  <Target className="w-3 h-3" />
                  {featured.label || 'PRUEBA DESTACADA'}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {featured.title || 'Evasión de Persona Caminando'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                      {isEs ? 'Escenario' : 'Scenario'}
                    </div>
                    <p className="text-sm text-slate-300">
                      {featured.problem || 'Persona caminando hacia el robot a 1.5m/s en un pasillo.'}
                    </p>
                  </div>
                  
                  <div>
                    <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                      {isEs ? 'Respuesta del Sistema' : 'System Response'}
                    </div>
                    <p className="text-sm text-slate-200 font-medium">
                      {featured.solution || 'Detección a 2.5m, frenado suave a 1.5m (Kalman), y evasión lateral fluida a 1.2m usando Campos Potenciales con fuerza de vórtice.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Columna derecha: Métricas */}
              <div className="bg-slate-950/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800">
                <div className="text-center mb-6">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    {isEs ? 'Resultado' : 'Result'}
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">
                    {featured.value || '0 colisiones, 120ms reacción'}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="text-2xl font-bold text-white mb-1">0</div>
                    <div className="text-[10px] text-slate-500 uppercase">{isEs ? 'Colisiones' : 'Collisions'}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="text-2xl font-bold text-cyan-400 mb-1">120<span className="text-sm">ms</span></div>
                    <div className="text-[10px] text-slate-500 uppercase">{isEs ? 'Reacción' : 'Reaction'}</div>
                  </div>
                  <div className="text-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                    <div className="text-2xl font-bold text-purple-400 mb-1">1.2<span className="text-sm">m</span></div>
                    <div className="text-[10px] text-slate-500 uppercase">{isEs ? 'Evasión' : 'Evasion'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GRID DE CASOS DE USO (2x2) */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item: any, idx: number) => {
            const Icon = iconMap[item.icon] || Activity;
            
            return (
              <div 
                key={idx}
                className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden"
              >
                {/* Efecto de brillo en hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:to-transparent transition-all duration-500"></div>

                <div className="relative z-10">
                  {/* Header de la tarjeta */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-xs font-mono text-slate-500 mb-0.5">
                          TEST #{item.number || `0${idx + 1}`}
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    {/* Badge de estado */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-[10px] font-bold text-emerald-400 uppercase">PASSED</span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="space-y-3 mb-4">
                    <div>
                      <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                        {isEs ? 'Escenario' : 'Scenario'}
                      </div>
                      <p className="text-sm text-slate-300">
                        {item.problem}
                      </p>
                    </div>
                    
                    <div>
                      <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                        {isEs ? 'Solución' : 'Solution'}
                      </div>
                      <p className="text-sm text-slate-200">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Métrica destacada */}
                  <div className="pt-4 border-t border-slate-800">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-bold text-emerald-400">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA sutil */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            {isEs 
              ? '¿Quieres ver estas pruebas en acción?' 
              : 'Want to see these tests in action?'}
          </p>
          <a 
            href="https://github.com/victorcamacaro253/arvis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors group"
          >
            {isEs ? 'Ver demos en GitHub' : 'View demos on GitHub'}
            <Clock className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestResultsSection;