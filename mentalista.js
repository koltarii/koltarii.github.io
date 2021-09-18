function Chutar() {
  var numeroSecreto = Math.floor(Math.random() * 10);
  console.log(numeroSecreto);

  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    document.getElementById("resultado").innerHTML = "Você acertou!";
    console.log("acertou");
  } else if (chute > 10) {
    document.getElementById("resultado").innerHTML =
      "Você deve digitar um número entre 0 e 10 inteiro!";
    console.log("Você deve digitar um número entre 0 e 10 inteiro!");
  } else if (chute < 0) {
    document.getElementById("resultado").innerHTML =
      "Você deve digitar um número entre 0 e 10 inteiro!";
    console.log("Você deve digitar um número entre 0 e 10 inteiro!");
  } else {
    document.getElementById("resultado").innerHTML = "Você errou!";
    console.log("errou");
  }

  document.getElementById("resultado").innerHTML;
}
