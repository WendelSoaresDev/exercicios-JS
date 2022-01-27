/*
Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.

*/

const numNeg = n =>
{
    let contador = 0

    for(i = 0; i < n.length; i++)
    {
        if(n[i] < 0)
        {
            contador++
        }
    }

    return console.log(`Numeros negativos: ${contador}`)
}

let vetor = [1, -2, -3, 4, 5, 6, -7, 8, 9, -10, 0]
numNeg(vetor)