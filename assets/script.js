function calculoIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let sexo = document.getElementById("sexo").value;
    let resultadoElement = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura)){
       resultadoElement.textContent = "Insira dados númericos válidos.";
       return;
    }

    let calcularIMC ;
    if(sexo === "f") {
    pesoIdeal = 62.1 * altura -44.7;
    } else if (sexo === "m"){
    pesoIdeal = 72.7 * altura - 58;
    } else {
      resultadoElement.textContent = "Selecione um sexo";
      return;
    }
    resultadoElement.textContent = "Seu IMC é: " + calcularIMC.toFixed(2) + "kg.";
}

