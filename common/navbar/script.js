function loadNavbar() {
    fetch('../common/navbar/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading navbar: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('common-navbar').innerHTML = data;
            console.log('Navbar loaded successfully');
        })
        .catch(error => console.error('Error loading navbar:', error));
}

$(document).ready(function () {
    loadNavbar();
});