let btnRemove = document.querySelector(".btn")
let removeP = document.querySelector(".remove-text")
let btnShowHide = document.querySelector(".btn-card")
let container = document.querySelector(".container")


let showing = true

btnRemove.addEventListener("click", function () {
    if (showing === true) {
        removeP.style.display = "none"
        btnRemove.textContent = "show"

        showing = false

        
    } else{
        removeP.style.display = "block"
        btnRemove.textContent = "Remove"

        showing = true
    }

    // let text = btnRemove.textContent
    // console.log(text)
    
    // if (text == "Remove") {
    //     btnRemove.textContent = "show"
    // }else {
    //     btnRemove.textContent = "Remove"
    // }

})

let cardShow = true

btnShowHide.addEventListener("click", function (){
    // mainP.style.display = "none"

    if (cardShow == true ){
        container.style.display = "none"
        btnShowHide.textContent = "Show"
        cardShow = false
        document.body.style.backgroundColor = "black"
    }else if(cardShow == false){
        container.style.display = "block"
        cardShow = true
        btnShowHide.textContent = "Hide"
        document.body.style.backgroundColor = "hsl(47, 88%, 63%)"
    }


    
})


