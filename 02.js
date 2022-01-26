/*
    Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).
*/

const triangulos = (l1, l2, l3) => 
{
    if(l1 === l2 && l2 === l3)
    {
        return console.log(`${l1} ${l2} ${l3} = equilátero`)
    }
    else if(l1 === l2 || l2 === l3 || l1 === l3 && l2 !== l3 )
    {
        return console.log(`${l1} ${l2} ${l3} = isóceles`)
    }
    else
    {
        return console.log(`${l1} ${l2} ${l3} = Escaleno`)
    }
}

triangulos(1,1,1)
triangulos(1,1,2)
triangulos(1,2,1)
triangulos(1,2,2)
triangulos(1,2,3)
