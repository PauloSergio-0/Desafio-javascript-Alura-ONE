
function verificador(limiteMax){
    let tentativas = 0
    let numeroSecreto =  parseInt(Math.random() * limiteMax + 1)
    while (true) {

        tentativas += 1;
        
        let numero = Number(prompt(`Escolha um número entre 1 e ${limiteMax}`));

        if (numero > numeroSecreto){
            alert(`O número deve ser menor que ${numero}.`);

        } else if (numero < numeroSecreto){
            alert(`O número deve ser maior ${numero}.`);

        } else {
            let message_tentativas = tentativas > 1 ? "tentativas" : "tentativa";

            //string para variável
            alert(`Você acertou!!! o numero secreto é ${numero}. \nPara acerta o numero secreto você teve que realizar ${tentativas} ${message_tentativas}.`); 
            break;
        }
    }
};

alert("Bem vindo ao jogo de adivinhar o número secreto"); 

let limite = parseInt(prompt("Digite o valor maximo do número secreto"))
verificador(limite);