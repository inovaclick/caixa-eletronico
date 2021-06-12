var valor = process.argv.slice(2);

const tiposNota = [100, 50, 20, 10, 5, 2, 1]
var numNotas = 0

for (nota of tiposNota) {
  
  var qtdNota = parseInt(valor / nota)
  if (qtdNota != 0) numNotas = numNotas + qtdNota  

  valor = valor % nota
  console.log(`${qtdNota} notas de ${nota} `) 
  
 }

 console.log(`Serão necessárias no mínimo ${numNotas} notas `)
