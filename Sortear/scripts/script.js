var names = [];

function addName() {
    var name = document.getElementById("name-input").value;
    if (name.trim() === "") {
        alert("Por favor, digite um nome válido.");
        return;
    }
    if (names.includes(name)) {
        alert("Esse nome já foi adicionado, por favor digite outro.");
        return;
    }
    names.push(name);
    document.getElementById("name-input").value = "";
    updateNamesList();
}

function updateNamesList() {
    var list = "";
    for (var i = 0; i < names.length; i++) {
        list += "<div>" + names[i] + "</div>";
    }
    document.getElementById("names-list").innerHTML = list;
}

function selectWinner() {
    if (names.length === 0) {
        alert("Por favor, adicione pelo menos um nome antes de sortear.");
        return;
    }
    var randomIndex = Math.floor(Math.random() * names.length);
    var winner = names[randomIndex];
    document.getElementById("winner").innerHTML = "O(a) grande vencedor(a) é: " + winner + "!";
    document.getElementById("winner").style.color = "green";
}

