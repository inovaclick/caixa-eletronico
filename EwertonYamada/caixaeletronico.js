var ValorSaque = 29; //Insira valor do saque (>= 10)
const Cedulas = [200, 100, 50, 20, 10, 5, 2];

Cedulas.forEach((ValorCedulas) => {
  let QtdeCedulas = parseInt(ValorSaque / ValorCedulas);
  ValorSaque = ValorSaque % ValorCedulas;

  if (ValorSaque === 1 || ValorSaque === 3) {
    //Condição para evitar erro em saques de valores com final 1, 3, 6, 8
    QtdeCedulas = QtdeCedulas - 1;
    ValorSaque = ValorSaque + ValorCedulas;
  }

  if (QtdeCedulas > 0) {
    // Condição para apresentar apenas notas necessárias
    console.log(`${QtdeCedulas} cedulas de R$${ValorCedulas}`);
  }
});
