'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

//Make navbar transparent when it is on the top
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});
//Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoViews(link);

});
//Handle scrolling when tapping on the contact button
const contact_btn = document.querySelector('.home__contact');
contact_btn.addEventListener('click', (e) => {
    const link = e.target.dataset.link;
    scrollIntoViews(link);
});

//Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling
const arrowup = document.querySelector('.arrow-up');
document / addEventListener('scroll', () => {
    if (window.scrollY > homeHeight / 2) {
        arrowup.classList.add('visible');
        arrowup.style.opacity = window.scrollY / window.outerHeight - 1;
    } else {
        arrowup.classList.remove('visible');
    }
});
//Navbar toggle button for small screen
const navbarToggleBtn =document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open')
});

//Handle click on the "arrow up" button
arrowup.addEventListener('click', () => {
    scrollIntoViews('#home');
});
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project')
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    //Remove selection form the previous item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName ==='BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    }, 300);

});


function scrollIntoViews(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}