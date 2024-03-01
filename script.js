// for menu button
let menuBtn = document.querySelector('#menu-btn');
// for navbar contents
let navbar = document.querySelector('.header .flex .navbar')


menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}
