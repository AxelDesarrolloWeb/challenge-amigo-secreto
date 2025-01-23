// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  // Capturamos el valor del input
  let input = document.querySelector("#amigo");
  let nombreAmigo = input.value.trim();

  // 
  if (nombreAmigo === "") {
    alert("Por favor, escribe un nombre válido");
    return;
  }

  //
  if(amigos.includes(nombreAmigo)) {
    alert("El nombre ya está en la lista");
    return;
  };

  //
  amigos.push(nombreAmigo);

  //
  actualizarLista();


  //
  input.value = "";
  console.log(amigos);
};

//
function actualizarLista() {
let lista = document.querySelector('#listaAmigos');
lista.innerHTML = "";

amigos.forEach((amigo,index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
});
};


//Sortear amigo
function sortearAmigo() {

};
