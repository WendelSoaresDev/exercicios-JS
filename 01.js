//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores

const calc =  (n1, n2, operator) =>
{
    if(operator === '+')
    {
        return console.log(`Resultado da soma: ${n1} ${operator} ${n2} = ${n1 + n2}`)
    }
    else if ( operator === '-')
    {
        return console.log(`Resultado da subtração: ${n1} ${operator} ${n2} = ${n1 - n2}`)
    }
    else if (operator === '*')
    {
        return console.log(`Resultado da multiplicação: ${n1} ${operator} ${n2} = ${n1 * n2}`)
    }
    else if (operator === '/')
    {
        return console.log(`Resultado da divisão: ${n1} ${operator} ${n2} = ${n1 / n2}`)
    }
    else 
    {
        return console.log("O operador não foi inserido corretamente!")
    }
}

calc(5,4, '+')
calc(5,4, '-')
calc(5,4, '*')
calc(5,4, '/')
calc(5,4, '%')