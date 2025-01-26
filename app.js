// Referências aos elementos da DOM
let inputAmigo = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

// Lista para armazenar os nomes
let amigos = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let nome = inputAmigo.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome válido!');
        return;
    }

    // Se o nome for repetido exibe a seguinte mensagem
        if (amigos.includes(nome)) {
        alert('Esse nome já foi digitado!');
        inputAmigo.value = '';
        inputAmigo.focus();
        return;
    }

    // Adiciona o nome à lista
    amigos.push(nome);

    // Atualiza a exibição da lista
    let itemLista = document.createElement('li');
    itemLista.textContent = nome;
    listaAmigos.appendChild(itemLista);

    // Limpa o campo de entrada e foca novamente
    inputAmigo.value = '';
    inputAmigo.focus();
}

// Função para sortear um amigo
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista está vazia! Adicione nomes antes de sortear.');
        return;
    }

    // Sorteia um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
