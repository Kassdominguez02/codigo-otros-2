var formulario = document.querySelector(".formulario"); //la clase del formulario se llama Formulario y para llamar a la clase se usa el .

// considero es mejor  llamar al dormulario utilizando el addEventListener con el evento submit
formulario.addEventListener("submit", function(evento) {

  evento.preventDefault(); // se corrige a event.preventDefault
  
  // consiero mejor usar document.getElement para traer los elementos del html
  var n = document.getElementById("name");
  var e = document.getElementById("age");
  var na =document.getElementById("nationality");

  // se accede al valor de cada elemento
  var nombre = n.value;
  var edad = e.value;

  var i = na.selectedIndex; // obtiene el indice del elemento seleccionado en el imput de nacionalidad
  var nacionalidad = na.options[i].value;
  console.log(nombre, edad);
  console.log(nacionalidad);

  // validacion de formulario, que no exista un cambio vacio, si esta vacio el input se marcara en rojo
  if (nombre.length === 0) {
    n.classList.add("error"); // cambia la clase para que obtenga el estilo declarado en el css.
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
});

/*  este  codigo esta repetido mas abago dentro de la funcion agregar invitado

var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);
*/

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

var lista = document.getElementById("lista-de-invitados")

// en esta parte se estan creando los elementos para el html
var elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // se cambie el added por add 
lista.appendChild(elementoLista);

var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
//spanNombre.textContent = "Nombre: "; // este codigo esta repetido en la funcion crear elemento
//inputNombre.value = nombre ; //// este codigo esta repetido en la funcion crear elemento
elementoLista.appendChild(spanNombre); // en esta parte se estan agrupando todo los elementos dentro de un div en el html
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span");
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);


var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  };
};

// fataban los ; en casi todo el codigo.