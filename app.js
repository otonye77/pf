// Change icons

document.getElementById('c++').addEventListener('mouseenter', logoChange)
document.getElementById('c++').addEventListener('mouseleave', revertBack)

function logoChange() {
    document.getElementById('c++').src = 'assets/icons8-c++ (1).svg';
}

function revertBack() {
    document.getElementById('c++').src = 'assets/icons8-c++ .svg'
}

// menu application
var hamBurger = document.querySelector('.burger');
var navLink = document.querySelector('.menu-items');
var navLinkItems = document.querySelectorAll('.menu-items.active>a');

hamBurger.addEventListener('click', openMenu)
navLinkItems.forEach(function(current) {

    current.addEventListener('click', openMenu);
})

function openMenu() {
    hamBurger.classList.toggle('open-menu');
    navLink.classList.toggle('active');
}