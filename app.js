const hamburger = document.querySelector('.hamburger-menu');
    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('hamburger-on')
    });
ScrollReveal().reveal('.the-item-that-appears-one', { delay: 100 });
ScrollReveal().reveal('.the-item-that-appears-two', { delay: 200 });
ScrollReveal().reveal('.the-item-that-appears-three', { delay: 300 });
ScrollReveal().reveal('.the-item-that-appears-four', { delay: 400 });
ScrollReveal().reveal('.the-item-that-appears-five', { delay: 500 });
ScrollReveal().reveal('.the-item-that-appears-six', { delay: 600 });
ScrollReveal().reveal('.the-item-that-appears-seven', { delay: 700 });