function calcIMC(){

    let peso =document.getElementById("peso").value;
    let altura = document.getElementById("altura").value ;
    let resultado = document.getElementById("resultado");
    let genero = document.querySelector('input[name=genero]:checked').value
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem ="";


    if(genero == f){
        resultado.textContent ="Feminino";
    }
    else{
        resultado.textContent ="Masculino";
    }

}


let Calcular = document.getElementById("btn_calcular");
Calcular.addEventListener('click', calcIMC);
