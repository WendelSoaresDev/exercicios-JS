/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.

*/

const contador = n =>
{
    let dentro = 0
    let fora = 0

    for(i = 0; i < n.length; i++)
    {
        if(n[i] >= 10 && n[i] <= 20)
        {
            dentro++
        }
        else
        {
            fora++
        }
    }

    return console.log(`entre 10 e 20 tem ${dentro} numeros! fora desse intervalo tem ${fora} numeros`)
}

let vetor = [2, 88, 4, 665, 0, 20, 10, 18, 32, 45, 15, 17, 11]
contador(vetor)