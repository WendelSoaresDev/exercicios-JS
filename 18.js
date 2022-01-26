/**
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’

 */


const numero = n => {
    switch (n) 
    {
        case 0:
            console.log(`${n}: zero`)
            break
        case 1:
            console.log(`${n}: um`)
            break

        case 2:
            console.log(`${n}: dois`)
            break
        case 3:
            console.log(`${n}: tres`)
            break
        case 4:
            console.log(`${n}: quatro`)
            break
        case 5:
            console.log(`${n}: cinco`)
            break
        case 6:
            console.log(`${n}: seis`)
            break
        case 7:
            console.log(`${n}: sete`)
            break
        case 8:
            console.log(`${n}: oito`)
            break
        case 9:
            console.log(`${n}: nove`)
            break
        case 10:
            console.log(`${n}: dez`)
            break
        default:
            console.log('Número inválido!')

    }
}
numero(0)
numero(1)
numero(2)
numero(3)
numero(4)
numero(5)
numero(6)
numero(7)
numero(8)
numero(9)
numero(10)
numero(11)