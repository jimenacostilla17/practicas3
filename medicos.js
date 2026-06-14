const medicos = {

  "PALACIO MARCOS ANTONIO": {
    matricula: "1001",
    sistema: "1",
    consultorio: "1",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Otorrinolaringología"],
    dias: ["Martes", "Miércoles", "Viernes"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"08:00", martesSalida:"12:00",
      miercolesEntrada:"08:00", miercolesSalida:"12:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"08:00", viernesSalida:"12:00",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "PALACIO GASTON ANTONIO": {
    matricula: "1002",
    sistema: "1",
    consultorio: "8",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Otorrinolaringología"],
    dias: ["Lunes", "Martes", "Jueves", "Viernes"],
    horarios: {
      lunesEntrada:"15:00", lunesSalida:"20:30",
      martesEntrada:"15:00", martesSalida:"20:30",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"15:00", juevesSalida:"20:30",
      viernesEntrada:"15:00", viernesSalida:"20:30",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "GERARDO MARCOS": {
    matricula: "1003",
    sistema: "1",
    consultorio: "3",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Cardiología"],
    dias: ["Lunes", "Viernes"],
    horarios: {
      lunesEntrada:"08:00", lunesSalida:"13:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"08:00", viernesSalida:"13:00",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "ZELARAYAN NORMA DANIELA": {
    matricula: "1004",
    sistema: "1",
    consultorio: "5",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Gastroenterología"],
    dias: ["Martes", "Jueves"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"09:00", martesSalida:"13:00",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"09:00", juevesSalida:"13:00",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "PAZ JUAN": {
    matricula: "1005",
    sistema: "1",
    consultorio: "6",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Neurología"],
    dias: ["Sábado"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"08:00", sabadoSalida:"12:00",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "DIAZ VERONICA": {
    matricula: "1006",
    sistema: "1",
    consultorio: "7",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Neurología"],
    dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"14:00", miercolesSalida:"19:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "LARA NORRY RAFAEL": {
    matricula: "1007",
    sistema: "1",
    consultorio: "2",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Neurología"],
    dias: ["Lunes"],
    horarios: {
      lunesEntrada:"09:00", lunesSalida:"13:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "MALDONADO PABLO RAMIRO": {
    matricula: "1008",
    sistema: "1",
    consultorio: "4",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Reumatología"],
    dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"09:00", miercolesSalida:"14:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "MANZANO VIRGINIA PAULA": {
    matricula: "1009",
    sistema: "1",
    consultorio: "3",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Clínica Médica"],
    dias: ["Martes"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"08:00", martesSalida:"13:00",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "ELIAS GRANE LOURDES": {
    matricula: "1010",
    sistema: "1",
    consultorio: "5",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Infectología"],
    dias: ["Martes"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"14:00", martesSalida:"18:00",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "DIAZ ALVAREZ MARIA NOEL": {
    matricula: "1011",
    sistema: "1",
    consultorio: "4",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Endocrinología"],
    dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"15:00", miercolesSalida:"20:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "CARRIZO GUSTAVO": {
    matricula: "1012",
    sistema: "1",
    consultorio: "7",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Cirugía General"],
    dias: ["Lunes", "Miércoles", "Viernes"],
    horarios: {
      lunesEntrada:"08:00", lunesSalida:"12:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"08:00", miercolesSalida:"12:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"08:00", viernesSalida:"12:00",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "PEDRAZA MARIELA": {
    matricula: "1013",
    sistema: "1",
    consultorio: "3",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Psiquiatría"],
    dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"14:00", miercolesSalida:"18:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "SEPULVEDA MARIA ALEJANDRA": {
    matricula: "1014",
    sistema: "1",
    consultorio: "6",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Psicología"],
    dias: ["Lunes", "Miércoles", "Viernes"],
    horarios: {
      lunesEntrada:"10:00", lunesSalida:"16:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"10:00", miercolesSalida:"16:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"10:00", viernesSalida:"16:00",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "MOYANO MARIA EUGENIA": {
    matricula: "1015",
    sistema: "1",
    consultorio: "2",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Ginecología", "Obstetricia"],
    dias: ["Lunes"],
    horarios: {
      lunesEntrada:"09:00", lunesSalida:"14:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "NORRY GABRIEL": {
    matricula: "1016",
    sistema: "1",
    consultorio: "1",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Dermatología"],
    dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"09:00", miercolesSalida:"13:00",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "KOLRICH FLORENCIA": {
    matricula: "1017",
    sistema: "1",
    consultorio: "5",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Dermatología"],
    dias: ["Lunes"],
    horarios: {
      lunesEntrada:"14:00", lunesSalida:"18:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "DE LA FUENTE JIMENA": {
    matricula: "1018",
    sistema: "1",
    consultorio: "8",
    factura: "1",
    tiempoMinimo: "30",
    especialidades: ["Odontología"],
    dias: ["Lunes", "Viernes"],
    horarios: {
      lunesEntrada:"16:00", lunesSalida:"20:30",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"16:00", viernesSalida:"20:30",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },

  "FERNANDEZ PAULINA": {
    matricula: "1019",
    sistema: "1",
    consultorio: "4",
    factura: "1",
    tiempoMinimo: "20",
    especialidades: ["Nutricionista"],
    dias: ["Lunes"],
    horarios: {
      lunesEntrada:"08:00", lunesSalida:"13:00",
      martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"",
      juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"",
      sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  }

};

// --------------------
// ELEMENTOS DEL DOM
// --------------------

const medicoSelect = document.getElementById("medicoSelect");

const matricula = document.getElementById("matricula");
const sistema = document.getElementById("sistema");
const consultorio = document.getElementById("consultorio");
const factura = document.getElementById("factura");
const tiempoMinimo = document.getElementById("tiempoMinimo");

// --------------------
// CARGAR SELECT
// --------------------

function cargarListaMedicos() {
  Object.keys(medicos).forEach(nombre => {
    const option = document.createElement("option");

    option.value = nombre;
    option.textContent = nombre;

    medicoSelect.appendChild(option);
  });
}

// --------------------
// LIMPIAR CHECKBOXES
// --------------------

function limpiarCheckboxes() {

  document
    .querySelectorAll(".especialidad")
    .forEach(check => {
      check.checked = false;
    });

  document
    .querySelectorAll(".dia")
    .forEach(check => {
      check.checked = false;
    });
}

// --------------------
// CARGAR DATOS MEDICO
// --------------------

function cargarMedico() {

  const nombre = medicoSelect.value;

  const medico = medicos[nombre];

  if (!medico) return;

  matricula.value = medico.matricula;
  sistema.value = medico.sistema;
  consultorio.value = medico.consultorio;
  factura.value = medico.factura;
  tiempoMinimo.value = medico.tiempoMinimo;

  limpiarCheckboxes();

  medico.especialidades.forEach(especialidad => {

    const checkbox = document.querySelector(
      `[value="${especialidad}"]`
    );

    if (checkbox) {
      checkbox.checked = true;
    }

  });

  medico.dias.forEach(dia => {

    const checkbox = document.querySelector(
      `[value="${dia}"]`
    );

    if (checkbox) {
      checkbox.checked = true;
    }

  });

  document.getElementById("lunEntrada").value =
    medico.horarios.lunesEntrada;

  document.getElementById("lunSalida").value =
    medico.horarios.lunesSalida;

  document.getElementById("marEntrada").value =
    medico.horarios.martesEntrada;

  document.getElementById("marSalida").value =
    medico.horarios.martesSalida;

  document.getElementById("mieEntrada").value =
    medico.horarios.miercolesEntrada;

  document.getElementById("mieSalida").value =
    medico.horarios.miercolesSalida;

  document.getElementById("jueEntrada").value =
    medico.horarios.juevesEntrada;

  document.getElementById("jueSalida").value =
    medico.horarios.juevesSalida;

  document.getElementById("vieEntrada").value =
    medico.horarios.viernesEntrada;

  document.getElementById("vieSalida").value =
    medico.horarios.viernesSalida;

  document.getElementById("sabEntrada").value =
    medico.horarios.sabadoEntrada;

  document.getElementById("sabSalida").value =
    medico.horarios.sabadoSalida;

  document.getElementById("domEntrada").value =
    medico.horarios.domingoEntrada;

  document.getElementById("domSalida").value =
    medico.horarios.domingoSalida;
}

// --------------------
// EVENTOS
// --------------------

medicoSelect.addEventListener(
  "change",
  cargarMedico
);

// --------------------
// INICIO
// --------------------

cargarListaMedicos();

medicoSelect.selectedIndex = 0;

cargarMedico();

console.log(medicoSelect);