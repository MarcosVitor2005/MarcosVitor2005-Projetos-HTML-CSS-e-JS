"use strict";
let listaUsuarios = [];
class Item1 {
    constructor(email, usuario, senha, senhaNova, idade) {
        this.usuario = usuario;
        this.senha = senha;
        this.email = email;
        this.senhaNova = senhaNova;
        this.idade = idade;
    }
}
listaUsuarios = JSON.parse(window.localStorage.getItem("Usuarios_Cadastrados_Lista") || "[]");
console.log("Itens carregados do Local Storage: ");
console.log(listaUsuarios);
listarItens();
function salvar() {
    console.log("Botão clicado!");
    if (validar()) {
        const email = document.getElementById(`email`).value;
        const usuario = document.getElementById(`usuario`).value;
        const senha = document.getElementById(`senha`).value;
        const senhaNova = document.getElementById(`senhaNova`).value;
        const idade = document.getElementById(`idade`).value;
        const index_edit = document.getElementById(`index_edit`).value;
        let Pessoas = new Item1(email, usuario, senha, senhaNova, idade);
        if (index_edit == "") {
            listaUsuarios.push(Pessoas);
        }
        else {
            listaUsuarios[+index_edit] = Pessoas;
        }
        console.log("Animais cadastrados:");
        console.log(listaUsuarios);
        window.localStorage.setItem('Usuarios_Cadastrados_Lista', JSON.stringify(listaUsuarios));
    }
    limparFormulario();
    listarItens();
}
function validar() {
    const email = document.getElementById(`email`).value;
    const usuario = document.getElementById(`usuario`).value;
    const senha = document.getElementById(`senha`).value;
    const senhaNova = document.getElementById(`senhaNova`).value;
    const idade = document.getElementById(`idade`).value;
    const index_edit = document.getElementById(`index_edit`).value;
    if (senha != senhaNova) {
        console.log("senha não estão Iguais");
        document.getElementById(`msg`).style.display = "block";
        return false;
    }
    else if (email != "" && usuario != "" && senha != "" && senhaNova != "" && idade != "") {
        console.log("Todos os campos estão com dados!");
        document.getElementById(`mensagem`).style.display = "none";
        document.getElementById(`msg`).style.display = "none";
        return true;
    }
    else {
        console.log("há campo sem dados");
        document.getElementById(`mensagem`).style.display = "block";
        return false;
    }
}
function listarItens() {
    let html = '';
    for (let index = 0; index < listaUsuarios.length; index++) {
        html += `<tr>`;
        html += `<td>${listaUsuarios[index].email}</td>`;
        html += `<td>${listaUsuarios[index].usuario}</td>`;
        html += `<td>${listaUsuarios[index].senha}</td>`;
        html += `<td>${listaUsuarios[index].senhaNova}</td>`;
        html += `<td>${listaUsuarios[index].idade}</td>`;
        html += `<td><button onClick="excluir(this)" class="btn btn-outline-danger sim fs-6"  data-index="${index}"
        >Excluir</button>`;
        html += `<button type="button" class="btn btn-outline-primary sim fs-6" onClick="editar(this)" data-bs-dismiss="modal" data-index="${index}"
        >Editar</button></td>`;
        html += `</tr>`;
    }
    //console.log(html);
    document.getElementById(`table_body`).innerHTML = html;
}
function excluir(e) {
    let index = e.getAttribute(`data-index`);
    lista_itens.splice(index, 1);
    listarItens();
}
