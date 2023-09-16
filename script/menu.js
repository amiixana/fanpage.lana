const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', showMenu);
function showMenu () {
    menu.classList.toggle("show");
}