// Função para mostrar o menu mobile
function showMobileMenu() {
    const mainMenu = $('nav#left-nav ul.main-menu'); // Seleciona o menu principal
    const menuIcon = $('nav#left-nav ul#menu-icon li#menu-icon'); // Seleciona o ícone do menu (hambúrguer)
    const menuClose = $('nav#left-nav ul#menu-icon li#menu-close'); // Seleciona o ícone de fechar menu

    // Exibe o menu principal com animação e esconde o ícone do menu
    mainMenu.css('display', 'flex').addClass('animate__animated animate__fadeInRight animate__slow');
    menuIcon.css('display', 'none'); // Esconde o ícone de hambúrguer
    menuClose.css('display', 'flex'); // Mostra o ícone de fechar
}

// Função para esconder o menu mobile
function hideMobileMenu() {
    const mainMenu = $('nav#left-nav ul.main-menu'); // Seleciona o menu principal
    const menuIcon = $('nav#left-nav ul#menu-icon li#menu-icon'); // Seleciona o ícone do menu (hambúrguer)
    const menuClose = $('nav#left-nav ul#menu-icon li#menu-close'); // Seleciona o ícone de fechar menu

    // Esconde o menu principal e remove a animação
    mainMenu.css('display', 'none').removeClass('animate__animated animate__fadeInRight animate__slow');
    menuIcon.css('display', 'flex'); // Mostra o ícone de hambúrguer
    menuClose.css('display', 'none'); // Esconde o ícone de fechar
}

// Alternar menu mobile ao clicar
$('nav#left-nav ul#menu-icon').click(function () {
    const mainMenu = $('nav#left-nav ul.main-menu'); // Seleciona o menu principal

    // Verifica se o menu está visível ou não e alterna entre mostrar e esconder
    if (mainMenu.css('display') === 'none') {
        showMobileMenu(); // Mostra o menu se estiver oculto
    } else {
        hideMobileMenu(); // Esconde o menu se estiver visível
    }
});

// Ajustar menu ao redimensionar a tela
$(window).resize(function () {
    const mainMenu = $('nav#left-nav ul.main-menu'); // Seleciona o menu principal
    const menuIcon = $('nav#left-nav ul#menu-icon li#menu-icon'); // Seleciona o ícone do menu (hambúrguer)
    const menuClose = $('nav#left-nav ul#menu-icon li#menu-close'); // Seleciona o ícone de fechar menu

    // Verifica se a largura da tela é maior que 970px
    if ($(window).width() > 970) {
        // Tela desktop: mostrar menu horizontalmente sem animação
        mainMenu.css('display', 'flex').removeClass('animate__animated animate__fadeInRight animate__slow');
        menuIcon.css('display', 'none'); // Esconde o ícone de hambúrguer
        menuClose.css('display', 'none'); // Esconde o ícone de fechar
    } else {
        // Tela mobile: esconder o menu e exibir o ícone do menu
        mainMenu.css('display', 'none'); // Esconde o menu até interação do usuário
        menuIcon.css('display', 'flex'); // Mostra o ícone de hambúrguer
        menuClose.css('display', 'none'); // Esconde o ícone de fechar
    }
});
