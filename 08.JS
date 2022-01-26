/**
 * Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)

 */

let stringPontuacoes = "40, 20, 30, 22, 70, 4, 51, 25, 42, 38, 56, 0, 80"

const avaliacao = (stringPontuacoes) =>
{
    let pontuacao = stringPontuacoes.split(', ')
    let qtdQuebraRecord = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacao[0]
    let menorPontuacao = pontuacao[0]
    
    for(i = 0; i < pontuacao.length; i++)
    {
        if(pontuacao[i] > maiorPontuacao) 
        {
            maiorPontuacao = pontuacao[i]
            qtdQuebraRecord++
        }
        else if(pontuacao[i] < menorPontuacao)
        {
            menorPontuacao = pontuacao[i]
            piorJogo = i+1
        }
    }
    return [qtdQuebraRecord, piorJogo]
}

console.log(avaliacao(stringPontuacoes))