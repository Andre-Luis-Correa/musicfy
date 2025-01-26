// Função para carregar o rodapé (footer) da página de um arquivo externo
function loadFooter() {
    // Faz uma requisição para obter o conteúdo do arquivo footer.html
    fetch('../common/footer/footer.html')
        .then(response => {
            // Verifica se a resposta foi bem-sucedida (status HTTP 200-299)
            if (!response.ok) {
                // Lança um erro se houver problema ao carregar o arquivo
                throw new Error(`Error loading footer: ${response.statusText}`);
            }
            // Converte a resposta para texto (conteúdo HTML do arquivo)
            return response.text();
        })
        .then(data => {
            // Insere o conteúdo do footer dentro do elemento com id 'common-footer'
            document.getElementById('common-footer').innerHTML = data;
        })
        .catch(error => 
            // Captura e exibe erros caso a requisição falhe
            console.error('Error loading footer:', error)
        );
}

// Aguarda o carregamento completo do DOM antes de chamar a função loadFooter
document.addEventListener("DOMContentLoaded", loadFooter);
