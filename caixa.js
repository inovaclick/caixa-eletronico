
var readlineSync = require('readline-sync');
var nota200=0;
var nota100=0;
var nota50=0;
var nota20=0;
var nota10=0;
var nota5=0;
var nota2=0;
var nota1=0;

var ValorSacar = parseFloat(readlineSync.question('Qual o valor a ser sacado?'));
var valor = ValorSacar;

    while(ValorSacar !=0){
        if(ValorSacar >=200){
            ValorSacar = ValorSacar-200;
            nota200 = nota200+1;
        }
        else if(ValorSacar>=100 && ValorSacar<200){
            ValorSacar = ValorSacar-100;
            nota100 = nota100+1;
        }
        else if(ValorSacar>=50 && ValorSacar<100){
            ValorSacar = ValorSacar-50;
            nota50 = nota50+1;
        }
        else if(ValorSacar>=20 && ValorSacar<50){
            ValorSacar = ValorSacar-20;
            nota20 = nota20+1;
        }
        else if(ValorSacar>=10 && ValorSacar<20){
            ValorSacar = ValorSacar-10;
            nota10 = nota10+1;
        }
        else if(ValorSacar>=5 && ValorSacar<10){
            ValorSacar = ValorSacar-5;
            nota5 = nota5+1;
        }
        else if(ValorSacar>=2 && ValorSacar<5){
            ValorSacar = ValorSacar-2;
            nota2 = nota2+1;
        }
        else if(ValorSacar==1){
            ValorSacar = ValorSacar-1;
            nota1 = nota1+1;
        }

        

    }
console.log(`O valor a ser sacado é de ${valor}`);
console.log(`Cedulas de R$200: ${nota200}`);
console.log(`Cedulas de R$100: ${nota100}`);
console.log(`Cedulas de R$50: ${nota50}`);
console.log(`Cedulas de R$20: ${nota20}`);
console.log(`Cedulas de R$10: ${nota10}`);
console.log(`Cedulas de R$5: ${nota5}`);
console.log(`Cedulas de R$2: ${nota2}`);
console.log(`Cedulas de R$1: ${nota1}`);
