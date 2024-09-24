function pegarInformacoes(evento){
    console.log(evento)
    evento.preventDefault();
    
    var nome =document.getElementById("nome");
    var email = document.getElementById("email");
    var message=document.getElementById("message");

    validaCampor(nome);
    validaCampor(email);
    validaCampor(message);

    var cometario =`
    <span> ${nome.value}- <strong>${email.value}</strong></span>
    <p>${message.value}</p>
</div>`;

document.getElementById("comentarios").innerHTML += cometario;

nome.value = "";
email.value = "";
message.value = "";
document.getElementById("enviar").disabled = true; 
   
}

function validaCampor(){
    if(Element.value === ""){
        Element.style.borderColor = "blue"
    }
}
function verificarDisabled(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var message=document.getElementById("message").Value;

    if(nome !== "" && email !== "" && message !== ""){
        document.getElementById("enviar").disabled = false
    }else{
        document.getElementById("enviar").disabled = true
    }
}

function capturarTecla(evento){
    console.log(evento)
    if(evento.key === "enter"){
        pegarInformacoes(evento)
    }

}
 