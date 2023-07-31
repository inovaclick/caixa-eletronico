// Autor: Henrique Shiguemoto Felizardo
// Última Alteração: 31/07/2023

// Para executar o código, use o comando: 
//		node . <valor_para_caixa_eletrônico>

function maior_cedula_menor_or_igual_que(n) {
	const possiveis_cedulas = [2, 5, 10, 20, 50, 100];
	for(var i = possiveis_cedulas.length - 1; i >= 0; i--){
		if (possiveis_cedulas[i] <= n){
			return possiveis_cedulas[i];
		}
	}
	return 0; //Não há cédulas em circulação menores que a entrada
}

function calcula_quantidade_de_cedulas(n){
	// Lista com as quantidades de cada cédula para retornar do caixa eletrônico
	// Ex: Primeiro elemento é a quantidade de cédulas de 2 reais, 
	// 	   Segundo elemento é a quantidade de cédulas de 5 reais e assim por diante.
	var qtd_cedulas = [0, 0, 0, 0, 0, 0];

	// Dicionário que mapeia os valores de cédulas para os índices em qtd_cedulas
	//	Ex: Cédula de 2 reais fica na primeira posição, 
	//		Cédula de 50 reais fica na quinta posição e assim por diante.
	var cedula_index_map = {2:0, 5:1, 10:2, 20:3, 50:4, 100:5};

	var m = 0;
	while((m = maior_cedula_menor_or_igual_que(n)) > 1){
		qtd_m_cedulas = Math.floor(n / m);
		qtd_cedulas[cedula_index_map[m]] += qtd_m_cedulas;
		n = n % m;
	}
	return qtd_cedulas;
}

// Caso o usuário não passe um número como argumento, termine o programa.
if(process.argv[2] == undefined){
	console.log("É necessário passar um parâmetro numérico a este programa.");
	return;
}

// Recolhendo o argumento numérico passado ao programa
var n = parseInt(process.argv[2]);

// Validando o argumento de entrada
if(isNaN(n) | n <= 1){
	console.log("Argumento de entrada inválido.");
	return;
}
console.log(calcula_quantidade_de_cedulas(n)); // Resultado do caixa-eletrônico

// Verificando se o número é ímpar para informar que falta 1 real para completar o número, 
//		pois não há cédulas de 1 real em circulação
if(n % 2 == 1){
	console.log("Com falta de 1 real.");
}