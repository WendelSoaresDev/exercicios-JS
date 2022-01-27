/*
Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

*/ 

const parImpar = (n) =>
{   let totalPar = 0
    let totalImpar = 0
    for(i = 0; i < n.length; i++)
    {
        if(n[i] % 2 == 0)
        {
            totalPar++
        }
        else
        {
            totalImpar++
        }
    }

  return console.log(`Total de par(s): ${totalPar++}, total de impar(s): ${totalImpar}`)
}

parImpar([20, 33, 27, 33, 10, 9, 7, 2])