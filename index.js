
const modal = document.getElementById("modalDad");
const audioWin = new Audio("./soundWinner.mp3");
const textHint = document.getElementById("textHint");
textHint.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!";
const cena1 = document.getElementById("cena1");

function closeModal() {
  document.querySelector("body").removeChild(cena1);
  document.querySelector("body").innerHTML += '<a-scene mindar-image="imageTargetSrc: ./targets.mind; autoStart: false;" color-space="sRGB"renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false"device-orientation-permission-ui="enabled: false" id="cena2"><a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;"raycaster="far: ${customFields.libVersion}; objects: .clickable"></a-camera><a-entity id="control" mindar-image-target="targetIndex: 1" class="hidden"><a-gltf-model id="hint2" scale="0.001 0.001 0.001" position="0 0 0" rotation="0 0 0" src="#quest" class="clickable" animation-mixer></a-entity></a-scene>'
  modal.style.display = "none";
}

document.getElementById("hint").addEventListener("click", e => {
  modal.style.display = "flex";
})

document.getElementById("hint1").addEventListener("click", e => {
 modal.style.display = "flex";
  alert("a");
  textHint.innerText = "Procure o equilíbrio. Ajuste o conforto com as correntes de ar, nem muito frias, tampouco quentes.";

})


// document.getElementById("hint2").addEventListener("click", e => {

//   textHint.innerText = "A chave está na criatividade. Cores traçam pistas invisíveis, guiando você com marcas deixadas em algo branco.";
//   modal.style.display = "flex";

// })

// document.getElementById("hint3-a").addEventListener("click", e => {
//   textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
//   modal.style.display = "flex";

// })
// document.getElementById("hint3-b").addEventListener("click", e => {
//   textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
//   modal.style.display = "flex";
// })
// document.getElementById("hint3-c").addEventListener("click", e => {
//   textHint.innerText = "Desvende mistérios ao desfazer os traços. O poder transcende a superfície, apagando o que foi desenhado";
//   modal.style.display = "flex";
// })

// document.getElementById("hint4").addEventListener("click", e => {
//   textHint.innerText = "Siga o caminho da água. Como o ser que sou, adoro frio, odeio o calor, o fogo.";
//   modal.style.display = "flex";
// })

// document.getElementById("finished-a").addEventListener("click", e => {
//   textHint.innerText = "Parabéns! Você me encontrou!";
//   modal.style.display = "flex";
//   audioWin.play();
// })
// document.getElementById("finished-b").addEventListener("click", e => {
//   textHint.innerText = "Parabéns! Você me encontrou!";
//   modal.style.display = "flex";
//   audioWin.play();
// })