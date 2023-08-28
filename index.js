
const modal = document.getElementById("modalDad");
const audioWin = new Audio("./soundWinner.mp3");
let count = 0;
const textHint = document.getElementById("textHint");
textHint.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!";

function closeModal() {
 modal.style.display = "none";
}

document.getElementById("hint").addEventListener("click", e => {
  modal.style.display = "flex";
})

document.getElementById("hint").addEventListener("click", e => {
  switch (count){
    case 0:
      textHint.innerText = "Procure o equilíbrio. Ajuste o conforto com as correntes de ar, nem muito frias, tampouco quentes.";
      console.log(document.getElementById("hintQuestion").getAttribute("mindar-image-target"))
      document.getElementById("hintQuestion").setAttribute("mindar-image-target", "targetIndex: 1");
      console.log(document.getElementById("hintQuestion").getAttribute("mindar-image-target"))
      break;
    case 1:
      textHint.innerText = "A chave está na criatividade. Cores traçam pistas invisíveis, guiando você com marcas deixadas em algo branco.";
      document.getElementById("hintQuestion").setAttribute("mindar-image-target", "targetIndex: 2");
      break;
    case 2:
      textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
      document.getElementById("hintQuestion").setAttribute("mindar-image-target", "targetIndex: 5");
      break;
    case 3:
      textHint.innerText = "Siga o caminho da água. Como o ser que sou, adoro frio, odeio o calor, o fogo.";
      document.getElementById("hintQuestion").setAttribute("mindar-image-target", "targetIndex: 6");
      document.getElementById("hintQuestion").setAttribute("visible", false);
      document.getElementById("finished").setAttribute("visible", true);
      break;
  }
  modal.style.display = "flex";
  count ++;
})

document.getElementById("finished").addEventListener("click", e => {
  textHint.innerText = "Parabens, você me encontrou!";
  audioWin.play();
  modal.style.display = "flex";
})
