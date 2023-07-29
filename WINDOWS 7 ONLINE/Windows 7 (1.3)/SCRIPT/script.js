var tela = document.getElementById("telaP");

tela.addEventListener("click", function() {
    var tela2 = document.getElementById("telaQueVaiAparecerExplorer");
    if(tela2.style.display === "none"){
        document.getElementById("telaQueVaiAparecerExplorer").style.display = "inline"
    }else{
        document.getElementById("telaQueVaiAparecerExplorer").style.display = "none"
    }
})

function fechar() {
    document.getElementById("telaQueVaiAparecerExplorer").style.display = "none"
}