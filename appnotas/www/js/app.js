function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value
    novoNome = document.getElementById("nome").value
    novoTel = document.getElementById("tel").value

    novoContato = "<p><h1 class='text-danger'>Anotado: </h1>" + novaAnotacao + "<br><h1>Nome: </h1>" + novoNome + "<br><h1>Telefone: </h1>" + novoTel +"</p>"
    document.getElementById("anotacoes-salvas").innerHTML = novoContato

    localStorage.listaContatos = novoContato
    
    alert("Anotacao salva com sucesso")
}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    //navigator.vibrate(250);
    navigator.vibrate(350);
    console.log("teste")
})

if(localStorage.listaContatos) {
    document.getElementById("anotacoes-salvas").innerHTML = localStorage.listaContatos
}

function clearcontent(elementID) {
    document.getElementById(elementID).innerHTML = "";
    localStorage.clear()
}

function excluir(e){
    e.parentElement.remove();
}