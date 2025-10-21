let meuIndex = 0;
const meuTrack = document.getElementById('meuCarrosselTrack');
const meuSlides = meuTrack.children.length;

function meuUpdateSlide() {
    meuTrack.style.transform = `translateX(-${meuIndex * 100}%)`;
}

function meuNextSlide() {
    meuIndex = (meuIndex + 1) % meuSlides;
    meuUpdateSlide();
}

function meuPrevSlide() {
    meuIndex = (meuIndex - 1 + meuSlides) % meuSlides;
    meuUpdateSlide();
}

// Opcional: Adicionar um temporizador para passar slides automaticamente
// setInterval(meuNextSlide, 3000); // Muda a cada 3 segundos