// ===== MENU MOBILE =====

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    const icon = document.querySelector(".hamburger");

    menu.classList.toggle("open");
    icon.classList.toggle("active");
}

// ===== SCROLL REVEAL =====

function revealOnScroll() {

    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===== EFEITO DIGITAÇÃO =====

const text = "Olá, eu sou Leycon Lima";
const typingElement = document.querySelector(".typing");

let index = 0;

function typingEffect() {

    if (index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect, 80);
    }

}

window.addEventListener("load", typingEffect);