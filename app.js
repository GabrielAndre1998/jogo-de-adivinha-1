alert('olá, adivinhe se puder'); // Exibe uma mensagem de boas-vindas

let numeroMaximo = 10; // Define o limite máximo para o número secreto
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); // Gera um número aleatório entre 1 e numeroMaximo
let chute; // Variável para armazenar o chute do usuário
let tentativas = 1; // Inicializa o contador de tentativas

// Enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um numero de 1 a ${numeroMaximo}`); // Solicita ao usuário que faça um chute
    // Se o chute for igual ao número secreto, encerra o loop
    if (chute == numeroSecreto) {
        break;
    } else {
        // Se o chute for maior que o número secreto, exibe uma mensagem informando que o número secreto é menor
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que (${chute})`);
        } else {
            // Se o chute for menor que o número secreto, exibe uma mensagem informando que o número secreto é maior
            alert(`O numero secreto é maior que (${chute})`);
        }
        // Incrementa o contador de tentativas
        tentativas++;
    }
}

// Determina se a palavra "tentativa" deve ser singular ou plural com base no número de tentativas
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
// Exibe uma mensagem informando que o usuário acertou o número secreto, juntamente com o número secreto e o número de tentativas
alert(`Você acertou o numero secreto! (${numeroSecreto}) com (${tentativas}) ${palavraTentativa}`);
// Alternativamente, poderia ser utilizado um if/else para tratar singular e plural, como mostrado nos comentários abaixo do código.

// if (tentativas > 1) {
// alert(`você acertou o numero secreto! (${numeroSecreto}) com (${tentativas}) tentativas.`)
// } else {
// alert(`você acertou o numero secreto! (${numeroSecreto}) com (${tentativas}) tentativa.`)
// } 