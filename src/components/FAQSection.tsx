import { useContext, useState, useMemo } from 'react';
import { LanguageContext } from '../context/languageContext';
import { 
  ChevronDown, 
  Search, 
  Cpu, 
  Shield, 
  Radio, 
  DollarSign, 
  HelpCircle,
  Zap,
  Code2,
  Package,
  Building
} from 'lucide-react';

const FAQSection = () => {
  // 1. Forzamos la lectura del contexto en cada render
  const context = useContext(LanguageContext);
  const language = context?.language || 'es'; // Fallback a 'es' por seguridad
  const isEs = language === 'es';

  // Estado
  const [openId, setOpenId] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // 2. Definimos las categorías dinámicamente para asegurar que se actualicen
  const categories = useMemo(() => [
    { id: 'all', label: isEs ? 'Todas' : 'All', icon: HelpCircle },
    { id: 'general', label: isEs ? 'General' : 'General', icon: HelpCircle },
    { id: 'technical', label: isEs ? 'Técnico' : 'Technical', icon: Cpu },
    { id: 'integration', label: isEs ? 'Integración' : 'Integration', icon: Radio },
    { id: 'safety', label: isEs ? 'Seguridad' : 'Safety', icon: Shield },
    { id: 'business', label: isEs ? 'Negocio' : 'Business', icon: DollarSign }
  ], [isEs]);

  // 3. Base de datos de FAQs (definida dentro para que reaccione a `isEs`)
  const faqs = useMemo(() => [
    // GENERAL
    {
      id: 1,
      category: 'general',
      question: isEs ? '¿Qué es ARVIS exactamente?' : 'What exactly is ARVIS?',
      answer: isEs 
        ? 'ARVIS (Autonomous Robot Vision & Intelligence System) es una plataforma de navegación autónoma basada en visión computacional contextual. Combina YOLOv8, MediaPipe, Filtros de Kalman y Campos Potenciales Artificiales para crear robots que no solo "ven" obstáculos, sino que entienden el contexto y reaccionan de forma inteligente. Todo con una cámara RGB de $20, sin LiDAR.'
        : 'ARVIS (Autonomous Robot Vision & Intelligence System) is a contextual computer vision-based autonomous navigation platform. It combines YOLOv8, MediaPipe, Kalman Filters, and Artificial Potential Fields to create robots that don\'t just "see" obstacles, but understand context and react intelligently. All with a $20 RGB camera, no LiDAR.',
      icon: HelpCircle
    },
    /* {
      id: 2,
      category: 'general',
      question: isEs ? '¿Es ARVIS open source?' : 'Is ARVIS open source?',
      answer: isEs 
        ? 'Sí. ARVIS está bajo licencia MIT, lo que significa que puedes usarlo, modificarlo y distribuirlo libremente, incluso en proyectos comerciales. El código completo está disponible en GitHub.'
        : 'Yes. ARVIS is under MIT license, which means you can use, modify, and distribute it freely, even in commercial projects. The complete code is available on GitHub.',
      icon: Code2
    }, */
    {
      id: 3,
      category: 'general',
      question: isEs ? '¿Qué hardware necesito para ejecutar ARVIS?' : 'What hardware do I need to run ARVIS?',
      answer: isEs 
        ? 'ARVIS está diseñado para ser agnóstico al hardware. Puedes ejecutarlo en: (1) Una laptop con webcam para desarrollo, (2) Raspberry Pi 4/5 + cámara USB para prototipos de bajo costo (<$200), o (3) NVIDIA Jetson Nano/Orin para despliegue industrial con >30 FPS.'
        : 'ARVIS is designed to be hardware agnostic. You can run it on: (1) A laptop with webcam for development, (2) Raspberry Pi 4/5 + USB camera for low-cost prototypes (<$200), or (3) NVIDIA Jetson Nano/Orin for industrial deployment with >30 FPS.',
      icon: Cpu
    },
    // TECHNICAL
    {
      id: 4,
      category: 'technical',
      question: isEs ? '¿Qué rendimiento (FPS) alcanza ARVIS?' : 'What performance (FPS) does ARVIS achieve?',
      answer: isEs 
        ? 'En CPU (Intel i5/i7) alcanza 9-10 FPS estables con YOLOv8n + MediaPipe. En NVIDIA Jetson con TensorRT/ONNX puede superar los 30 FPS. La latencia de inferencia de YOLOv8n es de 70-100ms.'
        : 'On CPU (Intel i5/i7) it achieves stable 9-10 FPS with YOLOv8n + MediaPipe. On NVIDIA Jetson with TensorRT/ONNX it can exceed 30 FPS. YOLOv8n inference latency is 70-100ms.',
      icon: Zap
    },
    {
      id: 5,
      category: 'technical',
      question: isEs ? '¿Por qué usan Campos Potenciales en lugar de A* o Dijkstra?' : 'Why use Potential Fields instead of A* or Dijkstra?',
      answer: isEs 
        ? 'A* y Dijkstra son planificadores globales computacionalmente costosos para tiempo real. Los Campos Potenciales Artificiales (APF) son reactivos: calculan fuerzas de atracción/repulsión en cada frame, permitiendo evasión fluida. Además, implementamos una fuerza tangencial (vórtice) que resuelve mínimos locales.'
        : 'A* and Dijkstra are global planners computationally expensive for real-time. Artificial Potential Fields (APF) are reactive: they calculate attraction/repulsion forces every frame, enabling fluid evasion. Additionally, we implement a tangential force (vortex) that solves local minima.',
      icon: Cpu
    },
    {
      id: 6,
      category: 'technical',
      question: isEs ? '¿Soporta ROS 2?' : 'Does it support ROS 2?',
      answer: isEs 
        ? 'Actualmente ARVIS usa MQTT (inspirado en VDA5050). La arquitectura está diseñada para facilitar la migración a ROS 2: los hilos de Python pueden traducirse a nodos, y las colas thread-safe a tópicos DDS. Está en el roadmap.'
        : 'Currently ARVIS uses MQTT (VDA5050-inspired). The architecture is designed to facilitate migration to ROS 2: Python threads can translate to nodes, and thread-safe queues to DDS topics. It\'s on the roadmap.',
      icon: Radio
    },
    // INTEGRATION
    {
      id: 7,
      category: 'integration',
      question: isEs ? '¿Se integra con mi WMS actual (SAP, Oracle)?' : 'Does it integrate with my current WMS (SAP, Oracle)?',
      answer: isEs 
        ? 'Sí. Gracias al puente WESBridge basado en MQTT, ARVIS actúa como un "nodo inteligente". Tu WMS publica una orden en el tópico de comandos, y el robot la ejecuta reportando progreso en tiempo real, sin reemplazar tu software.'
        : 'Yes. Thanks to the MQTT-based WESBridge, ARVIS acts as an "intelligent node". Your WMS publishes an order to the command topic, and the robot executes it reporting progress in real-time, without replacing your software.',
      icon: Radio
    },
    {
      id: 8,
      category: 'integration',
      question: isEs ? '¿Cuánto tiempo toma la implementación?' : 'How long does implementation take?',
      answer: isEs 
        ? 'Para un PoC en PC con webcam: horas. Para despliegue en Raspberry Pi/Jetson con integración MQTT: días, no meses. Esto contrasta con soluciones propietarias que requieren 3-6 meses de desarrollo.'
        : 'For a PoC on PC with webcam: hours. For deployment on Raspberry Pi/Jetson with MQTT integration: days, not months. This contrasts with proprietary solutions requiring 3-6 months of development.',
      icon: Zap
    },
    // SAFETY
    {
      id: 9,
      category: 'safety',
      question: isEs ? '¿Qué pasa si la cámara falla o se obstruye?' : 'What happens if the camera fails or gets obstructed?',
      answer: isEs 
        ? 'El sistema detecta automáticamente la pérdida de frames. Si la inferencia cae por debajo de un umbral crítico, el RobotController activa EMERGENCY_STOP de forma segura. El robot nunca se mueve "a ciegas".'
        : 'The system automatically detects frame loss. If inference falls below a critical threshold, the RobotController triggers EMERGENCY_STOP safely. The robot never moves "blind".',
      icon: Shield
    },
    {
      id: 10,
      category: 'safety',
      question: isEs ? '¿Cumple con normas de seguridad industrial (ISO 13850)?' : 'Does it comply with industrial safety standards (ISO 13850)?',
      answer: isEs 
        ? 'Sí. ARVIS implementa E-STOP con bloqueo manual obligatorio: tras una emergencia, el robot NO se reanuda automáticamente. Requiere un comando explícito de RESUME. La histéresis elimina oscilaciones peligrosas.'
        : 'Yes. ARVIS implements E-STOP with mandatory manual lock: after an emergency, the robot does NOT automatically resume. It requires an explicit RESUME command. Hysteresis eliminates dangerous oscillations.',
      icon: Shield
    },
    // BUSINESS
    {
      id: 11,
      category: 'business',
      question: isEs ? '¿Cuánto cuesta vs. una solución con LiDAR?' : 'How much does it cost vs. a LiDAR solution?',
      answer: isEs 
        ? 'ARVIS reduce el costo de hardware de sensores en un 95%: de $3,000-$5,000 (LiDAR) a $20-$50 (cámara RGB).ROI típico de 6 meses.'
        : 'ARVIS reduces sensor hardware costs by 95%: from $3,000-$5,000 (LiDAR) to $20-$50 (RGB camera).Typical ROI is 6 months.',
      icon: DollarSign
    },
    {
      id: 12,
      category: 'business',
      question: isEs ? '¿Ofrecen soporte o consultoría?' : 'Do you offer support or consulting?',
      answer: isEs 
        ? 'Sí. Ofrecemos consultoría especializada para integración enterprise, optimización para Jetson/TensorRT, migración a ROS 2 y despliegue en flotas multi-robot.'
        : 'Yes. We offer specialized consulting for enterprise integration, Jetson/TensorRT optimization, ROS 2 migration, and multi-robot fleet deployment.',
      icon: DollarSign
    },
    {
      id: 13,
      category: 'business',
      question: isEs ? '¿Para qué industrias está diseñado ARVIS?' : 'What industries is ARVIS designed for?',
      answer: isEs 
        ? 'ARVIS está diseñado para: Logística y almacenes (AMR), Salud y hospitales (detección de caídas), Retail (navegación en espacios no estructurados), Last-Mile Delivery (interacción con peatones), Manufactura (transporte de materiales), y Doméstico (aspiradoras/seguridad con protección de mascotas).'
        : 'ARVIS is designed for: Logistics and warehouses (AMR), Healthcare and hospitals (fall detection), Retail (unstructured space navigation), Last-Mile Delivery (pedestrian interaction), Manufacturing (material transport), and Domestic (vacuum/security with pet protection).',
      icon: Building
    },
     {
      id: 14,
      category: 'integration',
      question: isEs ? '¿Puedo usar ARVIS con robots de diferentes fabricantes?' : 'Can I use ARVIS with robots from different manufacturers?',
      answer: isEs 
        ? 'Sí. La Capa de Abstracción de Hardware (HAL) permite que el mismo código de IA controle robots de diferentes marcas. Actualmente implementamos RobotMock para simulación y está preparado para RobotReal (GPIO/Serial). El estándar MQTT inspirado en VDA5050 facilita la interoperabilidad.'
        : 'Yes. The Hardware Abstraction Layer (HAL) allows the same AI code to control robots from different brands. We currently implement RobotMock for simulation and it\'s ready for RobotReal (GPIO/Serial). The VDA5050-inspired MQTT standard facilitates interoperability.',
      icon: Cpu
    },
  ], [isEs]); // <-- DEPENDENCIA CLAVE: se recalcula si cambia el idioma

  // Filtrado de FAQs
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <HelpCircle className="w-3 h-3" />
            {isEs ? 'PREGUNTAS FRECUENTES' : 'FREQUENTLY ASKED QUESTIONS'}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {isEs ? '¿Tienes dudas? Tenemos respuestas.' : 'Got questions? We have answers.'}
          </h2>
          <p className="text-lg text-slate-400">
            {isEs 
              ? 'Todo lo que necesitas saber sobre ARVIS, desde la arquitectura técnica hasta la integración enterprise.'
              : 'Everything you need to know about ARVIS, from technical architecture to enterprise integration.'}
          </p>
        </div>

        {/* Buscador */}
        <div className="relative mb-8 max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEs ? 'Buscar en las preguntas...' : 'Search in questions...'}
            className="w-full pl-12 pr-4 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-500 hover:text-white transition-colors"
            >
              ✕
            </button>
          )}
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500/20 border border-cyan-500/40 text-cyan-400'
                    : 'bg-slate-900/50 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <p className="text-slate-400">
                {isEs ? 'No se encontraron resultados para tu búsqueda.' : 'No results found for your search.'}
              </p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 text-sm font-medium"
              >
                {isEs ? 'Limpiar filtros' : 'Clear filters'}
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              const Icon = faq.icon;
              return (
                <div
                  key={faq.id}
                  className={`group relative bg-slate-900/40 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen 
                      ? 'border-cyan-500/30 bg-slate-900/60' 
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Botón de pregunta */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                  >
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' 
                        : 'bg-slate-800 border-slate-700 text-slate-400 group-hover:border-slate-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? 'bg-cyan-500/20 rotate-180' : 'bg-slate-800'
                    }`}>
                      <ChevronDown className={`w-4 h-4 transition-colors ${isOpen ? 'text-cyan-400' : 'text-slate-400'}`} />
                    </div>
                  </button>

                  {/* Respuesta (animada) */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem] md:pl-[5.5rem]">
                        <div className="h-px bg-slate-800 mb-4"></div>
                        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl">
            <HelpCircle className="w-10 h-10 text-cyan-400 mb-2" />
            <h3 className="text-xl font-bold text-white">
              {isEs ? '¿No encuentras lo que buscas?' : "Didn't find what you're looking for?"}
            </h3>
            <p className="text-slate-400 text-sm max-w-md">
              {isEs 
                ? 'Contáctanos directamente y te responderemos en menos de 24 horas.'
                : 'Contact us directly and we\'ll respond in less than 24 hours.'}
            </p>
            <a 
              href="mailto:victorcamacaro253@gmail.com"
              className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)]"
            >
              {isEs ? 'Escríbenos' : 'Contact us'}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;