// Navbar Component JavaScript

// Initialize navbar functionality
function initNavbar() {

    // Get DOM elements
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    // Highlight active tab logic
    function highlightActiveTab() {
        // Get current page filename (e.g., about.html)
        const path = window.location.pathname;
        const page = path.substring(path.lastIndexOf('/') + 1);
        // Select all nav links (desktop and mobile)
        const navLinks = document.querySelectorAll('.desktop-nav-item');
        navLinks.forEach(link => {
            // Remove previous underline if any
            link.classList.remove('active-nav');
            // If link href matches current page, add underline
            if (link.getAttribute('href') === page) {
                link.classList.add('active-nav');
            }
        });
    }

    // Call highlightActiveTab after DOM is ready
    highlightActiveTab();

    // Check if elements exist before adding event listeners
    if (!menuBtn || !closeMenuBtn || !mobileMenu || !menuOverlay) {
        console.warn('Navbar elements not found. Make sure navbar.html is loaded.');
        return;
    }

    // Open mobile menu
    menuBtn.addEventListener('click', openMobileMenu);

    // Close mobile menu function
    function closeMobileMenu() {
        mobileMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Open mobile menu function
    function openMobileMenu() {
        mobileMenu.classList.add('active');
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close menu events
    closeMenuBtn.addEventListener('click', closeMobileMenu);
    menuOverlay.addEventListener('click', closeMobileMenu);

    // Close menu when clicking on menu links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Keyboard accessibility - close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Navbar scroll effect
    // window.addEventListener('scroll', () => {
    //     const navbar = document.querySelector('.navbar');
    //     if (navbar) {
    //         if (window.scrollY > 50) {
    //             navbar.classList.add('shadow-xl');
    //         } else {
    //             navbar.classList.remove('shadow-xl');
    //         }
    //     }
    // });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Load navbar component
function loadNavbar() {
    fetch('components/navbar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const navbarContainer = document.getElementById('navbar');
            if (navbarContainer) {
                navbarContainer.innerHTML = html;
                // Initialize navbar functionality after loading
                initNavbar();
                // Highlight active tab after navbar is loaded
                // (in case DOM changes)
                const highlightActiveTab = () => {
                    const path = window.location.pathname;
                    const page = path.substring(path.lastIndexOf('/') + 1);
                    const navLinks = document.querySelectorAll('.desktop-nav-item');
                    navLinks.forEach(link => {
                        link.classList.remove('active-nav');
                        if (link.getAttribute('href') === page) {
                            link.classList.add('active-nav');
                        }
                    });
                };
                highlightActiveTab();
            } else {
                console.error('Navbar container with id "navbar" not found');
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Auto-initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // If navbar is already in DOM, initialize directly
    if (document.getElementById('menu-btn')) {
        initNavbar();
    } else {
        // Otherwise, load the navbar component
        loadNavbar();
    }
});

// Export functions for manual initialization if needed
window.NavbarUtils = {
    init: initNavbar,
    load: loadNavbar
};