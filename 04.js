/*
    Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.
*/ 

const restoDivisao = (dividendo, divisor) => 
{
    return console.log(`Dividendo ${dividendo}, divisor ${divisor}, resto: ${dividendo % divisor} e resultado ${dividendo / divisor}`)

    
}

restoDivisao(100,3)