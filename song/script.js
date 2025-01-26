// Objeto album
const albumModel = {
    src: '',
    title: '',
    desc: ''
};

// Criando os álbuns usando uma Arrow Function
const albums = Array.from({ length: 20 }, (_, i) => ({
    ...albumModel,  // Clonando a estrutura do objeto modelo
    src: `../images/album${i + 1}.jpg`,
    title: `Álbum ${i + 1}`,
    desc: `Descrição do álbum ${i + 1}`
}));

// Função para gerar os slides do carrossel de álbuns (Function Declaration)
function generateCarousel() {
    const carouselContent = document.getElementById('carouselAlbumsContent');
    let slidesHTML = '';

    // Dividir os álbuns em grupos de 5 (para exibição em tela grande)
    for (let i = 0; i < albums.length; i += 5) {
        let slideActiveClass = i === 0 ? 'active' : '';  // Define o primeiro slide como ativo
        slidesHTML += `<div class="carousel-item ${slideActiveClass}">
                            <div class="container-fluid">
                                <div class="row row-cols-1 row-cols-md-6 g-4 justify-content-center">`;

        for (let j = i; j < i + 5 && j < albums.length; j++) {
            slidesHTML += `
                    <div class="col">
                        <div class="card">
                            <img src="${albums[j].src}" alt="${albums[j].title}">
                            <div class="card-body">
                                <h5 class="card-title">${albums[j].title}</h5>
                                <p class="card-text">${albums[j].desc}</p>
                            </div>
                        </div>
                    </div>`;
        }

        slidesHTML += `</div></div></div>`;
    }

    carouselContent.innerHTML = slidesHTML;
}

// Chama a função para gerar o carrossel assim que a página carregar
document.addEventListener('DOMContentLoaded', generateCarousel);

// Objeto modelo de uma música
const songModel = {
    src: '',
    title: '',
    artist: ''
};

// Criando o array de músicas usando uma Function Expression
const topSongs = Array.from({ length: 8 }, function (_, i) {
    return {
        ...songModel,  // Clonando a estrutura do modelo
        src: `../images/song${i + 1}.jpg`,
        title: `Música ${i + 1}`,
        artist: `Artista ${i + 1}`
    };
});

// Função para gerar os slides do carrossel de músicas dinamicamente (Arrow Function)
const generateSongsCarousel = () => {
    const carouselSongsContent = document.getElementById('carouselSongsContent');
    let slidesHTML = '';

    // Dividir as músicas em grupos de 4 (para exibição em tela grande)
    for (let i = 0; i < topSongs.length; i += 4) {
        let slideActiveClass = i === 0 ? 'active' : '';  // Define o primeiro slide como ativo
        slidesHTML += `<div class="carousel-item ${slideActiveClass}">
                            <div class="container-fluid">
                                <div class="row row-cols-1 row-cols-md-6 g-4 justify-content-center">`;

        for (let j = i; j < i + 4 && j < topSongs.length; j++) {
            slidesHTML += `
                    <div class="col">
                        <div class="card">
                            <img src="${topSongs[j].src}" alt="${topSongs[j].title}">
                            <div class="card-body">
                                <h5 class="card-title">${topSongs[j].title}</h5>
                                <p class="card-text">${topSongs[j].artist}</p>
                            </div>
                        </div>
                    </div>`;
        }

        slidesHTML += `</div></div></div>`;
    }

    carouselSongsContent.innerHTML = slidesHTML;
};

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', generateSongsCarousel);

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa o Sortable na tabela
    const tableBody = document.querySelector('table tbody');
    
    new Sortable(tableBody, {
        handle: 'td', // Defina onde o usuário pode pegar para arrastar (aqui estamos usando as células)
        animation: 150, // Defina a animação de arrasto
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const videoElement = document.getElementById('featured-video');
    const videoSection = document.querySelector('.video-section');

    // Evento de início da reprodução
    videoElement.addEventListener('play', function() {
      // Mudando as cores do fundo enquanto o vídeo estiver sendo reproduzido
      videoSection.classList.add('playing');  // Adiciona a classe 'playing' para o efeito
      videoSection.style.setProperty('--myColor1', '#6B1980');  // Nova cor para o gradiente
      videoSection.style.setProperty('--myColor2', '#27497C');  // Nova cor para o gradiente
    });

    // Evento quando o vídeo for pausado
    videoElement.addEventListener('pause', function() {
      // Retorna o gradiente original quando o vídeo for pausado
      videoSection.classList.remove('playing');  // Remove a classe 'playing'
      videoSection.style.setProperty('--myColor1', '#ff7e5f');  // Cor original
      videoSection.style.setProperty('--myColor2', '#feb47b');  // Cor original
    });

    // Evento quando o vídeo terminar
    videoElement.addEventListener('ended', function() {
      // Retorna o gradiente original após o vídeo terminar
      videoSection.classList.remove('playing');
      videoSection.style.setProperty('--myColor1', '#ff7e5f');
      videoSection.style.setProperty('--myColor2', '#feb47b');
    });
  });
