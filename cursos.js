const cursos = {
  // I CICLO
  art1: { nombre: "Actividades Artísticas y Deportivas", prereqs: [], ciclo: "I", estado: "disponible" },
  met1: { nombre: "Taller de Métodos del Estudio Universitario", prereqs: [], ciclo: "I", estado: "disponible" },
  arg1: { nombre: "Taller de Argumentación Oral y Escrita", prereqs: [], ciclo: "I", estado: "disponible" },
  hist1: { nombre: "Formación histórica", prereqs: [], ciclo: "I", estado: "disponible" },
  realnac: { nombre: "Realidad Nacional", prereqs: [], ciclo: "I", estado: "disponible" },
  biofis: { nombre: "Biofísica", prereqs: [], ciclo: "I", estado: "disponible" },
  bio1: { nombre: "Biología Celular y Molecular", prereqs: [], ciclo: "I", estado: "disponible" },
  mat1: { nombre: "Matemática aplicada a la salud", prereqs: [], ciclo: "I", estado: "disponible" },
  quim1: { nombre: "Química aplicada a la salud", prereqs: [], ciclo: "I", estado: "disponible" },

  // II CICLO
  redac: { nombre: "Taller de Interpretación y Redacción de Textos", prereqs: ["arg1"], ciclo: "II", estado: "bloqueado" },
  filo: { nombre: "Filosofía y Ética", prereqs: [], ciclo: "II", estado: "disponible" },
  psic: { nombre: "Psicología general", prereqs: [], ciclo: "II", estado: "disponible" },
  amb: { nombre: "Recursos Naturales y Medio Ambiente", prereqs: [], ciclo: "II", estado: "disponible" },
  glob: { nombre: "Globalización e Integración", prereqs: [], ciclo: "II", estado: "disponible" },
  ing1: { nombre: "Inglés Médico I", prereqs: [], ciclo: "II", estado: "disponible" },
  salud1: { nombre: "Salud Integral", prereqs: ["mat1"], ciclo: "II", estado: "bloqueado" },
  emb: { nombre: "Embriología y Genética", prereqs: ["bio1"], ciclo: "II", estado: "bloqueado" },
  bioest: { nombre: "Bioestadística y Demografía", prereqs: ["mat1"], ciclo: "II", estado: "bloqueado" },
  quechua: { nombre: "ELECTIVO: Quechua Médico", prereqs: [], ciclo: "II", estado: "disponible" },

  // III CICLO
  morfo1: { nombre: "Morfofisiología Humana I", prereqs: ["bio1"], ciclo: "III", estado: "bloqueado" },
  bioq: { nombre: "Bioquímica", prereqs: ["quim1"], ciclo: "III", estado: "bloqueado" },
  soporte: { nombre: "Soporte Básico Prehospitalario", prereqs: ["salud1"], ciclo: "III", estado: "bloqueado" },
  ing2: { nombre: "Inglés Médico II", prereqs: ["ing1"], ciclo: "III", estado: "bloqueado" },

  // IV CICLO
  morfo2: { nombre: "Morfofisiología Humana II", prereqs: ["morfo1"], ciclo: "IV", estado: "bloqueado" },
  metinv: { nombre: "Metodología de la Investigación", prereqs: ["bioest"], ciclo: "IV", estado: "bloqueado" },
  micro: { nombre: "Microbiología y Parasitología Médica", prereqs: ["morfo1"], ciclo: "IV", estado: "bloqueado" },
  aps: { nombre: "Atención Primaria de la Salud", prereqs: ["salud1"], ciclo: "IV", estado: "bloqueado" },

  // V CICLO
  farma: { nombre: "Farmacología", prereqs: ["morfo2"], ciclo: "V", estado: "bloqueado" },
  epidemio: { nombre: "Epidemiología", prereqs: ["micro"], ciclo: "V", estado: "bloqueado" },
  pato1: { nombre: "Patología General e Inmunología Clínica", prereqs: ["morfo2"], ciclo: "V", estado: "bloqueado" },
  nutricion: { nombre: "Nutrición Clínica", prereqs: ["bioq"], ciclo: "V", estado: "bloqueado" },
  histmed: { nombre: "Historia de la Medicina", prereqs: ["aps"], ciclo: "V", estado: "bloqueado" },

  // VI CICLO
  pato2: { nombre: "Patología Especial", prereqs: ["pato1"], ciclo: "VI", estado: "bloqueado" },
  introclin: { nombre: "Introducción a la Clínica", prereqs: ["pato1"], ciclo: "VI", estado: "bloqueado" },
  imagenes: { nombre: "Diagnóstico por Imágenes", prereqs: ["pato1"], ciclo: "VI", estado: "bloqueado" },

  // VII CICLO
  medint1: { nombre: "Medicina Interna I", prereqs: ["introclin"], ciclo: "VII", estado: "bloqueado" },
  patoclin: { nombre: "Patología Clínica", prereqs: ["pato2"], ciclo: "VII", estado: "bloqueado" },
  elect1: { nombre: "ELECTIVO 1: Medicina del Estilo de Vida", prereqs: ["introclin"], ciclo: "VII", estado: "bloqueado" },
  elect2: { nombre: "ELECTIVO 2: Salud Ocupacional", prereqs: ["introclin"], ciclo: "VII", estado: "bloqueado" },

  // VIII CICLO
  medint2: { nombre: "Medicina Interna II", prereqs: ["medint1"], ciclo: "VIII", estado: "bloqueado" },
  terapiamed: { nombre: "Terapéutica Médica Basada en Evidencias", prereqs: ["medint1"], ciclo: "VIII", estado: "bloqueado" },
  geriatria: { nombre: "Geriatría", prereqs: ["medint1"], ciclo: "VIII", estado: "bloqueado" },

  // IX CICLO
  cir1: { nombre: "Cirugía I", prereqs: ["medint2"], ciclo: "IX", estado: "bloqueado" },
  bioetica: { nombre: "Bioética y Deontología médica", prereqs: ["medint2"], ciclo: "IX", estado: "bloqueado" },

  // X CICLO
  cir2: { nombre: "Cirugía II", prereqs: ["cir1"], ciclo: "X", estado: "bloqueado" },
  rehabilitacion: { nombre: "Medicina Física y Rehabilitación", prereqs: ["cir1"], ciclo: "X", estado: "bloqueado" },
  psiquiatria: { nombre: "Semiología Psiquiátrica y Psiquiatría", prereqs: ["medint2"], ciclo: "X", estado: "bloqueado" },
  oncologia: { nombre: "Oncología Médica y Cuidados Paliativos", prereqs: ["medint2"], ciclo: "X", estado: "bloqueado" },
  critico: { nombre: "Manejo de Paciente Crítico", prereqs: ["cir1"], ciclo: "X", estado: "bloqueado" },

  // XI CICLO
  legal: { nombre: "Medicina Legal", prereqs: ["psiquiatria"], ciclo: "XI", estado: "bloqueado" },
  gine: { nombre: "Ginecología y Obstetricia", prereqs: ["cir2"], ciclo: "XI", estado: "bloqueado" },
  gestion: { nombre: "Gestión en Salud", prereqs: ["epidemio"], ciclo: "XI", estado: "bloqueado" },
  inv1: { nombre: "Investigación Médica I", prereqs: ["bioetica"], ciclo: "XI", estado: "bloqueado" },

  // XII CICLO
  pedia: { nombre: "Pediatría", prereqs: ["gine"], ciclo: "XII", estado: "bloqueado" },
  comu: { nombre: "Salud Comunitaria", prereqs: ["gestion"], ciclo: "XII", estado: "bloqueado" },
  inv2: { nombre: "Investigación Médica II", prereqs: ["inv1"], ciclo: "XII", estado: "bloqueado" },

  // XIII - XIV CICLO
  internado: { nombre: "Internado!!!!", prereqs: ["inv2"], ciclo: "XIII - XIV", estado: "bloqueado" },
  trabajo: { nombre: "Trabajo de Investigación", prereqs: ["inv2"], ciclo: "XIII - XIV", estado: "bloqueado" }
};
