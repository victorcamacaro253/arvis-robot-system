import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import {
  Cpu,
  Eye,
  Brain,
  Shield,
  Radio,
  ArrowRight,
  Layers,
  Zap,
  Code2,
  GitBranch,
  CheckCircle2,
  Terminal,
  Box
} from 'lucide-react';

const Architecture = () => {
  const { language } = useContext(LanguageContext);
  const isEs = language === 'es';
  const [activeTab, setActiveTab] = useState<'pipeline' | 'concurrency' | 'hal'>('pipeline');

  // ============ DATOS DE ARQUITECTURA ============
  const layers = [
    {
      icon: Eye,
      title: isEs ? '1. Percepción Multimodal' : '1. Multimodal Perception',
      color: 'cyan',
      desc: isEs 
        ? 'Captura y procesamiento visual en tiempo real. YOLOv8 detecta objetos, MediaPipe analiza pose humana y un estimador de profundidad híbrido calcula distancias en metros reales.'
        : 'Real-time visual capture and processing. YOLOv8 detects objects, MediaPipe analyzes human pose, and a hybrid depth estimator calculates distances in real meters.',
      tech: ['YOLOv8n', 'MediaPipe Pose', 'ByteTrack', 'OpenCV']
    },
    {
      icon: Brain,
      title: isEs ? '2. Inteligencia Predictiva' : '2. Predictive Intelligence',
      color: 'purple',
      desc: isEs 
        ? 'El "cerebro" que anticipa el futuro. Un Filtro de Kalman 2D suaviza el ruido y predice trayectorias. El motor de Campos Potenciales (APF) calcula vectores de evasión fluida.'
        : 'The "brain" that anticipates the future. A 2D Kalman Filter smooths noise and predicts trajectories. The Artificial Potential Fields (APF) engine calculates fluid evasion vectors.',
      tech: ['Kalman Filter 2D', 'Artificial Potential Fields', 'TTC Calculation']
    },
    {
      icon: Shield,
      title: isEs ? '3. Seguridad y Control' : '3. Safety & Control',
      color: 'emerald',
      desc: isEs 
        ? 'Toma de decisiones con histéresis para evitar oscilaciones. Gestión de estados (IDLE, MOVING, E-STOP) con bloqueo manual obligatorio post-emergencia (ISO 13850).'
        : 'Decision-making with hysteresis to prevent oscillations. State management (IDLE, MOVING, E-STOP) with mandatory manual lock post-emergency (ISO 13850).',
      tech: ['RiskAnalyzer', 'Hysteresis Logic', 'Finite State Machine']
    },
    {
      icon: Radio,
      title: isEs ? '4. Conectividad WES' : '4. WES Connectivity',
      color: 'blue',
      desc: isEs 
        ? 'Puente bidireccional vía MQTT. El robot publica su estado (telemetría, riesgo, FPS) y escucha comandos de alto nivel (RESUME, RETURN_HOME) de cualquier WMS/WES.'
        : 'Bidirectional bridge via MQTT. The robot publishes its state (telemetry, risk, FPS) and listens to high-level commands (RESUME, RETURN_HOME) from any WMS/WES.',
      tech: ['MQTT (Paho)', 'VDA5050-inspired', 'JSON Payloads']
    }
  ];

  const pipelineSteps = [
    { step: '01', title: isEs ? 'Captura' : 'Capture', desc: isEs ? 'Frame de cámara RGB (30 FPS)' : 'RGB camera frame (30 FPS)', icon: Eye },
    { step: '02', title: isEs ? 'Detección' : 'Detection', desc: isEs ? 'YOLOv8 + MediaPipe (70-100ms)' : 'YOLOv8 + MediaPipe (70-100ms)', icon: Cpu },
    { step: '03', title: isEs ? 'Predicción' : 'Prediction', desc: isEs ? 'Kalman + Cálculo de TTC' : 'Kalman + TTC Calculation', icon: Brain },
    { step: '04', title: isEs ? 'Planificación' : 'Planning', desc: isEs ? 'Campos Potenciales + Vórtice' : 'Potential Fields + Vortex', icon: GitBranch },
    { step: '05', title: isEs ? 'Acción' : 'Action', desc: isEs ? 'Comando a HAL (go, stop, turn)' : 'Command to HAL (go, stop, turn)', icon: Zap }
  ];

  const technicalDecisions = [
    {
      icon: GitBranch,
      title: isEs ? 'Arquitectura Concurrente' : 'Concurrent Architecture',
      desc: isEs 
        ? 'El pipeline de visión (alta carga de CPU) y el control de hardware (baja latencia) corren en hilos separados. Se comunican mediante `queue.Queue` thread-safe, garantizando que la visión nunca se congele esperando al hardware.'
        : 'The vision pipeline (high CPU load) and hardware control (low latency) run in separate threads. They communicate via thread-safe `queue.Queue`, ensuring vision never freezes waiting for hardware.',
      impact: isEs ? 'Latencia total <150ms' : 'Total latency <150ms'
    },
    {
      icon: Box,
      title: isEs ? 'Hardware Abstraction Layer (HAL)' : 'Hardware Abstraction Layer (HAL)',
      desc: isEs 
        ? 'Interfaz unificada (`go`, `stop`, `turn_left`). Permite desarrollar y probar toda la IA en una laptop con `RobotMock` (simula latencia serial) y desplegar en Raspberry Pi/Jetson sin cambiar una línea de lógica.'
        : 'Unified interface (`go`, `stop`, `turn_left`). Allows developing and testing all AI on a laptop with `RobotMock` (simulates serial latency) and deploying to Raspberry Pi/Jetson without changing a line of logic.',
      impact: isEs ? 'Despliegue en horas, no semanas' : 'Deployment in hours, not weeks'
    },
    {
      icon: Terminal,
      title: isEs ? 'Telemetría Estructurada' : 'Structured Telemetry',
      desc: isEs 
        ? 'Cada ciclo de inferencia registra métricas (FPS, latencia por etapa, nivel de riesgo) en logs estructurados y las publica vía MQTT. Permite debugging post-incidente y monitoreo de salud del sistema.'
        : 'Every inference cycle logs metrics (FPS, per-stage latency, risk level) in structured logs and publishes them via MQTT. Enables post-incident debugging and system health monitoring.',
      impact: isEs ? 'Auditoría y mantenimiento predictivo' : 'Auditing and predictive maintenance'
    }
  ];

  const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
    purple: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
    emerald: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    blue: 'text-blue-400 border-blue-500/20 bg-blue-500/10'
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* ============ HERO ============ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6">
            <Layers className="w-3 h-3" />
            {isEs ? 'ARQUITECTURA DEL SISTEMA' : 'SYSTEM ARCHITECTURE'}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
            {isEs ? (
              <>
                Diseñada para la
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Robótica de Producción
                </span>
              </>
            ) : (
              <>
                Designed for
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Production Robotics
                </span>
              </>
            )}
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
            {isEs 
              ? 'ARVIS no es un script monolítico. Es una arquitectura híbrida concurrente que separa la percepción de alta carga computacional del control de hardware de baja latencia, unificados por un bus de eventos MQTT.'
              : 'ARVIS is not a monolithic script. It is a hybrid concurrent architecture that separates high-compute perception from low-latency hardware control, unified by an MQTT event bus.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/victorcamacaro253/arvis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]"
            >
              <Code2 className="w-4 h-4" />
              {isEs ? 'Ver Código en GitHub' : 'View Code on GitHub'}
            </a>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all"
            >
              {isEs ? 'Volver al Inicio' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </section>

      {/* ============ LAS 4 CAPAS ============ */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Las 4 Capas del Sistema' : 'The 4 System Layers'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isEs 
                ? 'Cada capa tiene una responsabilidad única, comunicándose mediante contratos estrictos para garantizar la seguridad y el rendimiento.'
                : 'Each layer has a unique responsibility, communicating via strict contracts to guarantee safety and performance.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              const colors = colorMap[layer.color];
              
              return (
                <div key={idx} className={`group relative p-8 rounded-3xl border bg-slate-900/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-slate-900/50 ${colors.split(' ')[1]} hover:shadow-lg`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${colors}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{layer.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {layer.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-mono text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PIPELINE DE DATOS ============ */}
      <section className="py-24 bg-slate-900/30 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono font-semibold mb-6">
              <Zap className="w-3 h-3" />
              {isEs ? 'FLUJO DE DATOS' : 'DATA FLOW'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Del Píxel a la Acción en <150ms' : 'From Pixel to Action in <150ms'}
            </h2>
          </div>

          <div className="relative">
            {/* Línea conectora (desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
              {pipelineSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 bg-slate-950 border-2 border-slate-700 rounded-2xl flex items-center justify-center mb-4 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)] transition-all duration-300">
                      <Icon className="w-7 h-7 text-slate-300 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="text-xs font-mono text-cyan-400 mb-1">{step.step}</div>
                    <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ DECISIONES TÉCNICAS ============ */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Decisiones de Ingeniería Clave' : 'Key Engineering Decisions'}
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              {isEs 
                ? 'Los retos que resolvimos para pasar de un prototipo académico a un sistema robusto.'
                : 'The challenges we solved to go from an academic prototype to a robust system.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {technicalDecisions.map((decision, idx) => {
              const Icon = decision.icon;
              return (
                <div key={idx} className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon className="w-16 h-16 text-emerald-400" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">{decision.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">{decision.desc}</p>
                    
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="text-sm font-semibold text-emerald-400">{decision.impact}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ROADMAP ============ 
      <section className="py-24 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Roadmap de Evolución' : 'Evolution Roadmap'}
            </h2>
            <p className="text-lg text-slate-400">
              {isEs ? 'El camino hacia la producción industrial a escala.' : 'The path to scaled industrial production.'}
            </p>
          </div>

          <div className="space-y-8">
            {[
              { 
                quarter: isEs ? 'Fase 1: Completado' : 'Phase 1: Completed', 
                status: 'done',
                items: isEs 
                  ? ['Dashboard de telemetría en vivo', 'Puente MQTT bidireccional', 'Detección de gestos y caídas'] 
                  : ['Live telemetry dashboard', 'Bidirectional MQTT bridge', 'Gesture and fall detection'] 
              },
              { 
                quarter: isEs ? 'Fase 2: Optimización Edge' : 'Phase 2: Edge Optimization', 
                status: 'current',
                items: isEs 
                  ? ['Exportación de YOLOv8 a TensorRT/ONNX', 'Pipeline GStreamer para cámaras CSI', 'Benchmarking en Jetson Nano/Orin'] 
                  : ['YOLOv8 export to TensorRT/ONNX', 'GStreamer pipeline for CSI cameras', 'Benchmarking on Jetson Nano/Orin'] 
              },
              { 
                quarter: isEs ? 'Fase 3: Hardware Real' : 'Phase 3: Real Hardware', 
                status: 'upcoming',
                items: isEs 
                  ? ['Integración con drivers de motores (L298N/TB6612)', 'Lectura de encoders para odometría', 'Pruebas en entorno físico controlado'] 
                  : ['Integration with motor drivers (L298N/TB6612)', 'Encoder reading for odometry', 'Testing in controlled physical environment'] 
              },
              { 
                quarter: isEs ? 'Fase 4: Ecosistema ROS 2' : 'Phase 4: ROS 2 Ecosystem', 
                status: 'upcoming',
                items: isEs 
                  ? ['Migración de nodos a rclcpp', 'Integración con Nav2 para planificación global', 'Coordinación de flotas multi-robot vía DDS'] 
                  : ['Node migration to rclcpp', 'Integration with Nav2 for global planning', 'Multi-robot fleet coordination via DDS'] 
              }
            ].map((phase, idx) => (
              <div key={idx} className="flex gap-6">
               * Línea de tiempo *
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                    phase.status === 'done' ? 'bg-emerald-500 border-emerald-500' :
                    phase.status === 'current' ? 'bg-cyan-500 border-cyan-500 animate-pulse' :
                    'bg-slate-800 border-slate-600'
                  }`}></div>
                  {idx < 3 && <div className="w-0.5 flex-1 bg-slate-800 mt-2"></div>}
                </div>
                
                * Contenido *
                <div className="pb-8 flex-1">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                    phase.status === 'done' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                    phase.status === 'current' ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' :
                    'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}>
                    {phase.quarter}
                  </div>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        {phase.status === 'done' ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        )}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* ============ CTA FINAL ============ */}
      {/*
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            {isEs ? '¿Quieres revisar el código?' : 'Want to review the code?'}
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            {isEs 
              ? 'Toda la arquitectura, desde el pipeline de visión hasta el puente MQTT, está disponible en GitHub con documentación detallada.'
              : 'The entire architecture, from the vision pipeline to the MQTT bridge, is available on GitHub with detailed documentation.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com/victorcamacaro253/arvis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]"
            >
              <Code2 className="w-5 h-5" />
              {isEs ? 'Explorar Repositorio' : 'Explore Repository'}
            </a>
            <Link 
              to="/industries" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all"
            >
              {isEs ? 'Ver Casos de Uso' : 'View Use Cases'}
            </Link>
          </div>
        </div>
      </section>
      */}

    </div>
  );
};

export default Architecture;