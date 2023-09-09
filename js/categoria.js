var numItens = 0 //! Não leva em conta os removidos (funciona mais como um contador de itens criados)

function changeQnt(i,j){
    let itemNum = document.querySelector("#itemNum" + i)
    let qnt = itemNum.innerHTML
    switch (j){
        case 1:
            qnt--
            break
        case 2:
            qnt++
            break
    }
    itemNum.innerHTML = qnt
}

function manualChange(i){
    let itemNum = document.querySelector("#itemNum" + i)
    let qnt = window.prompt("Digite a nova quantidade:")
    
     if(isNaN(qnt) == true){
        alert("Digite um número!")
        console.log('string')
    }
    else if(qnt.length == 0){           //TODO melhorar essa verificação
        alert("Digite um número!")
    }
    else{
        parseInt(qnt, 10)
        itemNum.innerHTML = qnt
        console.log('num')
    }
}

function removeItem(i){                                                         //TODO melhorar essa função
    let item = document.querySelector("#item" + i)
    item.remove()
    console.log('removeu')
    numItens--  
}

function addNewItem(){
    let itemID = numItens

    let itemName = window.prompt('Qual o nome deste item: ')
    let item = document.createElement('span')
    item.classList.add('itensWrapper')
    item.id = 'item' + itemID
    
        let left = document.createElement('div')
        left.classList.add('itensWrapperLeft')
        item.appendChild(left)

            let X = document.createElement('p')
            X.innerText = 'X'
            X.classList.add('itemDelete')
            X.addEventListener('click', function(){removeItem(itemID)})
            left.appendChild(X)

            let title = document.createElement('h1')
            title.classList.add('itemName')
            title.innerText = itemName
            left.appendChild(title)

        let right = document.createElement('div')
        right.classList.add('itensWrapperRight')
        item.appendChild(right)

            let minus = document.createElement('img')
            minus.src = 'imgs/minus-sign.png'
            minus.classList.add('itensButtons')
            minus.addEventListener('click', function (){changeQnt(itemID,1)}) 
            right.appendChild(minus)
            
            let num = document.createElement('p')
            num.classList.add('itemNum')
            num.id = 'itemNum' + itemID
            num.addEventListener('click', function(){manualChange(itemID)})
            num.innerText = '0'
            right.appendChild(num)

            let plus = document.createElement('img')
            plus.src = 'imgs/plus-positive-add-mathematical-symbol.png'
            plus.classList.add('itensButtons')
            plus.addEventListener('click', function(){changeQnt(itemID,2)}) 
            right.appendChild(plus)

    let main = document.querySelector('main')
    main.insertBefore(item, document.querySelector('#addNewItem'))
    numItens++
}

//TODO terminar a função addNewItem