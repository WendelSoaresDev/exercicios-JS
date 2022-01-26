/*
Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido
*/

const anuidade = (mes, valor) => {
    let atraso = mes - 1
    const jurosComp = () =>
    {
        return Math.ceil(valor * ((1 + 5 / 100) ** atraso))
    }

    switch (mes) {
        case 1:
            console.log(`${mes} - Janeiro: R${jurosComp()}`)
            break
        case 2:
            console.log(`${mes} - Fevereiro: R${jurosComp()}`)
            break
        case 3:
            console.log(`${mes} - Março: R${jurosComp()}`)
            break
        case 4:
            console.log(`${mes} - Abril: R${jurosComp()}`)
            break
        case 5:
            console.log(`${mes} - Maio: R${jurosComp()}`)
            break
        case 6:
            console.log(`${mes} - Junho: R${jurosComp()}`)
            break
        case 7:
            console.log(`${mes} - Julho: R${jurosComp()}`)
            break
        case 8:
            console.log(`${mes} - Agosto: R${jurosComp()}`)
            break
        case 9:
            console.log(`${mes} - Setembro: R${jurosComp()}`)
            break
        case 10:
            console.log(`${mes} - Outubro: R${jurosComp()}`)
            break
        case 11:
            console.log(`${mes} - Novembro: R${jurosComp()}`)
            break
        case 12:
            console.log(`${mes} - Dezembro: R${jurosComp()}`)
            break
        default:
            console.log('Mês inválido!')    

    }
}

anuidade(1, 100)
anuidade(2, 100)
anuidade(3, 100)
anuidade(4, 100)
anuidade(5, 100)
anuidade(6, 100)
anuidade(7, 100)
anuidade(8, 100)
anuidade(9, 100)
anuidade(10, 100)
anuidade(11, 100)
anuidade(12, 100)
anuidade(13, 100)
