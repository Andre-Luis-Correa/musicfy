const albums = Array.from({ length: 20 }, (_, i) => ({
    src: `../images/album${i + 1}.jpg`,
    title: `Álbum ${i + 1}`,
    desc: `Descrição do álbum ${i + 1}`
}));

// Exibindo o array gerado no console
console.log(albums);

// Função para gerar os slides do carrossel dinamicamente
function generateCarousel() {
    const carouselContent = document.getElementById('carouselAlbumsContent');
    let slidesHTML = '';

    // Dividir os álbuns em grupos de 4 (para exibição em tela grande)
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

const topSongs = Array.from({ length: 8 }, (_, i) => ({
    src: `../images/song${i + 1}.jpg`,
    title: `Música ${i + 1}`,
    artist: `Artista ${i + 1}`
}));

// Função para gerar os slides do carrossel de músicas dinamicamente
function generateSongsCarousel() {
    const carouselSongsContent = document.getElementById('carouselSongsContent');
    let slidesHTML = '';

    // Dividir as músicas em grupos de 5 (para exibição em tela grande)
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
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', generateSongsCarousel);

