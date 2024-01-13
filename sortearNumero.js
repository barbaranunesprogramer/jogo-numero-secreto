const menorValor = prompt("Por qual número voce quer que começe ?");
const maiorValor = prompt("Ate que número você quer que termine ?")
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);

}
console.log(`numero secreto e ${numeroSecreto}`)

const menorElemento = document.getElementById("menor-valor");
menorElemento.innerHTML = menorValor;

const maiorElemento = document.getElementById("maior-valor");
maiorElemento.innerHTML = maiorValor;

