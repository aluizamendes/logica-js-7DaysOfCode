const prompt = require('prompt-sync')();

const nome = prompt("Qual o seu nome? ");
const idade = prompt("Quantos anos você tem? ");
const linguagem = prompt("Qual linguagem de programação você está estudando? ");

console.log(`\nOlá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.\n`);

let resposta = parseInt(prompt(`Você gosta de estudar ${linguagem}? Responda com número 1 para SIM ou 2 para NÃO: `));

function verificaResposta(numero) {
  if (numero === 1) {
    console.log("1 > Muito bom! Continue estudando e você terá muito sucesso.");

  } else if (numero === 2){
    console.log("2 > Ahh que pena... Já tentou aprender outras linguagens? ");

  } else {
    console.log("Escolha apenas com o número 1 para SIM ou número 2 para NÃO.");
  }
}

verificaResposta(resposta);
