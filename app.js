let amigos = [];

// Actualizar lista de amigos
function actualizarLista() {
    const amigoSecreto = document.getElementById('listaAmigos');
    amigoSecreto.innerHTML = ''; // Limpiar la lista antes de mostrarla

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        amigoSecreto.appendChild(li);
    });
}

// Función para agregar amigo
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const amigo = inputAmigo.value.trim();

    if (amigo === '') {
        alert('Por favor, ingresa un nombre.');
        inputAmigo.style.border = '2px solid red';
        return;
    }

    // Verificar que el nombre no se repita
    if (amigos.includes(amigo)) {
        alert('El amigo ya está en la lista.');
        return;
    }

    inputAmigo.style.border = ''; // Restablecer borde si la entrada es válida
    amigos.push(amigo);
    inputAmigo.value = ''; // Limpiar el campo de entrada

    actualizarLista();
}

// Evento para agregar amigo al presionar "Enter"
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});

// Mostrar amigos en la lista
function mostrarAmigos() {
    actualizarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debe haber al menos dos amigos para el sorteo.');
        return;
    }

    const amigoSecreto = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[amigoSecreto];
    document.getElementById('resultado').innerHTML = `<strong>El amigo secreto es:</strong> ${amigoSorteado}`;
}
