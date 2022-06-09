function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value
    document.getElementById("anotacao").value = "";
    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + "</p>"
    document.getElementById("anotacoes").value = ""
    alert("Anotacao salva com sucesso")
}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
})