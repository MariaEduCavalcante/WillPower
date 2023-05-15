/* função do imc */
function calcIMC(){

    /* variáveis */
    let peso =document.getElementById("peso").value;
    let altura = document.getElementById("altura").value ;
    let resultado = document.getElementById("resultado");
    var genero = document.querySelector('input[name=genero]:checked').value;
    let imc = (peso / (altura * altura)).toFixed(2);
    let mensagem ="";

    /* condicional */
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
    swal(`${imc}`,'Valor do IMC','success');

    }
    else{
        swal('Atenção','Preencha todos os campos','error');
    }
}

/* ativação da função pelo botão */
let Calcular = document.getElementById("btn_calcular");
Calcular.addEventListener('click', calcIMC);

/* função cadastro */
function cadas(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value ;
    let senha = document.getElementById("senha").value ;
    let senha2 = document.getElementById("senha2").value;

    function reset(){
        document.getElementById("cadastro").reset();
    }

    if(nome !=="" && email !=="" && senha !=="" && senha2 !==""){

        if(nome.length < 5){
            swal('Atenção','Nome inválido','error');
        }
        else if(email.length < 5){
            swal('Atenção','Email inválido','error');
        }
       else if(senha.length !== 5){
            swal('Atenção','Senha deve conter 5 caracteres','error');
        }
        else if(senha !== senha2){
            swal('Atenção','As senhas não correspondem','error');
        }
        else{
            swal('Cadastrado',`Usuário ${nome} cadastrado com sucesso`,'success');
            reset();
        }
    }
    else{
        swal('Atenção','Preencha todos os campos','error');
    }
}

/* função login */
function login(){
    let nomel = document.getElementById("nomel").value;
    let senhal = document.getElementById("senhal").value;

    function logar(){
        window.location.href = "Index.html";
    }

    if(nomel !=="" && senhal !==""){
        if(nomel.length < 5){
            swal('Atenção','Nome inválido','error');
        }
        else if(senhal.length !== 5){
            swal('Atenção','Senha deve conter 5 caracteres','error');
        }
        else{
            logar();
        }

    }
    else{
        swal('Atenção','Preencha todos os campos','error');
    }
}


