Nota = require('./nota.class')

class CaixaEletronico {

    CELULAS_DISPONIVEIS = [
        {
            celula: {
                nome: "Dois reais",
                valorLiteral: 2
            },
            numeroNotas: 0
        },
        {
            celula: {
                nome: "Cinco Reais",
                valorLiteral: 5
            },
            numeroNotas: 0
        },
        {
            celula:{
                nome: "Dez reais",
                valorLiteral: 10
            },
            numeroNotas: 0
        },
        {
            celula:{
                nome: "Vinte reais",
                valorLiteral: 20
            },
            numeroNotas: 0
        },
        {
            celula:{
                nome: "Cinquenta reais",
                valorLiteral: 50
            },
            numeroNotas: 0
        },
        {
            celula:{
                nome: "Cem reais",
                valorLiteral: 100
            },
            numeroNotas: 0
        },
        {
            celula:{
                nome: "Duzentos reais",
                valorLiteral: 200
            },
            numeroNotas: 0
        }
    ]


    sacarValor(valor) {
        this.CELULAS_DISPONIVEIS.reverse().forEach(nota => {
            if (valor !== 0) {
                valor = this.definirNumeroDeNotas(valor, nota);
            }
        })

        var celulasUsadas = this.CELULAS_DISPONIVEIS.filter(celula => celula.numeroNotas > 0);
        celulasUsadas.forEach(nota => {
            console.log("Foram necessarias:", nota.numeroNotas, "nota(s) de", nota.celula.nome)
        })
    }


    definirNumeroDeNotas(valor, nota) {
        if (Math.floor(valor/nota.celula.valorLiteral) >= 1) {
            nota.numeroNotas = Math.floor(valor/nota.celula.valorLiteral);
            return valor - (nota.numeroNotas * nota.celula.valorLiteral);
        }
        return valor;
        
    }

}


module.exports = new CaixaEletronico()
