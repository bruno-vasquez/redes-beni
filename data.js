/* =====================================================================
   DIRECTORIO — Mesa Departamental "Voces Unidas" · Pando
   Fuente: Directorio Voces Unidas Cobija-Pando.docx (Gestión 2026), complementado con
   el Reglamento Interno, el Acta de la Primera Sesión 2026 y el Plan Operativo 2026.
   ---------------------------------------------------------------------
   Para actualizar una institución basta con editar su objeto aquí.
   - imagen: nombre del archivo dentro de la carpeta img/ (jpg/png/webp).
   - imagenAjuste: "cover" para fotografías (se recortan al marco); omitir para logos (se muestran enteros).
   - Campos vacíos ("" o []) se muestran como "No disponible".
   - contacto.correo: texto, o lista ["a@x", "b@y"] si hay varios correos.
   - contacto.mapa: (opcional) enlace exacto de Google Maps; si falta, se busca por la dirección escrita.
   - fuenteContacto: origen de los datos de contacto (datos del documento base, gestión 2026).
   ===================================================================== */

const MESA = {
  nombre: "Mesa Departamental “Voces Unidas frente a la Violencia Sexual contra Niñas, Niños y Adolescentes”",
  lugar: "Departamento de Pando · Cobija, Bolivia",
  gestion: "Gestión 2026",
  presidencia: "Centro Especializado de Prevención y Atención Terapéutica (CEPAT) – Gobierno Autónomo Departamental de Pando",
  secretariaTecnica: "Defensoría del Pueblo – Delegación Defensorial Departamental de Pando",
  presentacion:
    "Caracterización descriptiva de las instituciones y actores que participan o se articulan con la Mesa Departamental en Pando. Su propósito es facilitar la comprensión de la responsabilidad y aporte de cada institución dentro de una respuesta interinstitucional orientada a la prevención de la violencia sexual, la protección integral de niñas, niños y adolescentes, la atención de víctimas y la coordinación de las acciones de seguimiento.",
  antecedentes:
    "La Mesa Departamental «Voces Unidas» se constituye como una respuesta estratégica e interinstitucional ante la persistencia de casos de vulneración de derechos y de violencia sexual y de género en la región amazónica. Históricamente, las intervenciones adolecían de fragmentación operativa y esfuerzos aislados, lo que derivaba en re-victimización y demoras en el acceso a la justicia. Su Reglamento Interno de Funcionamiento fue aprobado en julio de 2025. En la primera sesión de la gestión 2026 (12 de marzo de 2026, en la Delegación Defensorial Departamental) se socializó el informe defensorial «Sueños Interrumpidos», se suscribió un acta de compromiso para la socialización de la Ley N° 1639 y se aprobó el cronograma y el Plan de Trabajo 2026.",
  articulacion: [
    "Ninguna institución puede responder por sí sola a todas las dimensiones de una situación de violencia: la protección integral demanda coordinación entre servicios municipales, instancias departamentales, Policía, Ministerio Público, Órgano Judicial, salud, educación, organizaciones de la sociedad civil y organismos de cooperación.",
    "La articulación comienza con la prevención y continúa con la detección, orientación, denuncia, protección inmediata, atención médica y psicológica, investigación, acceso a justicia y seguimiento. En cada etapa es necesario establecer claramente quién tiene competencia, quién deriva, quién recibe el caso y quién realiza el seguimiento, evitando que la víctima y su familia deban recorrer innecesariamente múltiples instituciones.",
    "La Secretaría Técnica, a cargo de la Delegación Defensorial, convoca a las sesiones, da seguimiento a los compromisos y custodia las actas, reglamentos y planes de la Mesa. La Presidencia, a cargo del CEPAT, convoca y preside las sesiones ordinarias y extraordinarias."
  ],
  lineasPrioritarias: [
    "Prevención e incidencia: talleres educativos en escuelas con la Dirección Departamental de Educación, fortalecimiento de capacidades en comunidades rurales y campañas de sensibilización con apoyo de organizaciones no gubernamentales.",
    "Atención y ruta crítica: fluidez y optimización de las denuncias, articulando a la Policía, los servicios municipales (Dirección de Género, DNA, SLIM), la Fiscalía y el Tribunal de Justicia, con atención en salud mental y física por el SEDES.",
    "Monitoreo y calidad: mesas de control y seguimiento lideradas por la Defensoría del Pueblo y el CEPAT para verificar que el sistema funcione sin burocracia ni dilaciones.",
    "Fortalecimiento continuo de capacidades de profesionales de protección, salud, Policía, Fiscalía, justicia y servicios especializados.",
    "Desarrollo de acciones preventivas territoriales dirigidas a familias, unidades educativas, comunidades y adolescentes.",
    "Generación y análisis de información agregada que permita identificar brechas, dificultades y avances sin exponer datos personales de las víctimas.",
    "Seguimiento sistemático de acuerdos mediante responsables, plazos y resultados esperados.",
    "Promoción de la participación segura de niñas, niños y adolescentes en acciones de prevención y construcción de propuestas."
  ],
  fuentes: [
    "Defensoría del Pueblo del Estado Plurinacional de Bolivia — información institucional y publicaciones sobre la Mesa Departamental de Pando.",
    "Reglamento Interno de Funcionamiento de la Mesa Departamental «Voces Unidas» (aprobado en julio de 2025).",
    "Acta de la Primera Sesión de la gestión 2026 (12 de marzo de 2026) y Plan Operativo 2026 de la Mesa.",
    "Gobierno Autónomo Municipal de Cobija — estructura municipal y datos de la Unidad de Género, Generacional y Familia, de la que dependen el SLIM y la Defensoría de la Niñez y Adolescencia.",
    "Gobierno Autónomo Departamental de Pando — servicios departamentales desconcentrados y estructura de SEDEGES y CEPAT.",
    "Dirección Departamental de Educación (SEDUCA Pando) — protocolos de prevención, detección y derivación de violencia en entornos educativos.",
    "Comando Departamental de Policía de Pando — FELCV, Unidad de Género y FELCC.",
    "Órgano Judicial – Tribunal Departamental de Justicia de Pando y Ministerio Público – Fiscalía Departamental — misión, visión y datos de contacto.",
    "UNICEF Bolivia y UNFPA Bolivia — líneas de trabajo en protección de la niñez y adolescencia, salud sexual y reproductiva y prevención de violencia.",
    "Médicos del Mundo, Estrella del Sur (ChildFund), FOCIDEM y Red de Promotoras Comunitarias — líneas de trabajo comunitarias en Pando."
  ]
};

/* Categorías (etiqueta + color) */
const CATEGORIAS = {
  departamental: { nombre: "Nivel departamental",          color: "#1f6feb" },
  municipal:     { nombre: "Nivel municipal",              color: "#0e8a6a" },
  justicia:      { nombre: "Justicia y seguridad",         color: "#a5309b" },
  salud:         { nombre: "Salud",                        color: "#d9480f" },
  educacion:     { nombre: "Educación",                    color: "#c2255c" },
  derechos:      { nombre: "Derechos humanos",             color: "#b0761a" },
  cooperacion:   { nombre: "Cooperación internacional",    color: "#0b7285" },
  sociedad:      { nombre: "Sociedad civil y comunidad",   color: "#5c7cfa" }
};

const DOC = "Directorio Voces Unidas Cobija-Pando (documento base, gestión 2026)";

const INSTITUCIONES = [
  {
    id: "sedeges",
    nombre: "Servicio Departamental de Gestión Social (SEDEGES) Pando",
    sigla: "SEDEGES",
    categoria: "departamental",
    rolMesa: "Integrante de la Mesa · Gobierno Departamental",
    dependencia: "Gobierno Autónomo Departamental de Pando (institución pública descentralizada)",
    ambito: "Departamental · 15 municipios de Pando",
    imagen: "sedeges.jpg",
    descripcion:
      "Institución pública descentralizada y técnica, dependiente del Gobierno Autónomo Departamental de Pando. Actúa como brazo operativo y ejecutor de las políticas sociales de la Gobernación, velando por el bienestar, la protección integral y el desarrollo social de los grupos más vulnerables, excluidos o en situación de riesgo social del departamento.",
    servicios: [
      "Protección social y servicios especializados para niñez y adolescencia, incluyendo programas y centros de atención",
      "Atención a niñas, niños y adolescentes en situación de abandono, orfandad, maltrato o violencia",
      "Atención a familias en crisis o extrema pobreza, mujeres, personas adultas mayores y personas con discapacidad",
      "Prevención y atención de situaciones de violencia y coordinación de respuestas institucionales frente a vulneraciones de derechos"
    ],
    aporteMesa:
      "Integra la Mesa como parte del Gobierno Autónomo Departamental (SEDES/SEDEGES), conforme al artículo 3 del Reglamento Interno.",
    mision:
      "Diseñar, ejecutar y evaluar planes, programas y proyectos sociales integrales de protección y restitución de derechos para las poblaciones vulnerables del departamento de Pando, promoviendo la inclusión, la equidad de género y generacional, con calidad, calidez humana y transparencia institucional.",
    vision:
      "Ser la institución pública descentralizada líder y referente de la gestión social en la Amazonía boliviana, reconocida por su eficiencia operativa, la calidez de sus centros de acogimiento y su capacidad transformadora para reincorporar a las personas en situación de vulnerabilidad a entornos familiares sanos y seguros.",
    caracteristicas: ["Servicio descentralizado", "Protección social", "Centros de acogimiento", "15 municipios", "Género y generacional"],
    contacto: { direccion: "Calle Tarija, cerca de la Plaza del Deportista y frente al Coliseo Cerrado Ernesto Nishikawa, Cobija, Pando", telefonos: ["3 842-2243"], whatsapp: "", correo: "", web: "", horario: "Lunes a viernes de 8:00 a 12:30 y de 15:00 a 18:30",
      mapa: "https://www.google.com/maps/place/SEDEGES/@-11.0159859,-68.7552832,175m/data=!3m1!1e3!4m6!3m5!1s0x917eb70017ca9d53:0xd57d36d8fa9fce8f!8m2!3d-11.0160056!4d-68.7552242!16s%2Fg%2F11x7_t2z9y" },
    redes: {
      facebook: "https://www.facebook.com/p/SEDEGES-PANDO-100070692123686/?locale=es_LA"
    },
    fuenteContacto: DOC + ", sección 3.1 (dirección y horario). Teléfono (591) 3 842-2243, página de Facebook, logotipo y ubicación en Google Maps aportados por el equipo del proyecto."
  },
  {
    id: "dir-genero",
    nombre: "Gobierno Autónomo Municipal de Cobija – Dirección de Género, Generacional y Familia",
    sigla: "GAMC · Género y Familia",
    categoria: "municipal",
    rolMesa: "Representación del nivel municipal",
    dependencia: "Secretaría Municipal de Desarrollo Humano · Gobierno Autónomo Municipal de Cobija",
    ambito: "Municipal · Cobija",
    imagen: "dir-genero.jpg",
    descripcion:
      "Instancia dentro de la Secretaría Municipal de Desarrollo Humano, encargada de planificar, coordinar y ejecutar políticas públicas orientadas a la protección y restitución de derechos de mujeres, niñas, niños, adolescentes y familias en situación de vulnerabilidad. Actúa con enfoque de género, generacional y de derechos humanos, priorizando la prevención, la atención integral, la sensibilización y la articulación interinstitucional.",
    servicios: [
      "Atención, orientación, protección y patrocinio legal a mujeres y hombres en situación de violencia y a integrantes del grupo familiar, conforme a la Ley N° 348",
      "Articulación operativa de la Defensoría de la Niñez y Adolescencia (DNA) y del Servicio Legal Integral Municipal (SLIM)",
      "Prevención, sensibilización y articulación interinstitucional"
    ],
    aporteMesa:
      "Articula operativamente a la DNA y al SLIM y vincula las decisiones de la Mesa con los servicios municipales de protección en el territorio de Cobija.",
    mision:
      "Ser la institución que promueve una cultura de protección, defensa y respeto a los derechos de la mujer y la familia, comprometida con la erradicación de la violencia familiar y doméstica, mediante una intervención profesional, idónea, oportuna y efectiva, que contribuye a la transformación de la sociedad desde una perspectiva de género.",
    vision:
      "Brindar el servicio que fomenta la igualdad de oportunidades, con mujeres y hombres conviviendo en una sociedad libre de violencia y mentalmente saludable; mujeres empoderadas de sus derechos, protegidas por las leyes, que aportan activamente al desarrollo del país.",
    caracteristicas: ["Nivel municipal", "Género y generacional", "Enlace DNA / SLIM", "Ley 348"],
    contacto: { direccion: "", telefonos: [], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {},
    fuenteContacto: "Datos de contacto pendientes de confirmar; el documento base no consigna dirección propia de la Dirección."
  },
  {
    id: "dna",
    nombre: "Defensoría de la Niñez y Adolescencia (DNA) – Cobija",
    sigla: "DNA",
    categoria: "municipal",
    rolMesa: "Actor municipal de protección y activación de ruta",
    dependencia: "Dirección de Género, Generacional y Familia · Gobierno Autónomo Municipal de Cobija",
    ambito: "Municipal · Cobija (Distrito II)",
    imagen: "dna-logo.jpg",
    descripcion:
      "Instancia dependiente del gobierno municipal que presta servicios públicos gratuitos de defensa psico-socio-jurídica para garantizar a niñas, niños y adolescentes la vigencia de sus derechos, en el marco de la Constitución Política del Estado y la Ley N° 548. Funciona con un equipo interdisciplinario de profesionales legales, psicológicos y de trabajo social.",
    servicios: [
      "Recepción y valoración de denuncias, entrevistas y evaluaciones técnicas",
      "Investigaciones sociales y psicológicas, orientación y patrocinio legal cuando corresponde",
      "Coordinación de medidas de protección inmediatas, visitas domiciliarias y seguimiento de casos",
      "Derivación a instituciones competentes: Ministerio Público, Policía Boliviana, servicios de salud y unidades educativas",
      "Atención de emergencias mediante rol de turnos 24 horas, feriados y fines de semana (Hospital, Ministerio Público, FELCV, FELCC y Comando Departamental)"
    ],
    aporteMesa:
      "Es la instancia clave del municipio que activa la ruta crítica de protección ante la violencia sexual contra NNA. Coordina el flujo de los casos con la Fiscalía Departamental, la FELCV, el SEDES, el CEPAT y la Dirección Distrital de Educación.",
    mision:
      "Ser la institución que promueva, defienda, observe y dé seguimiento al respeto de los derechos de las niñas, niños y adolescentes.",
    vision:
      "Ser la institución que asegure que la voz de las niñas, niños y adolescentes sea escuchada y valorada, y que vele por el reconocimiento, respeto y restitución de sus derechos ante la sociedad en su conjunto.",
    caracteristicas: ["Servicio gratuito", "Equipo interdisciplinario", "Turnos 24 horas", "Ruta crítica", "Ley 548"],
    contacto: { direccion: "Avenida 9 de Febrero, instalaciones del Shopping Center Cobija, Distrito II, Cobija, Pando", telefonos: ["676 69-837"], whatsapp: "", correo: "", web: "", horario: "Horario de oficina; emergencias por rol de turnos 24 horas" },
    redes: {
      facebook: "https://www.facebook.com/p/Defensoria-de-la-Ni%C3%B1ez-y-Adolescencia-Cobija-100068368470507/?locale=es_LA"
    },
    fuenteContacto: DOC + ", sección 4.1 (dirección y horario). Celular 676 69-837, Facebook y logotipo aportados por el equipo del proyecto. La infografía «Ruta de atención» de la DNA (img/dna.jpg) se usa en la portada del sitio."
  },
  {
    id: "slim",
    nombre: "Servicio Legal Integral Municipal (SLIM) – Cobija",
    sigla: "SLIM",
    categoria: "municipal",
    rolMesa: "Actor municipal de atención legal, psicológica y social",
    dependencia: "Dirección de Género, Generacional y Familia · Gobierno Autónomo Municipal de Cobija",
    ambito: "Municipal · Cobija",
    imagen: "slim.jpg",
    descripcion:
      "Unidad encargada de brindar orientación legal, apoyo psicológico y asistencia social a las víctimas de violencia familiar y doméstica, asegurando el acceso a medidas de protección y a mecanismos legales para la defensa de sus derechos. Su labor se enmarca en la Ley N° 348 y presta un servicio permanente y gratuito.",
    servicios: [
      "Orientación legal, apoyo psicológico y asistencia social a víctimas de violencia",
      "Protección y defensa psicológica, social y legal de las mujeres en situación de violencia",
      "Difusión, defensa y ejercicio de los derechos de las mujeres con participación ciudadana",
      "Campañas educativas, sensibilización y prevención de la violencia de género en coordinación con instituciones públicas, privadas y organizaciones sociales"
    ],
    aporteMesa:
      "Integra el Sistema de Protección (SIPPROINNA) a nivel municipal junto con la DNA, bajo la Dirección de Género, Generacional y Familia, y recibe derivaciones de la Red de Promotoras Comunitarias.",
    mision:
      "Ser la institución que promueve una cultura de protección, defensa y respeto a los derechos de la mujer y la familia, comprometida con la erradicación de la violencia familiar y doméstica, mediante una intervención profesional, idónea, oportuna y efectiva, que contribuye a la transformación de la sociedad desde una perspectiva de género.",
    vision:
      "Brindar el servicio que fomenta la igualdad de oportunidades, con mujeres y hombres conviviendo en una sociedad libre de violencia y mentalmente saludable; mujeres empoderadas de sus derechos, protegidas por las leyes, que aportan activamente al desarrollo del país.",
    caracteristicas: ["Servicio gratuito", "Orientación legal", "Apoyo psicológico", "Asistencia social", "Ley 348"],
    contacto: { direccion: "Calle Elvira Gutiérrez N° 053, Barrio Conavi, Cobija, Pando", telefonos: ["75104501", "800-12-2003"], whatsapp: "", correo: "", web: "https://gmcobija.gob.bo", horario: "Horario de oficina",
      mapa: "https://www.google.com/maps/search/?api=1&query=-11.029030738669,-68.759855031967" },
    redes: {},
    notaValidacion: "La misión y la visión son las mismas que figuran en el documento base para la Dirección de Género, Generacional y Familia. La línea 800-12-2003 aparece en la infografía «Ruta de atención» de la DNA; confirmar con el SLIM.",
    fuenteContacto: DOC + ", secciones 4.1 y 4.2 (descripción y horario); línea 800-12-2003 tomada de la infografía «Ruta de atención» incluida en el documento. Dirección, ubicación (según la página de Facebook del SLIM), celular 75104501, sitio web gmcobija.gob.bo (sitio general del Gobierno Autónomo Municipal) y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "sedes",
    nombre: "Servicio Departamental de Salud (SEDES) Pando",
    sigla: "SEDES",
    categoria: "salud",
    rolMesa: "Respuesta sanitaria",
    dependencia: "Gobierno Autónomo Departamental de Pando",
    ambito: "Departamental",
    imagen: "sedes.jpg",
    descripcion:
      "Instancia departamental del sector salud encargada de la gestión sanitaria y de articular los servicios y programas de salud en el departamento, con el objetivo de mejorar la calidad de vida mediante la promoción, prevención, tratamiento y rehabilitación. Participa en la Mesa a través de la Unidad de Género y Violencia y del Área del Continuo del Curso de la Vida.",
    servicios: [
      "Programa Género y Violencia: prevención, detección temprana y atención de la violencia intrafamiliar y de género con enfoque de salud pública",
      "Capacitación continua al personal de salud en los municipios para una atención empática, oportuna, respetuosa e intercultural",
      "Ruta de actuación para la detección temprana de la violencia basada en género y para evitar la revictimización",
      "Prevención del embarazo adolescente e infecciones de transmisión sexual, junto con Salud Sexual y Reproductiva",
      "Área del Continuo del Curso de la Vida: vigilancia del desarrollo infantil temprano, nutrición, AIEPI e inmunizaciones (PAI)"
    ],
    aporteMesa:
      "Su participación resulta necesaria porque la violencia sexual también requiere una respuesta sanitaria oportuna y coordinada. Coordina con FELCV, Fiscalía y SLIM, y trabaja en alianza con UNFPA, UNICEF y ONU Mujeres en programas como «Alza la Voz».",
    mision:
      "Somos una institución pública, reguladora en salud a nivel departamental, garantizando la aplicación de normas sanitarias en los servicios de salud que contribuyen a la mejora de la salud de la población en el departamento de Pando.",
    vision:
      "El SEDES Pando se consolida como institución rectora en salud a nivel departamental, contribuye a garantizar la aplicación de la normativa sanitaria en los servicios de salud, coadyuvando a la mejora de la salud de la población en el departamento de Pando.",
    caracteristicas: ["Rectoría en salud", "Género y violencia", "Capacitación al personal", "Ruta de detección", "Ley 348"],
    contacto: { direccion: "Avenida 9 de Febrero, frente a las instalaciones del SEDUCA (Dirección Departamental de Educación), Cobija, Pando", telefonos: [], whatsapp: "", correo: "sedespando2022@gmail.com", web: "https://pando.gob.bo/sedes/", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/SaludDePando/?locale=es_LA"
    },
    fuenteContacto: DOC + ", sección 5 (dirección de las oficinas centrales y del Área del Continuo del Curso de la Vida). Correo y sitio web (página del SEDES dentro del portal del Gobierno Autónomo Departamental, pando.gob.bo) página de Facebook y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "cepat",
    nombre: "Centro Especializado de Prevención y Atención Terapéutica (CEPAT)",
    sigla: "CEPAT",
    categoria: "departamental",
    rolMesa: "Presidencia de la Mesa",
    dependencia: "Gobierno Autónomo Departamental de Pando",
    ambito: "Departamental",
    imagen: "cepat.png",
    descripcion:
      "Servicio público libre y sin costo, dependiente de la Gobernación, que trabaja en la prevención y la recuperación psicológica de niñas, niños y adolescentes víctimas de violencia sexual. Cuenta con una organización de atención interdisciplinaria con áreas legal, social y psicológica.",
    servicios: [
      "Atención especializada y acompañamiento terapéutico a NNA víctimas de violencia sexual y a sus familias",
      "Área legal, área social y área psicológica",
      "Recuperación emocional y coordinación con las instituciones de la ruta de protección y justicia"
    ],
    aporteMesa:
      "Ocupa la Presidencia y preside las sesiones de la Mesa. Aporta criterios técnicos desde el ámbito terapéutico, identifica necesidades de atención y fortalece la articulación entre protección, salud, justicia y acompañamiento psicológico.",
    mision:
      "Brindar servicios eficientes, de calidad y con calidez, así como prevención y atención terapéutica especializada para niñas, niños y adolescentes en situación de violencia sexual y sus familias, desde un enfoque interdisciplinario, sistémico y de resiliencia, para su recuperación psicosocial en función de un proyecto de vida libre de violencia.",
    vision:
      "Ser un servicio modelo y referente a nivel departamental para la prevención y atención especializada a niñas, niños y adolescentes en situación de violencia sexual, que promueva el ejercicio de sus derechos y fortalezca los entornos protectores a nivel familiar, escolar y comunitario.",
    caracteristicas: ["Preside la Mesa", "Servicio gratuito", "Atención terapéutica", "Equipo interdisciplinario", "Violencia sexual"],
    autoridad: "Responsable del CEPAT: Lic. Oyuki Yugar Guzmán",
    contacto: { direccion: "Avenida 9 de Febrero, al lado del SEDES Pando, Cobija, Pando", telefonos: ["72283309"], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {},
    notaValidacion: "La misión y la visión del documento base tienen errores de redacción; el texto aquí mostrado es una lectura ordenada del mismo contenido y debe validarse con el CEPAT.",
    fuenteContacto: DOC + ", sección 6 (dirección y celular). Autoridad: Acta de la Primera Sesión 2026. Logotipo aportado por el equipo del proyecto."
  },
  {
    id: "felcv",
    nombre: "Fuerza Especial de Lucha Contra la Violencia (FELCV) – Cobija",
    sigla: "FELCV",
    categoria: "justicia",
    rolMesa: "Perspectiva policial y operativa",
    dependencia: "Comando Departamental de la Policía Boliviana de Pando",
    ambito: "Departamental · Cobija",
    imagen: "felcv.jpg",
    imagenAjuste: "cover",
    descripcion:
      "Unidad especializada de la Policía Boliviana encargada de prevenir, investigar, procesar y sancionar los delitos de violencia hacia las mujeres, niñas, niños, adolescentes y miembros de la familia, bajo la Ley N° 348. Su misión y visión son las de la institución a nivel nacional y rigen para su dirección departamental en Cobija.",
    servicios: [
      "Atención inmediata, auxilio y protección a víctimas de violencia intrafamiliar, sexual o familiar las 24 horas",
      "Recepción y procesamiento de denuncias y actuaciones investigativas en coordinación con la Fiscalía",
      "Recopilación de pruebas y seguimiento de denuncias",
      "Prevención: campañas de concienciación y participación en redes departamentales de protección"
    ],
    aporteMesa:
      "Aporta la perspectiva policial y operativa de la ruta de atención, permite identificar dificultades en la denuncia e investigación y favorece la coordinación con Fiscalía, DNA, salud y otras instituciones.",
    mision:
      "Prevenir, auxiliar, investigar, identificar y aprehender a los presuntos responsables de hechos de violencia hacia las mujeres y la familia, bajo la dirección funcional del Ministerio Público, asegurando la protección integral y los derechos de las víctimas.",
    vision:
      "Consolidarse como una institución policial altamente especializada, con personal calificado, transparente y con enfoque de género y derechos humanos, que garantice a las familias del municipio de Cobija un entorno libre de violencia mediante una atención digna, oportuna y eficaz en la restitución de derechos.",
    caracteristicas: ["Policía especializada", "Atención 24 horas", "Investigación", "Denuncias", "Ley 348"],
    contacto: { direccion: "Avenida 9 de Febrero (intersección Avenida 6 de Agosto), Barrio 11 de Octubre, Cobija, Pando", telefonos: [], whatsapp: "", correo: "", web: "", horario: "Atención las 24 horas" },
    redes: {},
    fuenteContacto: DOC + ", sección 7 (dirección y atención 24 horas). Fotografía aportada por el equipo del proyecto."
  },
  {
    id: "felcc-trata",
    nombre: "División de Trata y Tráfico de Personas – FELCC Pando",
    sigla: "FELCC · Trata",
    categoria: "justicia",
    rolMesa: "Brazo operativo y preventivo de seguridad",
    dependencia: "Fuerza Especial de Lucha Contra el Crimen (FELCC) Departamental · Policía Boliviana",
    ambito: "Departamental · Cobija",
    imagen: "felcc-trata.jpg",
    descripcion:
      "Unidad especializada de la FELCC de la Policía Boliviana cuya función principal es prevenir, investigar y perseguir los delitos relacionados con la desaparición, explotación y traslado ilegal de personas, en el marco de la Ley Integral N° 263. Funciona dentro de las dependencias de la FELCC Departamental en Cobija.",
    servicios: [
      "Búsqueda e investigación inmediata de personas desaparecidas mediante protocolos de rastreo y geolocalización",
      "Persecución penal de organizaciones dedicadas a la explotación sexual comercial, laboral, mendicidad forzada, guarda ilegal o remoción de órganos",
      "Control y prevención en terminales, aeropuertos y puestos fronterizos, verificando la documentación de viaje de menores de edad",
      "Monitoreo del cibercrimen en plataformas digitales y redes sociales"
    ],
    aporteMesa:
      "Cumple el rol de brazo operativo, coercitivo y preventivo de seguridad: ejecuta búsquedas inmediatas de menores desaparecidos, realiza ciberpatrullajes para detectar captadores y fiscaliza trancas y fronteras de Pando para evitar el traslado ilegal de niños y adolescentes.",
    mision:
      "Garantizar la seguridad, libertad e integridad de la sociedad mediante la investigación eficiente de los delitos de trata, tráfico de personas y crímenes conexos, logrando la identificación, rescate y protección integral de las víctimas y la captura y puesta a disposición judicial de los autores.",
    vision:
      "Consolidarse como una unidad policial altamente especializada, moderna y referente a nivel nacional e internacional en la prevención, combate y erradicación de los delitos que atentan contra la libertad y la dignidad humana.",
    caracteristicas: ["Policía especializada", "Trata y tráfico", "Control fronterizo", "Ciberpatrullaje", "Ley 263"],
    contacto: { direccion: "Avenida Cívica, frente a la Plaza del Estudiante (dependencias de la FELCC Departamental), Cobija, Pando", telefonos: ["69564364"], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", sección 9 (dirección). Celular 69564364 (indicado como número de la FELCC) y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "fiscalia",
    nombre: "Ministerio Público – Fiscalía Departamental de Pando",
    sigla: "Fiscalía",
    categoria: "justicia",
    rolMesa: "Perspectiva jurídico-penal",
    dependencia: "Ministerio Público",
    ambito: "Departamental · Cobija",
    imagen: "fiscalia.jpg",
    imagenAjuste: "cover",
    descripcion:
      "Institución constitucional encargada de defender la legalidad y los intereses generales de la sociedad, ejercer la acción penal pública y dirigir funcionalmente la investigación de los delitos, con autonomía funcional, administrativa y financiera. Cuenta con la Fiscalía Especializada en Delitos en Razón de Género y Violencia Sexual.",
    servicios: [
      "Recepción y dirección funcional de investigaciones y emisión de requerimientos fiscales",
      "Coordinación de actuaciones con la Policía y participación en procesos penales",
      "Fiscalía Especializada en Delitos en Razón de Género y Violencia Sexual: procesa denuncias, informa sobre procedimientos legales y brinda atención y protección a víctimas",
      "Protección de la víctima, interés superior y prevención de la revictimización en casos que involucran NNA"
    ],
    aporteMesa:
      "Aporta la perspectiva jurídico-penal, identifica obstáculos en la investigación y fortalece la coordinación con FELCV, DNA, servicios de salud y justicia. La Fiscalía Especializada lidera, coordina y articula las acciones penales para garantizar la sanción de los delitos y optimizar la atención integral a las víctimas.",
    mision:
      "Defender la legalidad y los intereses generales de la sociedad boliviana con transparencia y autonomía, ejerciendo la acción penal pública con oportunidad, objetividad y demás principios de la labor fiscal, con perspectiva de género y justicia restaurativa, protegiendo a la víctima y respetando los derechos humanos.",
    vision:
      "Ser una institución sólida, con credibilidad y altos estándares de transparencia, reconocida por su efectividad y capacidad de respuesta técnico-científica en el ejercicio de la acción penal pública, referente del sistema de justicia penal bajo un enfoque de gestión fiscal por resultados, al servicio de la sociedad.",
    caracteristicas: ["Acción penal pública", "Investigación", "Fiscalía especializada", "Género y violencia sexual"],
    contacto: { direccion: "Avenida 9 de Febrero N° 211, esquina calle Otto Felipe Braun, zona central, Cobija, Pando", telefonos: ["3-8424014"], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", secciones 8 y 11 (dirección); ambas secciones del documento se fusionaron en esta ficha. Teléfono y fotografía de la fachada aportados por el equipo del proyecto."
  },
  {
    id: "tdj",
    nombre: "Tribunal Departamental de Justicia de Pando",
    sigla: "TDJ",
    categoria: "justicia",
    rolMesa: "Perspectiva judicial",
    dependencia: "Órgano Judicial",
    ambito: "Departamental · Cobija",
    imagen: "tdj.png",
    descripcion:
      "Parte del Órgano Judicial, administra justicia dentro de las competencias que establece la normativa. Su estructura incluye un Juzgado Público de la Niñez y Adolescencia con un equipo interdisciplinario (trabajadora social y psicóloga), juzgados de familia, tribunales de sentencia penal y juzgados en las provincias, según su organigrama.",
    servicios: [
      "Procesos y decisiones relacionadas con la protección de NNA y medidas de protección, según la competencia de cada juzgado",
      "Juzgado Público de la Niñez y Adolescencia con equipo interdisciplinario",
      "Acceso a justicia y protección efectiva de los derechos de la niñez y adolescencia",
      "Socialización y difusión de la Ley N° 1639 en los municipios del departamento (acuerdo de la primera sesión 2026)"
    ],
    aporteMesa:
      "Aporta la perspectiva judicial, facilita la comprensión de los mecanismos de protección y permite identificar aspectos que requieren mayor coordinación entre los servicios de protección, investigación y justicia.",
    mision:
      "Impartir justicia ordinaria a nivel departamental en sujeción a los valores, principios, normas y procedimientos vigentes, en efectivo servicio a la sociedad, garantizando la armonía, la paz social y el bien común, útiles para la consolidación del sistema de justicia plural.",
    vision:
      "Que el Tribunal Departamental de Justicia, los tribunales de sentencia y los juzgados del departamento sean reconocidos socialmente por la entrega de una justicia pronta, oportuna, transparente y de calidad, con resoluciones y actuaciones que garanticen la seguridad jurídica en materia ordinaria.",
    caracteristicas: ["Órgano Judicial", "Juzgado de la Niñez", "Equipo interdisciplinario", "Ley 1639"],
    contacto: { direccion: "Avenida 16 de Julio N° 152, Zona Miraflores, Cobija, Pando", telefonos: ["3-842-2330", "Fax 3-842-2103"], whatsapp: "", correo: "pnd@organojudicial.gob.bo", web: "https://pando.organojudicial.gob.bo/", horario: "Lunes a viernes de 8:00 a 12:30 y de 15:00 a 18:30" },
    redes: {},
    fuenteContacto: DOC + ", sección 10 (dirección y horario). Teléfono, fax, correo, sitio web del Órgano Judicial de Pando y logotipo aportados por el equipo del proyecto. El organigrama del Tribunal incluido en el documento base se guarda en img/tdj-organigrama.jpg."
  },
  {
    id: "defensoria",
    nombre: "Defensoría del Pueblo – Delegación Defensorial Departamental de Pando",
    sigla: "Defensoría",
    categoria: "derechos",
    rolMesa: "Secretaría Técnica de la Mesa",
    dependencia: "Defensoría del Pueblo del Estado Plurinacional de Bolivia",
    ambito: "Departamental · Cobija",
    imagen: "defensoria.jpg",
    descripcion:
      "La Delegación Defensorial Departamental protege, promueve y defiende los derechos humanos en la región. En niñez y adolescencia enfoca sus servicios en la defensa de derechos, el seguimiento a vulneraciones, la orientación y la articulación interinstitucional, con especial énfasis en la respuesta y prevención de la violencia sexual.",
    servicios: [
      "Defensa de derechos y seguimiento a vulneraciones en niñez y adolescencia",
      "Orientación y articulación interinstitucional",
      "Seguimiento metodológico, organización del trabajo de la Mesa y documentación de compromisos",
      "Custodia de actas, reglamentos y planes de la Mesa"
    ],
    aporteMesa:
      "Ejerce la Secretaría Técnica como medio de enlace entre la Mesa y la Defensoría del Pueblo: convoca, controla el cumplimiento de compromisos y la asistencia, y custodia la memoria documental. Mantiene un enfoque estricto de derechos humanos. Organizó la primera sesión 2026 en coordinación con el Gobierno Autónomo Departamental.",
    mision:
      "Velar por la vigencia, promoción y cumplimiento de los derechos humanos individuales y colectivos conforme a la Constitución y los instrumentos internacionales, operando con principios de gratuidad, celeridad y solidaridad hacia una sociedad justa y en paz.",
    vision:
      "Ser referentes y revolucionarios en la defensa y promoción de los derechos humanos, transformando realidades e incidiendo en el sector público para consolidar una sociedad inclusiva, equitativa y respetuosa de los derechos fundamentales.",
    caracteristicas: ["Secretaría Técnica", "Derechos humanos", "Seguimiento de acuerdos", "Articulación"],
    autoridad: "Delegada Defensorial Departamental: Dra. Cinthia Jordán Ramos",
    contacto: { direccion: "Calle Cochabamba N° 86 (detrás del templo de Nuestra Señora del Pilar), Cobija, Pando", telefonos: ["3 842 3888", "71112900"], whatsapp: "71112900", correo: "", web: "https://www.defensoria.gob.bo/oficinas?oficina_id=13", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/DPDefensorialPando/?locale=es_LA"
    },
    fuenteContacto: DOC + ", sección 12 (dirección). Autoridad: Acta de la Primera Sesión 2026. Teléfonos, WhatsApp, página de la oficina de Pando en defensoria.gob.bo, Facebook y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "dde",
    nombre: "Dirección Departamental de Educación (SEDUCA) de Pando",
    sigla: "DDE · SEDUCA",
    categoria: "educacion",
    rolMesa: "Brazo preventivo y operativo escolar",
    dependencia: "Ministerio de Educación (entidad pública descentralizada, Ley N° 070)",
    ambito: "Departamental · Cobija",
    imagen: "dde.jpg",
    descripcion:
      "Entidad pública descentralizada bajo tuición del Ministerio de Educación, establecida en el artículo 78 de la Ley N° 070. Es persona jurídica de derecho público, con patrimonio propio y autonomía de gestión administrativa, financiera, legal y técnica, con sede en la capital del departamento.",
    servicios: [
      "Talleres de prevención de la violencia sexual en las escuelas",
      "Activación y aplicación de protocolos de prevención, detección y derivación de violencia en entornos educativos",
      "Coordinación con directores distritales para responder ante denuncias penales o administrativas",
      "Canalización de la participación de los jóvenes en la red"
    ],
    aporteMesa:
      "Actúa como brazo preventivo y operativo escolar: implementa talleres de prevención, activa protocolos inmediatos ante denuncias de vulneración de derechos estudiantiles y canaliza la participación activa de las y los jóvenes en la red.",
    mision:
      "Implementar de manera transparente y oportuna las políticas educativas y de administración curricular de la educación pública y el control de la privada en el departamento, así como la administración y gestión de los recursos en el ámbito de su jurisdicción, sobre la base de la Ley de Educación «Avelino Siñani y Elizardo Pérez».",
    vision:
      "Ser la institución educativa líder a nivel departamental que consolide una formación integral, inclusiva y con equidad social, erradicando el analfabetismo y potenciando el desarrollo productivo y cultural de la región.",
    caracteristicas: ["Educación", "Prevención escolar", "Protocolos de derivación", "Ley 070"],
    contacto: { direccion: "Avenida 9 de Febrero N° 188, Cobija, Pando", telefonos: ["3842-2285", "71113862"], whatsapp: "", correo: ["pando.ddep@hotmail.com", "educaciondepartametalpando@gmail.com"], web: "https://www.minedu.gob.bo/index.php?option=com_content&view=article&id=165&Itemid=928", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/p/Direcci%C3%B3n-Departamental-De-Educaci%C3%B3n-Pando-100076189984656/?locale=es_LA"
    },
    notaValidacion: "El documento base registra además un tercer correo, de apariencia personal, que no se publica; confirmar con la Dirección si debe incluirse.",
    fuenteContacto: DOC + ", sección 13 (dirección, teléfonos y correo pando.ddep@hotmail.com). Correo educaciondepartametalpando@gmail.com, página del Ministerio de Educación (minedu.gob.bo), Facebook y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "unicef",
    nombre: "UNICEF Bolivia",
    sigla: "UNICEF",
    categoria: "cooperacion",
    rolMesa: "Asistencia técnica y metodológica",
    dependencia: "Fondo de las Naciones Unidas para la Infancia (organización internacional sin fines de lucro)",
    ambito: "Nacional · apoyo en Pando",
    imagen: "unicef.png",
    descripcion:
      "Representación en Bolivia del Fondo de las Naciones Unidas para la Infancia. Organización internacional sin fines de lucro que trabaja en el país desde 1950 para asegurar el cumplimiento de los derechos de la niñez y la adolescencia, promoviendo su desarrollo, garantizando su protección legal y fomentando su participación en la sociedad. En Pando no cuenta con una oficina abierta al público: ejecuta y supervisa sus intervenciones en Cobija mediante su equipo técnico y consultores, en alianza con el Gobierno Autónomo Municipal.",
    servicios: [
      "Asistencia técnica y fortalecimiento de capacidades",
      "Desarrollo y transferencia de herramientas metodológicas",
      "Generación de evidencia y apoyo a políticas públicas y servicios de protección",
      "Financiamiento y facilitación de talleres de formación para profesionales de la región"
    ],
    aporteMesa:
      "Pilar estratégico para robustecer el sistema local de protección: apoya técnicamente a operadores de justicia, personal de salud y defensorías municipales, financia talleres sobre contención emocional y abordaje integral de la violencia, y facilita guías y materiales de prevención adaptados al contexto pandino.",
    mision:
      "Garantizar el cumplimiento pleno de los derechos de la niñez y la adolescencia, promoviendo su desarrollo integral, asegurando su protección legal y fomentando su participación activa como agentes de cambio, con especial atención a las niñas, niños y adolescentes en mayor situación de exclusión y vulnerabilidad.",
    vision:
      "Un país donde cada niña, niño y adolescente, sin importar su origen étnico, condición social o ubicación geográfica, ejerza plenamente sus derechos y desarrolle su máximo potencial en entornos seguros, inclusivos y equitativos.",
    caracteristicas: ["Cooperación internacional", "Asistencia técnica", "Herramientas metodológicas", "Sin oficina en Pando"],
    contacto: { direccion: "Oficina central de UNICEF Bolivia: Calle 20 N° 7720, Calacoto, La Paz", telefonos: ["+591 2 2770222"], whatsapp: "", correo: "", web: "https://www.unicef.org/bolivia", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/unicefbolivia/",
      instagram: "https://www.instagram.com/unicef.bolivia/",
      x: "https://x.com/UNICEFBolivia",
      youtube: "https://www.youtube.com/user/UNICEFBolivia",
      tiktok: "https://www.tiktok.com/@unicefbolivia",
      linkedin: "https://www.linkedin.com/company/unicef-bolivia"
    },
    notaValidacion: "En Pando UNICEF no tiene oficina abierta al público: la dirección y el teléfono corresponden a la oficina central en La Paz. Verificar que sigan vigentes.",
    fuenteContacto: DOC + ", sección 14 (aclara que no hay oficina física en Pando). Dirección, teléfono, sitio web y redes tomados del directorio de Beni (página «Contáctanos» y pie del sitio oficial de UNICEF Bolivia); no verificados de nuevo."
  },
  {
    id: "unfpa",
    nombre: "UNFPA Bolivia",
    sigla: "UNFPA",
    categoria: "cooperacion",
    rolMesa: "Asistencia técnica y prevención",
    dependencia: "Sistema de las Naciones Unidas",
    ambito: "Nacional · apoyo en Pando",
    imagen: "unfpa.jpg",
    descripcion:
      "Agencia del Sistema de las Naciones Unidas especializada en salud sexual y reproductiva, igualdad de género, adolescencia y juventud y prevención de la violencia. Su trabajo se vincula con factores de protección y prevención relacionados con adolescentes. En Bolivia trabaja bajo el Programa País 2023-2027.",
    servicios: [
      "Asistencia técnica y fortalecimiento de políticas y servicios",
      "Promoción de derechos sexuales y reproductivos",
      "Prevención de la violencia basada en género y del embarazo en adolescentes",
      "Trabajo con adolescentes y jóvenes"
    ],
    aporteMesa:
      "Contribuye con conocimientos especializados, asistencia técnica, fortalecimiento de capacidades y articulación de acciones preventivas relacionadas con adolescencia, género y violencia sexual.",
    mision:
      "Lograr el acceso universal a la salud sexual y reproductiva, reducir la mortalidad materna y proteger la salud de las mujeres, y promover que las y los jóvenes alcancen su máximo potencial y ejerzan sus derechos.",
    vision: "",
    caracteristicas: ["Cooperación internacional", "Salud sexual y reproductiva", "Adolescencia", "Prevención de violencia"],
    contacto: { direccion: "", telefonos: [], whatsapp: "", correo: "", web: "https://bolivia.unfpa.org", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", sección 15 (sitio web institucional bolivia.unfpa.org)."
  },
  {
    id: "focidem",
    nombre: "Foro Ciudadano de la Mujer (FOCIDEM) Pando",
    sigla: "FOCIDEM",
    categoria: "sociedad",
    rolMesa: "Organización de mujeres y veeduría social",
    dependencia: "Organización sin fines de lucro",
    ambito: "Departamental · Pando",
    imagen: "focidem.jpg",
    descripcion:
      "Organización sin fines de lucro que trabaja contra la violencia hacia la mujer, con el propósito de empoderarlas y hacerlas líderes. Inculca valores de igualdad, democracia, justicia, cooperación, transparencia, honestidad y empatía.",
    servicios: [
      "Veeduría social",
      "Incidencia política para presupuestos con enfoque de género",
      "Articulación comunitaria de colectivos de mujeres de Pando"
    ],
    aporteMesa: "",
    mision:
      "Dedicada a la creación y promoción de oportunidades y conciencia en las mujeres, encaminada a la equidad de género, en el marco de la democracia y la justicia social.",
    vision:
      "Ser una institución reconocida por su práctica solidaria, democrática y transparente, por sus aportes a la calidad de vida de las mujeres y a los valores que afirmen el respeto a la dignidad humana.",
    caracteristicas: ["Sin fines de lucro", "Derechos de las mujeres", "Veeduría social", "Liderazgo"],
    contacto: { direccion: "Avenida Petrolero N° 056, Barrio Petrolero, Cobija, Pando", telefonos: ["77101540"], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/p/Focidem-100063717506839/"
    },
    fuenteContacto: DOC + ", secciones 16 y 24 (dirección, celular y líneas de trabajo). Facebook y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "red-promotoras",
    nombre: "Red Departamental de Promotoras Comunitarias de Prevención de la Violencia en Razón de Género de Pando",
    sigla: "Red de Promotoras",
    categoria: "sociedad",
    rolMesa: "Perspectiva territorial y comunitaria",
    dependencia: "Red social no gubernamental sin fines de lucro",
    ambito: "Departamental · Pando",
    imagen: "red-promotoras.jpg",
    descripcion:
      "Red departamental social, no gubernamental y sin fines de lucro, de organización autónoma, sin filiación política ni religiosa. Reúne a promotoras que ejercen el control social y la incidencia sobre el cumplimiento de la Ley N° 348 y la normativa vinculada a la lucha contra la violencia hacia las mujeres, en coordinación con los servicios de atención, instituciones públicas y privadas y operadores de justicia.",
    servicios: [
      "Guía, contención emocional y acompañamiento psicosocial a mujeres y víctimas en barrios y comunidades",
      "Detección temprana de vulnerabilidades y orientación primaria a las víctimas",
      "Articulación y derivación efectiva de casos al SLIM, la DNA, la FELCV o la Fiscalía",
      "Educación comunitaria y control social para una vida libre de violencia"
    ],
    aporteMesa:
      "Aporta la perspectiva territorial y comunitaria, facilitando que las acciones preventivas lleguen a familias y comunidades y que la respuesta institucional considere las condiciones y necesidades del territorio. Es el puente directo entre barrios y comunidades y los servicios formales.",
    mision:
      "Brindar guía, contención emocional y acompañamiento psicosocial a mujeres y víctimas en situación de violencia o vulnerabilidad dentro de los barrios y comunidades de Pando, actuando como agentes de transformación que articulan la identificación y derivación efectiva de casos hacia las instancias públicas competentes, promoviendo una cultura de equidad y no violencia.",
    vision:
      "Consolidarse como la red social de actoras comunitarias referente, organizada y plenamente reconocida en Pando, con una estructura sólida en sus 15 municipios y una articulación formal y eficiente con el Estado, los gobiernos locales y los operadores de justicia.",
    caracteristicas: ["Red comunitaria", "Control social", "Primera respuesta", "Prevención comunitaria", "Ley 348"],
    contacto: { direccion: "", telefonos: ["75851381"], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", sección 17 y sección 24. El documento no consigna datos de contacto; celular 75851381 y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "medicos-mundo",
    nombre: "Médicos del Mundo – Coordinación Cobija",
    sigla: "Médicos del Mundo",
    categoria: "cooperacion",
    rolMesa: "Soporte técnico y enlace salud-protección",
    dependencia: "Organización no gubernamental internacional",
    ambito: "Cobija y municipios rurales de Pando",
    imagen: "medicos-mundo.jpg",
    descripcion:
      "Asociación independiente y organización no gubernamental internacional que trabaja para hacer efectivo el derecho a la salud de las poblaciones más vulnerables. Su oficina de coordinación en Cobija implementa proyectos de fortalecimiento del sistema de salud pública, promoción de la salud integral de la mujer, equidad y prevención de la violencia de género.",
    servicios: [
      "Fortalecimiento técnico y operativo del sistema público de salud local en la Amazonía",
      "Promoción y defensa de la salud integral de la mujer y equidad de género",
      "Prevención y respuesta ante la violencia basada en género y discriminación",
      "Cooperación y coordinación con el SEDES Pando y los gobiernos autónomos municipales"
    ],
    aporteMesa:
      "Soporte técnico especializado con enfoque de género y derechos humanos para rutas de atención integral de salud mental y física; enlace entre salud y protección para que los servicios públicos respondan con protocolos, insumos y capacidades adecuadas; y co-ejecución de actividades preventivas y campañas comunitarias del calendario de la Mesa.",
    mision:
      "Hacer efectivo el derecho fundamental a la salud para todas las personas, eliminando las barreras de acceso y actuando especialmente en favor de las poblaciones más vulnerables y excluidas, mediante el fortalecimiento institucional de la salud pública, la participación comunitaria y la incidencia en derechos humanos.",
    vision:
      "Construir un mundo más justo y equitativo, donde la salud sea garantizada de manera universal como un derecho humano inalienable, con enfoques transversales de derechos humanos, género e interculturalidad.",
    caracteristicas: ["ONG internacional", "Salud pública", "Equidad de género", "Enlace salud-protección"],
    contacto: { direccion: "", telefonos: [], whatsapp: "", correo: "informacion.bolivia@medicosdelmundo.org", web: "https://www.medicosdelmundo.org/donde-trabajamos/america/bolivia/", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", sección 19 (correo electrónico). El documento no consigna dirección de la oficina en Cobija. Página de Médicos del Mundo sobre su trabajo en Bolivia (sitio general de la organización) y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "caritas",
    nombre: "Pastoral Social Cáritas de Pando",
    sigla: "Cáritas Pando",
    categoria: "sociedad",
    rolMesa: "Ayuda de emergencia y resiliencia comunitaria",
    dependencia: "Iglesia Católica",
    ambito: "Departamental · Pando",
    imagen: "caritas.jpg",
    descripcion:
      "Institución oficial de la Iglesia Católica enfocada en la promoción humana, la acción solidaria, la ayuda social y el cuidado de la creación, guiada por los valores del Evangelio y la Doctrina Social de la Iglesia. Atiende a poblaciones en extrema vulnerabilidad, exclusión o desprotección: familias de escasos recursos, comunidades rurales e indígenas, migrantes, mujeres y NNA afectados por crisis sociales, económicas o climáticas.",
    servicios: [
      "Ayuda de emergencia y recursos logísticos para víctimas rescatadas de redes de explotación o violencia",
      "Talleres de resiliencia comunitaria",
      "Incidencia en políticas públicas que protejan a la niñez frente a factores de riesgo social"
    ],
    aporteMesa:
      "Canaliza ayuda de emergencia y recursos logísticos para las víctimas, coordina talleres de resiliencia comunitaria y aporta un enfoque integral de derechos para incidir en políticas públicas que protejan a la niñez.",
    mision:
      "Acompañar, promover y sostener procesos de promoción humana integral y la defensa de la dignidad de las personas, especialmente de los pobres y excluidos, fortaleciendo sus capacidades organizativas y su resiliencia comunitaria.",
    vision:
      "Ser una institución consolidada, transparente y autosostenible, referente a nivel departamental y nacional en el desarrollo humano integral y el cuidado ambiental, que contribuya a forjar una sociedad digna, justa, inclusiva y solidaria.",
    caracteristicas: ["Acción solidaria", "Ayuda de emergencia", "Resiliencia comunitaria", "Promoción humana"],
    contacto: { direccion: "Calle Cochabamba N° 084 (entre Avenida 16 de Julio), Barrio Puerto Alto, Cobija, Pando", telefonos: [], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {
      facebook: "https://www.facebook.com/ps.caritas.pando/"
    },
    fuenteContacto: DOC + ", sección 20 (dirección de la sede central). Facebook y logotipo aportados por el equipo del proyecto."
  },
  {
    id: "comite-nna",
    nombre: "Comité Departamental de Niñas, Niños y Adolescentes de Pando",
    sigla: "Comité NNA",
    categoria: "sociedad",
    rolMesa: "Voz y participación de la niñez y adolescencia",
    dependencia: "Instancia de participación y representación de NNA",
    ambito: "Departamental · Pando",
    imagen: "comite-nna.jpg",
    imagenAjuste: "cover",
    descripcion:
      "Instancia de participación y representación de niñas, niños y adolescentes a nivel departamental, orientada a promover el ejercicio de sus derechos, fortalecer su participación y canalizar sus opiniones, necesidades y propuestas en los espacios de diálogo y toma de decisiones que les conciernen. Reconoce a NNA como sujetos de derechos y actores capaces de participar activamente.",
    servicios: [
      "Representación y espacios de diálogo y consulta con niñas, niños y adolescentes",
      "Difusión y defensa de sus derechos, articulando esfuerzos con instituciones públicas y organizaciones",
      "Metodología: escuchar, identificar, analizar, proponer, articular, actuar y realizar seguimiento"
    ],
    aporteMesa:
      "Incorpora la perspectiva y las propuestas de las propias niñas, niños y adolescentes en los procesos de articulación de la Mesa; no busca hablar por ellos, sino fortalecer las condiciones para que sus voces sean escuchadas, representadas y consideradas.",
    mision: "",
    vision:
      "Contribuir a la construcción de un departamento donde las niñas, niños y adolescentes sean reconocidos como sujetos de derechos y protagonistas activos de su desarrollo, con espacios permanentes, inclusivos y efectivos de participación.",
    caracteristicas: ["Participación de NNA", "Representación", "Promoción de derechos", "Seguimiento"],
    contacto: { direccion: "", telefonos: ["75108276"], whatsapp: "", correo: "", web: "", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", sección 21 (celular). Fotografía aportada por el equipo del proyecto."
  },
  {
    id: "estrella-del-sur",
    nombre: "Estrella del Sur – Pando",
    sigla: "Estrella del Sur",
    categoria: "sociedad",
    rolMesa: "Entornos protectores y articulación de base comunitaria",
    dependencia: "ONG boliviana · socio local de ChildFund Bolivia",
    ambito: "Cobija · áreas urbanas y periurbanas",
    imagen: "estrella-del-sur.jpg",
    descripcion:
      "Organización no gubernamental boliviana sin fines de lucro dedicada al desarrollo integral de la infancia, adolescencia y juventud. En Pando actúa como socio estratégico local de ChildFund Bolivia, implementando programas de protección y desarrollo humano en áreas urbanas y periurbanas de Cobija.",
    servicios: [
      "Metodologías activas y herramientas prácticas (como botiquines de primeros auxilios psicológicos) en unidades educativas",
      "Programas de habilidades socioemocionales, prevención del abuso sexual y resiliencia en adolescentes y familias vulnerables",
      "Programas de protección comunitaria y habilidades para la vida, en articulación con ChildFund"
    ],
    aporteMesa:
      "Despliega entornos protectores en las unidades educativas, fortalece habilidades familiares y juveniles, y sirve de enlace directo entre las decisiones de la Mesa y los barrios periurbanos para que las rutas de denuncia y protección lleguen a los sectores más alejados.",
    mision: "Buscamos que la niñez, la juventud, sus familias y comunidades logren su desarrollo integral y protección.",
    vision: "Comunidades y familias donde la niñez goza de protección y bienestar integral.",
    caracteristicas: ["ONG", "Socio de ChildFund", "Entornos protectores", "Base comunitaria"],
    contacto: { direccion: "Avenida Oscar Escalante, Barrio Paz Zamora (a 4 cuadras del aeropuerto), Cobija, Pando", telefonos: ["73691744"], whatsapp: "", correo: "contacto@estrelladelsurbolivia.org", web: "", horario: "" },
    redes: {},
    fuenteContacto: DOC + ", sección 22 (dirección, celular y correo). Logotipo aportado por el equipo del proyecto."
  }
];
