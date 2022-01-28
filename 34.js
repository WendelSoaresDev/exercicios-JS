/**
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
 */


function verifyString(stg1,stg2){
    let split1 = stg1.toUpperCase().split("")
    let split2 = stg2.toUpperCase().split("")
    let cont = 0;
    let cont2 = 0;
    let logConfirm = []
    let status;
    let i = 0;

    while(true){
        if(cont == split1.length){
            break;
        }
        if(split1[cont] == split2[cont2]){
            logConfirm.push(true)
            cont++
            cont2 = 0
        } else if(cont2 ==  (split2.length - 1) && split1[cont] != split2[cont2]){
            logConfirm.push(false)
            cont++
        } else {
            cont2++ 
        }
        
    }
    while(logConfirm[i] < logConfirm.length){
        if(logConfirm[i] == true){
            i++
            status = true
        }
        else{
            status = false;
            break;
        }
    }

    return status;
    
}


///Testes

console.log(verifyString("teste1223","teste21"))
//false
console.log(verifyString("Carlos","Carlos"))
//True
console.log(verifyString("teste1223","t"))
//False
console.log(verifyString("Firefox","fireox"))
//True