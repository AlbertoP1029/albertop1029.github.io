/* =====================================================================
   CONTENIDO DEL PORTAFOLIO
   Este es el único archivo que necesitas editar para cambiar textos,
   fotos y videos. Cada proyecto tiene su página en  tu-sitio/#<id>.

   T('texto en inglés', 'texto en español')  → texto bilingüe.
   Si el texto es igual en ambos idiomas: T('texto').

   Agregar una foto a un proyecto:
     1. Sube la imagen a la carpeta media/ (JPG, PNG o WEBP, idealmente < 500 KB).
     2. Agrega una línea en "gallery":
        { src: 'media/mi-foto.jpg', ...T('Pie de foto en inglés', 'Pie de foto en español') },

   Agregar un video de YouTube (se reproduce dentro de la página):
        { url: 'https://youtu.be/XXXXXXXXXXX', ...T('Título', 'Título') },   → en "videos"

   Agregar un video propio (MP4, idealmente < 50 MB):
        { src: 'media/mi-video.mp4', ...T('Título', 'Título') },             → en "clips"

   Cambiar la portada de la tarjeta:  cover: { src: 'media/mi-foto.jpg' }
   ===================================================================== */
const T = (en, es) => ({ en, es: es === undefined ? en : es });

const PROJECTS = [
{
  id: 'efuse', solo: true, wide: false, tags: ['sim', 'elec'], cover: { motif: 'pareto' },
  org: T('Mercedes-Benz AG'), year: '2026', status: 'done',
  title: T('Automated optimization pipeline for a high-voltage eFuse circuit', 'Pipeline de optimización automatizada para un circuito eFuse de alto voltaje'),
  summary: T('Python pipeline that couples LTspice simulations with Optuna to tune a high-voltage protection circuit.', 'Pipeline en Python que acopla simulaciones de LTspice con Optuna para ajustar un circuito de protección de alto voltaje.'),
  facts: [[T('Context', 'Contexto'), T('Internship, high-voltage on-board network', 'Prácticas, red de a bordo de alto voltaje')], [T('Year', 'Año'), T('2026')], [T('Tools', 'Herramientas'), T('Python, LTspice, Optuna')]],
  kpis: [],
  challenge: T('Tuning the component parameters of a high-voltage eFuse protection circuit by hand meant running many manual simulation iterations.', 'Ajustar a mano los parámetros de los componentes de un circuito de protección eFuse de alto voltaje implicaba muchas iteraciones manuales de simulación.'),
  approach: [
    T('Automated the LTspice simulation runs from Python.', 'Automaticé desde Python la ejecución de las simulaciones de LTspice.'),
    T('Added a multi-objective search over the component parameters with Optuna\'s Tree-structured Parzen Estimator.', 'Agregué una búsqueda multiobjetivo sobre los parámetros de los componentes con el Tree-structured Parzen Estimator de Optuna.'),
    T('Evaluated each candidate automatically against the protection objectives.', 'Evalué cada candidato de forma automática contra los objetivos de protección.')
  ],
  results: T('The pipeline replaced manual circuit-tuning iterations with a repeatable optimization loop.', 'El pipeline sustituyó las iteraciones manuales de ajuste por un ciclo de optimización repetible.'),
  role: T("I designed and built the pipeline end to end during my internship: the automated LTspice runs from Python, the multi-objective search with Optuna and the evaluation of each candidate design against the protection objectives.", "Diseñé y construí el pipeline completo durante mis prácticas: la ejecución automática de LTspice desde Python, la búsqueda multiobjetivo con Optuna y la evaluación de cada diseño candidato frente a los objetivos de protección."),
  note: T('Further technical details are confidential to Mercedes-Benz AG.', 'Los detalles técnicos adicionales son confidenciales de Mercedes-Benz AG.'),
  gallery: [], videos: [], clips: []
},
{
  id: 'schneider', tags: ['sim', 'robot', 'vision'], cover: { src: 'media/schneider-cover.webp' },
  org: T('Schneider Electric challenge', 'Reto Schneider Electric'), year: '2025', status: 'done',
  title: T('Cobot inspection cell validated with a digital twin', 'Celda de inspección con cobot validada mediante gemelo digital'),
  summary: T('A Lexium cobot and a vision sensor cut final inspection of circuit breakers from 90 minutes to under 4.', 'Un cobot Lexium y un sensor de visión redujeron la inspección final de interruptores de 90 minutos a menos de 4.'),
  facts: [[T('Partner', 'Socio formador'), T('Schneider Electric')], [T('Course', 'Materia'), T('Automation of Manufacturing Systems', 'Automatización de Sistemas de Manufactura')], [T('Year', 'Año'), T('Mar – Jun 2025', 'Mar – jun 2025')], [T('Team', 'Equipo'), T('11 students, team lead', '11 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('Lexium cobot, M262 PLC, EcoStruxure Machine Expert Twin, Datalogic P15, VPM Lite')]],
  kpis: [[T('−95.6 %'), T('inspection time per unit', 'tiempo de inspección por unidad')], [T('3:54'), T('cycle in min:s, from 90 min', 'ciclo en min:s, antes 90 min')], [T('54.7 %'), T('ROI over three years', 'ROI a tres años')], [T('1.94 yr', '1.94 años'), T('payback period', 'periodo de recuperación')]],
  challenge: T('At workstation 9 of a circuit-breaker line, one operator checked ten quality points by hand, fitted the front cover and copied a paper checklist into Excel. At 1.5 hours per unit, the station was the bottleneck of an eight-hour line. Schneider Electric asked for at least a 30 % reduction in inspection time, a return of at least 10 % and a budget under MXN 1.5 million, using its own automation products.', 'En la estación 9 de una línea de interruptores, un operador revisaba diez puntos de calidad a mano, colocaba la tapa frontal y pasaba una lista de verificación en papel a Excel. Con 1.5 horas por unidad, la estación era el cuello de botella de una línea de ocho horas. Schneider Electric pidió reducir al menos 30 % el tiempo de inspección, un retorno de al menos 10 % y un presupuesto menor a MXN 1.5 millones, con sus propios productos de automatización.'),
  approach: [
    T('A Lexium cobot with a 3 kg payload positions a Datalogic P15 vision sensor at ten inspection points without moving its base. Fitting the lid was dropped because its weight exceeded the payload.', 'Un cobot Lexium de 3 kg de carga lleva un sensor de visión Datalogic P15 a diez puntos de inspección sin mover su base. Se descartó colocar la tapa porque su peso superaba la carga del robot.'),
    T('An M262 PLC links the HMI start button to the cobot, counts inspection steps from the camera trigger, latches the pass/fail result of each point and times the cycle.', 'Un PLC M262 enlaza el botón de inicio de la HMI con el cobot, cuenta los pasos de inspección a partir del disparo de la cámara, registra el resultado de cada punto y mide el tiempo de ciclo.'),
    T('A 7-inch HMI written in Spanish for the plant operators shows a red or green indicator per point and the running cycle time.', 'Una HMI de 7 pulgadas, en español para los operadores de planta, muestra un indicador rojo o verde por punto y el tiempo de ciclo.'),
    T('The vision program in VPM Lite has four levels: event counter, case selector, pattern matching and a Boolean pass/fail output.', 'El programa de visión en VPM Lite tiene cuatro niveles: contador de eventos, selector de caso, búsqueda de patrón y salida booleana de aprobado/rechazado.'),
    T('The full routine was simulated in EcoStruxure Machine Expert Twin to check trajectories, collisions, singularities and cycle time before running on hardware donated by Schneider Electric.', 'La rutina completa se simuló en EcoStruxure Machine Expert Twin para verificar trayectorias, colisiones, singularidades y tiempo de ciclo antes de ejecutarla en el hardware donado por Schneider Electric.'),
    T('A fixture with UHMW pads holds the breaker in place, and an FMEA covered vision misreads, misalignment, path deviation and an unsecured part.', 'Un fixture con almohadillas de UHMW sujeta el interruptor, y un AMEF cubrió lecturas erróneas de visión, desalineación, desviación de trayectoria y pieza mal sujeta.')
  ],
  results: T('The routine measured 234 seconds on hardware, a 95.6 % reduction against the manual process and well beyond the 30 % target. That frees more than 5,700 labor hours and about MXN 680,000 per year. The proposal costs MXN 1.32 million, inside the budget, with a three-year ROI of 54.7 % and a payback of 1.94 years.', 'La rutina midió 234 segundos en el equipo real, una reducción de 95.6 % frente al proceso manual y muy por encima de la meta de 30 %. Eso libera más de 5,700 horas de trabajo y cerca de MXN 680,000 al año. La propuesta cuesta MXN 1.32 millones, dentro del presupuesto, con un ROI a tres años de 54.7 % y recuperación en 1.94 años.'),
  role: T("I led the team of eleven. I programmed the Lexium cobot routine myself: the moves to the ten inspection points, the camera trigger and the counter signal sent to the PLC at each point. I also wrote the technical justification for choosing the cobot, based on its payload and on reaching all ten points without moving its base. Beyond that, I took part in the PLC and HMI integration, the vision setup and the digital twin.", "Lideré el equipo de once integrantes. Programé personalmente la rutina del cobot Lexium: los movimientos a los diez puntos de inspección, el disparo de la cámara y la señal de conteo que se envía al PLC en cada punto. También redacté la justificación técnica para elegir el cobot, basada en su carga útil y en que alcanza los diez puntos sin mover su base. Además, participé en la integración del PLC y la HMI, la configuración de visión y el gemelo digital."),
  gallery: [
    { src: 'media/schneider-1.webp', ...T('System integration: PLC, HMI, cobot and vision sensor.', 'Integración del sistema: PLC, HMI, cobot y sensor de visión.') },
    { src: 'media/schneider-2.webp', ...T('Digital twin of the cell in EcoStruxure Machine Expert Twin.', 'Gemelo digital de la celda en EcoStruxure Machine Expert Twin.') },
    { src: 'media/schneider-3.webp', ...T('Operator HMI with per-point results and cycle time.', 'HMI del operador con resultado por punto y tiempo de ciclo.') },
    { src: 'media/schneider-4.webp', ...T('Pattern-matching inspection in Datalogic VPM Lite.', 'Inspección por búsqueda de patrón en Datalogic VPM Lite.') },
    { src: 'media/schneider-5.webp', ...T('Cell layout and breaker fixture.', 'Layout de la celda y fixture del interruptor.') }
  ], videos: [], clips: []
},
{
  id: 'diram-interface-board', solo: true, tags: ['elec'], cover: { src: 'media/diram-1.webp' },
  org: T('Diram S.A. de C.V.'), year: '2025', status: 'done',
  title: T('Opto-isolated PNP-to-NPN interface board', 'Tarjeta de interfaz optoaislada de PNP a NPN'),
  summary: T('A PCB that lets a robot with PNP outputs drive a dispenser with NPN inputs.', 'Un PCB que permite que un robot con salidas PNP controle un dispensador con entradas NPN.'),
  facts: [[T('Company', 'Empresa'), T('Diram S.A. de C.V., San Pedro Garza García')], [T('Context', 'Contexto'), T('Electronics design internship', 'Prácticas en diseño electrónico')], [T('Year', 'Año'), T('Jan – Jun 2025', 'Ene – jun 2025')], [T('Tools', 'Herramientas'), T('Altium Designer, VisualCAM')]],
  kpis: [],
  challenge: T('A robot with PNP (sourcing) outputs had to control a dispenser whose inputs expect NPN (sinking) signals. The two cannot be wired directly, and the connection had to meet industrial safety requirements.', 'Un robot con salidas PNP (que entregan corriente) debía controlar un dispensador cuyas entradas esperan señales NPN (que absorben corriente). Ambos no pueden conectarse directamente, y la conexión debía cumplir requisitos de seguridad industrial.'),
  approach: [
    T('Took the interface from schematic to PCB layout in Altium Designer.', 'Llevé la interfaz del esquemático al layout del PCB en Altium Designer.'),
    T('Designed an opto-isolated stage that separates the robot side from the dispenser side.', 'Diseñé una etapa optoaislada que separa el lado del robot del lado del dispensador.'),
    T('Added relay-based switching to give the dispenser the signal type it expects, with flyback protection on the relay coils.', 'Agregué conmutación por relevadores para entregar al dispensador el tipo de señal que espera, con protección flyback en las bobinas.'),
    T('Selected components and laid out the board with attention to signal integrity and industrial safety requirements.', 'Seleccioné los componentes y distribuí la tarjeta cuidando la integridad de señal y los requisitos de seguridad industrial.'),
    T('Ran a DFM analysis in VisualCAM to confirm the board was robust and producible.', 'Realicé un análisis DFM en VisualCAM para confirmar que la tarjeta fuera robusta y fabricable.')
  ],
  results: T('The design was completed and the board was ordered for manufacturing, so that the robot with PNP outputs can drive the dispenser with NPN inputs.', 'El diseño se terminó y la tarjeta se mandó a fabricar, para que el robot con salidas PNP pueda controlar el dispensador con entradas NPN.'),
  role: T('I designed the board from schematic to layout, which included the component selection, the signal integrity and the industrial safety requirements. In parallel, I managed and maintained the component libraries and ran DFM analyses in VisualCAM to keep designs robust, producible and aligned with manufacturing constraints. Working in an industrial setting showed me how design decisions are discussed, reviewed and iterated within a team, and how reliability, documentation and manufacturability shape real-world hardware development.', 'Diseñé la tarjeta del esquemático al layout, incluyendo la selección de componentes, la integridad de señal y los requisitos de seguridad industrial. En paralelo, administré y mantuve las bibliotecas de componentes y realicé análisis DFM en VisualCAM para que los diseños fueran robustos, fabricables y acordes con las restricciones de manufactura. Trabajar en un entorno industrial me mostró cómo se discuten, revisan e iteran las decisiones de diseño en equipo, y el papel central que tienen la confiabilidad, la documentación y la manufacturabilidad en el desarrollo de hardware real.'),
  gallery: [
    { src: 'media/diram-1.webp', ...T('3D view of the interface board in Altium Designer.', 'Vista 3D de la tarjeta de interfaz en Altium Designer.') }
  ], videos: [], clips: []
},
{
  id: 'fred-factory', tags: ['robot', 'sim'], cover: { src: 'media/fred-1.webp' },
  org: T('FrED Factory · Tec de Monterrey'), year: '2025', status: 'done',
  title: T('Robotic electronics-assembly station', 'Estación robotizada de ensamble electrónico'),
  summary: T('An ABB IRB 1100 and a Siemens PLC assemble the electronics of FrED in a six-station production line.', 'Un ABB IRB 1100 y un PLC Siemens ensamblan la electrónica de FrED en una línea de producción de seis estaciones.'),
  facts: [[T('Program', 'Programa'), T('FrED Factory, Tec de Monterrey')], [T('Course', 'Materia'), T('Automation of Manufacturing Systems', 'Automatización de Sistemas de Manufactura')], [T('Year', 'Año'), T('2025')], [T('Team', 'Equipo'), T('6 students, team lead', '6 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('ABB IRB 1100, RAPID, RobotStudio, Siemens S7-1200, TIA Portal, Process Simulate, Plant Simulation')]],
  kpis: [[T('5'), T('RAPID assembly routines', 'rutinas de ensamble en RAPID')], [T('5'), T('units built in one production run', 'unidades fabricadas en una corrida')], [T('2'), T('digital twins: cell and line', 'gemelos digitales: celda y línea')], [T('3'), T('part widths handled by one gripper', 'anchos de pieza con un solo gripper')]],
  challenge: T('FrED Factory automates the production of FrED, a desktop fiber-extrusion device used for teaching, across five assembly stations and one quality-inspection station. Station 2 assembles the electronics: an Arduino Mega, a RAMPS shield, a Raspberry Pi and two A4988 stepper drivers, which an operator then wires and closes.', 'FrED Factory automatiza la fabricación de FrED, un dispositivo de extrusión de fibra de escritorio para docencia, en cinco estaciones de ensamble y una de inspección de calidad. La estación 2 ensambla la electrónica: un Arduino Mega, un shield RAMPS, una Raspberry Pi y dos drivers A4988, que después un operador cablea y cierra.'),
  approach: [
    T('ABB IRB 1100 with an OmniCore C30 controller running five RAPID routines, one per unit. Each part follows approach, linear descent, release and a push move to seat the pins; transit moves use joint motion and insertions use slow linear motion.', 'ABB IRB 1100 con controlador OmniCore C30 y cinco rutinas en RAPID, una por unidad. Cada pieza sigue aproximación, descenso lineal, liberación y un empuje para asentar los pines; los traslados usan movimiento articular y las inserciones, movimiento lineal lento.'),
    T('Safety interlocks: the routine starts only with the doors closed, the part detected and a start command from the HMI. A TRAP interrupt stops the robot if a sensor drops mid-routine. E-stop and a two-colour Andon tower complete the station.', 'Enclavamientos: la rutina solo arranca con puertas cerradas, pieza detectada y la orden de inicio desde la HMI. Una interrupción TRAP detiene el robot si un sensor se desactiva durante la rutina. Paro de emergencia y torre Andon de dos colores completan la estación.'),
    T('A Siemens S7-1200 PLC exchanges signals with the OmniCore over Profinet. Ladder logic handles station start, the gripper valves, a cycle counter and two timers.', 'Un PLC Siemens S7-1200 intercambia señales con el OmniCore por Profinet. La lógica en escalera controla el arranque de la estación, las válvulas del gripper, un contador de ciclos y dos temporizadores.'),
    T('The HMI shows start/stop, statistics and a live progress bar driven by robot signals at each subtask.', 'La HMI muestra arranque/paro, estadísticas y una barra de progreso que avanza con las señales del robot en cada subtarea.'),
    T('A pneumatic gripper on an SMC MHZ2-16D with T-shaped fingers sized for three part widths, plus 3D-printed and laser-cut fixtures, feeders and storage organized with 5S and Kanban.', 'Un gripper neumático sobre un SMC MHZ2-16D con dedos en T para tres anchos de pieza, además de fixtures, alimentadores y almacenes impresos en 3D y cortados con láser, organizados con 5S y Kanban.'),
    T('A Process Simulate twin of the cell, and a Plant Simulation model of the whole line built from measured KPIs, which located the bottleneck between stations 1 and 2.', 'Un gemelo de la celda en Process Simulate y un modelo de toda la línea en Plant Simulation construido con los KPIs medidos, que ubicó el cuello de botella entre las estaciones 1 y 2.')
  ],
  results: T('The station built five units in one production run with an average cycle of 16 min 24 s per unit, against an initial cycle near 8 minutes. Defective RAMPS shields in the supplied stock forced several reassemblies, which explains the gap and the variability.', 'La estación fabricó cinco unidades en una corrida con un ciclo promedio de 16 min 24 s por unidad, frente a un ciclo inicial cercano a 8 minutos. Shields RAMPS defectuosos en el inventario obligaron a reensamblar varias unidades, lo que explica la diferencia y la variabilidad.'),
  role: T("I led the team of six and wrote the complete robot program from scratch: five RAPID routines with pick, place and push sequences, a safety interrupt tied to the door and part sensors, and the Profinet signals that drive the gripper and the HMI progress bar. I also worked on the PLC integration, the fixtures and the production run.", "Lideré el equipo de seis integrantes y escribí desde cero el programa completo del robot: cinco rutinas en RAPID con secuencias de toma, colocación y empuje, una interrupción de seguridad ligada a los sensores de puerta y de pieza, y las señales por Profinet que controlan el gripper y la barra de progreso de la HMI. También trabajé en la integración con el PLC, los fixtures y la corrida de producción."),
  gallery: [
    { src: 'media/fred-1.webp', ...T('Robot station and operator station.', 'Estación del robot y estación del operador.') },
    { src: 'media/fred-2.webp', ...T('Robot cell with feeders, fixture and HMI.', 'Celda del robot con alimentadores, fixture y HMI.') },
    { src: 'media/fred-4.webp', ...T('Robot trajectories for one unit.', 'Trayectorias del robot para una unidad.') },
    { src: 'media/fred-3.webp', ...T('Digital twin of the cell in Process Simulate.', 'Gemelo digital de la celda en Process Simulate.') },
    { src: 'media/fred-5.webp', ...T('Station HMI: control screen.', 'HMI de la estación: pantalla de control.') },
    { src: 'media/fred-6.webp', ...T('Gripper assembly drawing.', 'Plano de ensamble del gripper.') },
    { src: 'media/fred-8.webp', ...T('Control cabinet wiring with ferrules and terminal blocks.', 'Cableado del gabinete con terminales y clemas.') },
    { src: 'media/fred-7.webp', ...T('Electronics subassemblies from the production run.', 'Subensambles electrónicos de la corrida de producción.') },
    { src: 'media/fred-9.webp', ...T('Final cell layout.', 'Layout final de la celda.') }
  ],
  videos: [
    { url: 'https://www.youtube.com/watch?v=NMYnXPAtxl8', ...T('One complete robot routine', 'Una rutina completa del robot') },
    { url: 'https://www.youtube.com/watch?v=qNP7Kxg6Dns', ...T('Cell digital twin in Process Simulate', 'Gemelo de la celda en Process Simulate') },
    { url: 'https://youtu.be/z9zMRa_9x70', ...T('Line model in Plant Simulation', 'Modelo de la línea en Plant Simulation') }
  ], clips: []
},
{
  id: 'abb-packaging', tags: ['robot', 'sim', 'vision'], cover: { src: 'media/abb-cad.webp' },
  org: T('ABB challenge', 'Reto ABB'), year: '2025', status: 'done',
  title: T('Bottle packaging and palletizing cell', 'Celda de empaque y paletizado de botellas'),
  summary: T('Two ABB IRB 4600 robots, a vision station and a mobile robot, validated in RobotStudio.', 'Dos robots ABB IRB 4600, una estación de visión y un robot móvil, validados en RobotStudio.'),
  facts: [[T('Partner', 'Socio formador'), T('ABB')], [T('Course', 'Materia'), T('Design and Development of Robots', 'Diseño y Desarrollo de Robots')], [T('Year', 'Año'), T('May 2025', 'Mayo 2025')], [T('Team', 'Equipo'), T('4 students, team lead', '4 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('RobotStudio, RAPID, SolidWorks, Cognex In-Sight')]],
  kpis: [[T('14'), T('cases per minute', 'cajas por minuto')], [T('+20 %'), T('over the manual process', 'frente al proceso manual')], [T('99 %'), T('projected uptime', 'disponibilidad proyectada')], [T('PL d'), T('ISO 13849-1, Category 3', 'ISO 13849-1, categoría 3')]],
  challenge: T('ABB issued a request for quotation on behalf of a customer whose manual packing of 5 L and 8.5 L bottles could not keep up with demand. The cell had to pack, inspect and palletize both sizes safely, with traceability.', 'ABB emitió una solicitud de cotización para un cliente cuyo empaque manual de botellas de 5 L y 8.5 L no alcanzaba la demanda. La celda debía empacar, inspeccionar y paletizar ambos tamaños de forma segura y con trazabilidad.'),
  approach: [
    T('Two ABB IRB 4600-60/2.05 robots, sized for four 8.5 L bottles (about 40 kg) plus tooling.', 'Dos robots ABB IRB 4600-60/2.05, dimensionados para cuatro botellas de 8.5 L (unos 40 kg) más la herramienta.'),
    T('An 8-cup vacuum gripper picks four bottles and fills two cases per cycle. Adjustable levers change the cup pitch between bottle sizes, so no tool changer is needed.', 'Un gripper de vacío de 8 ventosas toma cuatro botellas y llena dos cajas por ciclo. Palancas ajustables cambian la separación entre ventosas según el tamaño, sin cambiador de herramienta.'),
    T('A fork-style end effector stacks the cases onto a MiR500 autonomous mobile robot.', 'Un efector tipo horquilla apila las cajas sobre un robot móvil autónomo MiR500.'),
    T('A Cognex In-Sight 7800 checks bottle shape, cap, dispenser, label position and printed text with OCR, sends OK/NOK to the PLC and logs every result to SQL.', 'Una Cognex In-Sight 7800 revisa forma, tapa, dispensador, posición de etiqueta y texto impreso con OCR, envía OK/NOK al PLC y registra cada resultado en SQL.'),
    T('RAPID programs and line-sensor logic validated in RobotStudio; SolidWorks layout with fencing, E-stops and a 0.25 m/s speed limit when people are within 2.5 m.', 'Programas en RAPID y lógica de sensores de línea validados en RobotStudio; layout en SolidWorks con cercado, paros de emergencia y límite de 0.25 m/s cuando hay personas a menos de 2.5 m.')
  ],
  results: T('The simulated cell reached 14 cases per minute against 12 for the manual process, with a projected uptime of 99 %. The safety design follows ANSI/RIA R15.06, ISO 10218 and ISO 13849-1 Category 3, Performance Level d.', 'La celda simulada alcanzó 14 cajas por minuto frente a 12 del proceso manual, con una disponibilidad proyectada de 99 %. El diseño de seguridad sigue ANSI/RIA R15.06, ISO 10218 e ISO 13849-1 categoría 3, nivel de desempeño d.'),
  role: T("I led the team of four through every phase, from analyzing ABB's request for quotation to the final documentation. I took part in every subsystem: robot sizing, end-effector design, the RobotStudio simulation, the vision inspection, and the safety and cost analysis.", "Lideré el equipo de cuatro integrantes en todas las fases, desde el análisis de la solicitud de cotización de ABB hasta la documentación final. Participé en todos los subsistemas: el dimensionamiento de los robots, el diseño de los efectores, la simulación en RobotStudio, la inspección por visión y los análisis de seguridad y de costos."),
  gallery: [
    { src: 'media/abb-cad.webp', ...T('Cell layout in SolidWorks: conveyors, robots, fencing and pallet.', 'Layout de la celda en SolidWorks: transportadores, robots, cercado y tarima.') },
    { src: 'media/abb-1.webp', ...T('Complete cell simulated in RobotStudio.', 'Celda completa simulada en RobotStudio.') },
    { src: 'media/abb-3.webp', ...T('Conveyor guarding and safety fencing.', 'Guardas del transportador y cercado de seguridad.') },
    { src: 'media/abb-4.webp', ...T('8-cup vacuum gripper for 5 L and 8.5 L bottles.', 'Gripper de vacío de 8 ventosas para botellas de 5 L y 8.5 L.') },
    { src: 'media/abb-5.webp', ...T('Fork-style palletizing end effector.', 'Efector de paletizado tipo horquilla.') },
    { src: 'media/abb-6.webp', ...T('Bottle inspection: all features detected.', 'Inspección de botella: todas las características detectadas.') }
  ],
  videos: [{ url: 'https://youtu.be/UQCpB7KY3GY', ...T('Cell simulation in RobotStudio', 'Simulación de la celda en RobotStudio') }], clips: []
},
{
  id: 'drone-landing', tags: ['ctrl', 'vision', 'elec'], cover: { motif: 'wave' },
  org: T('Capstone · Tec de Monterrey', 'Proyecto final · Tec de Monterrey'), year: '2026', status: 'live',
  title: T('Camera-based precision landing on an oscillating platform', 'Aterrizaje de precisión guiado por cámara sobre una plataforma oscilatoria'),
  summary: T('A multirotor tracks a wave-driven platform with ArUco markers and compensates its motion during descent.', 'Un multirrotor sigue una plataforma con oleaje mediante marcadores ArUco y compensa su movimiento durante el descenso.'),
  facts: [[T('Course', 'Materia'), T('Design and Implementation of Mechatronic Systems', 'Diseño e Implementación de Sistemas Mecatrónicos')], [T('Year', 'Año'), T('2026')], [T('Team', 'Equipo'), T('3 students, team lead', '3 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('Raspberry Pi 5, Pixhawk, OpenCV ArUco, Arduino')]],
  kpis: [[T('0.2–0.5 Hz'), T('platform wave frequency', 'frecuencia de oleaje')], [T('≈ 24 cm'), T('platform stroke', 'carrera de la plataforma')], [T('≥ 30 fps'), T('on-board marker detection target', 'meta de detección a bordo')]],
  challenge: T('Land a multirotor precisely on a platform that moves vertically like a deck in waves, using only on-board vision to estimate where the platform is and how it moves.', 'Aterrizar un multirrotor con precisión sobre una plataforma que se mueve verticalmente como una cubierta con oleaje, usando solo visión a bordo para estimar dónde está la plataforma y cómo se mueve.'),
  approach: [
    T('Real-time ArUco tracking to estimate the position and orientation of the platform.', 'Seguimiento de marcadores ArUco en tiempo real para estimar la posición y orientación de la plataforma.'),
    T('Feedforward plus PD control during the descent to compensate the platform motion.', 'Control feedforward más PD durante el descenso para compensar el movimiento de la plataforma.'),
    T('Wave platform: belt-driven scissor lift moved by a 12 V stepper with an A4988 driver and an Arduino UNO along a sinusoidal profile. Limit switches reverse the stroke instead of stopping it.', 'Plataforma de oleaje: mecanismo de tijera accionado por banda con un motor a pasos de 12 V, driver A4988 y Arduino UNO, siguiendo un perfil senoidal. Los finales de carrera invierten el recorrido en lugar de detenerlo.'),
    T('Flight hardware: global-shutter monochrome MIPI camera, Raspberry Pi 5 for vision and control, Pixhawk flight controller.', 'Hardware de vuelo: cámara MIPI monocromática con obturador global, Raspberry Pi 5 para visión y control, controlador de vuelo Pixhawk.'),
    T('Flight-cage tests will measure landing precision, response latency and touchdown success rate, with results written up as a journal paper.', 'Las pruebas en la jaula de vuelo medirán precisión de aterrizaje, latencia de respuesta y tasa de éxito, y los resultados se publicarán como artículo.')
  ],
  results: T('The scissor platform is working. Next steps are wheels for X–Y motion and the landing controller.', 'La plataforma de tijera ya funciona. Los siguientes pasos son las ruedas para el movimiento en X–Y y el controlador de aterrizaje.'),
  role: T("I lead the team of three and am responsible for the electronics: integrating the camera, Raspberry Pi 5 and Pixhawk, and the stepper drive of the wave platform. I also work on the platform mechanism, the vision approach and the project documentation, including the scope statement, the state-of-the-art review and the progress presentations.", "Lidero el equipo de tres integrantes y soy responsable de la electrónica: la integración de la cámara, la Raspberry Pi 5 y el Pixhawk, y el accionamiento con motor a pasos de la plataforma de oleaje. También trabajo en el mecanismo de la plataforma, el enfoque de visión y la documentación del proyecto, que incluye el enunciado de alcance, la revisión del estado del arte y las presentaciones de avance."),
  note: T('Photos and flight videos will be added as the project progresses.', 'Las fotos y los videos de vuelo se agregarán conforme avance el proyecto.'),
  gallery: [], videos: [], clips: []
},
{
  id: 'inverted-pendulum', tags: ['ctrl', 'sim'], cover: { src: 'media/pendulum-photo.webp' },
  org: T('Tec de Monterrey'), year: '2024', status: 'done',
  title: T('Rotary inverted pendulum control', 'Control de péndulo invertido rotatorio'),
  summary: T('State-feedback controller designed by pole placement and validated on a Quanser Qube-Servo 3.', 'Controlador por retroalimentación de estados diseñado por asignación de polos y validado en un Quanser Qube-Servo 3.'),
  facts: [[T('Course', 'Materia'), T('Design of Control Systems', 'Diseño de Sistemas de Control')], [T('Year', 'Año'), T('Oct 2024', 'Oct 2024')], [T('Team', 'Equipo'), T('5 students, team lead', '5 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('MATLAB, Simulink, QUARC, Quanser Qube-Servo 3')]],
  kpis: [[T('6.81 %'), T('overshoot specification', 'sobrepaso especificado')], [T('1.54 s'), T('settling-time specification', 'tiempo de establecimiento especificado')], [T('−2.60 ± j3.04'), T('dominant closed-loop poles', 'polos dominantes en lazo cerrado')], [T('rank 4'), T('controllability matrix', 'matriz de controlabilidad')]],
  scope: true,
  challenge: T('Keep the pendulum of a Quanser Qube-Servo 3 upright with a state-feedback controller designed to meet an overshoot of 6.81 % and a settling time of 1.54 s, while the arm follows a reference.', 'Mantener invertido el péndulo de un Quanser Qube-Servo 3 con un controlador por retroalimentación de estados diseñado para un sobrepaso de 6.81 % y un tiempo de establecimiento de 1.54 s, mientras el brazo sigue una referencia.'),
  approach: [
    T('Linearized the Euler–Lagrange equations into a state-space model with arm angle, pendulum angle and their velocities as states and motor voltage as input, and checked it against the virtual lab.', 'Linealicé las ecuaciones de Euler–Lagrange en un modelo de espacio de estados con ángulo del brazo, ángulo del péndulo y sus velocidades como estados y el voltaje del motor como entrada, y lo comparé con el laboratorio virtual.'),
    T('Converted the specification into ζ = 0.650 and ωn = 4.00 rad/s, giving dominant poles at −2.60 ± j3.04, with two fast poles at −40 and −45.', 'Convertí la especificación en ζ = 0.650 y ωn = 4.00 rad/s, con polos dominantes en −2.60 ± j3.04 y dos polos rápidos en −40 y −45.'),
    T('Verified controllability: the controllability matrix has rank 4.', 'Verifiqué la controlabilidad: la matriz de controlabilidad tiene rango 4.'),
    T('Computed the gain with the transformation-matrix method and confirmed it with the companion-form method: K = [−4.42 49.27 −1.87 3.26].', 'Calculé la ganancia con el método de la matriz de transformación y la confirmé con el método de forma compañera: K = [−4.42 49.27 −1.87 3.26].'),
    T('Implemented the controller in Simulink with QUARC for real-time hardware-in-the-loop operation, estimating velocities with high-pass filters.', 'Implementé el controlador en Simulink con QUARC para operación en tiempo real con hardware en el lazo, estimando velocidades con filtros pasa-altas.')
  ],
  results: T('On the hardware the pendulum stayed upright while the arm tracked a square-wave reference, and returned to equilibrium after every manual push, both with and without the inertia disk.', 'En el equipo real el péndulo se mantuvo invertido mientras el brazo seguía una referencia cuadrada, y volvió al equilibrio tras cada empuje manual, con y sin el disco de inercia.'),
  role: T("I led the team of five through both stages of the project. The first stage was the state-space model and its check against the virtual lab. The second covered choosing the poles from the specification, the controllability check, computing the gain with both methods, and the hardware tests on the Qube-Servo 3 with and without the inertia disk.", "Lideré el equipo de cinco integrantes en las dos etapas del proyecto. La primera fue el modelo en espacio de estados y su comparación con el laboratorio virtual. La segunda abarcó la elección de los polos a partir de la especificación, la verificación de controlabilidad, el cálculo de la ganancia con ambos métodos y las pruebas en el Qube-Servo 3 con y sin el disco de inercia."),
  gallery: [
    { src: 'media/pendulum-photo.webp', ...T('Quanser Qube-Servo 3 used for the hardware tests.', 'Quanser Qube-Servo 3 usado en las pruebas en hardware.') },
    { src: 'media/pendulum-1.webp', ...T('Rotary pendulum model and coordinates.', 'Modelo del péndulo rotatorio y sus coordenadas.') },
    { src: 'media/pendulum-2.webp', ...T('Measured arm and pendulum angles; spikes are manual disturbances.', 'Ángulos medidos del brazo y del péndulo; los picos son perturbaciones manuales.') }
  ], videos: [], clips: []
},
{
  id: 'semi-automated-vehicle', tags: ['ctrl', 'elec'], cover: { src: 'media/vehicle-pinout.webp', contain: true },
  org: T('John Deere challenge', 'Reto John Deere'), year: '2024', status: 'done',
  title: T('Semi-automated vehicle', 'Vehículo semiautomatizado'),
  summary: T('STM32 firmware with PI distance control on a trapezoidal profile and a timed travel mode.', 'Firmware en STM32 con control PI de distancia sobre perfil trapezoidal y un modo de recorrido por tiempo.'),
  facts: [[T('Partner', 'Socio formador'), T('John Deere')], [T('Course', 'Materia'), T('Industrial Automation', 'Automatización Industrial')], [T('Year', 'Año'), T('Nov 2024', 'Nov 2024')], [T('Team', 'Equipo'), T('4 students, team lead', '4 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('STM32F103, STM32CubeIDE, STM32CubeMonitor, C')]],
  kpis: [[T('0.33 %'), T('closed-loop distance error', 'error de distancia en lazo cerrado')], [T('301 / 300 cm'), T('travelled vs commanded', 'recorrido frente a ordenado')], [T('410 cm'), T('open-loop result, for comparison', 'resultado en lazo abierto, como referencia')], [T('500 cm · 15 s'), T('timed move, on target', 'recorrido por tiempo, sin error')]],
  challenge: T('Make a small vehicle travel an exact distance, and cover a given distance in a given time, with parameters sent wirelessly from a phone.', 'Lograr que un vehículo pequeño recorra una distancia exacta y que cubra una distancia dada en un tiempo dado, con parámetros enviados de forma inalámbrica desde un celular.'),
  approach: [
    T('STM32F103 at 72 MHz. The encoder (280 counts per revolution, 6.3 cm wheels) is read by external interrupt, and a 100 ms timer interrupt computes speed.', 'STM32F103 a 72 MHz. El encoder (280 cuentas por vuelta, ruedas de 6.3 cm) se lee por interrupción externa, y una interrupción de temporizador de 100 ms calcula la velocidad.'),
    T('Trapezoidal velocity profile with configurable acceleration and deceleration, and an experimentally fitted map from speed to PWM duty.', 'Perfil de velocidad trapezoidal con aceleración y desaceleración configurables, y un mapa de velocidad a PWM ajustado experimentalmente.'),
    T('Open-loop baseline first, then a PI controller on the error between the profile position and the encoder distance. The derivative term was dropped because of encoder noise.', 'Primero una línea base en lazo abierto y después un controlador PI sobre el error entre la posición del perfil y la distancia del encoder. Se omitió la acción derivativa por el ruido del encoder.'),
    T('Timed mode solves the cruise speed from distance and time, then creeps at minimum speed until the error is within ±1 cm.', 'El modo por tiempo calcula la velocidad crucero a partir de distancia y tiempo, y luego avanza a velocidad mínima hasta que el error queda dentro de ±1 cm.'),
    T('HC-05 Bluetooth commands from a phone, LCD over I²C, and live plots of internal variables with STM32CubeMonitor.', 'Comandos por Bluetooth HC-05 desde el celular, LCD por I²C y gráficas en vivo de variables internas con STM32CubeMonitor.')
  ],
  results: T('Commanded to 300 cm, the vehicle overshot to 410 cm in open loop and stopped at 301 cm in closed loop, a 0.33 % error. In timed mode it covered 500 cm in 15 s with no distance error.', 'Con una orden de 300 cm, el vehículo llegó a 410 cm en lazo abierto y se detuvo en 301 cm en lazo cerrado, un error de 0.33 %. En el modo por tiempo recorrió 500 cm en 15 s sin error de distancia.'),
  role: T("I led the team of four with an incremental plan: first open loop, then closed loop, testing each component on its own before integrating it. I worked on the STM32 timers, interrupts and PWM, the encoder-based distance and speed measurement, the trapezoidal profile and the PI tuning, and the Bluetooth command interface.", "Lideré el equipo de cuatro integrantes con un plan incremental: primero lazo abierto y después lazo cerrado, probando cada componente por separado antes de integrarlo. Trabajé en los temporizadores, interrupciones y PWM del STM32, la medición de distancia y velocidad con el encoder, el perfil trapezoidal y la sintonización del PI, y la interfaz de comandos por Bluetooth."),
  gallery: [
    { src: 'media/vehicle-1.webp', ...T('Wiring: STM32, H-bridge, encoder motor, HC-05 and LCD.', 'Conexiones: STM32, puente H, motor con encoder, HC-05 y LCD.') },
    { src: 'media/vehicle-pinout.webp', ...T('STM32F103 pin configuration in STM32CubeIDE.', 'Configuración de pines del STM32F103 en STM32CubeIDE.') },
    { src: 'media/vehicle-5.webp', ...T('Trapezoidal velocity profile.', 'Perfil de velocidad trapezoidal.') },
    { src: 'media/vehicle-3.webp', ...T('Open loop: the vehicle overshoots the target.', 'Lazo abierto: el vehículo rebasa la meta.') },
    { src: 'media/vehicle-2.webp', ...T('Closed loop: encoder distance follows the profile to 301 cm.', 'Lazo cerrado: la distancia del encoder sigue el perfil hasta 301 cm.') },
    { src: 'media/vehicle-4.webp', ...T('Timed mode: 500 cm in 15 s.', 'Modo por tiempo: 500 cm en 15 s.') }
  ], videos: [], clips: []
},
{
  id: 'tractor-cabin', tags: ['elec', 'ctrl', 'sim'], cover: { src: 'media/cabin-1.webp' },
  org: T('John Deere challenge', 'Reto John Deere'), year: '2024', status: 'done',
  title: T('Temperature control for a tractor cabin', 'Control de temperatura para la cabina de un tractor'),
  summary: T('Analog op-amp control with hysteresis and a thermal model of a scale tractor cabin.', 'Control analógico con amplificadores operacionales e histéresis, y modelo térmico de una cabina de tractor a escala.'),
  facts: [[T('Partner', 'Socio formador'), T('John Deere')], [T('Course', 'Materia'), T('Troubleshooting Processes', 'Procesos de Diagnóstico')], [T('Year', 'Año'), T('Oct 2024', 'Oct 2024')], [T('Team', 'Equipo'), T('4 students, team lead', '4 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('Proteus, LM741/LM358, LM35, NTC thermistor, SolidWorks')]],
  kpis: [[T('40 ± 3 °C'), T('cabin comfort band', 'banda de confort de la cabina')], [T('100 °C'), T('heater over-temperature cut-off', 'corte por sobretemperatura')], [T('±3 °C'), T('hysteresis on both loops', 'histéresis en ambos lazos')]],
  challenge: T('Use engine heat to warm a tractor cabin. In a scale model, a 40 W heater stands in for the engine and a fan carries its heat into the cabin, which must stay in a comfort band without letting the heater overheat.', 'Aprovechar el calor del motor para calentar la cabina de un tractor. En una maqueta, un calefactor de 40 W representa al motor y un ventilador lleva su calor a la cabina, que debe mantenerse en una banda de confort sin que el calefactor se sobrecaliente.'),
  approach: [
    T('Safety loop: an NTC thermistor, linearized with a divider and scaled with non-inverting and differential amplifiers so 50–100 °C maps to 0–5 V, cuts the heater at 100 °C.', 'Lazo de seguridad: un termistor NTC, linealizado con un divisor y escalado con amplificadores no inversor y diferencial para que 50–100 °C equivalga a 0–5 V, corta el calefactor a 100 °C.'),
    T('Comfort loop: an LM35 scaled so 55–95 °C maps to 0–3 V is compared with an adjustable setpoint to switch the fan.', 'Lazo de confort: un LM35 escalado para que 55–95 °C equivalga a 0–3 V se compara con un setpoint ajustable para activar el ventilador.'),
    T('Schmitt-trigger comparators give ±3 °C of hysteresis, and IRF640 and IRF540 MOSFETs switch the heater and the fan.', 'Comparadores tipo Schmitt dan ±3 °C de histéresis, y MOSFETs IRF640 e IRF540 conmutan el calefactor y el ventilador.'),
    T('Thermal model: heater radiation, fan airflow, conduction through the MDF walls and the time to heat or cool across the band.', 'Modelo térmico: radiación del calefactor, flujo del ventilador, conducción por las paredes de MDF y el tiempo para calentar o enfriar dentro de la banda.')
  ],
  results: T('Both loops worked in simulation and on the bench. Two problems were solved along the way: the LM35 signal jumped every time the fan switched, fixed with a voltage follower and separate power supplies; and the PLA cabin lost too much heat, so it was rebuilt in MDF with foam insulation.', 'Ambos lazos funcionaron en simulación y en el banco. En el camino se resolvieron dos problemas: la señal del LM35 saltaba cada vez que conmutaba el ventilador, corregido con un seguidor de voltaje y fuentes separadas; y la cabina de PLA perdía demasiado calor, por lo que se reconstruyó en MDF con aislante.'),
  role: T("I led the team of four and worked on the signal conditioning: the thermistor linearization, the LM35 scaling and the hysteresis comparators. I also worked on the thermal model and on the build and debugging, where we solved the sensor loading problem with a voltage follower and rebuilt the cabin in insulated MDF.", "Lideré el equipo de cuatro integrantes y trabajé en el acondicionamiento de señal: la linealización del termistor, el escalamiento del LM35 y los comparadores con histéresis. También trabajé en el modelo térmico y en la construcción y depuración, donde resolvimos el problema de carga del sensor con un seguidor de voltaje y reconstruimos la cabina en MDF aislado."),
  gallery: [
    { src: 'media/cabin-1.webp', ...T('Scale cabin and engine box on the bench.', 'Cabina y caja del motor a escala en el banco.') },
    { src: 'media/cabin-2.webp', ...T('Bench test with power supplies and meters.', 'Prueba en banco con fuentes y multímetros.') },
    { src: 'media/cabin-3.webp', ...T('Op-amp signal conditioning and comparator circuit.', 'Circuito de acondicionamiento y comparación con amplificadores operacionales.') },
    { src: 'media/cabin-5.webp', ...T('Simulated thermistor output after linearization.', 'Salida simulada del termistor tras la linealización.') },
    { src: 'media/cabin-4.webp', ...T('CAD model of the tractor.', 'Modelo CAD del tractor.') },
    { src: 'media/cabin-6.webp', ...T('Insulation added inside the cabin.', 'Aislante agregado dentro de la cabina.') }
  ], videos: [], clips: []
},
{
  id: 'dc-power-supply', tags: ['elec', 'sim'], cover: { src: 'media/power-2.webp' },
  org: T('Tec de Monterrey'), year: '2024', status: 'done',
  title: T('Regulated ±12 V DC power supply', 'Fuente de alimentación regulada de ±12 V CD'),
  summary: T('Linear supply from 127 V mains, simulated in Proteus and LTspice and built on a custom PCB.', 'Fuente lineal desde la red de 127 V, simulada en Proteus y LTspice y construida en un PCB propio.'),
  facts: [[T('Course', 'Materia'), T('Implementation of Mechatronic Systems', 'Implementación de Sistemas Mecatrónicos')], [T('Year', 'Año'), T('Jun 2024', 'Jun 2024')], [T('Team', 'Equipo'), T('4 students, team lead', '4 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('Proteus, LTspice, Altium Designer')]],
  kpis: [[T('2.9 %'), T('measured ripple, limit 6 %', 'rizado medido, límite 6 %')], [T('±12 V'), T('regulated output', 'salida regulada')], [T('2 A'), T('maximum output current', 'corriente máxima')], [T('3'), T('PCB iterations', 'iteraciones de PCB')]],
  challenge: T('Build a ±12 V DC source from 127 V AC mains with at most 6 % ripple before regulation, up to 2 A of output current and overcurrent protection.', 'Construir una fuente de ±12 V CD desde la red de 127 V CA con un rizado máximo de 6 % antes de la regulación, hasta 2 A de salida y protección contra sobrecorriente.'),
  approach: [
    T('Transformer, 2W10 bridge rectifier, two 15,000 µF filter capacitors sized by hand calculation from the ripple target, and LM7812/LM7912 regulators.', 'Transformador, puente rectificador 2W10, dos capacitores de filtro de 15,000 µF dimensionados por cálculo a partir de la meta de rizado y reguladores LM7812/LM7912.'),
    T('Simulated in Proteus and cross-checked in LTspice, stage by stage.', 'Simulada en Proteus y verificada en LTspice, etapa por etapa.'),
    T('PCB designed in Altium Designer; a perforated-board prototype and two boards with soldering problems preceded the working third board.', 'PCB diseñado en Altium Designer; un prototipo en placa perforada y dos tarjetas con problemas de soldadura precedieron a la tercera tarjeta funcional.'),
    T('Fuse, switch and power LED for protection and indication.', 'Fusible, interruptor y LED de encendido para protección e indicación.')
  ],
  results: T('Measured ripple was 2.9 % against 2.7 % in simulation, inside the 6 % limit, with a flat ±12 V output after regulation. The review noted that the PCB traces were too thin for the full current, a point to fix in a next revision.', 'El rizado medido fue de 2.9 % frente a 2.7 % en simulación, dentro del límite de 6 %, con una salida plana de ±12 V después de la regulación. En la revisión se identificó que las pistas del PCB eran demasiado delgadas para la corriente máxima, un punto a corregir en una siguiente versión.'),
  role: T("I led the team of four through the full cycle: sizing the filter capacitors by hand calculation, simulating in Proteus and LTspice, laying out the PCB in Altium Designer, building and soldering the three board iterations, and measuring each stage on the oscilloscope.", "Lideré el equipo de cuatro integrantes en todo el ciclo: el dimensionamiento de los capacitores de filtro por cálculo, la simulación en Proteus y LTspice, el diseño del PCB en Altium Designer, la construcción y soldadura de las tres iteraciones de la tarjeta y la medición de cada etapa en el osciloscopio."),
  gallery: [
    { src: 'media/power-1.webp', ...T('Assembled power supply board.', 'Tarjeta de la fuente ensamblada.') },
    { src: 'media/power-2.webp', ...T('3D view of the PCB in Altium Designer.', 'Vista 3D del PCB en Altium Designer.') },
    { src: 'media/power-3.webp', ...T('PCB layout.', 'Layout del PCB.') },
    { src: 'media/power-4.webp', ...T('LTspice schematic.', 'Esquemático en LTspice.') },
    { src: 'media/power-5.webp', ...T('Filtered output: 400 mV peak-to-peak ripple.', 'Salida filtrada: rizado de 400 mV pico a pico.') },
    { src: 'media/power-6.webp', ...T('Regulated output on the oscilloscope.', 'Salida regulada en el osciloscopio.') }
  ], videos: [], clips: []
},
{
  id: 'vibrating-platform', tags: ['elec'], cover: { src: 'media/vibe-fea.webp' },
  org: T('Tec de Monterrey'), year: '2024', status: 'done',
  title: T('Bass-responsive vibrating platform', 'Plataforma vibratoria que responde a los graves'),
  summary: T('A floor that vibrates with the low frequencies of music, from microphone to 110 V motor.', 'Una plataforma que vibra con las frecuencias bajas de la música, del micrófono al motor de 110 V.'),
  facts: [[T('Course', 'Materia'), T('Mechatronics Integration', 'Integración Mecatrónica')], [T('Year', 'Año'), T('Jun 2024', 'Jun 2024')], [T('Team', 'Equipo'), T('4 students, team lead', '4 estudiantes, líder del equipo')], [T('Tools', 'Herramientas'), T('Arduino, Altium Designer, SolidWorks, SolidWorks Simulation')]],
  kpis: [[T('≈ 100 Hz'), T('low-pass cut-off', 'frecuencia de corte')], [T('120 kg'), T('static FEA load', 'carga en FEA estático')], [T('40 W'), T('110 V AC vibration motor', 'motor vibratorio de 110 V CA')]],
  challenge: T('Add a tactile dimension to music: a 60 × 60 cm platform that vibrates in step with the bass.', 'Agregar una dimensión táctil a la música: una plataforma de 60 × 60 cm que vibra al ritmo de los graves.'),
  approach: [
    T('A KY-038 microphone feeds an RC low-pass filter (330 Ω, 4.7 µF, cut-off near 100 Hz) into the Arduino.', 'Un micrófono KY-038 alimenta un filtro pasa-bajas RC (330 Ω, 4.7 µF, corte cerca de 100 Hz) hacia el Arduino.'),
    T('Firmware folds the signal around its midpoint, takes the peak of each window and maps it to the power of a phase-control AC dimmer that drives the motor.', 'El firmware refleja la señal respecto a su punto medio, toma el pico de cada ventana y lo convierte en la potencia de un dimmer de control de fase que alimenta el motor.'),
    T('Two MDF boards joined by 3D-printed supports: rigid PLA guides and a flexible TPU damper, sized by hand calculation and checked with static and fatigue FEA.', 'Dos tableros de MDF unidos por soportes impresos en 3D: guías rígidas de PLA y un amortiguador flexible de TPU, dimensionados por cálculo y verificados con FEA estático y de fatiga.')
  ],
  results: T('The platform vibrated in sync with the bass of the music. Possible improvements include several motors for a wider frequency range and user controls for intensity.', 'La plataforma vibró en sincronía con los graves de la música. Entre las mejoras posibles están varios motores para un rango de frecuencias más amplio y controles de intensidad para el usuario.'),
  role: T("I led the team of four and focused on the electronics and software. I designed the RC low-pass filter and solved the signal-clarity and compatibility problems. I also integrated the Arduino UNO, the KY-038 microphone and the AC dimmer, and wrote the firmware. I took part in the mechanical design as well, including the FEA of the supports.", "Lideré el equipo de cuatro integrantes y me enfoqué en la electrónica y el software. Diseñé el filtro pasa-bajas RC y resolví los problemas de claridad de señal y de compatibilidad entre componentes. También integré el Arduino UNO, el micrófono KY-038 y el dimmer de CA, y escribí el firmware. Participé además en el diseño mecánico, incluido el análisis por elementos finitos de los soportes."),
  gallery: [
    { src: 'media/vibe-1.webp', ...T('CAD model of the platform.', 'Modelo CAD de la plataforma.') },
    { src: 'media/vibe-2.webp', ...T('Static finite-element analysis.', 'Análisis estático por elementos finitos.') },
    { src: 'media/vibe-3.webp', ...T('Side view with the vibration motor.', 'Vista lateral con el motor vibratorio.') },
    { src: 'media/vibe-4.webp', ...T('Section of a support: PLA guide and TPU damper.', 'Corte de un soporte: guía de PLA y amortiguador de TPU.') },
    { src: 'media/vibe-5.webp', ...T('Schematic: microphone, filter, Arduino and dimmer.', 'Esquemático: micrófono, filtro, Arduino y dimmer.') }
  ], videos: [], clips: []
},
{
  id: 'emotion-recognition', solo: true, tags: ['vision'], cover: { motif: 'vision' },
  org: T('MIT'), year: '2024', status: 'done',
  title: T('Emotion recognition for human–robot interaction', 'Reconocimiento de emociones para interacción humano–robot'),
  summary: T('A YOLOv8 model that reads facial expressions so FrED can respond to its operator.', 'Un modelo YOLOv8 que lee expresiones faciales para que FrED responda a su operador.'),
  facts: [[T('Context', 'Contexto'), T('Research collaboration, MIT', 'Colaboración de investigación, MIT')], [T('Year', 'Año'), T('Aug – Dec 2024', 'Ago – dic 2024')], [T('Tools', 'Herramientas'), T('Python, YOLOv8, OpenCV')]],
  kpis: [[T('85 %'), T('model accuracy', 'precisión del modelo')], [T('10+'), T('papers reviewed', 'artículos revisados')]],
  challenge: T('Give FrED, a low-cost fiber extrusion device used in teaching, a way to react to the person operating it.', 'Dar a FrED, un dispositivo de extrusión de fibra de bajo costo usado en docencia, una forma de reaccionar a la persona que lo opera.'),
  approach: [
    T('Trained an emotion recognition model on facial expressions with YOLOv8 and OpenCV.', 'Entrené un modelo de reconocimiento de emociones a partir de expresiones faciales con YOLOv8 y OpenCV.'),
    T('Reviewed more than ten research papers to refine the method and evaluate wearable device integration.', 'Revisé más de diez artículos de investigación para afinar el método y evaluar la integración de dispositivos portátiles.')
  ],
  results: T('The model reached 85 % accuracy.', 'El modelo alcanzó 85 % de precisión.'),
  role: T("As a research collaborator, I developed the emotion recognition model with YOLOv8 and OpenCV and reviewed more than ten papers to refine the method and assess wearable integration.", "Como colaborador de investigación, desarrollé el modelo de reconocimiento de emociones con YOLOv8 y OpenCV y revisé más de diez artículos para afinar el método y evaluar la integración con dispositivos portátiles."),
  gallery: [], videos: [], clips: []
}
];

const FILTERS = [['all', T('All', 'Todos')], ['sim', T('Simulation & digital twins', 'Simulación y gemelos digitales')], ['robot', T('Robotics & automation', 'Robótica y automatización')], ['ctrl', T('Control', 'Control')], ['elec', T('Electronics', 'Electrónica')], ['vision', T('Vision & AI', 'Visión e IA')]];

const SKILLS = [
  [T('Simulation & digital twins', 'Simulación y gemelos digitales'), ['MATLAB', 'Simulink', 'LTspice', 'Proteus', 'Optuna', 'Process Simulate', 'Plant Simulation', 'Machine Expert Twin', 'RobotStudio', T('SolidWorks FEA', 'FEA en SolidWorks')]],
  [T('Robotics & automation', 'Robótica y automatización'), ['ABB RAPID', 'Lexium cobot', 'Siemens TIA Portal', 'S7-1200 / S7-300', 'Schneider M262', 'Profinet', 'HMI', 'ISO 10218 / 13849']],
  [T('Control', 'Control'), [T('State-space design', 'Espacio de estados'), T('Pole placement', 'Asignación de polos'), 'PI / PID', T('Motion profiles', 'Perfiles de movimiento'), T('Hysteresis control', 'Control con histéresis'), 'HIL']],
  [T('Electronics', 'Electrónica'), [T('Analog conditioning', 'Acondicionamiento analógico'), T('Power supplies', 'Fuentes de alimentación'), T('High-voltage protection', 'Protección de alto voltaje'), 'Altium Designer', 'KiCad', 'VisualCAM', 'DFM / IPC']],
  [T('Embedded & programming', 'Embebidos y programación'), ['Python', 'MATLAB', 'C / C++', 'STM32 HAL', 'Arduino', 'Raspberry Pi', 'UART · I²C · SPI']],
  [T('Vision & AI', 'Visión e IA'), ['OpenCV', 'YOLOv8', 'ArUco', 'Cognex In-Sight', 'Datalogic VPM']],
  [T('CAD & fabrication', 'CAD y fabricación'), ['SolidWorks', 'Fusion 360', T('3D printing', 'Impresión 3D'), T('Laser cutting', 'Corte láser')]],
];

