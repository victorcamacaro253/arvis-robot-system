import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  Eye, 
  Brain, 
  Shield, 
  Camera, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const OverviewSection = () => {
  const { language } = useContext(LanguageContext);
  const isEs = language === 'es';

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============ ENCABEZADO SIMPLE ============ */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            {isEs ? 'QUÉ ES ARVIS' : 'WHAT IS ARVIS'}
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {isEs ? (
              <>
                Los ojos y el cerebro
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  de tu robot autónomo
                </span>
              </>
            ) : (
              <>
                The eyes and brain
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  of your autonomous robot
                </span>
              </>
            )}
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            {isEs 
              ? 'ARVIS convierte una cámara web simple en un sistema de navegación inteligente. El robot puede ver, entender su entorno y reaccionar de forma segura, todo con hardware de bajo costo.'
              : 'ARVIS turns a simple webcam into an intelligent navigation system. The robot can see, understand its environment, and react safely, all with low-cost hardware.'}
          </p>
        </div>

        {/* ============ ANALOGÍA VISUAL ============ */}
        <div className="mb-16">
          <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              
              {/* Cámara */}
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {isEs ? 'Una cámara simple' : 'A simple camera'}
                </h3>
                <p className="text-sm text-slate-400">
                  {isEs ? 'Cualquier webcam de $20-50' : 'Any $20-50 webcam'}
                </p>
              </div>

              {/* Flecha */}
              <div className="hidden md:flex justify-center">
                <ArrowRight className="w-8 h-8 text-cyan-400" />
              </div>

              {/* Robot inteligente */}
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 rounded-2xl border border-cyan-500/30 flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {isEs ? 'Un robot inteligente' : 'An intelligent robot'}
                </h3>
                <p className="text-sm text-slate-400">
                  {isEs ? 'Que ve, piensa y actúa' : 'That sees, thinks, and acts'}
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* ============ 3 CAPACIDADES CLAVE ============ */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          {/* Ver */}
          <div className="group bg-slate-900/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {isEs ? '1. Ve el entorno' : '1. Sees the environment'}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {isEs 
                ? 'Detecta personas, mascotas y obstáculos. Reconoce gestos humanos como "alto" o "pasa". Incluso detecta si alguien se cae.'
                : 'Detects people, pets, and obstacles. Recognizes human gestures like "stop" or "pass". Even detects if someone falls.'}
            </p>
          </div>

          {/* Pensar */}
          <div className="group bg-slate-900/40 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {isEs ? '2. Piensa antes de actuar' : '2. Thinks before acting'}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {isEs 
                ? 'Predice hacia dónde se mueven las personas. Calcula la mejor ruta para esquivar obstáculos de forma fluida, sin frenazos bruscos.'
                : 'Predicts where people are moving. Calculates the best path to avoid obstacles smoothly, without harsh braking.'}
            </p>
          </div>

          {/* Actuar seguro */}
          <div className="group bg-slate-900/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/40 transition-all duration-300">
            <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              {isEs ? '3. Actúa con seguridad' : '3. Acts safely'}
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              {isEs 
                ? 'Frena antes de que ocurra un accidente. Si hay una emergencia, se detiene completamente y espera que un humano lo reinicie.'
                : 'Brakes before an accident occurs. If there\'s an emergency, it stops completely and waits for a human to restart it.'}
            </p>
          </div>

        </div>

        {/* ============ BENEFICIOS CLAVE ============ */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {isEs ? '¿Por qué esto importa?' : 'Why does this matter?'}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    {isEs ? '99% más económico' : '99% more affordable'}
                  </div>
                  <div className="text-sm text-slate-400">
                    {isEs ? 'Usa una cámara de $20 en lugar de sensores LiDAR de $5,000' : 'Uses a $20 camera instead of $5,000 LiDAR sensors'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    {isEs ? 'Fácil de integrar' : 'Easy to integrate'}
                  </div>
                  <div className="text-sm text-slate-400">
                    {isEs ? 'Se conecta con tu sistema actual (SAP, Oracle) en días, no meses' : 'Connects with your current system (SAP, Oracle) in days, not months'}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    {isEs ? 'Seguridad industrial' : 'Industrial safety'}
                  </div>
                  <div className="text-sm text-slate-400">
                    {isEs ? 'Cumple normas ISO. Nunca se reanuda solo tras una emergencia' : 'Complies with ISO standards. Never resumes automatically after an emergency'}
                  </div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold mb-1">
                    {isEs ? 'Código abierto' : 'Open source'}
                  </div>
                  <div className="text-sm text-slate-400">
                    {isEs ? 'Sin costos de licencia. Personalizable para tu necesidad' : 'No licensing costs. Customizable for your needs'}
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

export default OverviewSection;