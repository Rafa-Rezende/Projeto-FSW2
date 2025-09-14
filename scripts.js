
// Seleciona todos os cards com a classe "cartao_produto"
const cards = document.querySelectorAll('.cartao_produto');

// Adiciona o evento "mouseleave" a cada card
cards.forEach(card => {
    card.addEventListener('mouseleave', () => {
        // Força a rolagem para o topo
        card.scrollTo({
            top: 0, // Define a posição no topo
            behavior: 'auto' // Remove qualquer animação para garantir que volte instantaneamente
        });
    });
});



// variaveis para a função do carrossel
const ContainerCarrossel = document.querySelector('.carrossel-container');
const ItemsCarrossel = document.querySelectorAll('.carrossel-item');
const prevButton = document.querySelector('.carrossel-prev');
const nextButton = document.querySelector('.carrossel-next');

let VetorCarrossel = 0; 

// Movimento do carrossel
function atualizaCarrossel() {
    const posicao = -VetorCarrossel * 100; 
    ContainerCarrossel.style.transform = `translateX(${posicao}%)`; // Move o carrossel
}

// Botão "Anterior"
prevButton.addEventListener('click', () => {
    VetorCarrossel = (VetorCarrossel - 1) % ItemsCarrossel.length
    atualizaCarrossel();
});

// Botão "Próximo"
nextButton.addEventListener('click', () => {
    VetorCarrossel = (VetorCarrossel + 1) % ItemsCarrossel.length;
    atualizaCarrossel();
});


