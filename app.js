let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// Enquanto chute não for igual ao número secreto
while (chute !== numeroSecreto) {
    // Pede ao usuário para escolher um número
    chute = prompt('Escolha um número entre 1 e 100');

    // Se o usuário clicar "Cancelar", sai do loop
    if (chute === null) {
        alert('Jogo cancelado.');
        break; // Sai do loop
    }

    // Converte a entrada para número
    chute = Number(chute);

    // Verifica se o valor inserido é um número válido
    if (isNaN(chute)) {
        alert('Por favor, insira um número válido!');
    } else {
        // Se chute for igual ao número secreto
        if (chute === numeroSecreto) {
            alert(`Isso aí! Você descobriu o número secreto: ${numeroSecreto} com ${tentativas} tentativas`);
        } else {
            // Se o chute for maior que o número secreto
            if (chute > numeroSecreto) {
                alert(`O número secreto é menor que ${chute}`);
            } else {
                alert(`O número secreto é maior que ${chute}`);
            }
        tentativas++}
    }
}
