// Load navbar into all pages
function loadComponent(id, file) {
    fetch(file)
        .then((res) => res.text())
        .then((data) => {
            document.getElementById(id).innerHTML = data;

            // After navbar is injected, attach JS for toggle
            const btn = document.getElementById("menu-btn");
            const menu = document.getElementById("menu");
            if (btn && menu) {
                btn.addEventListener("click", () => {
                    menu.classList.toggle("hidden");
                });
            }
        });
}

// Call it for navbar
loadComponent("navbar", "components/navbar.html");
