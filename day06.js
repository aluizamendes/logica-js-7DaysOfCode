const prompt = require('prompt-sync')();

// categorias
function mostraCategorias() {
  console.log("\n-----------------------------------------------------");
  console.log("  [1] Frutas");
  console.log("  [2] Laticínios");
  console.log("  [3] Congelados");
  console.log("  [4] Doces");
  console.log("  [5] Temperos");
  console.log("-----------------------------------------------------\n");
}

// lista
function mostraListaCompras() {
  console.log("\n==============================");
  console.log("|      LISTA DE COMPRAS      |");
  console.log("==============================\n");
  console.log(" Frutas: ", frutas);
  console.log(" Laticinios: ", laticinios);
  console.log(" Congelados: ", congelados);
  console.log(" Doces: ", doces);
  console.log(" Temperos: ", temperos);
}

// categorias
let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let temperos = [];

// array agrupando todos as categorias
let listaCompras = [frutas, laticinios, congelados, doces, temperos];

let continuar = true;
while (continuar == true) {

  console.log("\n-----------------------------------------------------");
  console.log("|                    O P Ç Õ E S                    |");
  console.log("-----------------------------------------------------");
  console.log("  [1] Adicionar alimento na lista de compras");
  console.log("  [2] Remover alimento da lista de compras");
  console.log("  [3] Terminar");
  console.log("-----------------------------------------------------\n");

  let opcao = prompt("Digite uma opção: ");


  if (opcao == 1) {

    console.log("\n");
    let perguntaAdd = prompt("Qual comida deseja adicionar? ");

    // transformar string da pergunta em lowercase p/ evitar problemas
    let alimentoAdd = perguntaAdd.toLowerCase();

    // mostra categorias
    mostraCategorias();

    let alimentoCategoria = prompt("Qual categoria se encaixa? ");

    // inserir no objeto correspondente
    if (alimentoCategoria == 1) {
      frutas.push(alimentoAdd);
      console.log(`\n${alimentoAdd} foi adicionado à lista de compras com sucesso!`);

    } else if (alimentoCategoria == 2) {
      laticinios.push(alimentoAdd);
      console.log(`\n${alimentoAdd} foi adicionado à lista de compras com sucesso!`);
      
    } else if (alimentoCategoria == 3) {
      congelados.push(alimentoAdd);
      console.log(`\n${alimentoAdd} foi adicionado à lista de compras com sucesso!`);

    } else if (alimentoCategoria == 4) {
      doces.push(alimentoAdd);
      console.log(`\n${alimentoAdd} foi adicionado à lista de compras com sucesso!`);

    } else if (alimentoCategoria == 5) {
      temperos.push(alimentoAdd);
      console.log(`\n${alimentoAdd} foi adicionado à lista de compras com sucesso!`);
    }
  }
  else if (opcao == 2) {
    mostraListaCompras();

    // mostra categorias
    mostraCategorias();

    // perguntas de categoria e qual alimento deseja remover
    let alimentoRemoveCategoria = prompt("Digite qual categoria que deseja remover: ");
    let perguntaAlimentoRemove = prompt("Digite o nome do alimento quer remover: ");

    // tranformar string para lowercase pra evitar bug
    let alimentoRemove = perguntaAlimentoRemove.toLowerCase();

    // remove o alimento na cateogria desejada
    alimentoRemoveCategoria -= 1; 
    let indexAlimento =  listaCompras[alimentoRemoveCategoria].indexOf(alimentoRemove);

    if (indexAlimento >= 0) {
      listaCompras[alimentoRemoveCategoria].splice(indexAlimento, 1);
      console.log(`\n${alimentoRemove} foi removido da lista com sucesso!`);

    } else {
      console.log("Alimento não encontrado.");
    }    
  }
  else if (opcao == 3) {
    continuar = false;
    break;
  }
}

mostraListaCompras();
