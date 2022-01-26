/**
 * Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130
 */

const planoSaude = (qtdAdicionais, idadeAdicionais) =>
{
    if(idadeAdicionais <= 10)
    {
        console.log(`${qtdAdicionais} 0 a 10 anos: R$100,00 + ${qtdAdicionais * 80.00} = R$${100 + qtdAdicionais * 80.00} `)
    }
    else if(idadeAdicionais <= 30)
    {
        console.log(`${qtdAdicionais} 10 a 30 anos: R$100,00 + ${qtdAdicionais * 50.00} = R$${100 + qtdAdicionais * 50.00}`)
    }
    else if(idadeAdicionais <= 60)
    {
        console.log(`${qtdAdicionais} 30 a 60 anos: R$100,00 + ${qtdAdicionais * 95.00} = R$${100 + qtdAdicionais * 95.00}`)
    }
    else
    {
        console.log(`${qtdAdicionais} 30 a 60 anos: R$100,00 + ${qtdAdicionais * 130.00} = R$${100 + qtdAdicionais * 130.00}`)
    }
}

planoSaude(1, 8)
planoSaude(1, 13)
planoSaude(1, 25)
planoSaude(1, 38)
planoSaude(1, 69)
