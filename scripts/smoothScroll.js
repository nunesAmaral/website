const links = document.querySelectorAll('header nav a[href^="#"]');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = querySelectorAll(href);
  const sectionTop = section.offsetTop;
  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth',
  });
}

links.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});

const contatoBtn = document.querySelector('.contato-btn');

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
