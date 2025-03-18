// VanillaTilt.init(document.querySelector(".card"), {
  //  max: 25,
  //  speed: 400
// });
// esse código só aoplica o efeito no primeiro card




// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

// Inicializa o VanillaTilt em cada card
cards.forEach(card => {
  VanillaTilt.init(card, {
    max: 25,
    speed: 400
  });
});