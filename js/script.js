const burgerButton = document.querySelector("#burger-button") //aqui se ocupo un id, solo debe haber uno por html
const menu = document.querySelector(".menu") //esto no se ocupa.punto ypalabra represnta qe s ebusco la clase
const navItems = document.querySelectorAll(".navbar-item")

burgerButton.addEventListener("click", activateMenu)

//for (let i = 0; i < navItems.length; i ++)
for (let i = 0; i <= navItems.length -1; i++) {
    navItems[i].addEventListener("click", activateMenu)
}

function activateMenu () {
 
    if (menu.classList.contains("active") == true) {
        menu.classList.remove("active")
    } else {
        menu.classList.add("active")
    }
}