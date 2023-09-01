

function changeQnt(i,j){
    let qnt = document.getElementById("itemNum1").innerHTML
    switch (j){
        case 1:
            qnt--
            break
        case 2:
            qnt++
            break
    }
    document.getElementById("itemNum1").innerHTML = qnt
}

function manualChange(){
    let qnt = window.prompt("Digite a nova quantidade:")
    
     if(isNaN(qnt) == true){
        alert("Digite um número!")
        console.log('string')
    }
    else if(qnt.length == 0){           //TODO melhorar essa verificação
        alert("Digite um número!")
        console.log('qnt')
    }
    else{
        parseInt(qnt, 10)
        document.getElementById("itemNum1").innerHTML = qnt
        console.log('num')
        console.log(qnt)
    }
}  