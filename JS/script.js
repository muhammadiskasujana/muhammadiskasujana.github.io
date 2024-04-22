// toggle navbar icon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// scroll Selection active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
            });
        };
    });

    // sticky navbar

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // remove toggle icon & navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}

// scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .service-container, .portofolio-box, .contact form, .container, .container-work, .container-int, .timeline, .info', { origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img, .left', { origin:'left'});
ScrollReveal().reveal('.home-contact p, .about, .right', { origin:'right'});

// typed js

const typed = new Typed('.multiple-text',{
    strings: ['Data Scientist','Fullstack Web Developer','IoT Engineer','Graphic Designer'],
    typedSpeed: 100,
    backSpeed: 70,
    backDelay:1000,
    loop:true,
});

var close = document.getElementsByClassName("close-btn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}



