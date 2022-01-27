/**
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

const media = n =>
{
    total = 0

    for(i = 0; i < n.length; i++)
    {
        total += n[i]
    }
    mediaTotal = total / n.length
    return console.log(`A média artimética das fotos foi: ${mediaTotal.toFixed(2)}`)
}

let vetor = [1, 3, 10, 7, 8, 4, 5, 8, 7]
media(vetor)