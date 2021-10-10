burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList= document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{

    rightNav.classList.toggle('nav-v');

    navbar.classList.toggle('nav-h');
    navList.classList.toggle('nav-v');


})