var principal = document.getElementById("abrirMen")

principal.addEventListener("click", function(){
    var conten = document.getElementById("menuIniciar")
    if (conten.style.display === "none") {
        document.getElementById("menuIniciar").style.display = "inline"
    } else{
        conten.style.display = "none"
    }
})
function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
       m=checkTime(m);
        document.getElementById('iconMenuRelo').innerHTML=h+":"+m;
        t=setTimeout('startTime()',500);
    }
    function checkTime(i){
       if (i<10){
          i="0" + i;
    }
    return i;
}