// const $meuForm = document.querySelector('form');
// $meuForm.addEventListener('submit', function criaPostController(infosDoEvento) {
//     infosDoEvento.preventDefault();

//     // const usuario = document.getElementById('usuario')
//     // const senha = document.getElementById('senha')
//     // console.log(usuario.value)
//     // console.log(senha.value)
//     salvar()
// })
"use strict";

let listaDeUsuarios = [];
class Item {
    constructor(email, usuario, senha, senhaNova, idade) {
        this.usuario = usuario;
        this.senha = senha;
        this.email = email;
        this.senhaNova = senhaNova;
        this.idade = idade;
    }
    
}

listaDeUsuarios = JSON.parse(window.localStorage.getItem(`listaDeUsuarios`) || "[]");
console.log("Itens carregados do Local Storage: ");
console.log(listaDeUsuarios);
salvar()

//salvar usuarios
function salvar() {
    console.log("Botão clicado!");
    if (validar()) {
        const email = document.getElementById(`email`).value
        const usuario = document.getElementById(`usuario`).value
        const senha = document.getElementById(`senha`).value
        const senhaNova = document.getElementById(`senhaNova`).value
        const idade = document.getElementById(`idade`).value
        const index_edit = document.getElementById(`index_edit`).value;


        let Pessoa_u_s = new Item(email, usuario, senha, senhaNova, idade);

        if (index_edit == "") {
            listaDeUsuarios.push(Pessoa_u_s);
        }
        else {
            listaDeUsuarios[+index_edit] = Pessoa_u_s;
        }

        console.log("Pessoa Cadastrada:");
        console.log(listaDeUsuarios);
        window.localStorage.setItem(`listaDeUsuarios`, JSON.stringify(listaDeUsuarios));
    }
    limpar()
    listarItens()
}

//limpar inputs ao enviar
function limpar() {
    const email = document.getElementById(`email`).value = ""
    const usuario = document.getElementById(`usuario`).value = ""
    const senha = document.getElementById(`senha`).value = ""
    const senhaNova = document.getElementById(`senhaNova`).value = ""
    const idade = document.getElementById(`idade`).value = ""
}

//verificar se tem valor nulo
function validar() {
    const email = document.getElementById(`email`).value
    const usuario = document.getElementById(`usuario`).value
    const senha = document.getElementById(`senha`).value
    const senhaNova = document.getElementById(`senhaNova`).value
    const idade = document.getElementById(`idade`).value
    if (senha != senhaNova) {
        console.log("senha não estão Iguais")
        document.getElementById(`msg`).style.display = "block";
        return false
    } else if (email != "" && usuario != "" && senha != "" && senhaNova != "" && idade != "") {
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

//lista de itens
function listarItens() {
    let html = '';
    for (let index = 0; index < listaDeUsuarios.length; index++) {
        html += `<tr>`;
        html += `<td>${listaDeUsuarios[index].email}</td>`;
        html += `<td>${listaDeUsuarios[index].usuario}</td>`;
        html += `<td>${listaDeUsuarios[index].senha}</td>`;
        html += `<td>${listaDeUsuarios[index].senhaNova}</td>`;
        html += `<td>${listaDeUsuarios[index].idade}</td>`;
        html += `<td><button onClick="excluir(this)" class="btn btn-outline-danger sim fs-6"  data-index="${index}"
        >Excluir</button>`;
        html += `<button type="button" class="btn btn-outline-primary sim fs-6" onClick="editar(this)" data-bs-dismiss="modal" data-index="${index}"
        >Editar</button></td>`;
        html += `</tr>`;
    }
    //console.log(html);
    document.getElementById(`table_body`).innerHTML = html;
}

//editar
function editar(e) {
    let email = listaDeUsuarios[e.getAttribute(`data-index`)].email;
    let usuario = listaDeUsuarios[e.getAttribute(`data-index`)].usuario;
    let senha = listaDeUsuarios[e.getAttribute(`data-index`)].senha;
    let senhaNova = listaDeUsuarios[e.getAttribute(`data-index`)].senhaNova;
    let idade = listaDeUsuarios[e.getAttribute(`data-index`)].idade;

    let index = e.getAttribute(`data-index`);

    document.getElementById(`email`).value = email;
    document.getElementById(`usuario`).value = usuario;
    document.getElementById(`senha`).value = senha;
    document.getElementById(`senhaNova`).value = senhaNova;
    document.getElementById(`idade`).value = idade;
    document.getElementById(`index_edit`).value = index;
}

//excluir usuario
function excluir(e) {
    let index = e.getAttribute(`data-index`);
    listaDeUsuarios.splice(index, 1);
    listarItens();
    console.log(window.localStorage.setItem(`listaDeUsuarios`, JSON.stringify(listaDeUsuarios)))
    window.localStorage.setItem(`listaDeUsuarios`, JSON.stringify(listaDeUsuarios))
}
//mostrar senha

document.getElementById('olho').addEventListener('mousedown', function () {
    document.getElementById('senha').type = 'text';
});

document.getElementById('olho').addEventListener('mouseup', function () {
    document.getElementById('senha').type = 'password';
});

// Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function () {
    document.getElementById('senhaNova').type = 'password';
});

//verificar senha nova
document.getElementById('olho1').addEventListener('mousedown', function () {
    document.getElementById('senhaNova').type = 'text';
});

document.getElementById('olho1').addEventListener('mouseup', function () {
    document.getElementById('senhaNova').type = 'password';
});

document.getElementById('olho1').addEventListener('mousemove', function () {
    document.getElementById('senhaNova').type = 'password';
});
