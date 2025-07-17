let resultado = numeroSecreto();

function numeroSecreto() {
  return Math.floor(Math.random() * 100) + 1;
}

function enviarPalpite() {
  let inputPalpite = document.getElementById("inputPalpite");
  let palpite = parseInt(inputPalpite.value);
  let mensagem = document.getElementById("mensagem");

  if (palpite > 100) {
    mensagem.textContent = "Tente novamente pois você selecionou um número maior que 100";
  } else if (palpite < 1) {
    mensagem.textContent = "Tente novamente pois você selecionou um número menor que 1";
  } else if (palpite > resultado) {
    mensagem.textContent = `O número sorteado é menor que ${palpite}`;
  } else if (palpite < resultado) {
    mensagem.textContent = `O número sorteado é maior que ${palpite}`;
  } else {
    let buttonReiniciar = document.getElementById("reiniciar");
    mensagem.textContent = `Parabéns você acertou! O número correto é: ${palpite}`;
    buttonReiniciar.classList.remove("desabilitado");
    buttonReiniciar.classList.add("habilitado");
  }

  inputPalpite.value = "";
}

function restartGame() {
  resultado = numeroSecreto();
  let inputPalpite = document.getElementById("inputPalpite");
  inputPalpite.value = "";
  let buttonReiniciar = document.getElementById("reiniciar");
  buttonReiniciar.classList.add("desabilitado");
  mensagem.textContent = "Jogo reiniciado, divirta-se!"
}