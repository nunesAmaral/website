import MenuMobile from './menu-mobile.js';
import Accordion from './accordion.js';
const menuMobile = new MenuMobile(
  '#btn-menu',
  '#hero nav ul',
  'assets/hamburguer.svg',
  'assets/activeBtn.svg',
);
menuMobile.init();

const accordion = new Accordion('.faq-list dt');
accordion.init();

// ANIMAR AO SCROLL
function scrollAnimation() {
  const sections = document.querySelectorAll('.js-anime');
  const windowHeight = window.innerHeight * 0.6;

  function animeOnScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowHeight;
      if (sectionTop < 0) {
        section.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', animeOnScroll);
}

scrollAnimation();

//SCROLL SUAVE

function smoothScroll() {
  const links = document.querySelectorAll('header nav a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  }

  links.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

smoothScroll();

// MAIS SCROLL
const contatoBtn = document.querySelector('#contato-btn');

contatoBtn.addEventListener('click', () => {
  console.log(contatoBtn);
  const section = document.querySelector('#contato');
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth',
  });
});

const contatoLink = document.querySelectorAll('span.link');
console.log(contatoLink);
contatoLink.forEach((link) => {
  link.addEventListener('click', () => {
    const section = document.querySelector('#contato');
    const sectionTop = section.offsetTop;
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth',
    });
  });
});
