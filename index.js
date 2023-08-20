
const modal = document.getElementById("modal")
let texto = document.getElementById("texto");
texto.innerText = "Olá seja bem vindo ao nosso caça ao tesouro, comece respirando um pouco!"

document.getElementById("fechar").addEventListener("click", e =>{
  modal.style.display = "none";
})

document.getElementById("dica").addEventListener("click", e =>{
  modal.style.display = "flex";
})

// pistas
document.getElementById("pista1").addEventListener("click", e =>{
  texto.innerText = "Essa janela não deixa um clima agradável, está um pouco quente!";
  modal.style.display = "flex";
})

document.getElementById("pista2").addEventListener("click", e =>{
  texto.innerText = "Esse controle podia estar todo pintado se ficasse aqui por mais tempo!";
  modal.style.display = "flex";
})

document.getElementById("pista3a").addEventListener("click", e =>{
  texto.innerText = "A tinta desses canetões só não é parea para a próxima dica!";
  modal.style.display = "flex";
})
document.getElementById("pista3b").addEventListener("click", e =>{
  texto.innerText = "A tinta desses canetões só não é parea para a próxima dica!";
  modal.style.display = "flex";
})      
document.getElementById("pista3c").addEventListener("click", e =>{
  texto.innerText = "A tinta desses canetões só não é parea para a próxima dica!";
  modal.style.display = "flex";
})

document.getElementById("pista4").addEventListener("click", e =>{
  texto.innerText = "Tenho medo de fogo!";
  modal.style.display = "flex";
})

document.getElementById("resultadoa").addEventListener("click", e =>{
  texto.innerText = "Tenho medo de fogo!";
  modal.style.display = "flex";
})      
document.getElementById("resultadob").addEventListener("click", e =>{
  texto.innerText = "Tenho medo de fogo!";
  modal.style.display = "flex";
})