const rellax = new Rellax('.rellax');
const scroll = new SmoothScroll('a[href*="#"]');
//scrollReveal().reveal('.reveal');

const hamburgerButton = document.querySelector('.burger');
const mobileNav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');

// EVENT LISTENERS

hamburgerButton.addEventListener("click", toggleMobileNav);
navLinks.forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// FUNCTIONS

function toggleMobileNav() {
    if (mobileNav.classList.contains('open')) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
}

function openMobileNav() {
    mobileNav.classList.add('open');
    hamburgerButton.classList.add('is-active');
    document.querySelector('body').style.overflowY = 'none';
}

function closeMobileNav() {
    mobileNav.classList.remove('open');
    hamburgerButton.classList.remove('is-active');
    document.querySelector('body').style.overflowY = 'scroll';
}