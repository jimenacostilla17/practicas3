// ==========================================
// 1. BASE DE DATOS DE MÉDICOS
// ==========================================
const medicos = {
  "PALACIO MARCOS ANTONIO": {
    matricula: "1001", sistema: "1", consultorio: "1", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Otorrinolaringología"], dias: ["Martes", "Miércoles", "Viernes"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"08:00", martesSalida:"12:00",
      miercolesEntrada:"08:00", miercolesSalida:"12:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"08:00", viernesSalida:"12:00", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "PALACIO GASTON ANTONIO": {
    matricula: "1002", sistema: "1", consultorio: "8", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Otorrinolaringología"], dias: ["Lunes", "Martes", "Jueves", "Viernes"],
    horarios: {
      lunesEntrada:"15:00", lunesSalida:"20:30", martesEntrada:"15:00", martesSalida:"20:30",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"15:00", juevesSalida:"20:30",
      viernesEntrada:"15:00", viernesSalida:"20:30", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "GERARDO MARCOS": {
    matricula: "1003", sistema: "1", consultorio: "3", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Cardiología"], dias: ["Lunes", "Viernes"],
    horarios: {
      lunesEntrada:"08:00", lunesSalida:"13:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"08:00", viernesSalida:"13:00", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "ZELARAYAN NORMA DANIELA": {
    matricula: "1004", sistema: "1", consultorio: "5", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Gastroenterología"], dias: ["Martes", "Jueves"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"09:00", martesSalida:"13:00",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"09:00", juevesSalida:"13:00",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "PAZ JUAN": {
    matricula: "1005", sistema: "1", consultorio: "6", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Neurología"], dias: ["Sábado"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"08:00", sabadoSalida:"12:00",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "DIAZ VERONICA": {
    matricula: "1006", sistema: "1", consultorio: "7", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Neurología"], dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"14:00", miercolesSalida:"19:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "LARA NORRY RAFAEL": {
    matricula: "1007", sistema: "1", consultorio: "2", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Neurología"], dias: ["Lunes"],
    horarios: {
      lunesEntrada:"09:00", lunesSalida:"13:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "MALDONADO PABLO RAMIRO": {
    matricula: "1008", sistema: "1", consultorio: "4", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Reumatología"], dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"09:00", miercolesSalida:"14:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "MANZANO VIRGINIA PAULA": {
    matricula: "1009", sistema: "1", consultorio: "3", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Clínica Médica"], dias: ["Martes"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"08:00", martesSalida:"13:00",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "ELIAS GRANE LOURDES": {
    matricula: "1010", sistema: "1", consultorio: "5", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Infectología"], dias: ["Martes"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"14:00", martesSalida:"18:00",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "DIAZ ALVAREZ MARIA NOEL": {
    matricula: "1011", sistema: "1", consultorio: "4", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Endocrinología"], dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"15:00", miercolesSalida:"20:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "CARRIZO GUSTAVO": {
    matricula: "1012", sistema: "1", consultorio: "7", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Cirugía General"], dias: ["Lunes", "Miércoles", "Viernes"],
    horarios: {
      lunesEntrada:"08:00", lunesSalida:"12:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"08:00", miercolesSalida:"12:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"08:00", viernesSalida:"12:00", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "PEDRAZA MARIELA": {
    matricula: "1013", sistema: "1", consultorio: "3", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Psiquiatría"], dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"14:00", miercolesSalida:"18:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "SEPULVEDA MARIA ALEJANDRA": {
    matricula: "1014", sistema: "1", consultorio: "6", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Psicología"], dias: ["Lunes", "Miércoles", "Viernes"],
    horarios: {
      lunesEntrada:"10:00", lunesSalida:"16:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"10:00", miercolesSalida:"16:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"10:00", viernesSalida:"16:00", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "MOYANO MARIA EUGENIA": {
    matricula: "1015", sistema: "1", consultorio: "2", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Ginecología", "Obstetricia"], dias: ["Lunes"],
    horarios: {
      lunesEntrada:"09:00", lunesSalida:"14:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "NORRY GABRIEL": {
    matricula: "1016", sistema: "1", consultorio: "1", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Dermatología"], dias: ["Miércoles"],
    horarios: {
      lunesEntrada:"", lunesSalida:"", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"09:00", miercolesSalida:"13:00", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "KOLRICH FLORENCIA": {
    matricula: "1017", sistema: "1", consultorio: "5", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Dermatología"], dias: ["Lunes"],
    horarios: {
      lunesEntrada:"14:00", lunesSalida:"18:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "DE LA FUENTE JIMENA": {
    matricula: "1018", sistema: "1", consultorio: "8", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Odontología"], dias: ["Lunes", "Viernes"],
    horarios: {
      lunesEntrada:"16:00", lunesSalida:"20:30", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"16:00", viernesSalida:"20:30", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  },
  "FERNANDEZ PAULINA": {
    matricula: "1019", sistema: "1", consultorio: "4", factura: "1", tiempoMinimo: "20",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: ["Nutricionista"], dias: ["Lunes"],
    horarios: {
      lunesEntrada:"08:00", lunesSalida:"13:00", martesEntrada:"", martesSalida:"",
      miercolesEntrada:"", miercolesSalida:"", juevesEntrada:"", juevesSalida:"",
      viernesEntrada:"", viernesSalida:"", sabadoEntrada:"", sabadoSalida:"",
      domingoEntrada:"", domingoSalida:""
    }
  }
};

// ==========================================
// 2. MAPEO DE DÍAS (¡ESTA ERA LA PIEZA FALTANTE!)
// ==========================================
const diasConfig = {
  "Lunes":     { dataDia: "lunes",     entrada: "lunEntrada", salida: "lunSalida", keyHorario: "lunes" },
  "Martes":    { dataDia: "martes",    entrada: "marEntrada", salida: "marSalida", keyHorario: "martes" },
  "Miércoles": { dataDia: "miercoles", entrada: "mieEntrada", salida: "mieSalida", keyHorario: "miercoles" },
  "Jueves":    { dataDia: "jueves",    entrada: "jueEntrada", salida: "jueSalida", keyHorario: "jueves" },
  "Viernes":   { dataDia: "viernes",   entrada: "vieEntrada", salida: "vieSalida", keyHorario: "viernes" },
  "Sábado":    { dataDia: "sabado",    entrada: "sabEntrada", salida: "sabSalida", keyHorario: "sabado" },
  "Domingo":   { dataDia: "domingo",   entrada: "domEntrada", salida: "domSalida", keyHorario: "domingo" }
};

// ==========================================
// 3. ELEMENTOS DEL DOM
// ==========================================
const medicoSelect = document.getElementById("medicoSelect");
const matricula = document.getElementById("matricula");
const sistema = document.getElementById("sistema");
const consultorio = document.getElementById("consultorio");
const factura = document.getElementById("factura");
const tiempoMinimo = document.getElementById("tiempoMinimo");
const verVacios = document.getElementById("verVacios");
const visiblePantallas = document.getElementById("visiblePantallas");
const turnosInternet = document.getElementById("turnosInternet");
const formContainer = document.getElementById("form-container");

// ==========================================
// 4. TEMA OSCURO / CLARO
// ==========================================
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const icon = themeToggle.querySelector(".icon");

const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
icon.textContent = savedTheme === "dark" ? "☀️" : "🌙";

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  icon.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// ==========================================
// 5. LÓGICA DE HORARIOS INTELIGENTES
// ==========================================
function actualizarVisibilidadHorarios() {
  Object.keys(diasConfig).forEach(diaNombre => {
    const config = diasConfig[diaNombre];
    const checkbox = document.querySelector(`.dia[value="${diaNombre}"]`);
    const horarioRow = document.querySelector(`.horario-row[data-dia="${config.dataDia}"]`);
    
    if (checkbox && horarioRow) {
      if (checkbox.checked) {
        horarioRow.classList.add("activo");
        if (!horarioRow.dataset.scrolled) {
          horarioRow.scrollIntoView({ behavior: "smooth", block: "nearest" });
          horarioRow.dataset.scrolled = "true";
        }
      } else {
        horarioRow.classList.remove("activo");
        horarioRow.dataset.scrolled = "";
        const entradaInput = document.getElementById(config.entrada);
        const salidaInput = document.getElementById(config.salida);
        if (entradaInput) entradaInput.value = "";
        if (salidaInput) salidaInput.value = "";
      }
    }
  });
}

// Escuchar cambios en los checkboxes de días
document.querySelectorAll(".dia").forEach(checkbox => {
  checkbox.addEventListener("change", actualizarVisibilidadHorarios);
});

// ==========================================
// 6. FUNCIONES DE CARGA Y LIMPIEZA
// ==========================================
function cargarListaMedicos() {
  medicoSelect.innerHTML = '<option value="">-- Seleccione un médico --</option>';
  Object.keys(medicos).forEach(nombre => {
    const option = document.createElement("option");
    option.value = nombre;
    option.textContent = nombre;
    medicoSelect.appendChild(option);
  });
}

function limpiarCheckboxes() {
  document.querySelectorAll(".especialidad, .dia").forEach(check => {
    check.checked = false;
  });
  actualizarVisibilidadHorarios();
}

function cargarMedico() {
  const nombre = medicoSelect.value;
  const medico = medicos[nombre];

  if (!medico) {
    limpiarCheckboxes();
    matricula.value = ""; sistema.value = ""; consultorio.value = "";
    factura.value = ""; tiempoMinimo.value = "";
    return;
  }

  formContainer.style.opacity = "0.5";
  formContainer.style.transform = "translateY(10px)";
  
  setTimeout(() => {
    matricula.value = medico.matricula || "";
    sistema.value = medico.sistema || "1";
    consultorio.value = medico.consultorio || "";
    factura.value = medico.factura || "1";
    tiempoMinimo.value = medico.tiempoMinimo || "30";
    verVacios.value = medico.verVacios || "Con agenda completa";
    visiblePantallas.value = medico.visiblePantallas || "SI";
    turnosInternet.value = medico.turnosInternet || "Visible, pero no puede por Internet";

    limpiarCheckboxes();

    if (medico.especialidades) {
      medico.especialidades.forEach(especialidad => {
        const checkbox = document.querySelector(`.especialidad[value="${especialidad}"]`);
        if (checkbox) checkbox.checked = true;
      });
    }

    if (medico.dias) {
      medico.dias.forEach(dia => {
        const checkbox = document.querySelector(`.dia[value="${dia}"]`);
        if (checkbox) checkbox.checked = true;
      });
    }

    if (medico.horarios) {
      Object.keys(diasConfig).forEach(diaNombre => {
        const config = diasConfig[diaNombre];
        const keyEntrada = config.keyHorario + "Entrada";
        const keySalida = config.keyHorario + "Salida";
        
        const inputEntrada = document.getElementById(config.entrada);
        const inputSalida = document.getElementById(config.salida);
        
        if (inputEntrada && medico.horarios[keyEntrada]) inputEntrada.value = medico.horarios[keyEntrada];
        if (inputSalida && medico.horarios[keySalida]) inputSalida.value = medico.horarios[keySalida];
      });
    }

    actualizarVisibilidadHorarios();

    formContainer.style.opacity = "1";
    formContainer.style.transform = "translateY(0)";
  }, 150);
}

// ==========================================
// 7. NUEVO MÉDICO
// ==========================================
document.getElementById("nuevoMedico").addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre completo del nuevo médico:");
  if (!nombre || nombre.trim() === "") return;

  if (medicos[nombre]) {
    alert("Este médico ya existe en el sistema.");
    medicoSelect.value = nombre;
    cargarMedico();
    return;
  }

  medicos[nombre] = {
    matricula: "", sistema: "1", consultorio: "", factura: "1", tiempoMinimo: "30",
    verVacios: "Con agenda completa", visiblePantallas: "SI", turnosInternet: "Visible, pero no puede por Internet",
    especialidades: [], dias: [],
    horarios: {
      lunesEntrada: "", lunesSalida: "", martesEntrada: "", martesSalida: "",
      miercolesEntrada: "", miercolesSalida: "", juevesEntrada: "", juevesSalida: "",
      viernesEntrada: "", viernesSalida: "", sabadoEntrada: "", sabadoSalida: "",
      domingoEntrada: "", domingoSalida: ""
    }
  };

  cargarListaMedicos();
  medicoSelect.value = nombre;
  cargarMedico();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==========================================
// 8. INICIALIZACIÓN
// ==========================================
medicoSelect.addEventListener("change", cargarMedico);
cargarListaMedicos();

if (Object.keys(medicos).length > 0) {
  medicoSelect.selectedIndex = 1;
  cargarMedico();
}