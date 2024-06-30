document.addEventListener('DOMContentLoaded', function() {
    // Highlight the active navigation link based on the current page
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
