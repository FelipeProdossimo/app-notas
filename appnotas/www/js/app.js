function SalvarAnotacao(){
    novaAnotacao = document.getElementById("anotacao").value
    document.getElementById("anotacao").value = "";
    document.getElementById("anotacoes-salvas").innerHTML += "<p>" + novaAnotacao + "</p>"
    document.getElementById("anotacao").value = ""
    alert("Anotacao salva com sucesso")
}

document.getElementById("botao-salvar").addEventListener("click", function(){
    SalvarAnotacao()
    //navigator.vibrate(250);
    navigator.vibrate(350);
    console.log("teste")
})