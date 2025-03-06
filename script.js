document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const menuContainer = document.getElementById('menu-container');

    menuToggle.addEventListener('click', function() {
        menuContainer.classList.add('active');
    });

    menuClose.addEventListener('click', function() {
        menuContainer.classList.remove('active');
    });
});