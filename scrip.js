const input = document.getElementById("input");
const btn_todo = document.getElementById("btn-todo"); // Corregido el ID del botón
const container_todo = document.querySelector(".container_todo");
let id = 1;

function addTodo() {
    // Crear los elementos
    const div_todo = document.createElement("div");
    const div_container = document.createElement("div");
    const checkbox = document.createElement("input"); 
    const parrafo = document.createElement("p");
    const div_boton = document.createElement("div");
    const button = document.createElement("button");
    const icono = document.createElement("i");

    // Añadir atributos y clases
    parrafo.innerHTML = input.value;
    div_todo.classList.add("container_list");
    div_todo.classList.add("container_list-1");
    checkbox.setAttribute("type", "checkbox"); 
    checkbox.classList.add("casilla");
    parrafo.classList.add("actividad"); 
    div_boton.classList.add("container_list-btn");
    button.classList.add("btn-eliminar"); 
    button.setAttribute("id", id++);

    icono.classList.add("fas", "fa-trash-alt");

    // Juntamos todo y lo mostramos
    div_todo.appendChild(div_container);
    div_todo.appendChild(div_boton);
    div_container.appendChild(checkbox);
    div_container.appendChild(parrafo);
    button.appendChild(icono);
    div_boton.appendChild(button);

    // Agregar todo el paquete al contenedor general
    container_todo.appendChild(div_todo);

    input.value = "";

    // Funcionalidad de eliminar
    function removerTodo(id) {
        document.getElementById(id).parentElement.parentElement.remove();
    }

    button.addEventListener("click", function () { 
        removerTodo(button.getAttribute("id"));
    });
}

btn_todo.addEventListener("click", function () { 
    if (input.value === "" || input.value.trim() === "") { 
        window.alert("Input vacio");
    } else {
        addTodo();
    }
});

