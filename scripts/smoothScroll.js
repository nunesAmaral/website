const links = document.querySelectorAll('header nav a[href^="#"]');

function scrollToSection(event){
event.preventDefault();
const href = event.currentTarget.getAttribute('href');
const section = querySelectorAll(href);
const sectionTop = section.offsetTop;
window.scrollTo({
  top: sectionTop,
  behavior: 'smooth',
})

}

links.forEach((link)=> {
  link.addEventListener('click', scrollToSection);
});