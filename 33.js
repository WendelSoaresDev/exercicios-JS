/**
 * Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

 */

let vetorInteiro = [1, 2, 3]
let vetorString = ['Wendel ', 'Catiane ', 'Victor ']
let vetorDouble = [2.0, 3.0, 4.0]

let concat1 = vetorInteiro.concat(vetorString)

    for(i = 0; i < vetorInteiro.length; i++)
    {
       var concat2 = console.log(vetorString[i].concat(vetorDouble[i]))
    }
console.log(concat1)
console.log(concat2)