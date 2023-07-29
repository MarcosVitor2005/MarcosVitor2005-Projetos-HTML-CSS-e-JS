function relogio() {
    var hora1 = document.getElementById("hora")
    var minutos1 = document.getElementById("minutos")
    var segundos1 = document.getElementById("segundos")
    var dia = document.getElementById("dia")
    var mes = document.getElementById("mes")
    var ano = document.getElementById("ano")


    var semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    var meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    var data = new Date();
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()


    if (hora < 10) {
        hora1.innerHTML = hora = "0" + hora
    } else {
        hora1.innerHTML = hora
    }
    if (minutos < 10) {
        minutos1.innerHTML = minutos = "0" + minutos
    } else {
        minutos1.innerHTML = minutos
    }
    if (segundos < 10) {
        segundos1.innerHTML = segundos = "0" + segundos
    } else {
        segundos1.innerHTML = segundos
    }


    if (semana[data.getDay()] == semana[data.getDay()]) {
        document.getElementById("A"+data.getDay()).style.color="white";
    }
    dia.innerHTML = data.getDate()
    mes.innerHTML = meses[data.getDay()]
    ano.innerHTML = data.getFullYear()
}

var tmpo = setInterval(relogio, 1000)