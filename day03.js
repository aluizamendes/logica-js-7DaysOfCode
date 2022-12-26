const prompt = require('prompt-sync')();

// array com as tecnologias digitadas pela pessoa começa vazio
let tecnologias = [];

console.log("\n------------------------------------------------------");
const nome = prompt("Qual o seu nome? ");

console.log("\n----------------------");
console.log("|    [1] Front-End   |");
console.log("|    [2] Back-End    |");
console.log("----------------------\n");
const resposta = parseInt(prompt(`Olá, ${nome}! Qual área você deseja seguir? `));


if (resposta === 1) {
  console.log("\n-----------------------------------------");
  console.log("|    [1] React                          |");
  console.log("|    [2] Vue                            |");
  console.log("|    [3] Quero me tornar Full-stack     |");
  console.log("-----------------------------------------\n");

  let framework = parseInt(prompt(`1> Você quer aprender Front-End, legal! ${nome}, agora você pensa aprender qual tecnologia? `));


  if (framework === 1) {
    console.log("\n-------------------------------------------------------------------------");
    console.log("Legal! Você quer aprender React!");
    console.log("-------------------------------------------------------------------------\n");

    tecnologias.push("React");
  }
  else if (framework === 2) {
    console.log("\n-------------------------------------------------------------------------");
    console.log("Legal! Você quer aprender Vue!");
    console.log("-------------------------------------------------------------------------\n");

    tecnologias.push("Vue");
  }
  else if (framework === 3) {
    console.log("-------------------------------------------------------------------------\n");
    console.log("Legal! Então você quer se tornar um desenvolvedor Full-stack!");
    console.log("-------------------------------------------------------------------------\n");
  }
}

else if (resposta === 2) {
  
  console.log("\n-----------------------------------------");
  console.log("|    [1] C#                             |");
  console.log("|    [2] Java                           |");
  console.log("|    [3] Quero me tornar Full-stack     |");
  console.log("-----------------------------------------\n");

  let framework = parseInt(prompt(`2> Você quer aprender Back-End, legal! ${nome}, agora você pensa aprender qual tecnologia? `));

  if (framework === 1) {
    console.log("\n-------------------------------------------------------------");
    console.log("Legal! Você quer aprender C#!");
    console.log("-------------------------------------------------------------\n");

    tecnologias.push("C#");

  }
  else if (framework === 2) {
    console.log("\n-------------------------------------------------------------");
    console.log("Legal! Você quer aprender Java!");
    console.log("-------------------------------------------------------------\n");

    tecnologias.push("Java");

  }
  else if (framework === 3) {
    console.log("\n-------------------------------------------------------------------------");
    console.log("Legal! Então você quer se tornar um desenvolvedor Full-stack!");
    console.log("-------------------------------------------------------------------------\n");
  }
}


// por fim perguntar quais tecnologias a pessoa gostaria de conhecer
let continuar = true;

// a perguntar irá rodar em loop até que a pessoa responda "N".
while (continuar == true) {

  let tecnologia = prompt(`${nome}, qual tecnologia a mais você gostaria de se especializar ou conhecer? `);
  let repete = false;

  // varre o array pra ver se a pessoa já repetiu a resposta
  for (i = 0; i <= tecnologias.length; i++) {
    if (tecnologias[i] == tecnologia) {
      
      console.log("\nVocê já inseriu essa tecnologia! Tente novamente.\n");
      repete = true;
      break;      
    }
  }  

  if (repete == false) {
    // adiciona resposta da tecnologia no array
    tecnologias.push(tecnologia);
  }


  let continuar = prompt("Mais alguma? [S/N]: ");  

  if (continuar === "N") {

    // exibe o array com as tecnologias que ele inseriu
    console.log("\nInteressante! Então você quer aprender as tecnologias: ", tecnologias);

    // termina o loop
    continuar = false;
    break
  }  
}
