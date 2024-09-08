export const exibirResultado = (mensagem, cor) => {
    const resultadoEl = document.getElementById('resultado');
    resultadoEl.innerHTML = mensagem;
    resultadoEl.style.color = cor || "#333";
};

export const limparFocarFormulario = () => {
    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
    document.getElementById('peso').focus();
};
