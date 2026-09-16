/* =====================================================================
   DIRECTORIO — Mesa Departamental "Voces Unidas" · Beni
   Fuente: directorio Mesa_Voces_Unidas_Beni.docx (Gestión 2026)
   ---------------------------------------------------------------------
   Para actualizar una institución basta con editar su objeto aquí.
   - imagen: nombre del archivo dentro de la carpeta img/ (jpg/png/webp).
   - imagenAjuste: "cover" para fotografías (se recortan al marco); omitir para logos (se muestran enteros).
   - Campos vacíos ("" o []) se muestran como "No disponible".
   - fuenteContacto: origen de los datos de contacto (datos validados, gestión 2026).
   ===================================================================== */

const MESA = {
  nombre: "Mesa Departamental “Voces Unidas frente a la Violencia Sexual contra Niñas, Niños y Adolescentes”",
  lugar: "Departamento del Beni · Trinidad, Bolivia",
  gestion: "Gestión 2026",
  presidencia: "Servicio Departamental de Gestión Social (SEDEGES) Beni",
  secretariaTecnica: "Defensoría del Pueblo – Delegación Defensorial Departamental del Beni",
  presentacion:
    "Caracterización descriptiva de las instituciones y actores que participan o se articulan con la Mesa Departamental en el Beni. Su propósito es facilitar la comprensión de la responsabilidad y aporte de cada institución dentro de una respuesta interinstitucional orientada a la prevención de la violencia sexual, la protección integral de niñas, niños y adolescentes, la atención de víctimas y la coordinación de las acciones de seguimiento.",
  antecedentes:
    "La Mesa constituye un espacio de articulación multisectorial destinado a fortalecer la respuesta frente a la violencia sexual que afecta a niñas, niños y adolescentes. Permite identificar dificultades en la respuesta institucional, promover acciones preventivas, fortalecer capacidades, mejorar la derivación y referencia de casos y realizar seguimiento a compromisos. La guía de implementación contempla representación de Policía/FELCV, Ministerio Público, Tribunal Departamental de Justicia, SEDES, SEDEGES, instancia municipal de desarrollo social, Defensorías de la Niñez y Adolescencia, SLIM y sociedad civil organizada.",
  articulacion: [
    "Ninguna institución puede responder por sí sola a todas las dimensiones de una situación de violencia: la protección integral demanda coordinación entre servicios municipales, instancias departamentales, Policía, Ministerio Público, Órgano Judicial, salud, sociedad civil y cooperación.",
    "La articulación comienza con la prevención y continúa con la detección, orientación, denuncia, protección inmediata, atención médica y psicológica, investigación, acceso a justicia y seguimiento. En cada etapa debe estar claro quién tiene competencia, quién deriva, quién recibe el caso y quién realiza el seguimiento.",
    "La Mesa funciona como espacio estratégico para revisar la ruta de atención, identificar nudos críticos, establecer acuerdos interinstitucionales, definir responsables y dar seguimiento a los compromisos."
  ],
  lineasPrioritarias: [
    "Fortalecimiento de la ruta interinstitucional de prevención, denuncia, protección, atención, investigación, justicia y seguimiento.",
    "Definición y actualización de puntos focales institucionales, considerando los cambios frecuentes de personal.",
    "Mecanismos de referencia y contrarreferencia claros, oportunos y respetuosos de la confidencialidad.",
    "Fortalecimiento continuo de capacidades de profesionales de protección, salud, Policía, Fiscalía, justicia y servicios especializados.",
    "Acciones preventivas territoriales dirigidas a familias, unidades educativas, comunidades y adolescentes.",
    "Generación y análisis de información agregada para identificar brechas y avances sin exponer datos personales de las víctimas.",
    "Seguimiento sistemático de acuerdos mediante responsables, plazos y resultados esperados.",
    "Promoción de la participación segura de niñas, niños y adolescentes en acciones de prevención y construcción de propuestas."
  ],
  fuentes: [
    "Defensoría del Pueblo del Estado Plurinacional de Bolivia — publicaciones sobre la Mesa Departamental en el Beni.",
    "Gobierno Autónomo Municipal de Trinidad — estructura municipal y datos de la Defensoría de la Niñez y Adolescencia.",
    "Gobierno Autónomo Departamental del Beni — servicios departamentales desconcentrados y estructura de SEDEGES.",
    "Órgano Judicial – Tribunal Departamental de Justicia del Beni — misión, visión y datos de contacto.",
    "UNICEF Bolivia — líneas de trabajo en protección de la niñez y adolescencia.",
    "UNFPA Bolivia — salud sexual y reproductiva, adolescencia, género y prevención de violencia."
  ]
};

/* Categorías (etiqueta + color) */
const CATEGORIAS = {
  departamental: { nombre: "Nivel departamental",          color: "#1f6feb" },
  municipal:     { nombre: "Nivel municipal",              color: "#0e8a6a" },
  justicia:      { nombre: "Justicia y seguridad",         color: "#a5309b" },
  salud:         { nombre: "Salud",                        color: "#d9480f" },
  derechos:      { nombre: "Derechos humanos",             color: "#b0761a" },
  cooperacion:   { nombre: "Cooperación internacional",    color: "#0b7285" },
  sociedad:      { nombre: "Sociedad civil y comunidad",   color: "#5c7cfa" }
};

const INSTITUCIONES = [
  {
    id: "sedeges",
    nombre: "Servicio Departamental de Gestión Social (SEDEGES) Beni",
    sigla: "SEDEGES",
    categoria: "departamental",
    rolMesa: "Presidencia de la Mesa",
    dependencia: "Gobierno Autónomo Departamental del Beni (instancia desconcentrada)",
    ambito: "Departamental",
    imagen: "sedeges.jpg",
    descripcion:
      "Instancia desconcentrada del Gobierno Autónomo Departamental del Beni. Su ámbito de trabajo se relaciona con la gestión social y la atención de poblaciones en situación de vulnerabilidad, entre ellas niñas, niños, adolescentes, familias y otros grupos que requieren protección y atención especializada. Su estructura contempla áreas de coordinación, administración y finanzas y asuntos de género y generacionales.",
    servicios: [
      "Acciones de protección social y servicios especializados para niñez y adolescencia",
      "Programas y centros de atención",
      "Prevención y atención de situaciones de violencia",
      "Coordinación de respuestas institucionales frente a vulneraciones de derechos"
    ],
    aporteMesa:
      "Ejerce la Presidencia de la Mesa a través de su Dirección. Desde esta responsabilidad promueve la coordinación departamental, orienta la planificación de acciones, convoca a las instituciones y favorece el seguimiento de los compromisos asumidos.",
    mision:
      "Aplicar las normas y políticas sociales del país para proteger, apoyar, supervisar y coordinar programas de atención integral dirigidos a niñas, niños, adolescentes, personas adultas mayores, mujeres y sectores en situación de vulnerabilidad o desventaja social en el departamento del Beni.",
    vision:
      "Prevenir, acompañar y servir haciendo de la gestión social una prioridad, acercando protección, atención, salud y oportunidades de desarrollo a quienes más lo necesitan en todo el departamento.",
    caracteristicas: ["Preside la Mesa", "Servicio desconcentrado", "Protección social", "Centros de atención", "Género y generacional"],
    contacto: { direccion: "Calle Manuel Limpias N° 45, Ciudad Trinidad, Bolivia", telefonos: ["3 4626870"], whatsapp: "", correo: "sedegesbenigob@gmail.com", web: "https://beni.gob.bo/unidades-desconcentradas", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/SedegesBeni2023/",
      instagram: "https://www.instagram.com/sedegesbeni",
      tiktok: "https://www.tiktok.com/@sedegesbeni",
      youtube: "https://www.youtube.com/@sedegesbeni7767"
    },
    fuenteContacto: "Datos tomados de la sección 'Información de contacto' de la página oficial de Facebook de SEDEGES Beni."
  },
  {
    id: "gam-trinidad",
    nombre: "Gobierno Autónomo Municipal de Trinidad – Dirección Municipal de Gestión Social",
    sigla: "GAMT · Gestión Social",
    categoria: "municipal",
    rolMesa: "Representación del nivel municipal",
    dependencia: "Secretaría de Desarrollo Humano y Social del GAM Trinidad",
    ambito: "Municipal · Trinidad",
    imagen: "gam-trinidad.png",
    descripcion:
      "Instancia municipal vinculada con la gestión de acciones de protección social, promoción de derechos y atención de población en situación de vulnerabilidad. Articula los servicios especializados y las acciones territoriales de prevención, protección y atención en el municipio de Trinidad.",
    servicios: [
      "Atención integral, asistencia médica, provisión de alimentos y auxilio a niños, adultos mayores, personas en situación de calle o con discapacidad",
      "Planes de atención estacionales y pago de bonos de inclusión social",
      "Articulación de servicios especializados municipales (DNA, SLIM)",
      "Acciones preventivas con familias, unidades educativas y comunidades"
    ],
    aporteMesa:
      "Representa al nivel municipal y vincula las decisiones departamentales con los servicios y acciones que se desarrollan en el territorio de Trinidad. Favorece la coordinación con la DNA, el SLIM y otras instancias municipales.",
    mision:
      "Brindar atención integral, asistencia médica, provisión de alimentos y auxilio a niños, adultos mayores y personas en situación de calle o con discapacidad; ejecutar planes de atención estacionales y el pago de bonos de inclusión social para sectores desprotegidos.",
    vision:
      "Consolidar un municipio inclusivo donde las familias y los habitantes vivan con dignidad, seguridad e igualdad de oportunidades, siendo un referente local eficiente en la protección de los derechos de los grupos vulnerables y la reducción de la desigualdad en la región.",
    caracteristicas: ["Nivel municipal", "Protección social", "Acción humanitaria", "Bonos de inclusión", "Enlace DNA / SLIM"],
    contacto: { direccion: "Calle Antonio Vaca Diez, Trinidad, Bolivia", telefonos: ["4621322", "4621361", "4621477"], whatsapp: "", correo: "contacto@trinidad.gob.bo", web: "https://www.trinidad.gob.bo", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/GAMTDD",
      instagram: "https://www.instagram.com/municipiodetrinidad",
      tiktok: "https://www.tiktok.com/@gamtrinidad",
      x: "https://x.com/GobMunTrinidad"
    },
    fuenteContacto: "Teléfonos, correo y redes tomados del pie del sitio oficial trinidad.gob.bo (Guía Telefónica del GAMT)."
  },
  {
    id: "dna",
    nombre: "Defensoría de la Niñez y Adolescencia (DNA) – Trinidad",
    sigla: "DNA",
    categoria: "municipal",
    rolMesa: "Actor municipal de protección y activación de ruta",
    dependencia: "Gobierno Autónomo Municipal de Trinidad",
    ambito: "Municipal · Trinidad",
    imagen: "dna.jpg",
    descripcion:
      "Servicio municipal especializado destinado a promover, proteger y defender los derechos de niñas, niños y adolescentes. Interviene frente a situaciones de vulneración de derechos y se articula con otras instituciones cuando la situación requiere protección social, atención psicológica, asistencia social o actuación jurídica.",
    servicios: [
      "Orientación y atención de NNA y sus familias",
      "Intervención ante vulneraciones de derechos",
      "Coordinación y derivación de casos",
      "Acciones legales: interposición de acciones y querellas en delitos donde las víctimas sean NNA",
      "Contención legal, psicológica y social ante riesgo social, negligencia, abandono o violencia"
    ],
    aporteMesa:
      "Actor municipal fundamental frente a la violencia sexual: interviene en la protección de la víctima, activa la ruta correspondiente y coordina con Fiscalía, FELCV, salud, justicia y otros servicios, priorizando el interés superior del niño, la confidencialidad y la prevención de la revictimización.",
    mision:
      "Difundir, promover y garantizar el ejercicio pleno de los derechos de las niñas, niños y adolescentes conforme a las normativas vigentes y el Código Niña, Niño y Adolescente, brindando contención legal, psicológica y social ante situaciones de vulnerabilidad, riesgo social, negligencia, abandono o violencia.",
    vision:
      "Interponer acciones, representar y presentar querellas ante el Ministerio Público u otras instancias competentes cuando se conozcan delitos o vulneraciones cuyos afectados sean menores de edad, asegurando procesos que velen por el bienestar del menor y eviten toda forma de revictimización institucional.",
    caracteristicas: ["Servicio especializado", "Protección de NNA", "Acción legal", "Interés superior del niño", "Sin revictimización"],
    contacto: { direccion: "Calle Pedro de la Rocha, Trinidad, Bolivia (537W+62P)", telefonos: ["4621322", "4621361", "4621477"], whatsapp: "", correo: "contacto@trinidad.gob.bo", web: "https://gamtenlinea.trinidad.gob.bo/Areas/12/detallesarea", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/GAMTDD",
      x: "https://x.com/GobMunTrinidad",
      tiktok: "https://www.tiktok.com/@gamtrinidad"
    },
    fuenteContacto: "Datos tomados de la ficha de la unidad en el portal GAMT en Línea (gamtenlinea.trinidad.gob.bo). Teléfonos, correo y redes corresponden al Gobierno Autónomo Municipal de Trinidad."
  },
  {
    id: "sedes",
    nombre: "Servicio Departamental de Salud (SEDES) Beni",
    sigla: "SEDES",
    categoria: "salud",
    rolMesa: "Representación del sector salud",
    dependencia: "Gobierno Autónomo Departamental del Beni",
    ambito: "Departamental",
    imagen: "sedes.jpg",
    descripcion:
      "Instancia departamental del sector salud encargada de la gestión sanitaria dentro de sus competencias y de articular los servicios y programas de salud en el departamento. La violencia sexual requiere una respuesta sanitaria oportuna y coordinada con la ruta de protección y justicia.",
    servicios: [
      "Promoción y prevención en salud",
      "Atención sanitaria e identificación de situaciones de riesgo",
      "Referencia y contrarreferencia entre establecimientos",
      "Coordinación con servicios de protección y justicia",
      "Capacitación del personal de salud"
    ],
    aporteMesa:
      "Representa al sector salud y contribuye a mejorar la coordinación entre establecimientos, servicios especializados y las instituciones responsables de protección y justicia. Aporta en capacitación del personal y en la definición de mecanismos de referencia.",
    mision:
      "Ser la institución rectora en salud en el departamento del Beni, orientada a garantizar la gestión y la atención en salud con calidad, equidad y participación social.",
    vision:
      "Que la población del Beni haya mejorado su salud y acceda de manera universal y oportuna a los servicios del sistema público.",
    caracteristicas: ["Rectoría en salud", "Referencia / contrarreferencia", "Atención sanitaria", "Capacitación"],
    contacto: { direccion: "Calle La Paz esq. 18 de Noviembre, Ciudad Trinidad, Bolivia", telefonos: ["(591-3) 4622818", "(591-3) 4621904"], whatsapp: "", correo: "", web: "https://www.minsalud.gob.bo/contacto/guia-telefonica/59-servicio-departamental-de-salud-beni", horario: "Lunes a viernes de 08:30 a 12:00 y de 14:30 a 18:00" },
    redes: { facebook: "https://www.facebook.com/SedesBeni/" },
    fuenteContacto: "Dirección, teléfonos y horario de la ficha de Google (SEDES Beni). Registrado administrativamente también en calle Nicolás Suárez s/n (guía telefónica del Ministerio de Salud)."
  },
  {
    id: "cepat",
    nombre: "Centro Especializado de Prevención y Atención Terapéutica (CEPAT)",
    sigla: "CEPAT",
    categoria: "departamental",
    rolMesa: "Atención terapéutica especializada",
    dependencia: "SEDEGES Beni",
    ambito: "Departamental",
    imagen: "cepat.png",
    descripcion:
      "Instancia especializada vinculada al SEDEGES Beni, orientada a la prevención y atención terapéutica de niñas, niños y adolescentes víctimas de violencia sexual. Complementa las acciones de protección social con intervención psicológica y terapéutica.",
    servicios: [
      "Atención terapéutica especializada y ambulatoria a NNA víctimas de violencia sexual",
      "Acompañamiento terapéutico y recuperación emocional",
      "Educación preventiva y fortalecimiento de capacidades locales",
      "Acompañamiento integral psicológico y legal coordinado con instancias departamentales y judiciales"
    ],
    aporteMesa:
      "Aporta criterios técnicos desde el ámbito terapéutico, identifica necesidades de atención y contribuye a fortalecer la articulación entre protección, salud, justicia y acompañamiento psicológico.",
    mision:
      "Brindar atención terapéutica especializada y ambulatoria a niñas, niños y adolescentes víctimas de violencia sexual para su recuperación emocional y la construcción de un proyecto de vida resiliente.",
    vision:
      "Disminuir los índices de violencia sexual y embarazos en la adolescencia a través de la educación preventiva y el fortalecimiento de capacidades locales, evitando la revictimización con acompañamiento integral, psicológico y legal.",
    caracteristicas: ["Terapia especializada", "Atención ambulatoria", "Recuperación emocional", "Prevención"],
    contacto: { direccion: "Calle Félix Sattori esq. José Natusch (interior centro Gota de Leche), Trinidad, Bolivia", telefonos: ["4626870"], whatsapp: "", correo: "", web: "https://www.unicef.org/bolivia/informes/centro-especializado-de-prevenci%C3%B3n-y-atenci%C3%B3n-terap%C3%A9utica-cepat-0", horario: "" },
    redes: { facebook: "https://www.facebook.com/SedegesBeni2023/" },
    fuenteContacto: "Dirección y teléfono del directorio de CEPAT y CAT en Bolivia (publicación UNICEF Bolivia). El teléfono corresponde a la central de SEDEGES Beni, del que depende el centro. Difusión a través de la página de Facebook de SEDEGES Beni."
  },
  {
    id: "felcv",
    nombre: "Fuerza Especial de Lucha Contra la Violencia (FELCV) – Beni",
    sigla: "FELCV",
    categoria: "justicia",
    rolMesa: "Ruta de denuncia e investigación policial",
    dependencia: "Policía Boliviana",
    ambito: "Departamental",
    imagen: "felcv.jpg",
    imagenAjuste: "cover",
    descripcion:
      "Unidad especializada de la Policía Boliviana que interviene en hechos de violencia dentro de sus competencias. Constituye uno de los puntos de contacto de la ruta de denuncia e investigación de hechos de violencia.",
    servicios: [
      "Recepción y procesamiento de denuncias",
      "Actuaciones investigativas",
      "Acciones inmediatas de prevención, auxilio y atención a víctimas",
      "Identificación y aprehensión de presuntos responsables",
      "Coordinación con el Ministerio Público y las instancias de protección"
    ],
    aporteMesa:
      "Aporta la perspectiva policial y operativa de la ruta de atención, permite identificar dificultades en la denuncia e investigación y favorece la coordinación con Fiscalía, DNA, salud y otras instituciones.",
    mision:
      "Ejecutar acciones inmediatas de prevención, auxilio y atención a víctimas de violencia; investigar, identificar y aprehender a los presuntos responsables de delitos de violencia; y defender la integridad y los derechos de las mujeres, niños, niñas, adolescentes y miembros de la familia.",
    vision:
      "Ser un organismo técnico, científico y altamente especializado; consolidar una institución transparente con cero tolerancia a la corrupción; y garantizar una vida libre de violencia preservando la tranquilidad de las familias en el Beni y todo el país.",
    caracteristicas: ["Policía especializada", "Denuncia e investigación", "Auxilio inmediato", "Cero tolerancia"],
    contacto: { direccion: "Zona San Juan, calle Joaquín de la Sierra S/N, Trinidad, Bolivia", telefonos: ["3-4624875", "800140348 (línea gratuita)"], whatsapp: "72042709", correo: "", web: "", horario: "Servicio de emergencia y denuncias las 24 horas" },
    redes: { facebook: "https://www.facebook.com/FelcvBolivia/" },
    fuenteContacto: "Dirección y número de referencia 72042709 del directorio del Observatorio del Órgano Judicial (obs.organojudicial.gob.bo); teléfono fijo 3-4624875 del directorio nacional de la FELCV. Línea gratuita nacional 800-140348."
  },
  {
    id: "fiscalia",
    nombre: "Ministerio Público – Fiscalía Departamental del Beni",
    sigla: "Fiscalía",
    categoria: "justicia",
    rolMesa: "Perspectiva jurídico-penal",
    dependencia: "Ministerio Público del Estado Plurinacional de Bolivia",
    ambito: "Departamental",
    imagen: "fiscalia.webp",
    descripcion:
      "Institución encargada de ejercer la acción penal pública y dirigir funcionalmente la investigación de los delitos. En materia de violencia sexual contra NNA impulsa la investigación penal y coordina las actuaciones necesarias dentro del marco de sus competencias.",
    servicios: [
      "Recepción y dirección funcional de investigaciones",
      "Emisión de requerimientos fiscales",
      "Coordinación de actuaciones con la Policía",
      "Participación en procesos penales con enfoque de protección a la víctima"
    ],
    aporteMesa:
      "Aporta la perspectiva jurídico-penal, permite identificar obstáculos en la investigación y fortalece la coordinación con FELCV, DNA, servicios de salud, justicia y otros actores de protección.",
    mision:
      "Defender la legalidad y los intereses generales de la sociedad boliviana con transparencia y autonomía, ejerciendo la acción penal pública con oportunidad y objetividad, con perspectiva de género y justicia restaurativa para proteger a las víctimas y respetar los derechos humanos.",
    vision:
      "Construir una institución cercana a la gente, eficiente y orientada a resultados, que persiga los delitos con profesionalismo, procesos claros y estricto respeto a los derechos humanos.",
    caracteristicas: ["Acción penal pública", "Dirección de la investigación", "Perspectiva de género", "Justicia restaurativa"],
    contacto: { direccion: "Calle La Paz N° 131, Trinidad, Beni, Bolivia", telefonos: ["3-4620845"], whatsapp: "", correo: "", web: "https://www.fiscalia.gob.bo/fiscalia/fiscalia-beni", horario: "Lunes a viernes, horario continuo 08:00–16:00" },
    redes: {
      facebook: "https://www.facebook.com/FiscaliaGeneralBolivia/",
      x: "https://x.com/FGE_Bolivia",
      youtube: "https://www.youtube.com/@FiscaliaGeneraldeBolivia"
    },
    autoridad: "Fiscal Departamental: Silvia Erika Valverde Aguirre",
    fuenteContacto: "Dirección, teléfono/fax y autoridad del portal oficial fiscalia.gob.bo (sección Fiscalías Departamentales – Beni). Redes sociales de la Fiscalía General del Estado."
  },
  {
    id: "tdj",
    nombre: "Tribunal Departamental de Justicia del Beni – Juzgado de Niñez y Adolescencia",
    sigla: "TDJ Beni",
    categoria: "justicia",
    rolMesa: "Perspectiva judicial",
    dependencia: "Órgano Judicial del Estado Plurinacional de Bolivia",
    ambito: "Departamental",
    imagen: "tdj.png",
    descripcion:
      "Forma parte del Órgano Judicial y administra justicia dentro de las competencias que establece la normativa. Los juzgados especializados en niñez y adolescencia tienen particular relevancia en la protección de derechos y en los procesos que requieren intervención judicial.",
    servicios: [
      "Procesos y decisiones relacionados con la protección de NNA",
      "Medidas de protección",
      "Actuaciones judiciales según la competencia de cada juzgado",
      "Garantía de acceso a justicia"
    ],
    aporteMesa:
      "Aporta la perspectiva judicial, facilita la comprensión de los mecanismos de protección y permite identificar aspectos que requieren mayor coordinación entre los servicios de protección, investigación y justicia.",
    mision:
      "Impartir justicia ordinaria a nivel departamental en sujeción a los valores, principios, normas y procedimientos vigentes, traducidos en un efectivo servicio a la sociedad, garantizando la armonía, la paz social y el bien común, útiles para la consolidación del sistema de justicia plural.",
    vision:
      "Ser reconocidos socialmente por la entrega de una justicia pronta, oportuna, transparente y de calidad, traducida en resoluciones y actuaciones que garantizan la seguridad jurídica en materia ordinaria.",
    caracteristicas: ["Órgano Judicial", "Juzgado especializado en NNA", "Medidas de protección", "Acceso a justicia"],
    contacto: {
      direccion: "Av. Germán Busch N° 10 esq. Joaquín de Sierra, Trinidad",
      telefonos: ["4622035", "4621743", "4620045"],
      whatsapp: "",
      correo: "bni@organojudicial.gob.bo",
      web: "https://beni.organojudicial.gob.bo",
      horario: "Lunes a viernes 08:00–12:30 y 15:00–18:30"
    },
    redes: { facebook: "https://www.facebook.com/p/Tribunal-Departamental-de-Justicia-del-Beni-100057675330764/" },
    fuenteContacto: "Datos confirmados en la página de contacto del sitio oficial beni.organojudicial.gob.bo. Página de Facebook identificada en búsqueda web."
  },
  {
    id: "defensoria",
    nombre: "Defensoría del Pueblo – Delegación Defensorial Departamental del Beni",
    sigla: "Defensoría del Pueblo",
    categoria: "derechos",
    rolMesa: "Secretaría Técnica de la Mesa",
    dependencia: "Defensoría del Pueblo del Estado Plurinacional de Bolivia",
    ambito: "Departamental",
    imagen: "defensoria.jpg",
    descripcion:
      "Institución constitucional encargada de velar por la vigencia, promoción, difusión y cumplimiento de los derechos humanos. En el Beni desarrolla acciones de prevención, promoción, seguimiento y defensa de derechos, incluyendo intervenciones relacionadas con violencia y derechos de NNA.",
    servicios: [
      "Defensa de derechos y acciones defensoriales",
      "Seguimiento de situaciones de vulneración",
      "Orientación a la población",
      "Articulación interinstitucional",
      "Documentación de compromisos y acuerdos de la Mesa"
    ],
    aporteMesa:
      "Ejerce la Secretaría Técnica: organiza técnicamente las sesiones, da seguimiento a los acuerdos, promueve la articulación institucional, documenta compromisos y favorece que las acciones mantengan un enfoque de derechos humanos.",
    mision:
      "Somos una institución del Estado Plurinacional al servicio del pueblo para la defensa, vigencia y promoción de los derechos humanos, con énfasis en las poblaciones en situación de vulnerabilidad y sectores desfavorecidos.",
    vision:
      "Ser referentes y revolucionarios en la defensa y promoción de los derechos humanos transformando realidades.",
    caracteristicas: ["Secretaría Técnica", "Institución constitucional", "Derechos humanos", "Seguimiento de acuerdos"],
    contacto: {
      direccion: "Calle Félix Pinto Saucedo N° 68, entre Nicolás Suárez y 18 de Noviembre, Trinidad",
      telefonos: ["(3) 4652200", "(3) 4652401", "800 10 8004 (línea gratuita nacional)"],
      whatsapp: "71133372",
      correo: "correspondencia@defensoria.gob.bo",
      web: "https://www.defensoria.gob.bo/oficinas?oficina_id=16",
      horario: ""
    },
    redes: {
      facebook: "https://www.facebook.com/DPDefensorialBeni",
      x: "https://x.com/DPBoliviaOf",
      instagram: "https://www.instagram.com/dpboliviaof",
      youtube: "https://www.youtube.com/channel/UCR5jjUzRigFaB0Pr7z4aGRA"
    },
    fuenteContacto: "Dirección, teléfonos, WhatsApp y correo de la ficha 'Oficina Beni' del sitio oficial defensoria.gob.bo y de la página de Facebook 'Delegación Defensorial Departamental Beni'. Línea gratuita nacional 800 10 8004. X, Instagram y YouTube son cuentas nacionales de la institución."
  },
  {
    id: "slim",
    nombre: "Servicio Legal Integral Municipal (SLIM)",
    sigla: "SLIM",
    categoria: "municipal",
    rolMesa: "Enfoque de género y atención a mujeres",
    dependencia: "Gobierno Autónomo Municipal de Trinidad",
    ambito: "Municipal · Trinidad",
    imagen: "slim.jpg",
    descripcion:
      "Servicio municipal especializado orientado a la atención integral de mujeres en situación de violencia. Su incorporación en la Mesa responde a la relación entre violencia basada en género, violencia sexual y situaciones que afectan a adolescentes mujeres.",
    servicios: [
      "Orientación y atención legal, psicológica y social",
      "Prevención de violencia basada en género",
      "Derivación y articulación con la DNA cuando la situación involucra a una adolescente",
      "Fortalecimiento de rutas municipales de derivación"
    ],
    aporteMesa:
      "Aporta desde el enfoque de género, la prevención de violencia, la atención especializada y el fortalecimiento de las rutas municipales de derivación y coordinación.",
    mision:
      "Brindar atención integral e interdisciplinaria mediante colaboración interinstitucional para facilitar el acceso a la justicia de mujeres en situación de violencia y sus familias, promoviendo el ejercicio pleno de sus derechos y la reconstrucción de sus proyectos de vida con perspectiva de género.",
    vision:
      "Constituirse en una institución especializada y referente en la atención a mujeres afectadas por la violencia, impulsando la equidad, la igualdad y una transformación cultural orientada a una vida libre de violencia.",
    caracteristicas: ["Servicio municipal", "Atención integral a mujeres", "Enfoque de género", "Atención legal y psicológica"],
    contacto: { direccion: "Av. Beni (lado del colegio 25 de Diciembre), Trinidad, Bolivia", telefonos: ["4621322", "4621361", "4621477"], whatsapp: "", correo: "contacto@trinidad.gob.bo", web: "https://www.trinidad.gob.bo/gobierno-mcpal/actividad-municipal/7293-slim-integral-mujer.html", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/GAMTDD",
      instagram: "https://www.instagram.com/municipiodetrinidad",
      tiktok: "https://www.tiktok.com/@gamtrinidad",
      x: "https://x.com/GobMunTrinidad",
      whatsapp: "https://whatsapp.com/channel/0029VafVtqPAu3aLI1Lyvs0H"
    },
    fuenteContacto: "Redes sociales y canal de WhatsApp tomados de la nota 'SLIM Integral Mujer' del sitio oficial trinidad.gob.bo. Teléfonos y correo corresponden a la central del Gobierno Autónomo Municipal de Trinidad."
  },
  {
    id: "unicef",
    nombre: "UNICEF Bolivia",
    sigla: "UNICEF",
    categoria: "cooperacion",
    rolMesa: "Cooperación técnica y fortalecimiento de capacidades",
    dependencia: "Fondo de las Naciones Unidas para la Infancia",
    ambito: "Nacional · Cooperación internacional",
    imagen: "unicef.png",
    descripcion:
      "Fondo de las Naciones Unidas para la Infancia. Trabaja para promover y proteger los derechos de niñas, niños y adolescentes. En Bolivia brinda cooperación técnica y apoyo a políticas, programas y acciones orientadas a la protección, desarrollo, participación y bienestar de la niñez y adolescencia.",
    servicios: [
      "Asistencia técnica y fortalecimiento de capacidades",
      "Desarrollo y transferencia de herramientas metodológicas",
      "Generación de evidencia",
      "Apoyo a políticas públicas y servicios de protección",
      "Programas quinquenales junto al Estado boliviano, ONG y sociedad civil"
    ],
    aporteMesa:
      "Fortalece las capacidades institucionales, apoya procesos de formación, facilita herramientas de prevención y protección y contribuye a consolidar mecanismos de coordinación y seguimiento.",
    mision:
      "Asegurar el cumplimiento de los derechos civiles, políticos, económicos y sociales de la niñez; extender la protección legal y el desarrollo a la niñez, la adolescencia, las mujeres y los pueblos indígenas; trabajando mediante programas quinquenales junto al Estado boliviano, ONG y la sociedad civil.",
    vision:
      "Garantizar una atención adecuada en la primera infancia —salud, nutrición y educación— y construir entornos protectores que superen los obstáculos de la pobreza, la violencia, el abuso y la discriminación.",
    caracteristicas: ["Naciones Unidas", "Cooperación técnica", "Herramientas metodológicas", "Evidencia", "Entornos protectores"],
    contacto: { direccion: "Calle 20 N° 7720, Calacoto, La Paz (oficina central)", telefonos: ["+591 2 2770222"], whatsapp: "", correo: "", web: "https://www.unicef.org/bolivia", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/unicefbolivia/",
      instagram: "https://www.instagram.com/unicef.bolivia/",
      x: "https://x.com/UNICEFBolivia",
      youtube: "https://www.youtube.com/user/UNICEFBolivia",
      tiktok: "https://www.tiktok.com/@unicefbolivia",
      linkedin: "https://www.linkedin.com/company/unicef-bolivia"
    },
    fuenteContacto: "Dirección y teléfono de la página 'Contáctanos' de unicef.org/bolivia (oficina Santa Cruz: Manzana 40, Torre II, piso 9, Hub 40). Redes tomadas del pie del sitio oficial."
  },
  {
    id: "unfpa",
    nombre: "UNFPA Bolivia",
    sigla: "UNFPA",
    categoria: "cooperacion",
    rolMesa: "Asistencia técnica en adolescencia, género y prevención",
    dependencia: "Fondo de Población de las Naciones Unidas",
    ambito: "Nacional · Cooperación internacional",
    imagen: "unfpa.jpg",
    descripcion:
      "Agencia del Sistema de Naciones Unidas especializada en salud sexual y reproductiva, igualdad de género, adolescencia y juventud y prevención de violencia. Su trabajo se vincula directamente con factores de protección y prevención relacionados con adolescentes.",
    servicios: [
      "Asistencia técnica y fortalecimiento de políticas y servicios",
      "Promoción de derechos sexuales y reproductivos",
      "Prevención de violencia basada en género",
      "Trabajo con adolescentes y jóvenes",
      "Programa País 2023-2027: prevención de la violencia basada en género y el embarazo en adolescentes"
    ],
    aporteMesa:
      "Contribuye con conocimientos especializados, asistencia técnica, fortalecimiento de capacidades y articulación de acciones preventivas relacionadas con adolescencia, género y violencia sexual.",
    mision:
      "Lograr el acceso universal a la salud sexual y reproductiva (embarazos deseados), reducir la mortalidad materna y proteger la salud de las mujeres (partos seguros), y promover que los jóvenes alcancen su máximo potencial y ejerzan sus derechos.",
    vision:
      "Bajo el Programa País 2023-2027, prevenir la violencia basada en género y el embarazo en adolescentes en Bolivia.",
    caracteristicas: ["Naciones Unidas", "Salud sexual y reproductiva", "Adolescencia y juventud", "Igualdad de género"],
    contacto: { direccion: "Calle 11 N° 503 esq. Av. Ballivián, Edificio Torre Calacoto, piso 6, Calacoto, La Paz", telefonos: ["+591 2 2121693", "+591 2 2770214"], whatsapp: "", correo: "bolivia.office@unfpa.org", web: "https://bolivia.unfpa.org", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/UNFPABolivia",
      x: "https://x.com/unfpabolivia",
      youtube: "https://www.youtube.com/user/UNFPABol"
    },
    fuenteContacto: "Dirección, teléfonos y correo del directorio de agencias de bolivia.un.org. Redes tomadas del pie del sitio oficial bolivia.unfpa.org."
  },
  {
    id: "psf",
    nombre: "Fundación Psicólogos Sin Fronteras Beni",
    sigla: "PSF Beni",
    categoria: "sociedad",
    rolMesa: "Acompañamiento psicosocial y capacitación",
    dependencia: "Organización de la sociedad civil sin fines de lucro",
    ambito: "Departamental · Sociedad civil",
    imagen: "psf.png",
    descripcion:
      "Actor de la sociedad civil que aporta capacidades profesionales vinculadas al acompañamiento psicológico y psicosocial. Fortalece la dimensión emocional y comunitaria de las acciones de prevención y atención.",
    servicios: [
      "Atención y acompañamiento psicológico",
      "Prevención, atención y reparación psicológica integral de mujeres, adolescentes y niñas en situación de violencia",
      "Sensibilización y capacitación",
      "Fortalecimiento de capacidades de actores institucionales y comunitarios"
    ],
    aporteMesa:
      "Contribuye desde el ámbito psicosocial, apoya procesos de capacitación y participa en acciones de prevención y fortalecimiento de capacidades de actores institucionales y comunitarios.",
    mision:
      "Organización sin fines de lucro dedicada a la prevención, atención y reparación psicológica integral de mujeres, adolescentes y niñas en situación de violencia de género en el Beni, contribuyendo al bienestar psicosocial individual y colectivo y promoviendo el ejercicio pleno de los derechos humanos en los sectores más vulnerables.",
    vision:
      "Ser la organización referente y líder en el Beni en la atención psicosocial de mujeres en situación de violencia de género, destacada por su calidad técnica, ética profesional y enfoque de derechos humanos, construyendo una sociedad beniana donde las mujeres vivan libres de toda forma de violencia.",
    caracteristicas: ["Sociedad civil", "Sin fines de lucro", "Atención psicosocial", "Reparación psicológica", "Capacitación"],
    contacto: { direccion: "Av. 18 de Noviembre N° 375, entre Sucre y Vaca Díez, Trinidad", telefonos: ["72125764"], whatsapp: "", correo: "psfbeni2009@gmail.com", web: "https://www.psfbeni.org", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/share/1AYkv4vgJu/",
      instagram: "https://www.instagram.com/psf_beni20",
      tiktok: "https://www.tiktok.com/@psfbeni20"
    },
    fuenteContacto: "Todos los datos provienen del sitio oficial psfbeni.org. El enlace de Facebook es un enlace compartido (share)."
  },
  {
    id: "vida-libre",
    nombre: "Red de Promotoras Comunitarias “Vida Libre”",
    sigla: "Red Vida Libre",
    categoria: "sociedad",
    rolMesa: "Perspectiva territorial y comunitaria",
    dependencia: "Organización comunitaria de base",
    ambito: "Comunitario · Barrios de Trinidad",
    imagen: "vida-libre.jpg",
    imagenAjuste: "cover",
    descripcion:
      "Actor comunitario de prevención y movilización social frente a las violencias. El trabajo de las promotoras acerca información y acciones preventivas a espacios comunitarios y favorece la identificación temprana de situaciones de riesgo. No sustituyen las funciones de las instituciones responsables de investigación, justicia o atención especializada.",
    servicios: [
      "Sensibilización y promoción de derechos",
      "Orientación, contención y acompañamiento psicosocial en barrios y comunidades",
      "Derivación hacia servicios institucionales (SLIM, FELCV, Fiscalía)",
      "Educación comunitaria y “puntos violetas” en los barrios de Trinidad"
    ],
    aporteMesa:
      "Aporta la perspectiva territorial y comunitaria, facilitando que las acciones preventivas lleguen a familias y comunidades y que la respuesta institucional considere las condiciones y necesidades del territorio.",
    mision:
      "Brindar guía, contención y acompañamiento psicosocial a mujeres en situación de vulnerabilidad o violencia; conectar de manera efectiva a las víctimas con los servicios públicos e instancias competentes; y promover una cultura de equidad y no violencia mediante la educación comunitaria y los “puntos violetas”.",
    vision:
      "Ser un referente organizado y reconocido de actoras comunitarias capaces de incidir en la reducción de la violencia de género en el Beni, logrando una coordinación sólida y formal con el Estado y los gobiernos locales para garantizar respuestas rápidas y justas a las víctimas.",
    caracteristicas: ["Red comunitaria", "Promotoras", "Puntos violetas", "Prevención de base", "Derivación"],
    contacto: { direccion: "Vía Fundación Psicólogos Sin Fronteras Beni: Av. 18 de Noviembre N° 375, Trinidad", telefonos: ["72125764"], whatsapp: "", correo: "psfbeni2009@gmail.com", web: "https://www.psicologossinfronteras.org/proyectos/vida-libre-proteccion-integral-contra-la-violencia-de-genero-en-la-ciudad-de-trinidad-beni-bolivia/", horario: "" },
    redes: { facebook: "https://www.facebook.com/p/Red-Nacional-de-Promotoras-Comunitarias-Bolivia-100086810584362/" },
    fuenteContacto: "La Red 'Vida Libre' nace del proyecto homónimo ejecutado por Psicólogos Sin Fronteras Beni (socio local), por lo que se consigna el contacto de esa fundación. La página de Facebook es la de la Red Nacional de Promotoras Comunitarias; no se encontró cuenta propia de la red en Trinidad."
  }
];
