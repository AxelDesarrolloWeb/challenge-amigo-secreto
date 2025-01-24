// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let indicesSorteados = [];
// Función para agregar un amigo
function agregarAmigo() {
  // Capturamos el valor del input
  let input = document.querySelector("#amigo");
  let nombreAmigo = input.value.trim();

  // Validad que tengamos un nombre en el input
  if (nombreAmigo === "") {
    alert("Por favor, escribe un nombre válido");
    return;
  };

  // Validad que no repitamos el nombre
  if (amigos.includes(nombreAmigo)) {
    alert("El nombre ya está en la lista");
    return;
  };

  // Agregar el nombre al array
  amigos.push(nombreAmigo);

  // Actualizamos lista para no tener repetidos
  actualizarLista();

  // Limpiamos el input para volver a añadir otro amigo
  input.value = "";
};

// Función que actualiza la lista
function actualizarLista() {

  // Seleccionamos la lista de amigos
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";

  // Generamos la lista de amigos
  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });
};

// Función que reinicia el juego
function reiniciarJuego() {
  location.reload();
};

//Sortear amigo
function sortearAmigo() {
  if (amigos.length <= 1) {
    alert("Por favor, agrega al menos dos amigos para sortear");
  } else if (amigos.length >= 2) {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length) + 1;
    let amigoSorteado = amigos[indiceAleatorio - 1];
    let resultado = document.getElementById('resultado');
    if (indicesSorteados.length == amigos.length) {
      alert("Ya sorteaste todos tus amigos, reinicia para volver a jugar");
    } else {
      // Validar que no repitamos el índice
      if (indicesSorteados.includes(indiceAleatorio)) {
        return sortearAmigo();
      } else {
        // Añadimos el indice aleatorio a los la lista de los sorteados
        indicesSorteados.push(indiceAleatorio);
        //mostramos al amigo sorteado
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
        return indiceAleatorio;
      };
    };
  };
};
