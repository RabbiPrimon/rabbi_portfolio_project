(function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    const currentPath = window.location.pathname;

    navLinks.forEach((link) => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });

    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    if (toggle && nav) {
        toggle.addEventListener('click', function () {
            nav.classList.toggle('open');
        });

        navLinks.forEach((link) => {
            link.addEventListener('click', function () {
                nav.classList.remove('open');
            });
        });
    }
})();
