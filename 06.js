/*

Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

const apkJurosSimples = (capIni, taxJur, tempoApk) =>
{
    return console.log(capIni + (capIni * taxJur * tempoApk))
}

const apkJurosComp = (capIni, taxJur, tempoApk) => 
{
    return console.log(capIni * (1 + taxJur) ** tempoApk)
}

apkJurosSimples(100, 10/100, 2)
apkJurosComp(100, 10/100, 2)