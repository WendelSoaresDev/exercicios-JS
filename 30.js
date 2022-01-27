/*
Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
*/

const maiorNum = (n) => 
{
    let maior = 0
    let menor = 131231231231231321321313321
    for (i = 0; i < n.length; i++)
     {
        if (n[i] > maior)
        {
            maior = n[i]
        }
        else if(n[i] < menor)
        {
            menor = n[i]
        }
    }
    return console.log(`O maior valor do vetor foi ${maior} e o menor foi ${menor}`)
}

let vetor = [20, 33, 27, 77, 88, 9, 7, 2, 1]
maiorNum(vetor)