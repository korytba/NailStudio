const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');
toggle.onclick = function(){
    nav.classList.toggle('show-nav')
}

const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu')
    navMenu.classList.remove('show-nav')

}
navLink.forEach(n => n.addEventListener('click',linkAction))

const linkColor = document.querySelectorAll('.nav-link')
function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active'))
    }
}