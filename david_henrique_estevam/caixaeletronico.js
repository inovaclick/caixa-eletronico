const tiposNotaReal = [200, 100, 50, 20, 10, 5, 2];

function calcMinNotas(valor){
    let qntNotas = new Array(tiposNotaReal.length).fill(0);

    for(let i = 0; i < tiposNotaReal.length; i++){
        if(tiposNotaReal[i] <= valor){
            qntNotas[i] = Math.floor(valor/tiposNotaReal[i]);
            valor = valor%tiposNotaReal[i];
        }
    }

    //usando .reduce() para realizar uma somatória sobre a array
    totalNotas = qntNotas.reduce( (acumulado, atual) => acumulado + atual, 0 );

    return {total: totalNotas, resto: valor, qntNotas: qntNotas};
}

//valor passado como o primeiro argumento ao chamar o script
const resultados = calcMinNotas(process.argv[2])

console.log(`Quantia mínima de notas necessárias: ${resultados.total}    Resto: ${resultados.resto}`);

qntNotasIndividuais = ''
for(let idx_nota = 0; idx_nota < tiposNotaReal.length; idx_nota++){
    qntNotasIndividuais += `${resultados.qntNotas[idx_nota]} x ${tiposNotaReal[idx_nota]}, `
}

console.log(`Notas necessárias:`, qntNotasIndividuais);
