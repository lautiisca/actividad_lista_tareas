// Función para agregar una nueva tarea

const agregarTarea = () => {
  const nuevaTareaInput = document.getElementById("nuevaTarea");
  const listaTareas = document.getElementById("listaTareas");
  const nuevaTareaTexto = nuevaTareaInput.value.trim();
  if (nuevaTareaTexto !== "") {
    const nuevaTarea = document.createElement("li");
    const nuevaTContBt = document.createElement("div")
    const nuevaTContTx = document.createElement("div")
    
    nuevaTarea.classList.add("newTask");


    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className = "delete";
    botonEliminar.onclick = function () {
      listaTareas.removeChild(nuevaTarea);
    };


    

    const botonNone = document.createElement("button");
    botonNone.className = "btnMostrarTodas";
    botonNone.onclick = function () {
      nuevaTarea.className = "newTask";
    };

    const botonPendiente = document.createElement("button");
    botonPendiente.className = "btnPendiente";
    botonPendiente.onclick = function () {
      nuevaTarea.className = "pendTask";
    };


    const botonCompl = document.createElement("button");
    botonCompl.className = "btnCompletadas";
    botonCompl.onclick = function () {
      nuevaTarea.className = "compTask";
    };
    nuevaTarea.appendChild(nuevaTContTx);
    nuevaTarea.appendChild(nuevaTContBt);
    
    nuevaTContTx.className = "litx";
    nuevaTContBt.className = "libtn";
    nuevaTContTx.textContent = nuevaTareaTexto;


    nuevaTContBt.appendChild(botonNone);
    nuevaTContBt.appendChild(botonPendiente);
    nuevaTContBt.appendChild(botonCompl);
    nuevaTContBt.appendChild(botonEliminar);

    listaTareas.appendChild(nuevaTarea);
    nuevaTareaInput.value = "";
    lista_fija_tareas
  }
};

// Función para marcar una tarea como completada
const marcarCompletada = tarea => {
  tarea.classList.toggle("completed");
};


// Función para mostrar tareas completadas
const mostrarCompletadas = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach(tarea => {
  if (tarea.classList.contains("compTask")) {
  tarea.style.display = "flex";
  } else {
  tarea.style.display = "none";
  }
  });
  };

// Función para mostrar tareas pendientes
const mostrarPendientes = () => {
const tareas = document.querySelectorAll("li");
tareas.forEach(tarea => {
if (tarea.classList.contains("pendTask")) {
tarea.style.display = "flex";
} else {
tarea.style.display = "none"; 
}
});
};

// Función para volver a mostrar todas las tareas
const mostrarTodas = () => {
  const tareas = document.querySelectorAll("li");
  tareas.forEach(tarea => {
  tarea.style.display = "flex";
  })
};

// Agregar evento de clic al botón "Mostrar Completadas"
document.getElementById("mostrarCompletadas").addEventListener("click", mostrarCompletadas);
// Agregar evento de clic al botón "Mostrar Todas"
document.getElementById("mostrarTodas").addEventListener("click", mostrarTodas);
// Agregar evento de clic al botón "Mostrar Pendientes"
document.getElementById("mostrarPendientes").addEventListener("click", mostrarPendientes);



// Agregar evento de clic a las tareas para marcarlas como

document.getElementById("listaTareas").addEventListener("click", event => {
    if (event.target.tagName === "li") {
      marcarCompletada(event.target);
    }
  });
// Agregar evento de clic al botón con id "aregar"
document.getElementById("agregar").addEventListener("click", agregarTarea);
