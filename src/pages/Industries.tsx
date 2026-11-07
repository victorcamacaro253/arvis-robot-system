import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/languageContext';
import {
  ArrowRight,
  Package,
  Heart,
  ShoppingCart,
  Truck,
  Factory,
  Home,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  DollarSign,
  Clock,
  Eye,
  Sparkles,
  Target,
  AlertTriangle,
  ExternalLink,
  PlayCircle
} from 'lucide-react';

const Industries = () => {
  const { language } = useContext(LanguageContext);
  const isEs = language === 'es';
  const [activeIndustry, setActiveIndustry] = useState(0);

  // ============ DATOS DE INDUSTRIAS ============
  const industries = [
    {
      id: 0,
      icon: Package,
      name: isEs ? 'Logística y Almacenes' : 'Logistics & Warehouses',
      tagline: isEs ? 'AMR y fulfillment centers' : 'AMR and fulfillment centers',
      color: 'cyan',
      hero: isEs
        ? 'El almacén del futuro, sin LiDAR de $5,000'
        : 'The warehouse of the future, without $5,000 LiDAR',
      description: isEs
        ? 'Los robots AMR tradicionales se detienen constantemente ante trabajadores que cruzan pasillos, reduciendo el throughput en 30-40%. ARVIS resuelve esto con evasión fluida y comprensión contextual.'
        : 'Traditional AMR robots constantly stop when workers cross aisles, reducing throughput by 30-40%. ARVIS solves this with fluid evasion and contextual understanding.',
      problems: isEs
        ? [
            'Trabajadores cruzan pasillos sin aviso',
            'Robots se detienen innecesariamente',
            'Cuellos de botella en horas pico',
            'Baterías que mueren a mitad del turno'
          ]
        : [
            'Workers cross aisles without warning',
            'Robots stop unnecessarily',
            'Bottlenecks during peak hours',
            'Batteries dying mid-shift'
          ],
      solutions: isEs
        ? [
            'Kalman + TTC predice trayectorias de trabajadores',
            'Campos Potenciales para esquivar sin detenerse',
            'Gestos: el robot cede el paso si levantan la mano',
            'Carga de oportunidad durante micro-pausas'
          ]
        : [
            'Kalman + TTC predicts worker trajectories',
            'Potential Fields to evade without stopping',
            'Gestures: robot yields if they raise a hand',
            'Opportunity charging during micro-pauses'
          ],
      scenario: isEs
        ? 'Imagina un almacén de e-commerce durante Black Friday. Un trabajador cruza el pasillo cargando cajas. En lugar de frenar en seco (perdiendo 15 segundos), el robot de ARVIS predice la trayectoria, reduce velocidad suavemente y lo esquiva fluidamente mientras el trabajador pasa. Resultado: cero accidentes, cero paradas, throughput constante.'
        : 'Imagine an e-commerce warehouse during Black Friday. A worker crosses the aisle carrying boxes. Instead of slamming on the brakes (losing 15 seconds), the ARVIS robot predicts the trajectory, smoothly reduces speed, and fluidly evades as the worker passes. Result: zero accidents, zero stops, constant throughput.',
      realExamples: isEs
        ? [
            { company: 'Amazon Robotics', desc: '750,000+ robots en almacenes, pero a $1B+ de inversión', icon: '📦' },
            { company: 'Locus Robotics', desc: '20,000+ robots AMR a $50K c/u', icon: '🤖' },
            { company: 'Ocado', desc: 'Almacenes 100% automatizados en UK', icon: '🛒' }
          ]
        : [
            { company: 'Amazon Robotics', desc: '750,000+ robots in warehouses, but at $1B+ investment', icon: '📦' },
            { company: 'Locus Robotics', desc: '20,000+ AMR robots at $50K each', icon: '🤖' },
            { company: 'Ocado', desc: '100% automated warehouses in the UK', icon: '🛒' }
          ],
      metrics: [
        { value: '+25%', label: isEs ? 'Throughput' : 'Throughput', icon: TrendingUp },
        { value: '6', label: isEs ? 'Meses ROI' : 'Months ROI', icon: Clock },
        { value: '0', label: isEs ? 'Accidentes' : 'Accidents', icon: Shield },
        { value: '500+', label: isEs ? 'Horas prueba' : 'Test hours', icon: Target }
      ],
      useCases: isEs
        ? [
            { title: 'Picking autónomo', desc: 'El robot recoge 5 paquetes por viaje optimizando ruta con TSP' },
            { title: 'Reabastecimiento', desc: 'Transporte de pallets entre zonas de almacenamiento' },
            { title: 'Inventario cíclico', desc: 'Escaneo autónomo de estanterías 24/7' }
          ]
        : [
            { title: 'Autonomous picking', desc: 'Robot picks 5 packages per trip optimizing route with TSP' },
            { title: 'Restocking', desc: 'Pallet transport between storage zones' },
            { title: 'Cycle counting', desc: 'Autonomous shelf scanning 24/7' }
          ]
    },
    {
      id: 1,
      icon: Heart,
      name: isEs ? 'Salud y Hospitales' : 'Healthcare & Hospitals',
      tagline: isEs ? 'Robots de asistencia médica' : 'Medical assistance robots',
      color: 'emerald',
      hero: isEs
        ? 'Seguridad crítica para pacientes vulnerables'
        : 'Critical safety for vulnerable patients',
      description: isEs
        ? 'En hospitales, los robots deben coexistir con pacientes vulnerables, personal médico y animales de terapia. ARVIS detecta caídas en menos de 200ms y reconoce gestos de auxilio.'
        : 'In hospitals, robots must coexist with vulnerable patients, medical staff, and therapy animals. ARVIS detects falls in under 200ms and recognizes distress gestures.',
      problems: isEs
        ? [
            'Pacientes con movilidad reducida',
            'Emergencias médicas no detectadas',
            'Perros de terapia impredecibles',
            'Pasillos estrechos con camillas'
          ]
        : [
            'Patients with reduced mobility',
            'Undetected medical emergencies',
            'Unpredictable therapy dogs',
            'Narrow aisles with stretchers'
          ],
      solutions: isEs
        ? [
            'Detección de caídas con MediaPipe Pose',
            'Gestos HANDS_ON_FACE activan emergencias',
            'Umbrales conservadores para mascotas',
            'Navegación fluida en espacios reducidos'
          ]
        : [
            'Fall detection with MediaPipe Pose',
            'HANDS_ON_FACE gestures trigger emergencies',
            'Conservative thresholds for pets',
            'Fluid navigation in tight spaces'
          ],
      scenario: isEs
        ? 'Un paciente anciano se levanta de la cama en la habitación 412 y camina hacia el baño. Resbala y cae. El robot de ARVIS, que pasaba por el pasillo, detecta la caída en 180ms, activa EMERGENCY_STOP y envía una alerta al puesto de enfermería con la ubicación exacta. Tiempo de respuesta: menos de 5 segundos vs. los 5-10 minutos de las cámaras de seguridad tradicionales.'
        : 'An elderly patient gets out of bed in room 412 and walks to the bathroom. They slip and fall. The ARVIS robot, passing through the hallway, detects the fall in 180ms, triggers EMERGENCY_STOP, and sends an alert to the nursing station with the exact location. Response time: under 5 seconds vs. 5-10 minutes for traditional security cameras.',
      realExamples: isEs
        ? [
            { company: 'Moxi (Diligent)', desc: 'Robot de asistencia en hospitales, $50K c/u', icon: '🏥' },
            { company: 'Aethon Tug', desc: 'Logística hospitalaria en 200+ hospitales', icon: '🚑' },
            { company: 'Temi', desc: 'Robot de telepresencia y asistencia', icon: '👨‍⚕️' }
          ]
        : [
            { company: 'Moxi (Diligent)', desc: 'Hospital assistance robot, $50K each', icon: '🏥' },
            { company: 'Aethon Tug', desc: 'Hospital logistics in 200+ hospitals', icon: '🚑' },
            { company: 'Temi', desc: 'Telepresence and assistance robot', icon: '👨‍⚕️' }
          ],
      metrics: [
        { value: '<200ms', label: isEs ? 'Detección caída' : 'Fall detection', icon: Zap },
        { value: '100%', label: isEs ? 'Detección' : 'Detection', icon: CheckCircle2 },
        { value: '0', label: isEs ? 'Falsos negativos' : 'False negatives', icon: Shield },
        { value: '24/7', label: isEs ? 'Monitoreo' : 'Monitoring', icon: Eye }
      ],
      useCases: isEs
        ? [
            { title: 'Entrega de medicamentos', desc: 'Transporte seguro de fármacos entre plantas' },
            { title: 'Detección de caídas', desc: 'Monitoreo pasivo de pacientes en pasillos' },
            { title: 'Desinfección UV', desc: 'Recorridos autónomos de sanitización nocturna' }
          ]
        : [
            { title: 'Medication delivery', desc: 'Safe drug transport between floors' },
            { title: 'Fall detection', desc: 'Passive patient monitoring in hallways' },
            { title: 'UV disinfection', desc: 'Autonomous nighttime sanitization rounds' }
          ]
    },
    {
      id: 2,
      icon: ShoppingCart,
      name: isEs ? 'Retail y Tiendas' : 'Retail & Stores',
      tagline: isEs ? 'Navegación en espacios no estructurados' : 'Unstructured space navigation',
      color: 'purple',
      hero: isEs
        ? 'Navegación entre clientes, carros y mascotas'
        : 'Navigation among customers, carts, and pets',
      description: isEs
        ? 'Las tiendas son entornos caóticos: carros de compra, niños corriendo, mascotas en pet shops. ARVIS usa segmentación y riesgo multiclase para navegar sin marcadores en el suelo.'
        : 'Stores are chaotic environments: shopping carts, running children, pets in pet shops. ARVIS uses segmentation and multi-class risk to navigate without floor markers.',
      problems: isEs
        ? [
            'Carros de compra en pasillos',
            'Niños corriendo impredeciblemente',
            'Mascotas en pet shops',
            'Espacios sin infraestructura fija'
          ]
        : [
            'Shopping carts in aisles',
            'Unpredictably running children',
            'Pets in pet shops',
            'Spaces without fixed infrastructure'
          ],
      solutions: isEs
        ? [
            'Segmentación de obstáculos irregulares',
            'Riesgo multiclase (humano/mascota/objeto)',
            'Profundidad monocular para pasillos estrechos',
            'Evasión fluida sin movimientos bruscos'
          ]
        : [
            'Irregular obstacle segmentation',
            'Multi-class risk (human/pet/object)',
            'Monocular depth for narrow aisles',
            'Fluid evasion without jerky movements'
          ],
      scenario: isEs
        ? 'En un supermercado un sábado por la tarde, un niño de 5 años corre entre los pasillos persiguiendo un globo. Un carro de compra está mal estacionado bloqueando parcialmente el camino. El robot de ARVIS detecta al niño (prioridad máxima), frena suavemente, espera a que pase, y luego esquiva el carro con una maniobra fluida. Todo sin asustar al niño ni bloquear el pasillo.'
        : 'In a supermarket on a Saturday afternoon, a 5-year-old runs between aisles chasing a balloon. A shopping cart is poorly parked partially blocking the path. The ARVIS robot detects the child (maximum priority), brakes smoothly, waits for them to pass, then fluidly evades the cart. All without scaring the child or blocking the aisle.',
      realExamples: isEs
        ? [
            { company: 'Walmart', desc: 'Pruebas con robots de inventario, $20K c/u', icon: '🛒' },
            { company: 'Target', desc: 'Navegación con marcadores en el suelo', icon: '🎯' },
            { company: 'Simbe Robotics', desc: 'Robot Tally para inventario en retail', icon: '📊' }
          ]
        : [
            { company: 'Walmart', desc: 'Inventory robot trials, $20K each', icon: '🛒' },
            { company: 'Target', desc: 'Navigation with floor markers', icon: '🎯' },
            { company: 'Simbe Robotics', desc: 'Tally robot for retail inventory', icon: '📊' }
          ],
      metrics: [
        { value: '80%', label: isEs ? 'Menos costo' : 'Less cost', icon: DollarSign },
        { value: '0', label: isEs ? 'Marcadores' : 'Markers', icon: Target },
        { value: '360°', label: isEs ? 'Conciencia' : 'Awareness', icon: Eye },
        { value: '24/7', label: isEs ? 'Inventario' : 'Inventory', icon: Package }
      ],
      useCases: isEs
        ? [
            { title: 'Inventario autónomo', desc: 'Escaneo de estantes y detección de stock bajo' },
            { title: 'Asistente de tienda', desc: 'Guía a clientes a productos específicos' },
            { title: 'Limpieza autónoma', desc: 'Recorridos de limpieza en horarios de baja afluencia' }
          ]
        : [
            { title: 'Autonomous inventory', desc: 'Shelf scanning and low stock detection' },
            { title: 'Store assistant', desc: 'Guides customers to specific products' },
            { title: 'Autonomous cleaning', desc: 'Cleaning rounds during low-traffic hours' }
          ]
    },
    {
      id: 3,
      icon: Truck,
      name: isEs ? 'Last-Mile Delivery' : 'Last-Mile Delivery',
      tagline: isEs ? 'Robots de reparto en aceras' : 'Sidewalk delivery robots',
      color: 'amber',
      hero: isEs
        ? 'Reparto autónomo "educado" en aceras'
        : '"Polite" autonomous delivery on sidewalks',
      description: isEs
        ? 'Los robots de reparto operan en el entorno más caótico: aceras con peatones, bicicletas y mascotas. ARVIS entiende gestos humanos y aplica márgenes de seguridad extra.'
        : 'Delivery robots operate in the most chaotic environment: sidewalks with pedestrians, bicycles, and pets. ARVIS understands human gestures and applies extra safety margins.',
      problems: isEs
        ? [
            'Peatones impredecibles en aceras',
            'Bicicletas y patinetes eléctricos',
            'Mascotas sueltas',
            'Obstáculos estáticos (postes, basureros)'
          ]
        : [
            'Unpredictable pedestrians on sidewalks',
            'Bicycles and electric scooters',
            'Loose pets',
            'Static obstacles (poles, trash cans)'
          ],
      solutions: isEs
        ? [
            'Campos Potenciales para esquivar fluido',
            'MediaPipe detecta STOP_HAND y POINTING',
            'Umbrales conservadores para mascotas',
            'Navegación "educada" que genera confianza'
          ]
        : [
            'Potential Fields for fluid evasion',
            'MediaPipe detects STOP_HAND and POINTING',
            'Conservative thresholds for pets',
            '"Polite" navigation that builds trust'
          ],
      scenario: isEs
        ? 'Un robot de ARVIS lleva una pizza caliente a un apartamento. En la acera, un peatón levanta la mano (gesto STOP_HAND) pidiendo que espere porque está cruzando con su perro. El robot reconoce el gesto, se detiene suavemente a 1.5m de distancia, espera 3 segundos, y reanuda la marcha cuando el peatón y el perro han pasado. El cliente recibe su pizza caliente, el peatón se siente seguro.'
        : 'An ARVIS robot delivers a hot pizza to an apartment. On the sidewalk, a pedestrian raises their hand (STOP_HAND gesture) asking it to wait as they cross with their dog. The robot recognizes the gesture, smoothly stops 1.5m away, waits 3 seconds, and resumes when the pedestrian and dog have passed. The customer gets their hot pizza, the pedestrian feels safe.',
      realExamples: isEs
        ? [
            { company: 'DoorDash', desc: 'Alianza con Serve Robotics para reparto', icon: '🍕' },
            { company: 'Starship', desc: '6 millones+ de entregas autónomas', icon: '📦' },
            { company: 'Nuro', desc: 'Vehículos autónomos de reparto, $2B valuation', icon: '🚗' }
          ]
        : [
            { company: 'DoorDash', desc: 'Partnership with Serve Robotics for delivery', icon: '🍕' },
            { company: 'Starship', desc: '6 million+ autonomous deliveries', icon: '📦' },
            { company: 'Nuro', desc: 'Autonomous delivery vehicles, $2B valuation', icon: '🚗' }
          ],
      metrics: [
        { value: '10+', label: isEs ? 'Gestos' : 'Gestures', icon: Eye },
        { value: '95%', label: isEs ? 'Aceptación' : 'Acceptance', icon: Heart },
        { value: '-30%', label: isEs ? 'Siniestros' : 'Incidents', icon: Shield },
        { value: '+20%', label: isEs ? 'Entregas/h' : 'Deliveries/h', icon: TrendingUp }
      ],
      useCases: isEs
        ? [
            { title: 'Reparto de comida', desc: 'Entregas de restaurantes en radio de 3km' },
            { title: 'Paquetería express', desc: 'Entrega de paquetes pequeños same-day' },
            { title: 'Farmacia 24h', desc: 'Entrega de medicamentos urgentes' }
          ]
        : [
            { title: 'Food delivery', desc: 'Restaurant deliveries within 3km radius' },
            { title: 'Express parcels', desc: 'Same-day small package delivery' },
            { title: '24h pharmacy', desc: 'Urgent medication delivery' }
          ]
    },
    {
      id: 4,
      icon: Factory,
      name: isEs ? 'Manufactura' : 'Manufacturing',
      tagline: isEs ? 'Transporte en líneas de producción' : 'Production line transport',
      color: 'blue',
      hero: isEs
        ? 'Sincronización just-in-time con líneas de producción'
        : 'Just-in-time synchronization with production lines',
      description: isEs
        ? 'En fábricas, los robots transportan materiales entre estaciones con montacargas, trabajadores y obstáculos dinámicos. ARVIS se integra con MES/ERP vía MQTT.'
        : 'In factories, robots transport materials between stations with forklifts, workers, and dynamic obstacles. ARVIS integrates with MES/ERP via MQTT.',
      problems: isEs
        ? [
            'Montacargas y trabajadores compartiendo espacio',
            'Líneas de producción en movimiento constante',
            'Materiales pesados y frágiles',
            'Auditorías de seguridad estrictas'
          ]
        : [
            'Forklifts and workers sharing space',
            'Constantly moving production lines',
            'Heavy and fragile materials',
            'Strict safety audits'
          ],
      solutions: isEs
        ? [
            'Telemetría MQTT para MES/ERP',
            'Detección de obstáculos dinámicos con Kalman',
            'Logs estructurados para auditoría',
            'E-STOP industrial ISO 13850'
          ]
        : [
            'MQTT telemetry for MES/ERP',
            'Dynamic obstacle detection with Kalman',
            'Structured logs for auditing',
            'Industrial E-STOP ISO 13850'
          ],
      scenario: isEs
        ? 'En una planta automotriz, el robot de ARVIS transporta componentes frágiles de la estación de pintura a la de ensamblaje. Un montacargas cruza su ruta inesperadamente. ARVIS predice la colisión 2 segundos antes, calcula una ruta alternativa fluida, y entrega los componentes 30 segundos antes de lo programado. El sistema MES registra cada movimiento para auditoría ISO.'
        : 'In an automotive plant, the ARVIS robot transports fragile components from the painting station to assembly. A forklift unexpectedly crosses its path. ARVIS predicts the collision 2 seconds early, calculates a fluid alternative route, and delivers the components 30 seconds ahead of schedule. The MES system logs every movement for ISO audit.',
      realExamples: isEs
        ? [
            { company: 'KUKA', desc: 'Robots industriales en automotriz, $50K+', icon: '🚗' },
            { company: 'MiR (Mobile Industrial)', desc: 'AMR para manufactura, $30K c/u', icon: '🏭' },
            { company: 'OTTO Motors', desc: 'Logística en plantas de Toyota, BMW', icon: '⚙️' }
          ]
        : [
            { company: 'KUKA', desc: 'Industrial robots in automotive, $50K+', icon: '🚗' },
            { company: 'MiR (Mobile Industrial)', desc: 'AMR for manufacturing, $30K each', icon: '🏭' },
            { company: 'OTTO Motors', desc: 'Logistics in Toyota, BMW plants', icon: '⚙️' }
          ],
      metrics: [
        { value: '0', label: isEs ? 'Tiempos muertos' : 'Downtime', icon: Clock },
        { value: '100%', label: isEs ? 'Trazabilidad' : 'Traceability', icon: CheckCircle2 },
        { value: 'ISO', label: isEs ? '13850' : '13850', icon: Shield },
        { value: '24/7', label: isEs ? 'Operación' : 'Operation', icon: Zap }
      ],
      useCases: isEs
        ? [
            { title: 'Transporte de componentes', desc: 'Movimiento entre estaciones de producción' },
            { title: 'Alimentación de líneas', desc: 'Suministro just-in-time de materiales' },
            { title: 'Producto terminado', desc: 'Traslado a zona de empaque y envío' }
          ]
        : [
            { title: 'Component transport', desc: 'Movement between production stations' },
            { title: 'Line feeding', desc: 'Just-in-time material supply' },
            { title: 'Finished goods', desc: 'Transfer to packing and shipping zone' }
          ]
    },
    {
      id: 5,
      icon: Home,
      name: isEs ? 'Doméstico y Consumo' : 'Domestic & Consumer',
      tagline: isEs ? 'Robots para el hogar' : 'Home robots',
      color: 'rose',
      hero: isEs
        ? 'Tecnología industrial al precio de una aspiradora'
        : 'Industrial technology at a vacuum cleaner price',
      description: isEs
        ? 'Los robots domésticos empujan objetos pequeños o no distinguen entre un mueble y una mascota dormida. ARVIS ofrece seguridad de nivel industrial en hardware de menos de $200.'
        : 'Domestic robots push small objects or can\'t distinguish between furniture and a sleeping pet. ARVIS offers industrial-grade safety on hardware under $200.',
      problems: isEs
        ? [
            'Empujan objetos pequeños (juguetes, cables)',
            'No distinguen mascotas de muebles',
            'Asustan a perros y gatos',
            'Navegación torpe en espacios reducidos'
          ]
        : [
            'Push small objects (toys, cables)',
            'Can\'t distinguish pets from furniture',
            'Scare dogs and cats',
            'Clumsy navigation in tight spaces'
          ],
      solutions: isEs
        ? [
            'Segmentación para objetos pequeños',
            'Detección específica de mascotas',
            'Margen de seguridad extra para animales',
            'HAL para Raspberry Pi (<$200 total)'
          ]
        : [
            'Segmentation for small objects',
            'Specific pet detection',
            'Extra safety margin for animals',
            'HAL for Raspberry Pi (<$200 total)'
          ],
      scenario: isEs
        ? 'Son las 3am. Tu gato está dormido en medio del pasillo. El robot de ARVIS lo detecta como "mascota" (no como mueble), aplica un margen de seguridad de 1 metro, y lo esquiva silenciosamente sin despertarlo. Mientras tanto, evita un cable de cargador en el suelo que otros robots habrían empujado. Tu gato sigue durmiendo, tu casa sigue limpia.'
        : 'It\'s 3am. Your cat is sleeping in the middle of the hallway. The ARVIS robot detects it as a "pet" (not furniture), applies a 1-meter safety margin, and silently evades without waking it. Meanwhile, it avoids a charger cable on the floor that other robots would have pushed. Your cat keeps sleeping, your house stays clean.',
      realExamples: isEs
        ? [
            { company: 'iRobot Roomba', desc: 'Líder en aspiradoras, $300-$1,000', icon: '🧹' },
            { company: 'Ecovacs Deebot', desc: 'Navegación láser, $500-$1,500', icon: '🏠' },
            { company: 'Samsung Jet Bot', desc: 'Con IA y避障, $800+', icon: '🤖' }
          ]
        : [
            { company: 'iRobot Roomba', desc: 'Vacuum leader, $300-$1,000', icon: '🧹' },
            { company: 'Ecovacs Deebot', desc: 'Laser navigation, $500-$1,500', icon: '🏠' },
            { company: 'Samsung Jet Bot', desc: 'With AI and obstacle avoidance, $800+', icon: '🤖' }
          ],
      metrics: [
        { value: '<$200', label: isEs ? 'Hardware' : 'Hardware', icon: DollarSign },
        { value: '100%', label: isEs ? 'Mascotas seguras' : 'Pets safe', icon: Heart },
        { value: '0', label: isEs ? 'Objetos empujados' : 'Objects pushed', icon: Shield },
        { value: 'RPi', label: isEs ? 'Plataforma' : 'Platform', icon: Factory }
      ],
      useCases: isEs
        ? [
            { title: 'Aspiradora inteligente', desc: 'Limpieza con conciencia de mascotas y objetos' },
            { title: 'Seguridad nocturna', desc: 'Patrullaje autónomo con detección de intrusos' },
            { title: 'Asistente para adultos mayores', desc: 'Compañía y detección de caídas en el hogar' }
          ]
        : [
            { title: 'Smart vacuum', desc: 'Cleaning with pet and object awareness' },
            { title: 'Night security', desc: 'Autonomous patrol with intruder detection' },
            { title: 'Elderly assistant', desc: 'Companionship and fall detection at home' }
          ]
    }
  ];

  // Colores por industria
  const colorMap: Record<string, {
    bg: string; border: string; text: string; glow: string;
    gradient: string; badge: string;
  }> = {
    cyan: {
      bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', text: 'text-cyan-400',
      glow: 'shadow-cyan-500/20', gradient: 'from-cyan-500 to-blue-500', badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
    },
    emerald: {
      bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400',
      glow: 'shadow-emerald-500/20', gradient: 'from-emerald-500 to-teal-500', badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
    },
    purple: {
      bg: 'bg-purple-500/10', border: 'border-purple-500/20', text: 'text-purple-400',
      glow: 'shadow-purple-500/20', gradient: 'from-purple-500 to-pink-500', badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
    },
    amber: {
      bg: 'bg-amber-500/10', border: 'border-amber-500/20', text: 'text-amber-400',
      glow: 'shadow-amber-500/20', gradient: 'from-amber-500 to-orange-500', badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
    },
    blue: {
      bg: 'bg-blue-500/10', border: 'border-blue-500/20', text: 'text-blue-400',
      glow: 'shadow-blue-500/20', gradient: 'from-blue-500 to-indigo-500', badge: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
    },
    rose: {
      bg: 'bg-rose-500/10', border: 'border-rose-500/20', text: 'text-rose-400',
      glow: 'shadow-rose-500/20', gradient: 'from-rose-500 to-pink-500', badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
    }
  };

  const currentIndustry = industries[activeIndustry];
  const colors = colorMap[currentIndustry.color];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* ============ HERO DE INDUSTRIAS CON IMAGEN DE FONDO ============ */}
<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
  {/* Imagen de fondo */}
  <img
    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    alt="Modern warehouse with autonomous robots"
    className="absolute inset-0 w-full h-full object-cover object-center scale-105"
  />
  
  {/* Overlay degradado para legibilidad */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/95 via-slate-950/85 to-slate-950/95"></div>
  
  {/* Efectos de brillo decorativos */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
  <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold mb-6 backdrop-blur-sm">
      <Sparkles className="w-3 h-3" />
      {isEs ? 'INDUSTRIAS OBJETIVO' : 'TARGET INDUSTRIES'}
    </div>
    
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]">
      {isEs ? (
        <>
          Un sistema,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            infinitas industrias
          </span>
        </>
      ) : (
        <>
          One system,
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
            infinite industries
          </span>
        </>
      )}
    </h1>

    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
      {isEs 
        ? 'ARVIS se adapta a cualquier entorno donde un robot necesite navegar de forma segura: desde almacenes logísticos hasta hospitales, tiendas, aceras urbanas, fábricas y hogares.'
        : 'ARVIS adapts to any environment where a robot needs to navigate safely: from logistics warehouses to hospitals, stores, urban sidewalks, factories, and homes.'}
    </p>

    {/* Stats globales */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
      {[
        { value: '6', label: isEs ? 'Industrias' : 'Industries', icon: Target },
        { value: '15+', label: isEs ? 'Casos de uso' : 'Use cases', icon: Package },
        { value: '99%', label: isEs ? 'Menos costo' : 'Less cost', icon: DollarSign },
        { value: '1', label: isEs ? 'Plataforma' : 'Platform', icon: Zap }
      ].map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-5 hover:border-cyan-500/30 transition-all">
            <Icon className="w-5 h-5 text-cyan-400 mb-2 mx-auto" />
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <div className="text-xs text-slate-400 uppercase tracking-wider">{stat.label}</div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      {/* ============ SELECTOR DE INDUSTRIAS ============ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              const isActive = activeIndustry === idx;
              const indColors = colorMap[industry.color];
              
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(idx)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? `${indColors.bg} ${indColors.border} border ${indColors.text} shadow-lg ${indColors.glow}`
                      : 'bg-slate-900/50 border border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{industry.name}</span>
                  <span className="sm:hidden">{industry.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* ============ DETALLE DE INDUSTRIA ACTIVA ============ */}
          <div className={`relative bg-slate-900/40 backdrop-blur-sm border ${colors.border} rounded-3xl p-8 md:p-12 overflow-hidden transition-all duration-500`}>
            {/* Glow de fondo */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-full blur-3xl`}></div>
            
            <div className="relative z-10">
              {/* Header de la industria */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${colors.badge} text-xs font-bold mb-4`}>
                    {(() => { const Icon = currentIndustry.icon; return <Icon className="w-3 h-3" />; })()}
                    {currentIndustry.tagline}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {currentIndustry.name}
                  </h2>
                  <p className={`text-lg ${colors.text} font-medium`}>
                    {currentIndustry.hero}
                  </p>
                </div>
              </div>

              {/* Descripción */}
              <p className="text-slate-300 leading-relaxed mb-10 max-w-4xl">
                {currentIndustry.description}
              </p>

              {/* Grid: Problemas vs Soluciones */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Problemas */}
                <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800">
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h3 className="text-lg font-bold text-white">
                      {isEs ? 'Desafíos del sector' : 'Industry challenges'}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {currentIndustry.problems.map((problem, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-slate-300">{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Soluciones */}
                <div className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className={`w-5 h-5 ${colors.text}`} />
                    <h3 className="text-lg font-bold text-white">
                      {isEs ? 'Cómo ARVIS lo resuelve' : 'How ARVIS solves it'}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {currentIndustry.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-4 h-4 ${colors.text} mt-0.5 flex-shrink-0`} />
                        <span className="text-sm text-white font-medium">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ============ NUEVO: ESCENARIO TÍPICO (Storytelling) ============ */}
              <div className="mb-10 bg-gradient-to-br from-slate-950/80 to-slate-900/50 border border-slate-800 rounded-2xl p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <PlayCircle className={`w-6 h-6 ${colors.text}`} />
                  <h3 className="text-xl font-bold text-white">
                    {isEs ? 'Escenario típico en acción' : 'Typical scenario in action'}
                  </h3>
                </div>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg italic">
                  "{currentIndustry.scenario}"
                </p>
              </div>

              {/* ============ NUEVO: EMPRESAS QUE YA LO HACEN ============ */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <ExternalLink className={`w-5 h-5 ${colors.text}`} />
                  <h3 className="text-lg font-bold text-white">
                    {isEs ? 'Empresas líderes en este espacio' : 'Leading companies in this space'}
                  </h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentIndustry.realExamples.map((example, idx) => (
                    <div key={idx} className="bg-slate-950/50 rounded-xl p-4 border border-slate-800 hover:border-slate-700 transition-all">
                      <div className="text-3xl mb-2">{example.icon}</div>
                      <div className="text-white font-bold text-sm mb-1">{example.company}</div>
                      <div className="text-xs text-slate-400 leading-relaxed">{example.desc}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3 italic">
                  {isEs 
                    ? '* ARVIS ofrece capacidades similares a una fracción del costo y con código abierto.'
                    : '* ARVIS offers similar capabilities at a fraction of the cost and with open source code.'}
                </p>
              </div>

              {/* Métricas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {currentIndustry.metrics.map((metric, idx) => {
                  const Icon = metric.icon;
                  return (
                    <div key={idx} className="bg-slate-950/50 rounded-2xl p-5 border border-slate-800 text-center hover:border-slate-700 transition-all">
                      <Icon className={`w-5 h-5 ${colors.text} mb-2 mx-auto`} />
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider">{metric.label}</div>
                    </div>
                  );
                })}
              </div>

              {/* Casos de uso específicos (expandidos) */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">
                  {isEs ? 'Casos de uso específicos' : 'Specific use cases'}
                </h3>
                <div className="grid md:grid-cols-3 gap-3">
                  {currentIndustry.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-slate-950/50 rounded-xl p-4 border border-slate-800 hover:border-slate-700 transition-all">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center mb-3`}>
                        <span className={`text-sm font-bold ${colors.text}`}>0{idx + 1}</span>
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{useCase.title}</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">{useCase.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GRID DE TODAS LAS INDUSTRIAS ============ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/5 via-slate-950 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-6">
              <Target className="w-3 h-3" />
              {isEs ? 'VISIÓN GENERAL' : 'OVERVIEW'}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Todas las industrias en un vistazo' : 'All industries at a glance'}
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              {isEs 
                ? 'Una sola plataforma de visión computacional adaptada a los desafíos únicos de cada sector.'
                : 'A single computer vision platform adapted to the unique challenges of each sector.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => {
              const Icon = industry.icon;
              const indColors = colorMap[industry.color];
              const isActive = activeIndustry === idx;
              
              return (
                <button
                  key={industry.id}
                  onClick={() => {
                    setActiveIndustry(idx);
                    window.scrollTo({ top: 600, behavior: 'smooth' });
                  }}
                  className={`group relative bg-slate-900/40 backdrop-blur-sm border rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
                    isActive 
                      ? `${indColors.border} border-2 ${indColors.glow} shadow-xl` 
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Efecto de brillo */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${indColors.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>

                  <div className="relative z-10">
                    <div className={`w-12 h-12 ${indColors.bg} ${indColors.border} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-6 h-6 ${indColors.text}`} />
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-1">{industry.name}</h3>
                    <p className={`text-xs ${indColors.text} font-medium mb-3`}>{industry.tagline}</p>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                      {industry.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-semibold">
                      <span className={indColors.text}>
                        {isEs ? 'Ver detalles' : 'View details'}
                      </span>
                      <ArrowRight className={`w-3 h-3 ${indColors.text} group-hover:translate-x-1 transition-transform`} />
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ COMPARATIVA ENTRE INDUSTRIAS ============ */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              {isEs ? 'Impacto por industria' : 'Impact by industry'}
            </h2>
            <p className="text-lg text-slate-400">
              {isEs 
                ? 'Métricas clave que ARVIS entrega en cada sector.'
                : 'Key metrics ARVIS delivers in each sector.'}
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-4 px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Industria' : 'Industry'}
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Ahorro' : 'Savings'}
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Seguridad' : 'Safety'}
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {isEs ? 'Eficiencia' : 'Efficiency'}
                  </th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-slate-400 uppercase tracking-wider">
                    {isEs ? 'ROI' : 'ROI'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {industries.map((industry, idx) => {
                  const Icon = industry.icon;
                  const indColors = colorMap[industry.color];
                  const savings = ['95%', '90%', '80%', '85%', '75%', '99%'][idx];
                  const safety = ['ISO 13850', 'HIPAA-ready', '360° vision', 'Gestos', 'ISO 13850', 'Pet-safe'][idx];
                  const efficiency = ['+25%', '24/7', 'Sin marcadores', '+20%', '0 downtime', '<$200'][idx];
                  const roi = ['6 meses', '12 meses', '8 meses', '4 meses', '10 meses', '3 meses'][idx];
                  
                  return (
                    <tr 
                      key={industry.id} 
                      onClick={() => { setActiveIndustry(idx); window.scrollTo({ top: 600, behavior: 'smooth' }); }}
                      className={`border-b border-slate-800/50 cursor-pointer transition-all hover:bg-slate-900/50 ${
                        activeIndustry === idx ? 'bg-slate-900/30' : ''
                      }`}
                    >
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 ${indColors.bg} ${indColors.border} border rounded-lg flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${indColors.text}`} />
                          </div>
                          <div>
                            <div className="text-white font-semibold text-sm">{industry.name}</div>
                            <div className="text-xs text-slate-500">{industry.tagline}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`text-sm font-bold ${indColors.text}`}>{savings}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-sm text-slate-300">{safety}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-sm text-emerald-400 font-semibold">{efficiency}</span>
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-sm text-amber-400 font-semibold">{roi}</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-gradient-to-br from-slate-900 to-slate-900/50 border border-cyan-500/20 rounded-3xl p-10 md:p-14 hover:border-cyan-500/40 transition-all duration-500">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl mb-6">
              <Sparkles className="w-8 h-8 text-cyan-400" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {isEs ? '¿Tu industria no está en la lista?' : "Your industry isn't on the list?"}
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              {isEs 
                ? 'ARVIS es agnóstico al entorno. Si tu robot necesita navegar de forma segura, podemos adaptar el sistema a tu caso específico.'
                : 'ARVIS is environment-agnostic. If your robot needs to navigate safely, we can adapt the system to your specific case.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:victorcamacaro253@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all hover:shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)]"
              >
                {isEs ? 'Solicitar demo personalizada' : 'Request custom demo'}
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-semibold transition-all"
              >
                {isEs ? 'Volver al inicio' : 'Back to home'}
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Industries;