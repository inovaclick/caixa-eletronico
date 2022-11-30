var notasBrasileiras = [200,100, 50, 20, 10, 5, 2];
function calcularMenorNumNotas(valor, contador, result) {

  if (notasBrasileiras[contador] === undefined) {
    result.resto = valor;
    if (result.resto != 0){  
        return "Não é possivel sacar este valor";
    }
    return result;
  }

  divisao = Math.floor(valor / notasBrasileiras[contador]);

  if (divisao > 0) {
    valor -= divisao * notasBrasileiras[contador];
    result.notas[notasBrasileiras[contador]] = divisao;
  }

  return calcularMenorNumNotas(valor, ++contador, result);
}
let prompt = require('prompt-sync')();
console.log('Qual o Valor do Saque?');
let valorSaque = prompt ();

console.log(calcularMenorNumNotas(valorSaque, 0, {resto: 0, notas: {}}))    