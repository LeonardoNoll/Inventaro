var numItens = 0 //! Não leva em conta os removidos (funciona mais como um contador de itens criados)

function changeQnt(i,j){
    let itemNum = document.querySelectorAll(".itemNum")
    console.log(itemNum[i].innerText)
    let qnt = itemNum[i].innerText
    console.log(qnt + ' qnt')
    switch (j){
        case 1:
            qnt--
            // console.log(i,j)
            break
        case 2:
            qnt++
            // console.log(i,j)
            break
    }
    itemNum[i].innerHTML = qnt
}

function manualChange(i){
    let itemNum = document.querySelectorAll(".itemNum")
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
        itemNum[i].innerHTML = qnt
        console.log('num')
        console.log(qnt)
    }
}

function removeItem(i){                                                         //TODO melhorar essa função
    let item = document.querySelectorAll(".itensWrapper")
    item[i].remove()
    console.log('removeu')
    numItens--                                                 //!PROBLEMA SEVERO COM O CONTADOR DE ITENS
}

function addNewItem(){
    let itemID = numItens
    let itemName = window.prompt('Qual o nome deste item: ')
    let item = document.createElement('span')
    item.classList.add('itensWrapper')
    
        let left = document.createElement('div')
        left.classList.add('itensWrapperLeft')
        item.appendChild(left)

            // let X = document.createElement('img')
            // X.src = 'imgs/plus-positive-add-mathematical-symbol.png'
            // X.classList.add('itemDelete')
            // left.appendChild(X)

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