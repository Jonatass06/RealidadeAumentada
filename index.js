
const modal = document.getElementById("modalDad");
const audioWin = new Audio("./soundWinner.mp3");
const textHint = document.getElementById("textHint");
const aEntities = document.getElementById("aEntities");
const sceneEl = document.querySelector('a-scene');
const arSystem = sceneEl.systems["mindar-image-system"];
textHint.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!"

function closeModal(element) {
  modal.style.display = "none";
}

document.getElementById("hint").addEventListener("click", e => {
  modal.style.display = "flex";
})

document.getElementById("hint1").addEventListener("click", e => {
  modal.style.display = "flex";
  textHint.innerText = "Procure o equilíbrio. Ajuste o conforto com as correntes de ar, nem muito frias, tampouco quentes.";
  document.getElementById("cena1").systems["mindar-image-system"].stop()
  document.getElementById("cena2").systems["mindar-image-system"].start()
})

document.getElementById("hint1").addEventListener("click", e => {
  textHint.innerText = "Procure o equilíbrio. Ajuste o conforto com as correntes de ar, nem muito frias, tampouco quentes.";
  modal.style.display = "flex";
  document.getElementById("control").classList.remove("hidden")
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