

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

function addNewItem(){
    // let item = document.querySelector('.itensWrapper').cloneNode(true)
    let itemName = window.prompt('Qual o nome deste item: ')
    let item = document.createElement('span')
    item.classList.add('itensWrapper')
    
        let left = document.createElement('div')
        left.classList.add('itensWrapperLeft')

            let X = document.createElement('img')
            X.src = 'imgs/plus-positive-add-mathematical-symbol.png'
            X.classList.add('itemDelete')

            let title = document.createElement('h1')
            title.classList.add('itemName')
            title.innerText = itemName

        let right = document.createElement('div')
        right.classList.add('itensWrapperRight')

            let minus = document.createElement('img')
            minus.src = 'imgs/minus-sign.png'
            minus.classList.add('itensButtons')
            minus.addEventListener(onclick, changeQnt(0,1))

}

//TODO terminar a função addNewItem