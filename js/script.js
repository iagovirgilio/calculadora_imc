import { ResultadoIMC } from './ResultadoIMC.js';

// Função para limpar os campos do formulário e focar no campo de peso
const limparFocarFormulario = () => {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').focus(); // Foca no campo de peso após limpar
};

// Função para validar as entradas do formulário
const validarEntradas = (peso, altura) => {
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        return "Por favor, insira valores válidos.";
    }
    return null;
};

// Função para exibir a mensagem de resultado no DOM
const exibirResultado = (mensagem, cor) => {
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = mensagem;
    resultadoEl.style.color = cor || "#333"; // Cor padrão, a não ser que uma cor específica seja passada
};

// Focar no campo de peso quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('peso').focus(); // Foca no campo de peso assim que a página é carregada
});

// Manipulador de eventos para o botão de cálculo
document.getElementById('calcularBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    // Validação das entradas
    const erroValidacao = validarEntradas(peso, altura);
    if (erroValidacao) {
        exibirResultado(erroValidacao, "red");
        return;
    }

    // Cria o objeto ResultadoIMC
    const resultado = new ResultadoIMC(peso, altura);

    // Exibe o resultado do cálculo e ajusta a cor com base na categoria
    const mensagem = `IMC: ${resultado.imc} - ${resultado.obterCategoria()}`;
    const corCategoria = resultado.obterCorCategoria();
    exibirResultado(mensagem, corCategoria);

    // Limpa os campos do formulário após exibir o resultado e foca no campo de peso
    limparFocarFormulario();
});
