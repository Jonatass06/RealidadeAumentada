
const modal = document.getElementById("modal")
let textHint = document.getElementById("textHint");
textHint.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!"

document.getElementById("close").addEventListener("click", e =>{
  modal.style.display = "none";
})

document.getElementById("hint").addEventListener("click", e =>{
  document.getElementById("hint").style.color = "red"
  modal.style.display = "flex";
})

document.getElementById("hint1").addEventListener("click", e =>{
  textHint.innerText = "Essa janela não deixa um clima agradável, está um pouco quente!";
  modal.style.display = "flex";
})

document.getElementById("hint2").addEventListener("click", e =>{
  textHint.innerText = "Esse controle podia estar todo pintado se ficasse aqui por mais tempo!";
  modal.style.display = "flex";
})

document.getElementById("hint3-a").addEventListener("click", e =>{
  textHint.innerText = "A tinta desses canetões só não é parea para a próxima dica!";
  modal.style.display = "flex";
})
document.getElementById("hint3-b").addEventListener("click", e =>{
  textHint.innerText = "A tinta desses canetões só não é parea para a próxima dica!";
  modal.style.display = "flex";
})      
document.getElementById("hint3-c").addEventListener("click", e =>{
  textHint.innerText = "A tinta desses canetões só não é parea para a próxima dica!";
  modal.style.display = "flex";
})

document.getElementById("hint4").addEventListener("click", e =>{
  textHint.innerText = "Tenho medo de fogo!";
  modal.style.display = "flex";
})

document.getElementById("finished-a").addEventListener("click", e =>{
  textHint.innerText = "Tenho medo de fogo!";
  modal.style.display = "flex";
})      
document.getElementById("finished-b").addEventListener("click", e =>{
  textHint.innerText = "Tenho medo de fogo!";
  modal.style.display = "flex";
})