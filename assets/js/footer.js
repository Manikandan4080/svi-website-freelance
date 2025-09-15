// Footer Component Loader
function loadFooter() {
    fetch("components/footer.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load footer");
            }
            return response.text();
        })
        .then(html => {
            const footerContainer = document.getElementById("footer");
            if (footerContainer) {
                footerContainer.innerHTML = html;
            } else {
                console.error('Footer container with id "footer" not found');
            }
        })
        .catch(err => console.error(err));
}

document.addEventListener("DOMContentLoaded", loadFooter);
