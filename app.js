let amigos = [];
let indicesSorteados = [];

// Función para agregar un amigo
function agregarAmigo() {
  const input = document.querySelector("#amigo");
  const nombreAmigo = input.value.trim();

  if (!nombreAmigo) {
    mostrarAlerta("Por favor, escribe un nombre válido");
    return;
  }

  if (amigos.includes(nombreAmigo)) {
    mostrarAlerta("El nombre ya está en la lista");
    return;
  }

  amigos.push(nombreAmigo);
  actualizarLista();
  limpiarInput(input);
}

// Función para actualizar la lista de amigos
function actualizarLista() {
  const lista = document.querySelector("#listaAmigos");
  lista.innerHTML = amigos
    .map((amigo, index) => `<li>${index + 1}. ${amigo}</li>`)
    .join("");
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigos.length < 2) {
    mostrarAlerta("Por favor, agrega al menos dos amigos para sortear");
    return;
  }

  if (indicesSorteados.length === amigos.length) {
    mostrarAlerta("Ya sorteaste a todos tus amigos, reinicia para volver a jugar");
    return;
  }

  let indiceAleatorio;
  do {
    indiceAleatorio = Math.floor(Math.random() * amigos.length);
  } while (indicesSorteados.includes(indiceAleatorio));

  indicesSorteados.push(indiceAleatorio);
  mostrarResultado(`El amigo sorteado es: ${amigos[indiceAleatorio]}`);
}

// Función para reiniciar el juego
function reiniciarJuego() {
  amigos = [];
  indicesSorteados = [];
  actualizarLista();
  mostrarResultado("");
}

// Función para mostrar alertas (puedes cambiar esto por un modal si lo prefieres)
function mostrarAlerta(mensaje) {
  alert(mensaje);
}

// Función para mostrar el resultado
function mostrarResultado(mensaje) {
  const resultado = document.getElementById("resultado");
  resultado.textContent = mensaje;
}

// Función para limpiar el input
function limpiarInput(input) {
  input.value = "";
}
