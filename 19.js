/*
O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100     Cachorro Quente     R$ 3,00
200     Hambúrguer Simples  R$ 4,00
300     Cheeseburguer   R$ 5,50
400     Bauru   R$ 7,50
500     Refrigerante    R$ 3,50
600     Suco       R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.
*/

const lanche = (codigo, qtd) => {
    switch (codigo) {
        case 100:
            console.log(`Código ${codigo} - cachorro quente. Quantidade: ${qtd} - Total: R$${qtd * 3.00}`)
            break
        case 200:
            console.log(`Código ${codigo} - hamburguer simples. Quantidade: ${qtd} - Total: R$${qtd * 4.00}`)
            break
        case 300:
            console.log(`Código ${codigo} - cheesburguer. Quantidade: ${qtd} - Total: R$${qtd * 5.50}`)
            break
        case 400:
            console.log(`Código ${codigo} - bauru. Quantidade: ${qtd} - Total: R$${qtd * 7.50}`)
            break
        case 500:
            console.log(`Código ${codigo} - refrigerante. Quantidade: ${qtd} - Total: R$${qtd * 3.50}`)
            break
        case 600:
            console.log(`Código ${codigo} - suco. Quantidade: ${qtd} - Total: R$${qtd * 2.80}`)
            break
        default:
            console.log('Produto não existe!')

    }
}

lanche(100, 3)
lanche(200, 2)
lanche(300, 5)
lanche(400, 4)
lanche(500, 1)
lanche(600, 6)
lanche(700, 7)