let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.ariaValueMax.trim();
    
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