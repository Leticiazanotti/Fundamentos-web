/*
case sensitive - reconhece letras maiusculas e minusculas

por Tag - getElementByTagName()
por Id - getElementById()
por nome - getElementsByName()
por class - getElementsByClassName
por Seletor - querySelector()
. class
#id
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let mapa = document.querySelector("#mapa")
let nomeOk= false
let emailOk= false
let assuntoOk= false


nome.style.width = "100%"
email.style.width = "100%"

//validação por quantidade de caracteres.

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk= true
    }

}
//validação de email por @.
//indexOf retorna 1 ou -1. Se for 1 existe elemnto, se for -1 não existe.

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"
        emailOk= true
    }

}

function validaAssunto() {
    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length > 50) {
        txtAssunto.innerHTML = "Texto muito grande, digite no máximo 50 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk= true
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ("Formulário enviado com sucesso!!!")   
}else{
    alert("Preencha o formulário corretamente antes de enviar")
}


}

function mapaZoom(){

    mapa.style.width = "800px"
    mapa.style.heigth = "650px"
}


function mapaNormal(){

    mapa.style.width = "600px"
    mapa.style.heigth = "450px"
}


