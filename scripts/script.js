// Função para mostrar o menu mobile
function showMobileMenu() {
    const mainMenu = $('nav#left-nav ul.main-menu');
    const menuIcon = $('nav#left-nav ul#menu-icon li#menu-icon');
    const menuClose = $('nav#left-nav ul#menu-icon li#menu-close');

    mainMenu.css('display', 'flex').addClass('animate__animated animate__fadeInRight animate__slow');
    menuIcon.css('display', 'none');
    menuClose.css('display', 'flex');
}

// Função para esconder o menu mobile
function hideMobileMenu() {
    const mainMenu = $('nav#left-nav ul.main-menu');
    const menuIcon = $('nav#left-nav ul#menu-icon li#menu-icon');
    const menuClose = $('nav#left-nav ul#menu-icon li#menu-close');

    mainMenu.css('display', 'none').removeClass('animate__animated animate__fadeInRight animate__slow');
    menuIcon.css('display', 'flex');
    menuClose.css('display', 'none');
}

// Alternar menu mobile ao clicar
$('nav#left-nav ul#menu-icon').click(function () {
    const mainMenu = $('nav#left-nav ul.main-menu');

    if (mainMenu.css('display') === 'none') {
        showMobileMenu();
    } else {
        hideMobileMenu();
    }
});

// Ajustar menu ao redimensionar a tela
$(window).resize(function () {
    const mainMenu = $('nav#left-nav ul.main-menu');
    const menuIcon = $('nav#left-nav ul#menu-icon li#menu-icon');
    const menuClose = $('nav#left-nav ul#menu-icon li#menu-close');

    if ($(window).width() > 970) {
        // Tela desktop: mostrar menu horizontal
        mainMenu.css('display', 'flex').removeClass('animate__animated animate__fadeInRight animate__slow');
        menuIcon.css('display', 'none');
        menuClose.css('display', 'none');
    } else {
        // Tela mobile: esconder menu até interação do usuário
        mainMenu.css('display', 'none');
        menuIcon.css('display', 'flex');
        menuClose.css('display', 'none');
    }
});
