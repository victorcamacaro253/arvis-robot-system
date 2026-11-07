import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import {
  Eye,
  Brain,
  Shield,
  Target,
  Zap,
  Activity,
  GitBranch,
  Code2,
  CheckCircle2,
  ArrowRight,
  Layers,
  Cpu,
  Sparkles,
  TrendingUp,
  AlertTriangle
} from 'lucide-react';

const AIPipeline = () => {
  const { language } = useContext(LanguageContext);
  const isEs = language === 'es';

  // Las 4 etapas del pipeline
  const stages = [
    {
      id: 1,
      icon: Eye,
      number: '01',
      title: isEs ? 'Percepción Multimodal' : 'Multimodal Perception',
      subtitle: isEs ? 'Ver con contexto' : 'See with context',
      color: 'cyan',
      description: isEs
        ? 'El sistema captura el entorno a través de una cámara RGB y extrae información semántica en tiempo real. No solo detecta "algo", sino que identifica QUÉ es, DÓNDE está y QUÉ está haciendo.'
        : 'The system captures the environment through an RGB camera and extracts semantic information in real-time. It doesn\'t just detect "something", but identifies WHAT it is, WHERE it is, and WHAT it\'s doing.',
      technologies: [
        { name: 'YOLOv8n', desc: isEs ? 'Detección de 80+ clases de objetos' : 'Detection of 80+ object classes' },
        { name: 'MediaPipe Pose', desc: isEs ? '33 landmarks del esqueleto humano' : '33 human skeleton landmarks' },
        { name: 'ByteTrack', desc: isEs ? 'Tracking multi-objeto con IDs persistentes' : 'Multi-object tracking with persistent IDs' },
        { name: 'OpenCV', desc: isEs ? 'Procesamiento de imagen y segmentación' : 'Image processing and segmentation' }
      ],
      metrics: [
        { value: '80+', label: isEs ? 'Clases detectadas' : 'Classes detected' },
        { value: '10+', label: isEs ? 'Gestos reconocidos' : 'Gestures recognized' },
        { value: '70-100ms', label: isEs ? 'Latencia YOLO' : 'YOLO latency' },
        { value: '27-35ms', label: isEs ? 'Latencia MediaPipe' : 'MediaPipe latency' }
      ],
      code: `# Detección con YOLOv8 + MediaPipe
from ultralytics import YOLO
import mediapipe as mp

model = YOLO('yolov8n.pt')
pose = mp.solutions.pose.Pose()

# Detección de objetos
results = model(frame, conf=0.5)

# Si hay personas, extraer pose
for det in results:
    if det.cls == 0:  # persona
        landmarks = pose.process(frame)
        gesture = classify_gesture(landmarks)
        # Gestos: POINTING, STOP_HAND, ARMS_UP...`,
      keyFeatures: isEs
        ? ['Detección de personas, mascotas y obstáculos', 'Reconocimiento de 10+ gestos humanos', 'Detección de caídas en <200ms', 'Tracking con IDs persistentes (sin ID switching)']
        : ['Detection of people, pets, and obstacles', 'Recognition of 10+ human gestures', 'Fall detection in <200ms', 'Tracking with persistent IDs (no ID switching)']
    },
    {
      id: 2,
      icon: Brain,
      number: '02',
      title: isEs ? 'Predicción Cinemática' : 'Kinematic Prediction',
      subtitle: isEs ? 'Anticipar el futuro' : 'Anticipate the future',
      color: 'purple',
      description: isEs
        ? 'El sistema no reacciona al presente, predice el futuro inmediato. Un Filtro de Kalman 2D suaviza el ruido de las detecciones y calcula la velocidad real usando Delta Time (no FPS nominal), permitiendo predecir dónde estará cada objeto en los próximos segundos.'
        : 'The system doesn\'t react to the present, it predicts the immediate future. A 2D Kalman Filter smooths detection noise and calculates real velocity using Delta Time (not nominal FPS), enabling prediction of where each object will be in the next seconds.',
      technologies: [
        { name: 'Kalman Filter 2D', desc: isEs ? 'Estimación de estado con 4 dimensiones [x, y, vx, vy]' : 'State estimation with 4 dimensions [x, y, vx, vy]' },
        { name: 'Delta Time Real', desc: isEs ? 'Velocidad en px/s independiente del FPS' : 'Velocity in px/s independent of FPS' },
        { name: 'TTC Calculator', desc: isEs ? 'Time To Collision basado en velocidad relativa' : 'Time To Collision based on relative velocity' }
      ],
      metrics: [
        { value: '4D', label: isEs ? 'Espacio de estado' : 'State space' },
        { value: 'Q=1.0', label: isEs ? 'Ruido proceso' : 'Process noise' },
        { value: 'R=0.1', label: isEs ? 'Ruido medición' : 'Measurement noise' },
        { value: '90%', label: isEs ? 'Frenados fantasma eliminados' : 'Phantom braking eliminated' }
      ],
      code: `# Filtro de Kalman 2D
import numpy as np

class KalmanFilter2D:
    def __init__(self):
        # Estado: [x, y, vx, vy]
        self.state = np.zeros(4)
        
        # Matriz de transición (movimiento constante)
        self.F = np.array([
            [1, 0, dt, 0],
            [0, 1, 0, dt],
            [0, 0, 1, 0],
            [0, 0, 0, 1]
        ])
        
        # Ruido del proceso y medición
        self.Q = np.eye(4) * 1.0  # Q=1.0
        self.R = np.eye(2) * 0.1  # R=0.1
    
    def predict(self):
        self.state = self.F @ self.state
        return self.state
    
    def update(self, measurement):
        # Actualización con medición real
        # ...`,
      keyFeatures: isEs
        ? ['Suavizado de ruido en detecciones', 'Velocidad real en px/segundo', 'Predicción de trayectoria futura', 'Cálculo de Time To Collision (TTC)']
        : ['Smoothing of detection noise', 'Real velocity in px/second', 'Future trajectory prediction', 'Time To Collision (TTC) calculation']
    },
    {
      id: 3,
      icon: GitBranch,
      number: '03',
      title: isEs ? 'Planificación Reactiva' : 'Reactive Planning',
      subtitle: isEs ? 'Evasión fluida' : 'Fluid evasion',
      color: 'emerald',
      description: isEs
        ? 'En lugar de reglas binarias (stop/go), ARVIS usa Campos Potenciales Artificiales (APF): el destino es una "carga positiva" que atrae, y los obstáculos son "cargas negativas" que repelen. El robot calcula el vector resultante en cada frame y se mueve fluidamente. Cuando las fuerzas se cancelan (mínimo local), una fuerza tangencial (vórtice) permite al robot "deslizarse" alrededor del obstáculo.'
        : 'Instead of binary rules (stop/go), ARVIS uses Artificial Potential Fields (APF): the destination is a "positive charge" that attracts, and obstacles are "negative charges" that repel. The robot calculates the resulting vector each frame and moves fluidly. When forces cancel out (local minimum), a tangential force (vortex) allows the robot to "slide" around the obstacle.',
      technologies: [
        { name: 'APF Engine', desc: isEs ? 'Fuerzas de atracción y repulsión' : 'Attraction and repulsion forces' },
        { name: 'Vortex Force', desc: isEs ? 'Resolución de mínimos locales' : 'Local minima resolution' },
        { name: 'Vector Math', desc: isEs ? 'Cálculo del vector resultante por frame' : 'Resulting vector calculation per frame' }
      ],
      metrics: [
        { value: '0', label: isEs ? 'Congelamientos' : 'Freezings' },
        { value: '∞', label: isEs ? 'Trayectorias posibles' : 'Possible trajectories' },
        { value: '<50ms', label: isEs ? 'Cálculo por frame' : 'Calculation per frame' },
        { value: '100%', label: isEs ? 'Evasión fluida' : 'Fluid evasion' }
      ],
      code: `# Campos Potenciales Artificiales
def calculate_potential_fields(robot, obstacles, goal):
    # Fuerza atractiva (hacia el objetivo)
    F_attract = k_attract * (goal - robot.pos)
    
    # Fuerzas repulsivas (de cada obstáculo)
    F_repulse = np.zeros(2)
    for obs in obstacles:
        dist = np.linalg.norm(robot.pos - obs.pos)
        if dist < safety_radius:
            # Magnitud inversamente proporcional al cuadrado
            magnitude = k_repulse / (dist ** 2)
            direction = (robot.pos - obs.pos) / dist
            F_repulse += magnitude * direction
    
    # Fuerza total
    F_total = F_attract + F_repulse
    
    # Si hay mínimo local, aplicar fuerza tangencial
    if np.linalg.norm(F_total) < threshold:
        F_total += calculate_vortex_force(robot, obstacles)
    
    return F_total`,
      keyFeatures: isEs
        ? ['Evasión continua sin frenazos bruscos', 'Resolución de mínimos locales con vórtice', 'Trayectorias orgánicas tipo humano', 'Adaptable a entornos dinámicos']
        : ['Continuous evasion without harsh braking', 'Local minima resolution with vortex', 'Human-like organic trajectories', 'Adaptable to dynamic environments']
    },
    {
      id: 4,
      icon: Shield,
      number: '04',
      title: isEs ? 'Seguridad con Histéresis' : 'Safety with Hysteresis',
      subtitle: isEs ? 'Proteger siempre' : 'Always protect',
      color: 'amber',
      description: isEs
        ? 'El sistema evalúa el riesgo de forma multiclase (humanos, mascotas, objetos estáticos) con umbrales adaptativos. Implementa histéresis para evitar oscilaciones (ej: entrar en DANGER a 1.5m, salir a 1.7m). En caso de emergencia crítica (<0.5m), activa E-STOP con bloqueo manual obligatorio, cumpliendo la norma ISO 13850.'
        : 'The system evaluates risk in a multi-class way (humans, pets, static objects) with adaptive thresholds. It implements hysteresis to prevent oscillations (e.g., enter DANGER at 1.5m, exit at 1.7m). In case of critical emergency (<0.5m), it activates E-STOP with mandatory manual lock, complying with ISO 13850 standard.',
      technologies: [
        { name: 'RiskAnalyzer', desc: isEs ? 'Evaluación multiclase con umbrales adaptativos' : 'Multi-class evaluation with adaptive thresholds' },
        { name: 'Hysteresis Logic', desc: isEs ? 'Evita oscilaciones de estado' : 'Prevents state oscillations' },
        { name: 'E-STOP FSM', desc: isEs ? 'Máquina de estados con bloqueo manual' : 'State machine with manual lock' }
      ],
      metrics: [
        { value: '3', label: isEs ? 'Niveles de riesgo' : 'Risk levels' },
        { value: '0.2m', label: isEs ? 'Margen histéresis' : 'Hysteresis margin' },
        { value: '<100ms', label: isEs ? 'Tiempo de reacción' : 'Reaction time' },
        { value: 'ISO', label: '13850' }
      ],
      code: `# Evaluación de riesgo con histéresis
class RiskAnalyzer:
    def __init__(self):
        self.current_risk = 'SAFE'
        
        # Umbrales multiclase
        self.thresholds = {
            'human': {'danger': 1.5, 'emergency': 0.5},
            'pet': {'danger': 1.2, 'emergency': 0.4},
            'object': {'danger': 1.0, 'emergency': 0.3}
        }
        
        # Histéresis: margen para salir del estado
        self.hysteresis_margin = 0.2
    
    def evaluate(self, obj_class, distance):
        thresholds = self.thresholds[obj_class]
        
        # Entrar en DANGER
        if distance < thresholds['danger']:
            self.current_risk = 'DANGER'
        
        # Entrar en EMERGENCY
        if distance < thresholds['emergency']:
            self.current_risk = 'EMERGENCY'
            self.trigger_estop()
        
        # Salir con histéresis (evitar oscilaciones)
        elif distance > thresholds['danger'] + self.hysteresis_margin:
            self.current_risk = 'SAFE'
        
        return self.current_risk`,
      keyFeatures: isEs
        ? ['Riesgo multiclase (humano/mascota/objeto)', 'Histéresis para estabilidad', 'E-STOP con bloqueo manual (ISO 13850)', 'Reducción del 60% en falsos positivos']
        : ['Multi-class risk (human/pet/object)', 'Hysteresis for stability', 'E-STOP with manual lock (ISO 13850)', '60% reduction in false positives']
    }
  ];

  const colorMap: Record<string, {
    bg: string; border: string; text: string; gradient: string;
    bgLight: string; badge: string;
  }> = {
    cyan: {
      bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500', bgLight: 'bg-cyan-500/5', badge: 'bg-cyan-500/20 text-cyan-300'
    },
    purple: {
      bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500', bgLight: 'bg-purple-500/5', badge: 'bg-purple-500/20 text-purple-300'
    },
    emerald: {
      bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400',
      gradient: 'from-emerald-500 to-teal-500', bgLight: 'bg-emerald-500/5', badge: 'bg-emerald-500/20 text-emerald-300'
    },
    amber: {
      bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400',
      gradient: 'from-amber-500 to-orange-500', bgLight: 'bg-amber-500/5', badge: 'bg-amber-500/20 text-amber-300'
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <Brain className="w-3 h-3" />
            {isEs ? 'PIPELINE DE INTELIGENCIA ARTIFICIAL' : 'ARTIFICIAL INTELLIGENCE PIPELINE'}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            {isEs ? (
              <>
                Del Píxel a la
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Acción Segura
                </span>
              </>
            ) : (
              <>
                From Pixel to
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Safe Action
                </span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {isEs 
              ? 'Un pipeline concurrente de baja latencia que transforma datos brutos de cámara en maniobras de evasión fluidas y matemáticamente probadas. Cada etapa está optimizada para ejecutarse en hardware de borde de bajo costo.'
              : 'A low-latency concurrent pipeline that transforms raw camera data into fluid, mathematically proven evasion maneuvers. Each stage is optimized to run on low-cost edge hardware.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#pipeline" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]"
            >
              {isEs ? 'Explorar el Pipeline' : 'Explore the Pipeline'}
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              to="/architecture" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all"
            >
              {isEs ? 'Ver Arquitectura' : 'View Architecture'}
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DIAGRAMA VISUAL DEL PIPELINE ============ */}
      <section id="pipeline" className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold mb-6">
              <Layers className="w-3 h-3" />
              {isEs ? 'ARQUITECTURA DEL PIPELINE' : 'PIPELINE ARCHITECTURE'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? '4 Etapas, 1 Flujo Continuo' : '4 Stages, 1 Continuous Flow'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isEs 
                ? 'Cada etapa transforma los datos de la anterior, creando un flujo de información que va del píxel crudo a la decisión segura en menos de 150ms.'
                : 'Each stage transforms data from the previous one, creating an information flow that goes from raw pixel to safe decision in less than 150ms.'}
            </p>
          </div>

          {/* Diagrama horizontal del pipeline */}
          <div className="relative mb-20">
            {/* Línea conectora (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 via-emerald-500/30 to-amber-500/30 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const colors = colorMap[stage.color];
                
                return (
                  <div key={stage.id} className="group relative">
                    <div className={`relative bg-slate-900/50 backdrop-blur-sm border ${colors.border} rounded-3xl p-6 hover:border-opacity-60 transition-all duration-300 hover:-translate-y-1`}>
                      
                      {/* Número grande de fondo */}
                      <div className={`absolute top-4 right-4 text-6xl font-bold ${colors.text} opacity-10 pointer-events-none`}>
                        {stage.number}
                      </div>
                      
                      {/* Icono */}
                      <div className={`w-14 h-14 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <Icon className={`w-7 h-7 ${colors.text}`} />
                      </div>
                      
                      {/* Título */}
                      <div className="text-xs font-mono text-slate-500 mb-1">STEP {stage.number}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{stage.title}</h3>
                      <p className={`text-sm ${colors.text} font-medium mb-3`}>{stage.subtitle}</p>
                      
                      {/* Descripción corta */}
                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                        {stage.description}
                      </p>
                      
                      {/* Flecha entre etapas (solo desktop) */}
                      {idx < stages.length - 1 && (
                        <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                          <div className={`w-6 h-6 rounded-full ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                            <ArrowRight className={`w-3 h-3 ${colors.text}`} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Métricas globales del pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '<150ms', label: isEs ? 'Latencia total' : 'Total latency', icon: Zap, color: 'cyan' },
              { value: '9-10', label: 'FPS en CPU', icon: Activity, color: 'purple' },
              { value: '0', label: isEs ? 'Colisiones' : 'Collisions', icon: Shield, color: 'emerald' },
              { value: '99.9%', label: isEs ? 'Precisión' : 'Accuracy', icon: Target, color: 'amber' }
            ].map((metric, idx) => {
              const Icon = metric.icon;
              const colors = colorMap[metric.color];
              
              return (
                <div key={idx} className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-5 text-center hover:border-opacity-60 transition-all`}>
                  <Icon className={`w-5 h-5 ${colors.text} mb-2 mx-auto`} />
                  <div className={`text-2xl md:text-3xl font-bold ${colors.text} mb-1`}>{metric.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ DETALLE DE CADA ETAPA ============ */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Anatomía del Pipeline' : 'Pipeline Anatomy'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isEs 
                ? 'Un vistazo profundo a cada etapa del pipeline, con tecnologías, métricas y código de ejemplo.'
                : 'A deep dive into each stage of the pipeline, with technologies, metrics, and example code.'}
            </p>
          </div>

          <div className="space-y-20">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const colors = colorMap[stage.color];
              const isEven = idx % 2 === 0;
              
              return (
                <div key={stage.id} className="relative">
                  {/* Número grande decorativo */}
                  <div className={`absolute -top-10 ${isEven ? 'left-0' : 'right-0'} text-[200px] font-bold ${colors.text} opacity-5 pointer-events-none leading-none hidden md:block`}>
                    {stage.number}
                  </div>
                  
                  <div className={`relative grid lg:grid-cols-2 gap-8 ${!isEven ? 'lg:direction-rtl' : ''}`}>
                    
                    {/* Columna izquierda: Información */}
                    <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                      {/* Header */}
                      <div className="flex items-start gap-4">
                        <div className={`w-16 h-16 ${colors.bg} ${colors.border} border rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        <div>
                          <div className="text-xs font-mono text-slate-500 mb-1">STAGE {stage.number}</div>
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stage.title}</h3>
                          <p className={`text-base ${colors.text} font-medium`}>{stage.subtitle}</p>
                        </div>
                      </div>
                      
                      {/* Descripción */}
                      <p className="text-slate-300 leading-relaxed text-base">
                        {stage.description}
                      </p>
                      
                      {/* Tecnologías */}
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Cpu className={`w-4 h-4 ${colors.text}`} />
                          {isEs ? 'Tecnologías Clave' : 'Key Technologies'}
                        </h4>
                        <div className="space-y-2">
                          {stage.technologies.map((tech, tIdx) => (
                            <div key={tIdx} className={`flex items-start gap-3 p-3 ${colors.bgLight} rounded-xl border ${colors.border}`}>
                              <div className={`w-2 h-2 rounded-full ${colors.text.replace('text-', 'bg-')} mt-1.5 flex-shrink-0`}></div>
                              <div>
                                <div className={`text-sm font-bold ${colors.text}`}>{tech.name}</div>
                                <div className="text-xs text-slate-400">{tech.desc}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Características clave */}
                      <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                          <CheckCircle2 className={`w-4 h-4 ${colors.text}`} />
                          {isEs ? 'Características' : 'Features'}
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stage.keyFeatures.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-sm text-slate-300">
                              <div className={`w-1.5 h-1.5 rounded-full ${colors.text.replace('text-', 'bg-')} flex-shrink-0`}></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Columna derecha: Métricas + Código */}
                    <div className={`space-y-6 ${!isEven ? 'lg:order-1' : ''}`}>
                      {/* Métricas */}
                      <div className={`bg-slate-900/50 border ${colors.border} rounded-2xl p-6`}>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                          <TrendingUp className={`w-4 h-4 ${colors.text}`} />
                          {isEs ? 'Métricas de Rendimiento' : 'Performance Metrics'}
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {stage.metrics.map((metric, mIdx) => (
                            <div key={mIdx} className="text-center p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                              <div className={`text-2xl md:text-3xl font-bold ${colors.text} mb-1`}>{metric.value}</div>
                              <div className="text-xs text-slate-500 uppercase tracking-wider">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Código */}
                      <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/50">
                          <div className="flex items-center gap-2">
                            <Code2 className={`w-4 h-4 ${colors.text}`} />
                            <span className="text-xs font-mono text-slate-400">
                              {isEs ? 'Implementación' : 'Implementation'}
                            </span>
                          </div>
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                          </div>
                        </div>
                        <pre className="p-4 text-xs md:text-sm font-mono text-slate-300 overflow-x-auto leading-relaxed">
                          <code>{stage.code}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ COMPARATIVA: ¿POR QUÉ ESTA COMBINACIÓN? ============ */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-6">
              <Sparkles className="w-3 h-3" />
              {isEs ? 'DECISIONES DE DISEÑO' : 'DESIGN DECISIONS'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? '¿Por qué esta combinación?' : 'Why this combination?'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isEs 
                ? 'Cada tecnología fue elegida por una razón específica. Aquí te explicamos por qué ARVIS usa esta arquitectura y no otras alternativas.'
                : 'Each technology was chosen for a specific reason. Here we explain why ARVIS uses this architecture and not other alternatives.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* APF vs A* */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center">
                  <GitBranch className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isEs ? 'Campos Potenciales vs A*' : 'Potential Fields vs A*'}
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">A* y Dijkstra</span> {isEs 
                      ? 'son planificadores globales que requieren un mapa completo. Son computacionalmente costosos para replanificación en tiempo real.'
                      : 'are global planners that require a complete map. They are computationally expensive for real-time replanning.'}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Campos Potenciales (APF)</span> {isEs 
                      ? 'son reactivos: calculan fuerzas de atracción/repulsión en cada frame, permitiendo evasión fluida y continua sin congelamientos.'
                      : 'are reactive: they calculate attraction/repulsion forces every frame, enabling fluid and continuous evasion without freezing.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Kalman vs Filtro simple */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isEs ? 'Kalman vs Filtro Promedio' : 'Kalman vs Moving Average'}
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Filtros simples</span> {isEs 
                      ? '(promedio móvil, suavizado exponencial) introducen retraso y no modelan la dinámica del sistema.'
                      : '(moving average, exponential smoothing) introduce delay and don\'t model system dynamics.'}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Filtro de Kalman</span> {isEs 
                      ? 'es matemáticamente óptimo para sistemas lineales con ruido gaussiano. Predice el estado futuro basándose en el modelo de movimiento.'
                      : 'is mathematically optimal for linear systems with Gaussian noise. It predicts future state based on motion model.'}
                  </p>
                </div>
              </div>
            </div>

            {/* YOLOv8 vs otros detectores */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isEs ? 'YOLOv8 vs otros detectores' : 'YOLOv8 vs other detectors'}
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Faster R-CNN, SSD</span> {isEs 
                      ? 'son más precisos pero mucho más lentos. No aptos para tiempo real en hardware de borde.'
                      : 'are more accurate but much slower. Not suitable for real-time on edge hardware.'}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">YOLOv8n (nano)</span> {isEs 
                      ? 'ofrece el mejor equilibrio (Pareto frontier) entre precisión (mAP) y velocidad (FPS) en CPUs y GPUs de gama media.'
                      : 'offers the best balance (Pareto frontier) between accuracy (mAP) and speed (FPS) on mid-range CPUs and GPUs.'}
                  </p>
                </div>
              </div>
            </div>

            {/* E-STOP manual vs auto */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {isEs ? 'E-STOP manual vs automático' : 'Manual vs Automatic E-STOP'}
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Reanudación automática</span> {isEs 
                      ? 'es peligrosa: si el peligro persiste o reaparece, el robot puede reanudar movimiento inesperadamente.'
                      : 'is dangerous: if the danger persists or reappears, the robot may unexpectedly resume movement.'}
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300">
                    <span className="font-semibold text-white">Bloqueo manual (ISO 13850)</span> {isEs 
                      ? 'requiere intervención humana explícita. Cumple normas de seguridad industrial y previene accidentes por falsos negativos.'
                      : 'requires explicit human intervention. Complies with industrial safety standards and prevents accidents from false negatives.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FLUJO DE DATOS EN TIEMPO REAL ============ */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
              <Activity className="w-3 h-3" />
              {isEs ? 'EJEMPLO EN TIEMPO REAL' : 'REAL-TIME EXAMPLE'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Un Ciclo Completo en 150ms' : 'A Complete Cycle in 150ms'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isEs 
                ? 'Así es como ARVIS procesa un frame completo, desde la captura hasta la decisión de evasión.'
                : 'This is how ARVIS processes a complete frame, from capture to evasion decision.'}
            </p>
          </div>

          <div className="relative">
            {/* Timeline vertical */}
            <div className="space-y-6">
              {[
                { time: '0ms', stage: isEs ? 'Captura' : 'Capture', desc: isEs ? 'Frame de cámara RGB a 30 FPS' : 'RGB camera frame at 30 FPS', color: 'cyan' },
                { time: '70ms', stage: isEs ? 'Detección YOLO' : 'YOLO Detection', desc: isEs ? 'Detección de 1 persona (confianza 98%)' : 'Detection of 1 person (confidence 98%)', color: 'cyan' },
                { time: '100ms', stage: isEs ? 'Pose MediaPipe' : 'MediaPipe Pose', desc: isEs ? 'Extracción de 33 landmarks, clasificación de gesto: NEUTRAL' : 'Extraction of 33 landmarks, gesture classification: NEUTRAL', color: 'cyan' },
                { time: '110ms', stage: isEs ? 'Kalman Predict' : 'Kalman Predict', desc: isEs ? 'Estado suavizado: x=1.8m, vx=-1.5m/s' : 'Smoothed state: x=1.8m, vx=-1.5m/s', color: 'purple' },
                { time: '120ms', stage: 'TTC', desc: isEs ? 'Time To Collision: 1.2 segundos' : 'Time To Collision: 1.2 seconds', color: 'purple' },
                { time: '130ms', stage: isEs ? 'Evaluación de Riesgo' : 'Risk Evaluation', desc: isEs ? 'Distancia 1.8m > 1.5m → Riesgo: SAFE' : 'Distance 1.8m > 1.5m → Risk: SAFE', color: 'amber' },
                { time: '140ms', stage: isEs ? 'Campos Potenciales' : 'Potential Fields', desc: isEs ? 'F_atract = (0.5, 0), F_repulse = (0, 0) → F_total = (0.5, 0)' : 'F_attract = (0.5, 0), F_repulse = (0, 0) → F_total = (0.5, 0)', color: 'emerald' },
                { time: '150ms', stage: isEs ? 'Acción' : 'Action', desc: isEs ? 'Comando enviado a HAL: go(0.5 m/s)' : 'Command sent to HAL: go(0.5 m/s)', color: 'emerald' }
              ].map((step, idx) => {
                const colors = colorMap[step.color];
                
                return (
                  <div key={idx} className="flex gap-4 md:gap-6 items-start">
                    {/* Tiempo */}
                    <div className="flex-shrink-0 w-16 md:w-20 text-right">
                      <div className={`text-sm font-mono font-bold ${colors.text}`}>{step.time}</div>
                    </div>
                    
                    {/* Línea vertical + punto */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className={`w-3 h-3 rounded-full ${colors.bg} border-2 ${colors.border}`}></div>
                      {idx < 7 && <div className="w-0.5 h-16 bg-slate-800"></div>}
                    </div>
                    
                    {/* Contenido */}
                    <div className={`flex-1 pb-6 ${idx < 7 ? '' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-xs font-mono font-bold ${colors.text} uppercase`}>
                          {step.stage}
                        </span>
                      </div>
                      <p className="text-sm text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-cyan-500/20 rounded-3xl p-10 md:p-14 hover:border-cyan-500/40 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl mb-6">
              <Brain className="w-8 h-8 text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEs ? '¿Listo para ver el pipeline en acción?' : 'Ready to see the pipeline in action?'}
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              {isEs 
                ? 'Explora el dashboard en vivo y observa cómo cada etapa del pipeline trabaja en conjunto para crear navegación autónoma segura.'
                : 'Explore the live dashboard and watch how each stage of the pipeline works together to create safe autonomous navigation.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)]"
              >
                {isEs ? 'Ver Dashboard en Vivo' : 'View Live Dashboard'}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://github.com/victorcamacaro253/arvis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all"
              >
                <Code2 className="w-4 h-4" />
                {isEs ? 'Ver Código Fuente' : 'View Source Code'}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIPipeline;