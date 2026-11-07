import { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import { 
  Activity, 
  Shield, 
  Zap, 
  AlertTriangle, 
  Play, 
  RotateCcw,
  Terminal,
  Wifi,
  FlaskConical,
  CheckCircle2
} from 'lucide-react';

const Dashboard = () => {
  const { language } = useContext(LanguageContext);
  const isEs = language === 'es';
  const [isRunning, setIsRunning] = useState(true);
  const [riskLevel, setRiskLevel] = useState<'SAFE' | 'DANGER' | 'EMERGENCY'>('SAFE');
  const [distance, setDistance] = useState(2.5);
  const [ttc, setTtc] = useState(3.2);
  const [evasionDirection, setEvasionDirection] = useState<'left' | 'right' | null>(null);
  const [logs, setLogs] = useState<string[]>([
    '[14:32:01] INFO: Sistema iniciado. Conectado al broker MQTT.',
    '[14:32:05] INFO: YOLOv8n cargado. Latencia media: 85ms',
    '[14:32:10] INFO: MediaPipe Pose iniciado. Tracking activo.',
  ]);

  const animationRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const cycleRef = useRef<'approaching' | 'evading' | 'emergency' | 'recovering' | 'resetting'>('approaching');
  
  // 🔑 Tipo de evasión: 'success' | 'partial_fail' | 'critical_fail'
  const evasionTypeRef = useRef<'success' | 'partial_fail' | 'critical_fail' | null>(null);

  // Umbrales de seguridad
  const DANGER_THRESHOLD = 1.5;
  const EMERGENCY_THRESHOLD = 0.5;

  // Simulación de movimiento y evasión
  useEffect(() => {
    if (!isRunning && cycleRef.current !== 'emergency') {
      if (animationRef.current) clearInterval(animationRef.current);
      return;
    }

    const interval = setInterval(() => {
      const currentCycle = cycleRef.current;
      
      if (currentCycle === 'approaching') {
        setDistance(prev => {
          const newDist = Math.max(0.3, prev - 0.15);
          const newTtc = Math.max(0, newDist / 1.5);
          setTtc(newTtc);
          
          // 🟡 UMBRAL DE PELIGRO: Inicia evasión
          if (newDist < DANGER_THRESHOLD && prev >= DANGER_THRESHOLD) {
            setRiskLevel('DANGER');
            const direction = Math.random() > 0.5 ? 'left' : 'right';
            setEvasionDirection(direction);
            cycleRef.current = 'evading';
            
            // 🔑 PROBABILIDADES DE EVASIÓN:
            // 60% éxito → SAFE directo
            // 25% fallo parcial → persona se detiene a 0.7m, luego se aleja
            // 15% fallo crítico → persona llega a <0.5m → EMERGENCY
            const rand = Math.random();
            if (rand < 0.60) {
              evasionTypeRef.current = 'success';
            } else if (rand < 0.85) {
              evasionTypeRef.current = 'partial_fail';
            } else {
              evasionTypeRef.current = 'critical_fail';
            }
            
            setLogs(prev => [
              `[${new Date().toLocaleTimeString()}] WARNING: Persona a ${newDist.toFixed(1)}m. Riesgo: DANGER.`,
              `[${new Date().toLocaleTimeString()}] ACTION: Evasión hacia la ${direction === 'left' ? 'izquierda' : 'derecha'}`,
              ...prev
            ].slice(0, 10));
          }
          
          return newDist;
        });
      } 
      else if (currentCycle === 'evading') {
        setDistance(prev => {
          const evasionType = evasionTypeRef.current;
          
          // ✅ EVASIÓN EXITOSA (60%): Persona se aleja rápidamente
          if (evasionType === 'success') {
            const newDist = prev + 0.25;
            setTtc(newDist / 1.5);
            
            if (newDist > 2.0) {
              setRiskLevel('SAFE');
              setEvasionDirection(null);
              cycleRef.current = 'resetting';
              evasionTypeRef.current = null;
              
              setLogs(prev => [
                `[${new Date().toLocaleTimeString()}] ✅ EVASIÓN EXITOSA: Persona evadida. Distancia: ${newDist.toFixed(1)}m. Riesgo: SAFE`,
                ...prev
              ].slice(0, 10));
            }
            
            return newDist;
          }
          
          // ⚠️ EVASIÓN FALLIDA PARCIAL (25%): Persona se detiene a 0.7m, luego se aleja
          else if (evasionType === 'partial_fail') {
            // Persona sigue acercándose pero se detiene antes de 0.5m
            const newDist = Math.max(0.7, prev - 0.08);
            setTtc(newDist / 1.5);
            
            // Si llegó a 0.7m, empieza a alejarse
            if (newDist <= 0.7 && prev > 0.7) {
              setLogs(prev => [
                `[${new Date().toLocaleTimeString()}] ⚠️ EVASIÓN PARCIAL: Persona se detuvo a ${newDist.toFixed(2)}m`,
                `[${new Date().toLocaleTimeString()}] ⏸️ Robot detenido. Esperando que persona retroceda...`,
                ...prev
              ].slice(0, 10));
            }
            
            // Después de detenerse, empieza a alejarse
            if (prev <= 0.7) {
              const retreatDist = prev + 0.15;
              setTtc(retreatDist / 1.5);
              
              if (retreatDist > 2.0) {
                setRiskLevel('SAFE');
                setEvasionDirection(null);
                cycleRef.current = 'resetting';
                evasionTypeRef.current = null;
                
                setLogs(prev => [
                  `[${new Date().toLocaleTimeString()}] ✅ Persona retrocedió. Distancia: ${retreatDist.toFixed(1)}m. Riesgo: SAFE`,
                  ...prev
                ].slice(0, 10));
              }
              
              return retreatDist;
            }
            
            return newDist;
          }
          
          // 🚨 EVASIÓN FALLIDA CRÍTICA (15%): Persona llega a <0.5m → EMERGENCY
          else if (evasionType === 'critical_fail') {
            const newDist = prev - 0.12;
            setTtc(Math.max(0, newDist / 1.5));
            
            if (newDist < EMERGENCY_THRESHOLD) {
              setRiskLevel('EMERGENCY');
              setIsRunning(false);
              setEvasionDirection(null);
              cycleRef.current = 'emergency';
              evasionTypeRef.current = null;
              
              setLogs(prev => [
                `[${new Date().toLocaleTimeString()}] 🚨 EVASIÓN FALLIDA: Distancia ${newDist.toFixed(2)}m < ${EMERGENCY_THRESHOLD}m`,
                `[${new Date().toLocaleTimeString()}] 🚨 EMERGENCY_STOP activado. Robot detenido.`,
                ...prev
              ].slice(0, 10));
            }
            
            return newDist;
          }
          
          return prev;
        });
      } 
      else if (currentCycle === 'emergency') {
        // 🔑 En emergencia, la persona se aleja lentamente
        setDistance(prev => {
          const newDist = prev + 0.08;
          setTtc(Math.max(0, newDist / 1.5));
          
          // Recuperación automática con histéresis
          if (newDist > EMERGENCY_THRESHOLD + 0.3) { // 0.8m
            setRiskLevel('SAFE');
            setIsRunning(true);
            setEvasionDirection(null);
            cycleRef.current = 'recovering';
            
            setLogs(prev => [
              `[${new Date().toLocaleTimeString()}] ✅ OBSTÁCULO ALEJADO: Distancia ${newDist.toFixed(2)}m > 0.8m`,
              `[${new Date().toLocaleTimeString()}] ▶️ Sistema reanudado automáticamente.`,
              ...prev
            ].slice(0, 10));
          }
          
          return Math.min(2.5, newDist);
        });
      }
      else if (currentCycle === 'recovering') {
        setDistance(prev => {
          const newDist = prev + 0.1;
          if (newDist >= 2.0) {
            cycleRef.current = 'resetting';
          }
          return Math.min(2.5, newDist);
        });
      }
      else if (currentCycle === 'resetting') {
        setDistance(prev => {
          const newDist = prev + 0.1;
          if (newDist >= 2.5) {
            cycleRef.current = 'approaching';
          }
          return Math.min(2.5, newDist);
        });
      }
    }, 300);

    animationRef.current = interval;
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleCommand = (cmd: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [`[${timestamp}] COMMAND: ${cmd}`, ...prev]);
    
    if (cmd === 'EMERGENCY_STOP') {
      setIsRunning(false);
      setRiskLevel('EMERGENCY');
      cycleRef.current = 'emergency';
      setLogs(prev => [`[${timestamp}] 🚨 EMERGENCY_STOP manual activado por operador.`, ...prev]);
    } else if (cmd === 'RESET') {
      setIsRunning(true);
      setRiskLevel('SAFE');
      setDistance(2.5);
      setTtc(3.2);
      setEvasionDirection(null);
      cycleRef.current = 'approaching';
      evasionTypeRef.current = null;
      setLogs(prev => [`[${timestamp}] ✅ Sistema reiniciado manualmente.`, ...prev]);
    } else if (cmd === 'RESUME') {
      setIsRunning(true);
      setRiskLevel('SAFE');
      cycleRef.current = 'approaching';
      setDistance(2.5);
    } else if (cmd === 'RETURN_HOME') {
      setLogs(prev => [`[${timestamp}] ACTION: Navegando a coordenadas base (0,0)`, ...prev]);
    }
  };

  const personPosition = Math.max(0, Math.min(100, ((2.5 - distance) / 2.2) * 100));
  const evasionOffset = evasionDirection === 'left' ? -60 : evasionDirection === 'right' ? 60 : 0;

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Badge de Simulación */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
            <FlaskConical className="w-4 h-4 text-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
              {isEs ? '⚠ Modo Simulación · Datos generados en tiempo real' : '⚠ Simulation Mode · Real-time generated data'}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white">{isEs ? 'Panel de Control en Vivo' : 'Live Control Panel'}</h1>
            <p className="text-slate-400 mt-1">{isEs ? 'Monitoreo y control del nodo ARVIS en tiempo real.' : 'Real-time monitoring and control of the ARVIS node.'}</p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
            riskLevel === 'EMERGENCY' 
              ? 'bg-red-500/10 border-red-500/30' 
              : 'bg-emerald-500/10 border-emerald-500/20'
          }`}>
            <div className={`w-2 h-2 rounded-full ${
              riskLevel === 'EMERGENCY' ? 'bg-red-400 animate-pulse' :
              isRunning ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
            }`}></div>
            <span className={`text-sm font-mono font-semibold ${
              riskLevel === 'EMERGENCY' ? 'text-red-400' : 'text-emerald-400'
            }`}>
              {riskLevel === 'EMERGENCY' 
                ? (isEs ? 'EMERGENCIA' : 'EMERGENCY')
                : isRunning 
                  ? (isEs ? 'SISTEMA ONLINE' : 'SYSTEM ONLINE') 
                  : (isEs ? 'DETENIDO' : 'STOPPED')
              }
            </span>
          </div>
        </div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-3 gap-6">
          
          {/* Columna Izquierda: Métricas */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <Zap className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase">{isEs ? 'FPS' : 'FPS'}</span>
                </div>
                <div className="text-3xl font-bold text-white">9.4</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase">{isEs ? 'Latencia' : 'Latency'}</span>
                </div>
                <div className="text-3xl font-bold text-cyan-400">85<span className="text-lg text-slate-500">ms</span></div>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <Wifi className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase">{isEs ? 'Distancia' : 'Distance'}</span>
                </div>
                <div className={`text-3xl font-bold ${
                  riskLevel === 'EMERGENCY' ? 'text-red-400' :
                  riskLevel === 'DANGER' ? 'text-amber-400' : 'text-white'
                }`}>
                  {distance.toFixed(1)}<span className="text-lg text-slate-500">m</span>
                </div>
              </div>
              
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4">
                <div className="flex items-center gap-2 text-slate-400 mb-2">
                  <Activity className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase">TTC</span>
                </div>
                <div className={`text-3xl font-bold ${
                  ttc < 0.5 ? 'text-red-400' : ttc < 1.5 ? 'text-amber-400' : 'text-amber-400'
                }`}>
                  {ttc.toFixed(1)}<span className="text-lg text-slate-500">s</span>
                </div>
              </div>

              {/* Nivel de Riesgo */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-4 col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Shield className="w-4 h-4" />
                    <span className="text-xs font-mono uppercase">{isEs ? 'Nivel de Riesgo' : 'Risk Level'}</span>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    riskLevel === 'SAFE' ? 'bg-emerald-500/20 text-emerald-400' : 
                    riskLevel === 'DANGER' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-red-500/20 text-red-400 animate-pulse'
                  }`}>{riskLevel}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      riskLevel === 'SAFE' ? 'bg-emerald-500 w-1/4' : 
                      riskLevel === 'DANGER' ? 'bg-amber-500 w-3/4' :
                      'bg-red-500 w-full'
                    }`}
                  ></div>
                </div>
                
                <div className="flex justify-between mt-2 text-[10px] font-mono text-slate-500">
                  <span>0m</span>
                  <span className="text-red-400">0.5m (E-STOP)</span>
                  <span className="text-amber-400">1.5m (DANGER)</span>
                  <span>2.5m</span>
                </div>
              </div>
            </div>

            {/* Panel de Control */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-cyan-400" />
                {isEs ? 'Comandos Remotos' : 'Remote Commands'}
              </h3>
              <div className="space-y-3">
                <button 
                  onClick={() => handleCommand('EMERGENCY_STOP')}
                  disabled={riskLevel === 'EMERGENCY'}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <AlertTriangle className="w-5 h-5" />
                  {isEs ? 'EMERGENCY STOP' : 'EMERGENCY STOP'}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleCommand('RESET')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {isEs ? 'Reset Manual' : 'Manual Reset'}
                  </button>
                  <button 
                    onClick={() => handleCommand('RETURN_HOME')}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-400 rounded-xl font-semibold transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    {isEs ? 'Volver a Base' : 'Return Home'}
                  </button>
                </div>
              </div>
              
              {riskLevel === 'EMERGENCY' && (
                <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-amber-300">
                      {isEs 
                        ? 'El sistema se reanudará automáticamente cuando el obstáculo se aleje (>0.8m).'
                        : 'The system will automatically resume when the obstacle moves away (>0.8m).'}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Columna Derecha: Feed Visual */}
          <div className="lg:col-span-2 space-y-6">
            <div className="relative bg-black border border-slate-800 rounded-2xl overflow-hidden aspect-video flex items-center justify-center group">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
              
              {/* Overlay de Emergencia */}
              {riskLevel === 'EMERGENCY' && (
                <>
                  <div className="absolute inset-0 bg-red-500/20 animate-pulse pointer-events-none z-20"></div>
                  <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                    <div className="bg-red-500/90 backdrop-blur-sm border-2 border-red-400 rounded-2xl px-8 py-4 shadow-2xl shadow-red-500/50">
                      <div className="flex items-center gap-3">
                        <AlertTriangle className="w-10 h-10 text-white animate-pulse" />
                        <div>
                          <div className="text-2xl font-bold text-white tracking-wider">EMERGENCY STOP</div>
                          <div className="text-xs text-red-100 font-mono">
                            {isEs ? 'Esperando que el obstáculo se aleje...' : 'Waiting for obstacle to move away...'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              
              {/* Línea de distancia */}
              <div 
                className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-cyan-500/50 to-transparent transition-all duration-300"
                style={{ 
                  width: `${personPosition}%`,
                  transform: `translateX(-50%) translateX(${evasionOffset}px)`
                }}
              ></div>
              
              {/* Persona */}
              <div 
                className={`absolute border-2 p-4 rounded transition-all duration-300 ${
                  riskLevel === 'EMERGENCY' ? 'border-red-500 bg-red-500/10' :
                  riskLevel === 'DANGER' ? 'border-amber-500 bg-amber-500/10' :
                  'border-emerald-500 bg-emerald-500/10'
                }`}
                style={{ 
                  transform: `translateY(${50 - personPosition}%) translateX(${evasionOffset}px)`,
                  opacity: 1
                }}
              >
                <span className={`absolute -top-6 left-0 text-slate-950 text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1 ${
                  riskLevel === 'EMERGENCY' ? 'bg-red-500' :
                  riskLevel === 'DANGER' ? 'bg-amber-500' : 'bg-emerald-500'
                }`}>
                  PERSON 98%
                </span>
                <div className="w-32 h-48 bg-slate-800/50 rounded flex items-center justify-center text-4xl">🚶</div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  <div className="flex gap-6">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                  </div>
                </div>
              </div>

              {/* Indicador de evasión */}
              {evasionDirection && riskLevel !== 'EMERGENCY' && (
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-amber-500/20 backdrop-blur border border-amber-500/30 rounded-lg animate-pulse z-10">
                  <span className="text-xs font-mono font-bold text-amber-400">
                    {isEs ? `EVASIÓN: ${evasionDirection === 'left' ? '← IZQUIERDA' : 'DERECHA →'}` : `EVASION: ${evasionDirection === 'left' ? '← LEFT' : 'RIGHT →'}`}
                  </span>
                </div>
              )}

              {/* LIVE badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur rounded-full border border-white/10 z-10">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-white">LIVE FEED • 30 FPS</span>
              </div>
              
              {/* Distancia */}
              <div className="absolute bottom-4 left-4 px-3 py-2 bg-black/60 backdrop-blur rounded-lg border border-white/10 z-10">
                <div className="text-xs font-mono text-slate-400 mb-1">{isEs ? 'DISTANCIA' : 'DISTANCE'}</div>
                <div className={`text-lg font-bold ${
                  riskLevel === 'EMERGENCY' ? 'text-red-400' :
                  riskLevel === 'DANGER' ? 'text-amber-400' : 'text-white'
                }`}>{distance.toFixed(1)}m</div>
              </div>
              
              {/* TTC */}
              <div className="absolute bottom-4 right-4 px-3 py-2 bg-black/60 backdrop-blur rounded-lg border border-white/10 z-10">
                <div className="text-xs font-mono text-slate-400 mb-1">TTC</div>
                <div className={`text-lg font-bold ${
                  ttc < 0.5 ? 'text-red-400' : 'text-amber-400'
                }`}>{ttc.toFixed(1)}s</div>
              </div>
            </div>

            {/* Consola de Logs */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs h-48 overflow-y-auto">
              <div className="flex items-center gap-2 text-slate-500 mb-3 pb-2 border-b border-slate-800">
                <Terminal className="w-4 h-4" />
                <span>{isEs ? 'Registro de Eventos del Sistema' : 'System Event Log'}</span>
              </div>
              <div className="space-y-2">
                {logs.map((log, idx) => {
                  const isEmergency = log.includes('🚨') || log.includes('CRITICAL');
                  const isWarning = log.includes('WARNING');
                  const isCommand = log.includes('COMMAND');
                  const isAction = log.includes('ACTION');
                  const isReset = log.includes('✅') || log.includes('▶️');
                  const isWaiting = log.includes('⏸️') || log.includes('⚠️');
                  
                  return (
                    <div key={idx} className="text-slate-300">
                      <span className="text-cyan-500">{log.split(']')[0]}]</span>
                      <span className={
                        isEmergency ? 'text-red-400 font-bold' :
                        isWarning ? 'text-amber-400' : 
                        isCommand ? 'text-purple-400' :
                        isAction ? 'text-emerald-400' :
                        isReset ? 'text-cyan-400' :
                        isWaiting ? 'text-amber-300' :
                        'text-slate-300'
                      }>
                        {log.split(']')[1]}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Volver */}
        <div className="mt-8">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">
            ← {isEs ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;