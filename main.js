let btnRemove = document.querySelector(".btn")
let removeP = document.querySelector(".remove-text")

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

