import { ResultadoIMC } from './calculos.js';
import { exibirResultado, limparFocarFormulario } from './dom.js';
import { validarEntradas } from './validacao.js';

// Quando a página carrega, o foco fica no campo de peso
window.onload = () => {
    document.getElementById('peso').focus();
};

document.getElementById('calcularBtn').addEventListener('click', (e) => {
    e.preventDefault();

    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    const erroValidacao = validarEntradas(peso, altura);
    if (erroValidacao) {
        exibirResultado(erroValidacao, "red");
        return;
    }

    const resultado = new ResultadoIMC(peso, altura);
    const mensagem = `IMC: ${resultado.imc} - ${resultado.obterCategoria()}`;
    const corCategoria = resultado.obterCorCategoria();
    exibirResultado(mensagem, corCategoria);

    limparFocarFormulario();
});
