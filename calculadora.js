const prompt = require  ('prompt-sync')({sigint: true});

let option;

do{
console.log("\n=====CALCULADORA=====");  

console.log("\n1:Soma")
console.log("\n2:Subtração")
console.log("\n3:Multiplicação")
console.log("\n4:Divisão")
console.log("\n5:Sair")

console.log("\n====================")
console.log()

option = Number(prompt("Digite a opção desejada: "));

switch (option) {
    case 1:
        console.log() //Usei o console.log() como quebra de linha.
        let soma1 = Number(prompt("Digite o primeiro número: "));
        console.log()
        let soma2 = Number(prompt("Digite o segundo número: "));
        console.log()
        soma = soma1 + soma2
        console.log("A soma dos números é: " + soma);
        break;

    case 2:
        console.log()
        let sub1 = Number(prompt("Digite o primeiro número: "));
        console.log()
        let sub2 = Number(prompt("Digite o segundo número: "));
        console.log()
        subtraçao = sub1 - sub2
        console.log("A subtração dos números é: " + subtraçao);
        break;

    case 3:
        console.log()
        let mult1 = Number(prompt("Digite o primeiro número: "));
        console.log()
        let mult2 = Number(prompt("Digite o segundo número: "));
        console.log()
        multiplicaçao = mult1 * mult2
        console.log("A multiplicação dos números é: " + multiplicaçao);
        break;

    case 4:
        console.log()
        let div1 = Number(prompt("Digite o primeiro número: "));
        console.log()
        let div2 = Number(prompt("Digite o segundo número: "));
        console.log()
        if(div2 !== 0) {
            let divisao = div1 / div2;
            console.log("A divisão dos números: " + divisao);
        } else {
            console.log ("Erro: divisão por zero não permitida.");
        }
        break;
    
    case 5:
        console.log("\nFinalizando o programa...")
        console.log()
        break;

    default:
        console.log("\nOpção inválida, por favor escolha uma das opções!")
        console.log()
}

} while(option!==5); //o programa só pode ser parado ao usuário escolher 5.

//Matheus Vieira
