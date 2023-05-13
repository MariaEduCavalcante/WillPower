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
    resultado.textContent =`Situação: ${mensagem}`;
    alert( `Seu IMC é: ${imc}`)

    }
    else{
        alert('Preencha todos os campos');
    }
}


let Calcular = document.getElementById("btn_calcular");
Calcular.addEventListener('click', calcIMC);
