// sacarDinheiro.js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularCedulas(valor) {
  const cedulas = [100, 50, 20, 10, 5, 2, 1];
  const resultado = {};

  for (let cedula of cedulas) {
    if (valor >= cedula) {
      resultado[cedula] = Math.floor(valor / cedula);
      valor %= cedula;
    }
  }

  return resultado;
}

function solicitarValor() {
    rl.question('Digite o valor que deseja sacar: ', (valorSaque) => {
      if (!isNaN(valorSaque)) {
        const cedulas = calcularCedulas(parseInt(valorSaque));
  
        console.log(`Valor: R$${valorSaque}`);
        console.log('Cédulas:');
        for (let cedula in cedulas) {
          console.log(`${cedulas[cedula]} cédula(s) de R$${cedula}`);
        }
        rl.close();
      } else {
        console.log("Digite apenas números")
        solicitarValor(); // Chama a função novamente para solicitar um valor válido
      }
    });
  }
  
  solicitarValor();


  