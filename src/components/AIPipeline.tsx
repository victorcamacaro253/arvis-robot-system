import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  Eye, 
  Brain, 
  Activity, 
  Shield, 
  ArrowRight,
  Code2,
  CheckCircle2,
  Zap
} from 'lucide-react';

const AIPipeline = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';

  // Mapeo de iconos y colores por paso
  const iconMap: Record<string, any> = { Eye, Activity, Brain, Shield };
  
  const stepColors = [
    'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 text-cyan-400',
    'from-blue-500/20 to-blue-500/5 border-blue-500/30 text-blue-400',
    'from-purple-500/20 to-purple-500/5 border-purple-500/30 text-purple-400',
    'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30 text-emerald-400'
  ];

  const stepIconColors = [
    'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    'bg-blue-500/10 text-blue-400 border-blue-500/20',
    'bg-purple-500/10 text-purple-400 border-purple-500/20',
    'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold mb-6">
            <Brain className="w-3 h-3" />
            {isEs ? 'ARQUITECTURA DE IA' : 'AI ARCHITECTURE'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {data.aiPipeline?.title || 'Del Píxel a la Acción Segura'}
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {data.aiPipeline?.subtitle || 'Un pipeline concurrente de baja latencia que transforma datos brutos de cámara en maniobras de evasión fluidas y matemáticamente probadas.'}
          </p>
        </div>

        {/* Pipeline de 4 pasos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {data.aiPipeline?.steps?.map((step: any, idx: number) => {
            const Icon = iconMap[step.icon] || Brain;
            const colorTheme = stepColors[idx] || stepColors[0];
            const iconColor = stepIconColors[idx] || stepIconColors[0];

            return (
              <div key={idx} className="group relative">
                {/* Flecha conectora (oculta en el último y en mobile) */}
                {idx < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 z-20 items-center justify-center w-8 h-8 bg-slate-950 border border-slate-800 rounded-full">
                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                )}

                {/* Tarjeta del paso */}
                <div className={`relative h-full bg-gradient-to-br ${colorTheme} backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.2)]`}>
                  
                  {/* Número de fondo */}
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                    0{idx + 1}
                  </div>

                  {/* Icono */}
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 border ${iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Título */}
                  <h3 className="text-lg font-bold text-white mb-2 pr-8">
                    {step.title}
                  </h3>

                  {/* Tag de tecnología */}
                  <div className="inline-block px-2.5 py-1 bg-slate-900/50 border border-slate-700/50 rounded-md text-[10px] font-mono text-slate-300 mb-3">
                    {step.tech}
                  </div>

                  {/* Descripción */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================
            SECCIÓN DESTACADA: Código de Campos Potenciales
        ========================================== */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 border border-slate-700 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Columna Izquierda: Explicación */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold mb-6">
                <Zap className="w-3 h-3" />
                {isEs ? 'LA VENTAJA MATEMÁTICA' : 'THE MATHEMATICAL ADVANTAGE'}
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {isEs ? 'La Ventaja del Filtro de Kalman + Campos Potenciales' : 'The Kalman Filter + Potential Fields Advantage'}
              </h3>
              
              <p className="text-slate-300 leading-relaxed mb-6">
                {isEs 
                  ? 'A diferencia de los sistemas binarios (if/else) que frenan en seco y generan "frenados fantasma" por ruido de cámara, nuestro sistema predice la trayectoria futura. Si una persona cruza, el robot calcula el TTC y aplica una fuerza de repulsión suave, "deslizándose" alrededor del obstáculo sin detener la operación.'
                  : 'Unlike binary (if/else) systems that slam on the brakes and cause "phantom braking" due to camera noise, our system predicts future trajectories. If a person crosses, the robot calculates TTC and applies a smooth repulsive force, "sliding" around the obstacle without stopping operations.'}
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {isEs ? '0 congelamientos en pasillos estrechos' : '0 freezing in narrow aisles'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {isEs ? 'Eliminación del 90% de frenados innecesarios' : '90% elimination of unnecessary braking'}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300">
                    {isEs ? 'Resolución de mínimos locales con fuerza tangencial (vórtice)' : 'Local minima resolution with tangential force (vortex)'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Columna Derecha: Código */}
            <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 font-mono text-sm shadow-inner">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-400">potential_fields.py</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              <div className="space-y-2 text-xs md:text-sm overflow-x-auto">
                <div className="text-slate-500"># {isEs ? 'Cálculo de Fuerza Resultante' : 'Resultant Force Calculation'}</div>
                <div className="text-cyan-400">
                  F_total = F_atraccion + F_repulsion + F_vortice
                </div>
                <div className="mt-4 text-slate-500"># {isEs ? 'Fuerza de repulsión (inversamente proporcional al cuadrado)' : 'Repulsive force (inversely proportional to square)'}:</div>
                <div className="text-slate-300">
                  <span className="text-purple-400">if</span> distancia {'<'} umbral_seguridad:
                </div>
                <div className="text-slate-300 pl-4">
                  F_repulsion = k_rep / (distancia {'**'} 2)
                </div>
                <div className="mt-4 text-slate-500"># {isEs ? 'Resolución de mínimo local (vórtice)' : 'Local minima resolution (vortex)'}:</div>
                <div className="text-slate-300">
                  <span className="text-purple-400">if</span> gradiente == 0: <span className="text-amber-400"># Mínimo Local</span>
                </div>
                <div className="text-slate-300 pl-4">
                  <span className="text-purple-400">activar</span>_fuerza_tangencial()
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AIPipeline;