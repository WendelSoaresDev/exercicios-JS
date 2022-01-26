/**
 * Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

const aumentoSalario = (plano, salario) =>
{
    switch(plano)
    {
        case 'a':
            console.log(`Salário do plano A: R$${salario + salario * (10/100)}`)
            break
        case 'b':
            console.log(`Salário do plano B: R$${salario + salario *(15/100)}`)    
            break
        case 'c': 
            console.log(`Salário do plano C: R${salario + salario *(20/100)}`)    
            break
        default:
            console.log('Plano inválido!')
    }
}

aumentoSalario('a', 1000)
aumentoSalario('b', 1000)
aumentoSalario('c', 1000)
aumentoSalario('d', 1000)