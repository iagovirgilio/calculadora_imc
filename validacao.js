export const validarEntradas = (peso, altura) => {
    if (!peso || !altura || peso <= 0 || altura <= 0) {
        return "Por favor, insira valores válidos.";
    }
    return null;
};
