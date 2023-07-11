function calcularPesoIdeal() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var sexo = document.getElementById("sexo").value;
    var resultadoElement = document.getElementById("resultado");

    if (isNaN(peso) || isNaN(altura)) {
      resultadoElement.textContent = "Por favor, insira valores numéricos válidos.";
      return;
    }

    var pesoIdeal;
    if (sexo === "f") {
      pesoIdeal = 62.1 * altura - 44.7;
    } else if (sexo === "m") {
      pesoIdeal = 72.7 * altura - 58;
    } else {
      resultadoElement.textContent = "Por favor, selecione um sexo válido.";
      return;
    }

    resultadoElement.textContent = "Seu peso ideal e: " + pesoIdeal.toFixed(2) + " kg.";
  }