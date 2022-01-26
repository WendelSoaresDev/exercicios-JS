/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.
 */

const calcBasica = (n1, n2, operacao) => 
{
    switch(operacao)
    {
        case '+':
            console.log(`Soma: ${n1} ${operacao} ${n2} = ${n1 + n2}`)
            break
        case '-':
            console.log(`Subtração: ${n1} ${operacao} ${n2} = ${n1 - n2}`)
            break
        case '*':
            console.log(`Multiplicação: ${n1} ${operacao} ${n2} = ${(n1 * n2)}`)        
            break
        case '/':
            console.log(`Divisão: ${n1} ${operacao} ${n2} = ${n1 / n2}`)
            break
        default:
            return console.log('Operações inválidas!')

    }

}

calcBasica(5,3, '+')
calcBasica(5,3, '-')
calcBasica(5,3, '/')
calcBasica(5,3, '*')
calcBasica(5,3, '%')