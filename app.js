let amigos = [];

function agregarAmigo(){
    let input = document.querySelector("#amigo");
    elementoHTML.innerHTML = texto;
    
    if (nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
        alert("No hay nombres en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${nombreSorteado}`;
}