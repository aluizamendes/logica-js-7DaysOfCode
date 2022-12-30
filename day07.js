const prompt = require('prompt-sync')();

function mostraOpcoes() {
  console.log("\n-----------------------------------------------------");
  console.log("|                   CALCULADORA                     |");
  console.log("-----------------------------------------------------");
  console.log("  [1] Soma");
  console.log("  [2] Subtração");
  console.log("  [3] Multiplicação");
  console.log("  [4] Divisão");
  console.log("  [5] Sair");
  console.log("-----------------------------------------------------\n");
}

// funções pra cada operação
function somar(n1, n2) {
  return n1 + n2;
}

function subtrair(n1, n2) {
  return n1 - n2;
}

function multiplicar(n1, n2) {
  return n1 * n2;
}

function dividir(n1, n2) {
  return n1 / n2;
}


let sair = false;

while (sair == false) {

  mostraOpcoes();

  let opcao = parseInt(prompt("Digite uma opção: "));

  if (opcao < 5) {

    let primeiroNumero = parseInt(prompt("Digite o primeiro número: "));
    let segundoNumero = parseInt(prompt("Digite o segundo número: "));  

    switch (opcao) {
      case 1:
        let resultadoSoma = somar(primeiroNumero, segundoNumero);      
        console.log("\n");
        console.log(`${primeiroNumero} + ${segundoNumero} = ${resultadoSoma}`);
        break;

      case 2:
        let resultadoSubtracao = subtrair(primeiroNumero, segundoNumero);
        console.log("\n");
        console.log(`${primeiroNumero} - ${segundoNumero} = ${resultadoSubtracao}`);
        break;
      
      case 3:
        let resultadoMultiplicacao = multiplicar(primeiroNumero, segundoNumero);
        console.log("\n");
        console.log(`${primeiroNumero} * ${segundoNumero} = ${resultadoMultiplicacao}`);
        break;
      
      case 4:
        let resultadoDivisao = dividir(primeiroNumero, segundoNumero);
        console.log("\n");
        console.log(`${primeiroNumero} / ${segundoNumero} = ${resultadoDivisao}`);
        break;
      
      case 5:
        console.log("\nAté a próxima!!");
        sair = true;
        break;
    }
  } else {
    console.log("Por favor, digite uma opção válida.");
  }
}
