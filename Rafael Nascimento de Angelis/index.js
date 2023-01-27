RecebeValor(process.argv[2]);

function RecebeValor(valor){

    console.log(`\nO valor que deseja-se sacar é: ${valor} reais\n\n Entregue:\n`);

    Divide(0, valor);
}

function Divide(index, valorTotal){

    if(valorTotal != 0){
        
        let cedulas = [100, 50, 20, 10, 5, 2, 1];
        let valorNota = cedulas[index];
        let qntNotas = Math.floor(valorTotal / valorNota);

        if(qntNotas != 0){
            console.log(` ${qntNotas} cédula(s) de ${valorNota}`);
        }

        let restante = valorTotal - (qntNotas * valorNota);
        Divide(index + 1, restante);
    }
}