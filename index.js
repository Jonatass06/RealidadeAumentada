
const modal = document.getElementById("modal");
const audioWin = new Audio("./soundWinner.mp3");
const textHint = document.getElementById("textHint");
const scene2 = document.getElementById("cena2");
const scene3 = document.getElementById("cena3");
const scene4 = document.getElementById("cena4");
const scene5 = document.getElementById("cena5");
textHint.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!"

document.getElementById("close").addEventListener("click", e =>{
  modal.style.display = "none";
})

document.getElementById("hint").addEventListener("click", e =>{
  modal.style.display = "flex";
})

document.getElementById("hint1").addEventListener("click", e =>{
  textHint.innerText = "Procure o equilíbrio. Ajuste o conforto com as correntes de ar, nem muito frias, tampouco quentes.";
  modal.style.display = "flex";
  scene2.systems["mindar-image-system"].start();
})

document.getElementById("hint2").addEventListener("click", e =>{
  textHint.innerText = "A chave está na criatividade. Cores traçam pistas invisíveis, guiando você com marcas deixadas em algo branco.";
  modal.style.display = "flex";
  document.getElementById("pilot1").classList.remove("hidden")
  document.getElementById("pilot2").classList.remove("hidden")
  document.getElementById("pilot3").classList.remove("hidden")

})

document.getElementById("hint3-a").addEventListener("click", e =>{
  textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
  modal.style.display = "flex";
  document.getElementById("eraser").classList.remove("hidden")

})
document.getElementById("hint3-b").addEventListener("click", e =>{
  textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
  document.getElementById("eraser").classList.remove("hidden")
  modal.style.display = "flex";
})      
document.getElementById("hint3-c").addEventListener("click", e =>{
  textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
  document.getElementById("eraser").classList.remove("hidden")
  modal.style.display = "flex";
})

document.getElementById("hint4").addEventListener("click", e =>{
  textHint.innerText = "Siga o caminho da água. Como o ser que sou, adoro frio, odeio o calor, o fogo.";
  document.getElementById("fire1").classList.remove("hidden")
  document.getElementById("fire2").classList.remove("hidden")
  modal.style.display = "flex";
})

document.getElementById("finished-a").addEventListener("click", e =>{
  textHint.innerText = "Parabéns! Você me encontrou!";
  modal.style.display = "flex";
  audioWin.play();
})      
document.getElementById("finished-b").addEventListener("click", e =>{
  textHint.innerText = "Parabéns! Você me encontrou!";
  modal.style.display = "flex";
  audioWin.play();
})