function out(id) {
    var inputElement = document.getElementById(id);
    if (inputElement.value.trim() !== "") {  // Verifica se o valor não está vazio ou nulo
       inputElement.style.background = "#d3d3d3";  // Cinza claro
    } else {
       inputElement.style.background = "#ffffff";  // Cor original (branco)
    }
 }
 
 

