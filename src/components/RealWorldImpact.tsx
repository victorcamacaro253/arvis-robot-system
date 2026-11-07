import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Heart
} from 'lucide-react';

const RealWorldImpact = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';

  // Imágenes de alta calidad (Unsplash) referentes a cada industria
  const industryImages = [
    "/images/Warehouse-Robotics.webp", // 1. Logística (Almacén automatizado)
    "/images/Hospital_Robots.webp", // 2. Salud (Pasillo de hospital)
    "/images/grocery-robot.webp", // 3. Retail (Supermercado)
    "/images/delivery-robot.jpg", // 4. Last-Mile (Robot en calle)
    "/images/reception-robot.jpg", // 5. Manufactura (Fábrica)
    "/images/domestic-robot.jfif"  // 6. Doméstico (Hogar inteligente)
  ];

  // Colores vibrantes para el glow y acentos de cada industria
  const industryColors = [
    { gradient: 'from-blue-600/40 to-cyan-600/40', border: 'border-blue-500/30', accent: 'text-blue-400' },
    { gradient: 'from-rose-600/40 to-pink-600/40', border: 'border-rose-500/30', accent: 'text-rose-400' },
    { gradient: 'from-amber-600/40 to-orange-600/40', border: 'border-amber-500/30', accent: 'text-amber-400' },
    { gradient: 'from-emerald-600/40 to-green-600/40', border: 'border-emerald-500/30', accent: 'text-emerald-400' },
    { gradient: 'from-indigo-600/40 to-purple-600/40', border: 'border-indigo-500/30', accent: 'text-indigo-400' },
    { gradient: 'from-teal-600/40 to-emerald-600/40', border: 'border-teal-500/30', accent: 'text-teal-400' }
  ];

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado emocional */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-6 backdrop-blur-sm">
            <Shield className="w-3 h-3" />
            {isEs ? 'IMPACTO REAL' : 'REAL IMPACT'}
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            {isEs ? 'ARVIS No Solo Navega.' : 'ARVIS Doesn\'t Just Navigate.'}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              {isEs ? 'Protege, Entiende y Salva.' : 'It Protects, Understands, and Saves.'}
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {isEs 
              ? 'Desde hospitales hasta almacenes, ARVIS transforma la navegación robótica en una experiencia segura, fluida y humana.'
              : 'From hospitals to warehouses, ARVIS transforms robotic navigation into a safe, fluid, and human experience.'}
          </p>
        </div>

        {/* Grid de Casos de Uso con Imágenes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {(data.industries?.items || []).slice(0, 6).map((industry: any, idx: number) => {
            const colors = industryColors[idx] || industryColors[0];
            const imageUrl = industryImages[idx] || industryImages[0];

            return (
              <div key={idx} className="group relative h-[420px] rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-slate-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
                
                {/* 1. Imagen de fondo */}
                <div className="absolute inset-0">
                  <img 
                    src={imageUrl} 
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* 2. Gradiente oscuro para legibilidad del texto (de abajo hacia arriba) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/20"></div>
                  
                  {/* 3. Gradiente de color sutil de la industria (efecto blend) */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${colors.gradient} opacity-60 mix-blend-multiply`}></div>
                </div>

                {/* Contenido */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
                  
                  {/* Badge de la industria */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold mb-4 w-fit group-hover:bg-white/20 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {industry.name}
                  </div>

                  {/* Título */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                    {industry.name}
                  </h3>

                  {/* Descripción */}
                  <p className="text-white/80 text-sm leading-relaxed mb-6 line-clamp-3">
                    {industry.desc}
                  </p>

                  {/* Beneficio destacado */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 w-fit group-hover:bg-white/20 transition-colors">
                    <TrendingUp className={`w-4 h-4 ${colors.accent}`} />
                    <span className="text-sm font-bold text-white">{industry.benefit}</span>
                  </div>
                </div>

                {/* Número de fondo decorativo */}
                <div className="absolute -bottom-4 -right-4 text-[120px] font-bold text-white/5 leading-none pointer-events-none group-hover:text-white/10 transition-colors duration-500">
                  {idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* ==========================================
            MÉTRICAS DE IMPACTO GLOBAL
        ========================================== */}
        <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEs ? 'Resultados que Hablan por Sí Solos' : 'Results That Speak for Themselves'}
            </h3>
            <p className="text-lg text-slate-400">
              {isEs 
                ? 'Métricas validadas en pruebas reales con ARVIS en operación continua.'
                : 'Metrics validated in real-world tests with ARVIS in continuous operation.'}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Métrica 1: Reducción de Costos */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-sm font-semibold text-emerald-400 mb-1">
                {isEs ? 'Ahorro en Hardware' : 'Hardware Savings'}
              </div>
              <div className="text-xs text-slate-500">
                {isEs ? 'vs LiDAR tradicional' : 'vs traditional LiDAR'}
              </div>
            </div>

            {/* Métrica 2: Detección de Caídas */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-rose-500/30">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">&lt;200ms</div>
              <div className="text-sm font-semibold text-rose-400 mb-1">
                {isEs ? 'Detección de Caídas' : 'Fall Detection'}
              </div>
              <div className="text-xs text-slate-500">
                {isEs ? 'Tiempo de reacción' : 'Reaction time'}
              </div>
            </div>

            {/* Métrica 3: Throughput */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/30">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">+25%</div>
              <div className="text-sm font-semibold text-blue-400 mb-1">
                {isEs ? 'Eficiencia Operativa' : 'Operational Efficiency'}
              </div>
              <div className="text-xs text-slate-500">
                {isEs ? 'Menos paradas innecesarias' : 'Fewer unnecessary stops'}
              </div>
            </div>

            {/* Métrica 4: Seguridad */}
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-amber-500/30">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">0</div>
              <div className="text-sm font-semibold text-amber-400 mb-1">
                {isEs ? 'Colisiones' : 'Collisions'}
              </div>
              <div className="text-xs text-slate-500">
                {isEs ? 'En pruebas continuas' : 'In continuous testing'}
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            CALL TO ACTION EMOCIONAL
        ========================================== */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-colors cursor-pointer">
            <Clock className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-white">
              {isEs 
                ? '¿Listo para ver ARVIS en acción?' 
                : 'Ready to see ARVIS in action?'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RealWorldImpact;