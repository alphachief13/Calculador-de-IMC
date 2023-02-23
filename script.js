const formulario = document.querySelector(".formulario");
const results = document.querySelector(".results");

function calcular(event){
    event.preventDefault();
    var peso = document.querySelector("#Peso").value;
    var altura = document.querySelector("#Altura").value;

    var imc = Math.floor((peso / (altura**2)));
    var classificacao = "";

    if (imc < 18.5){
        classificacao = "Abaixo do peso!";
    } else if(imc < 25){
        classificacao = "Peso ideal!";
    } else if(imc < 30){
        classificacao = "Levemente acima do peso";
    } else if(imc < 35){
        classificacao = "Obesidade Grau I";
    } else if(imc < 40){
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III"
    }
    
    results.innerHTML =  "IMC: " + imc + `<br>` + classificacao;

}

formulario.addEventListener("submit", calcular);