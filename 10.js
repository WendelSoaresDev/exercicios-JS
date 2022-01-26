/*
Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.

*/

const verifica = n1 =>
{
    if(n1 % 3 == 0 )
    {
        return true
    }
    else{
        return false
    }
}

console.log(verifica(15))
console.log(verifica(7))
console.log(verifica(42))
console.log(verifica(68))