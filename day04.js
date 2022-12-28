const prompt = require('prompt-sync')();

function sortearNumero() {
  return Math.round(Math.random() * (10 - 0) + 0);
}

// variáveis
let maximoTentativas = 3;
let numeroAleatorio = sortearNumero();
let contador = 1;

while(contador <= maximoTentativas) {

  let chute = prompt("Chute um número entre 0 e 10: ");

  if(chute >= 0 && chute <= 10) {

    if(chute == numeroAleatorio) {
      console.log(`\nParabéns, você acertou!\n`);
      break;
    }
    else {
      console.log("Você errou! Tente mais uma vez.\n");

      if(contador >= maximoTentativas) {
      console.log(`Você atingiu o limite de tentativas. O número pensado era ${numeroAleatorio}.\n`);
      break;
      }
    }  

    contador++;    
  }
  else {
    console.log("Chute apenas entre 0 e 10.\n");
  }
}
