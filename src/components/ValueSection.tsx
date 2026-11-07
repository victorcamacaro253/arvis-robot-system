import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  Briefcase, 
  DollarSign, 
  Monitor, 
  Wrench, 
  CheckCircle2, 
  TrendingUp,
  ArrowRight,
  Users
} from 'lucide-react';

const ValueSection = () => {
  const { language, texts } = useContext(LanguageContext);
  const data = texts?.arvis?.[language] || texts?.arvis?.es || {};
  const isEs = language === 'es';
  const value = data.value || {};
  const items = value.items || [];

  // Mapeo de iconos
  const iconMap: Record<string, any> = {
    "Briefcase": Briefcase,
    "DollarSign": DollarSign,
    "Monitor": Monitor,
    "Wrench": Wrench
  };

  // Paleta de colores por rol (cada stakeholder tiene su identidad visual)
  const roleColors: Record<string, {
    bg: string;
    border: string;
    text: string;
    glow: string;
    check: string;
    badge: string;
  }> = {
    "Briefcase": {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      text: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)]',
      check: 'text-cyan-400',
      badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    "DollarSign": {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
      glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]',
      check: 'text-emerald-400',
      badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    "Monitor": {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400',
      glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]',
      check: 'text-blue-400',
      badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    "Wrench": {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-400',
      glow: 'group-hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]',
      check: 'text-amber-400',
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    }
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <TrendingUp className="w-3 h-3" />
            {isEs ? 'VALOR DE NEGOCIO' : 'BUSINESS VALUE'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {value.title || 'Impacto Real en tu Operación'}
          </h2>
          <p className="text-lg text-slate-400">
            {value.subtitle || 'ARVIS no es solo un script de visión; es una plataforma de seguridad robótica lista para producción.'}
          </p>
        </div>

        {/* GRID DE TARJETAS POR ROL */}
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item: any, idx: number) => {
            const Icon = iconMap[item.icon] || Briefcase;
            const colors = roleColors[item.icon] || roleColors["Briefcase"];
            
            return (
              <div 
                key={idx}
                className={`group relative bg-slate-900/40 backdrop-blur-sm border ${colors.border} rounded-3xl p-6 md:p-8 hover:border-opacity-60 ${colors.glow} transition-all duration-500 overflow-hidden`}
              >
                {/* Efecto de brillo en hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-slate-800/30 transition-all duration-500`}></div>
                
                {/* Badge de rol en esquina superior derecha */}
                <div className={`absolute top-6 right-6 px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${colors.badge}`}>
                  {item.icon === "Briefcase" && (isEs ? 'COO' : 'COO')}
                  {item.icon === "DollarSign" && (isEs ? 'CFO' : 'CFO')}
                  {item.icon === "Monitor" && (isEs ? 'IT' : 'IT')}
                  {item.icon === "Wrench" && (isEs ? 'OPS' : 'OPS')}
                </div>

                <div className="relative z-10">
                  {/* Header de la tarjeta */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <div className="flex-1 pr-16">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight">
                        {item.role}
                      </h3>
                      <p className="text-sm text-slate-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Lista de beneficios */}
                  <div className="space-y-3">
                    {item.benefits?.map((benefit: string, bIdx: number) => (
                      <div key={bIdx} className="flex items-start gap-3 group/benefit">
                        <div className="flex-shrink-0 mt-0.5">
                          <CheckCircle2 className={`w-5 h-5 ${colors.check} opacity-80 group-hover/benefit:opacity-100 transition-opacity`} />
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Línea decorativa inferior */}
                  <div className={`mt-6 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent group-hover:via-slate-600 transition-colors duration-500`}></div>
                  
                  {/* Footer con CTA sutil */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">
                      {isEs ? 'Impacto medible' : 'Measurable impact'}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${colors.text} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Resumen de valor transversal */}
        <div className="mt-16 relative">
          <div className="group relative bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/15 transition-all duration-500"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-cyan-400" />
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {isEs 
                    ? 'Un sistema, múltiples stakeholders' 
                    : 'One system, multiple stakeholders'}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {isEs 
                    ? 'ARVIS entrega valor medible a cada área de tu organización: operaciones, finanzas, TI y mantenimiento. Una sola plataforma que alinea objetivos técnicos y de negocio.'
                    : 'ARVIS delivers measurable value to every area of your organization: operations, finance, IT, and maintenance. A single platform that aligns technical and business goals.'}
                </p>
              </div>

              <div className="flex-shrink-0 hidden md:block">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800 text-center min-w-[80px]">
                    <div className="text-lg font-bold text-cyan-400">-25%</div>
                    <div className="text-[10px] text-slate-500 uppercase">{isEs ? 'Paradas' : 'Stops'}</div>
                  </div>
                  <div className="bg-slate-950/50 rounded-xl p-3 border border-slate-800 text-center min-w-[80px]">
                    <div className="text-lg font-bold text-emerald-400">-$5K</div>
                    <div className="text-[10px] text-slate-500 uppercase">{isEs ? 'Por robot' : 'Per robot'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 mb-4">
            {isEs 
              ? '¿Quieres ver el impacto de ARVIS en tu operación específica?' 
              : 'Want to see ARVIS impact on your specific operation?'}
          </p>
          <a 
            href="mailto:victorcamacaro253@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)] group"
          >
            {isEs ? 'Solicitar Análisis de Impacto' : 'Request Impact Analysis'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ValueSection;