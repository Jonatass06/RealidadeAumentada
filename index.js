
const modal = document.getElementById("modalDad");
const audioWin = new Audio("./soundWinner.mp3");
const textHint = document.getElementById("textHint");
textHint.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!";
const cena1 = document.getElementById("cena1")
const cena1System = cena1.systems["mindar-image-system"];

function closeModal() {
  modal.style.display = "none";
}

document.getElementById("hint").addEventListener("click", e => {
  modal.style.display = "flex";
})

document.getElementById("hint1").addEventListener("click", e => {
  modal.style.display = "flex";
  alert("a");
  textHint.innerText = "Procure o equilíbrio. Ajuste o conforto com as correntes de ar, nem muito frias, tampouco quentes.";
  cena1System.stop()
})


document.getElementById("hint2").addEventListener("click", e => {

  textHint.innerText = "A chave está na criatividade. Cores traçam pistas invisíveis, guiando você com marcas deixadas em algo branco.";
  modal.style.display = "flex";

})

document.getElementById("hint3-a").addEventListener("click", e => {
  textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
  modal.style.display = "flex";

})
document.getElementById("hint3-b").addEventListener("click", e => {
  textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
  modal.style.display = "flex";
})
document.getElementById("hint3-c").addEventListener("click", e => {
  textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
  modal.style.display = "flex";
})

document.getElementById("hint4").addEventListener("click", e => {
  textHint.innerText = "Siga o caminho da água. Como o ser que sou, adoro frio, odeio o calor, o fogo.";
  modal.style.display = "flex";
})

document.getElementById("finished-a").addEventListener("click", e => {
  textHint.innerText = "Parabéns! Você me encontrou!";
  modal.style.display = "flex";
  audioWin.play();
})
document.getElementById("finished-b").addEventListener("click", e => {
  textHint.innerText = "Parabéns! Você me encontrou!";
  modal.style.display = "flex";
  audioWin.play();
})