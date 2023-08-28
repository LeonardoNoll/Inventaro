

function changeQnt(i,j){
    let qnt = document.getElementById("itemNum1").innerHTML
    // getElementsByClassName("itemNum").innerHTML = 2

    switch (j){
        case 1:
            qnt--
            break
        case 2:
            qnt++
            break
        case 3:

            break
    }
    document.getElementById("itemNum1").innerHTML = qnt
}

