function showMenu(){
    let hbvalor = document.getElementById("hb")
    let itensvalor = document.getElementById("itens-nav")
    hbvalor.getAttribute("class") == "navbar-hb"? hbvalor.setAttribute("class","navbar-hb-d"):hbvalor.setAttribute("class","navbar-hb")
    itensvalor.getAttribute("class") == "navbar-itens"? itensvalor.setAttribute("class","navbar-itens-a"):itensvalor.setAttribute("class","navbar-itens")
}