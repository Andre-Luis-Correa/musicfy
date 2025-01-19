function loadFooter() {
    fetch('../common/footer/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error loading footer: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('common-footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

document.addEventListener("DOMContentLoaded", loadFooter);
