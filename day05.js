const prompt = require('prompt-sync')();

// objetos pra agrupar cada categoria
let frutas = {
  "categoria": "frutas",
  "itens": []
};

let laticínios = {
  "categoria": "laticinios",
  "itens": []
};

let congelados = {
  "categoria": "congelados",
  "itens": []
};

let doces = {
  "categoria": "doces",
  "itens": []
};

let carnes = {
  "categoria": "carnes",
  "itens": []
};

let temperos = {
  "categoria": "temperos",
  "itens": []
};

// array agrupando todos os objetos
let listaCompras = [frutas, laticínios, congelados, doces, carnes, temperos];
let continuar = true;

while (continuar == true) {

  let add = prompt("Deseja adicionar uma comida na lista de compras? [S/N] ");

  if (add == "s" || add == "S") {

    console.log("\n");
    let alimentoAdd = prompt("Qual comida deseja adicionar? ");

    // categorias
    console.log("\n-----------------------------------------------------");
    console.log("  [1] Frutas");
    console.log("  [2] Laticínios");
    console.log("  [3] Congelados");
    console.log("  [4] Doces");
    console.log("  [5] Carnes");
    console.log("  [6] Temperos");
    console.log("-----------------------------------------------------\n");

    let alimentoCategoria = prompt("Qual categoria se encaixa? ");

    // inserir no objeto correspondente
    if (alimentoCategoria == 1) {
      frutas.itens.push(alimentoAdd);

    } else if (alimentoCategoria == 2) {
      laticínios.itens.push(alimentoAdd);

    } else if (alimentoCategoria == 3) {
      congelados.itens.push(alimentoAdd);

    } else if (alimentoCategoria == 4) {
      doces.itens.push(alimentoAdd);

    }  else if (alimentoCategoria == 5) {
      carnes.itens.push(alimentoAdd);

    }  else if (alimentoCategoria == 6) {
      temperos.itens.push(alimentoAdd);
    }
  }
  else {
    continuar = false;
    break;
  }
}

console.log("\n==============================");
console.log("|      LISTA DE COMPRAS      |");
console.log("==============================\n");
console.log(listaCompras);
