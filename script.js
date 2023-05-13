function calcIMC(){

    let peso =document.getElementById("peso").value;
    let altura = document.getElementById("altura").value ;
    let resultado = document.getElementById("resultado");
    var genero = document.querySelector('input[name=genero]:checked').value;
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem ="";

    if(altura !=="" && peso !==""){

    if(genero == "f"){
        if(imc < 19){
            mensagem ="Abaixo do peso adequado";
        } else if(imc < 23.9){
            mensagem ="Peso adequado";
        } else {
            mensagem ="Peso acima do adequado";
        }
    }
    else{
        if(imc < 20){
            mensagem ="Abaixo do peso adequado";
        } else if(imc < 25){
            mensagem ="Peso adequado";
        } else {
            mensagem ="Peso acima do adequado";
        }
    }
    resultado.textContent =`${mensagem}`;
    swal(`Seu IMC é: ${imc}`)

    }
    else{
        swal('Atenção','Preencha todos os campos','error');
    }
}

let Calcular = document.getElementById("btn_calcular");
Calcular.addEventListener('click', calcIMC);

function cadas(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value ;
    let senha = document.getElementById("senha").value ;

    if(nome !=="" && email !=="" && senha !==""){
       if(senha.length !== 5){
            swal('Atenção','Senha deve conter 5 caracteres','error');
        }
        else{
            window.location.replace("Index.html");
        }
    }
    else{
        swal('Atenção','Preencha todos os campos','error');
    }
}

