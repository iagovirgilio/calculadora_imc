import { categoriasIMC } from './constants.js';

export class ResultadoIMC {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
        this.imc = this.calcularIMC();
    }

    calcularIMC() {
        return (this.peso / (this.altura ** 2)).toFixed(2);
    }

    obterCategoria() {
        return categoriasIMC.find(cat => this.imc >= cat.min && this.imc <= cat.max)?.categoria || 'Desconhecido';
    }

    obterCorCategoria() {
        return categoriasIMC.find(cat => this.imc >= cat.min && this.imc <= cat.max)?.cor || '#000';
    }
}
