var i = 0;

function show_hide() {
    if (i == 1) {
        document.querySelector('.main-nav').style.display = "flex";
        return i = 0;
    } else {
        document.querySelector('.main-nav').style.display = "none";
        return i = 1;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a');

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
        document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!nav.contains(event.target) && mainNav.classList.contains('active')) {
            hamburger.classList.remove('active');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});



