export class ResultadoIMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularIMC();
        this.categoriasIMC = {
            abaixoPeso: { max: 18.5, msg: "Abaixo do peso" },
            pesoNormal: { min: 18.5, max: 24.9, msg: "Peso normal" },
            sobrepeso: { min: 25, max: 29.9, msg: "Sobrepeso" },
            obesidade: { min: 30, msg: "Obesidade" }
        };
    }

    calcularIMC() {
        return (this.peso / (this.altura * this.altura)).toFixed(2);
    }

    obterCategoria() {
        const { imc, categoriasIMC } = this;
        let categoria = Object.values(categoriasIMC).find(
            cat => (cat.min ? imc >= cat.min : true) && (cat.max ? imc < cat.max : true)
        );
        return categoria ? categoria.msg : "Valor inválido";
    }

    obterCorCategoria() {
        const { imc, categoriasIMC } = this;
        if (imc < categoriasIMC.abaixoPeso.max) return "orange";
        if (imc < categoriasIMC.pesoNormal.max) return "green";
        if (imc < categoriasIMC.sobrepeso.max) return "#f1c40f";
        return "red";
    }
}
