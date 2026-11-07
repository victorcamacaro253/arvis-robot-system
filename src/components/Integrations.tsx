import { useContext } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  Database, 
  Server, 
  Radio, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  TrendingUp,
  ArrowRight,
  Code2,
  Shield
} from 'lucide-react';

const IntegrationSection = () => {
  const { language } = useContext(LanguageContext);
  const isEs = language === 'es';

  // Datos de integración (hardcoded ya que no están en el JSON)
  const integrationData = {
    badge: isEs ? 'INTEGRACIÓN ENTERPRISE' : 'ENTERPRISE INTEGRATION',
    title: isEs 
      ? 'Integración con Infraestructura IT Existente' 
      : 'Integration with Existing IT Infrastructure',
    subtitle: isEs
      ? 'ARVIS se conecta nativamente con los sistemas que ya usas. Sin reemplazos, sin fricción.'
      : 'ARVIS connects natively with the systems you already use. No replacements, no friction.',
    problem: isEs
      ? 'Las empresas ya han invertido miles de dólares en software de gestión (SAP, Oracle, Manhattan) y no quieren (ni pueden) cambiarlo por el software propietario de un fabricante de robots.'
      : 'Companies have already invested thousands of dollars in management software (SAP, Oracle, Manhattan) and don\'t want (or can\'t) replace it with proprietary robot manufacturer software.',
    solution: isEs
      ? 'Gracias al puente WESBridge basado en MQTT, el robot actúa como un "nodo inteligente" dentro de la red existente. El WMS publica una orden en el tópico de comandos, y el robot la ejecuta usando su inteligencia local, reportando el progreso en tiempo real.'
      : 'Thanks to the MQTT-based WESBridge, the robot acts as an "intelligent node" within the existing network. The WMS publishes an order to the command topic, and the robot executes it using its local intelligence, reporting progress in real-time.',
    values: [
      {
        icon: Shield,
        title: isEs ? 'Protección de la Inversión' : 'Investment Protection',
        desc: isEs 
          ? 'No se requiere reemplazar el software de gestión actual. ARVIS se adapta a tu infraestructura.'
          : 'No need to replace current management software. ARVIS adapts to your infrastructure.',
        color: 'emerald'
      },
      {
        icon: Clock,
        title: isEs ? 'Tiempo de Implementación' : 'Implementation Time',
        desc: isEs 
          ? 'Días en lugar de meses de desarrollo de APIs personalizadas. Plug & Play con MQTT.'
          : 'Days instead of months of custom API development. Plug & Play with MQTT.',
        color: 'cyan'
      },
      {
        icon: TrendingUp,
        title: isEs ? 'Escalabilidad' : 'Scalability',
        desc: isEs 
          ? 'Agrega robots de diferentes "marcas" bajo un mismo cerebro central sin cambios en el WMS.'
          : 'Add robots from different "brands" under a single central brain without WMS changes.',
        color: 'purple'
      }
    ],
    jsonExample: {
      command: isEs ? 'Orden del WMS' : 'WMS Command',
      response: isEs ? 'Respuesta del Robot' : 'Robot Response'
    }
  };

  const colorClasses = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400',
      hover: 'group-hover:border-emerald-500/40'
    },
    cyan: {
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
      text: 'text-cyan-400',
      hover: 'group-hover:border-cyan-500/40'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-400',
      hover: 'group-hover:border-purple-500/40'
    }
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <Radio className="w-3 h-3" />
            {integrationData.badge}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {integrationData.title}
          </h2>
          <p className="text-lg text-slate-400">
            {integrationData.subtitle}
          </p>
        </div>

        {/* DIAGRAMA DE FLUJO DE INTEGRACIÓN */}
        <div className="mb-16">
          <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 md:p-10 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all duration-500"></div>
            
            <div className="relative z-10">
              {/* Título del diagrama */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  {isEs ? 'Flujo de Comunicación en Tiempo Real' : 'Real-Time Communication Flow'}
                </h3>
                <p className="text-sm text-slate-400">
                  {isEs 
                    ? 'MQTT bidireccional entre tu WMS y ARVIS' 
                    : 'Bidirectional MQTT between your WMS and ARVIS'}
                </p>
              </div>

              {/* Diagrama visual */}
              <div className="grid md:grid-cols-5 gap-4 items-center">
                
                {/* WMS */}
                <div className="bg-slate-950/50 border border-slate-700 rounded-2xl p-4 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Database className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 mb-1">WMS / ERP</div>
                  <div className="text-sm font-bold text-white">SAP / Oracle</div>
                </div>

                {/* Flecha 1 */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-cyan-400">MQTT</span>
                  </div>
                </div>

                {/* MQTT Broker */}
                <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/30 rounded-2xl p-4 text-center relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-cyan-500 text-slate-950 text-[10px] font-bold rounded-full">
                    BROKER
                  </div>
                  <div className="w-12 h-12 bg-cyan-500/20 border border-cyan-500/40 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Radio className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xs font-mono text-cyan-400 mb-1">MQTT</div>
                  <div className="text-sm font-bold text-white">Mosquitto</div>
                </div>

                {/* Flecha 2 */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="flex flex-col items-center gap-1">
                    <ArrowRight className="w-6 h-6 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono text-emerald-400">MQTT</span>
                  </div>
                </div>

                {/* ARVIS Robot */}
                <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border border-emerald-500/30 rounded-2xl p-4 text-center">
                  <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Cpu className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mb-1">ARVIS</div>
                  <div className="text-sm font-bold text-white">Robot Node</div>
                </div>

              </div>

              {/* Ejemplo de código JSON */}
              <div className="mt-8 grid md:grid-cols-2 gap-4">
                {/* Comando WMS */}
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs">
                  <div className="flex items-center gap-2 mb-3 text-slate-400">
                    <Code2 className="w-4 h-4" />
                    <span>{integrationData.jsonExample.command}</span>
                  </div>
                  <pre className="text-cyan-400 overflow-x-auto">
{`{
  "action": "PICK_ITEM",
  "location": "A-34",
  "priority": "HIGH",
  "timestamp": "2026-11-05T14:30:00Z"
}`}
                  </pre>
                </div>

                {/* Respuesta Robot */}
                <div className="bg-slate-950 rounded-xl border border-slate-800 p-4 font-mono text-xs">
                  <div className="flex items-center gap-2 mb-3 text-slate-400">
                    <Code2 className="w-4 h-4" />
                    <span>{integrationData.jsonExample.response}</span>
                  </div>
                  <pre className="text-emerald-400 overflow-x-auto">
{`{
  "status": "IN_PROGRESS",
  "robot_id": "ARVIS_001",
  "progress": 65,
  "eta_seconds": 45
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PROBLEMA Y SOLUCIÓN */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Problema */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-red-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <div className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
                  {isEs ? 'El Desafío' : 'The Challenge'}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {integrationData.problem}
                </p>
              </div>
            </div>
          </div>

          {/* Solución */}
          <div className="bg-slate-900/40 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                  {isEs ? 'La Solución ARVIS' : 'The ARVIS Solution'}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {integrationData.solution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 VALORES CLAVE */}
        <div className="grid md:grid-cols-3 gap-6">
          {integrationData.values.map((value, idx) => {
            const Icon = value.icon;
            const colors = colorClasses[value.color as keyof typeof colorClasses];
            
            return (
              <div 
                key={idx}
                className={`group relative bg-slate-900/40 backdrop-blur-sm border ${colors.border} rounded-2xl p-6 ${colors.hover} transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-slate-800/50 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 ${colors.bg} ${colors.border} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-4">
            {isEs 
              ? '¿Quieres ver cómo se integra ARVIS con tu WMS actual?' 
              : 'Want to see how ARVIS integrates with your current WMS?'}
          </p>
          <a 
            href="mailto:victorcamacaro253@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)] group"
          >
            {isEs ? 'Solicitar Demo de Integración' : 'Request Integration Demo'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default IntegrationSection;