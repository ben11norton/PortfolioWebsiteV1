let intro = document.querySelector('.intro'); 
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

//event listener
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() =>{
        logoSpan.forEach((span, idx) => {
            setTimeout(() =>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });
        setTimeout(() => {
            logoSpan.forEach((span, idx) => { // Corrected to 'span' instead of 'san'
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            });
            setTimeout(() => {
                intro.style.top = '-100vh'; // Changed 'computedStyleMap.top' to 'style.top'
            }, 2000); // Corrected timeout value
        }, 2000); // Corrected timeout value
    });
});


// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show')
        }

    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));