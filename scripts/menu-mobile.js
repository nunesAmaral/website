export default class MenuMobile {
  constructor(btnMenu, menuList, srcBtn, srcActiveBtn){
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.btnIcon = document.querySelector(btnMenu + ' img');
    this.srcBtn = srcBtn;
    this.srcActiveBtn = srcActiveBtn;
    this.handleClick = this.handleClick.bind(this);
  }
  toggleMenu() {
    this.btnMenu.addEventListener('click', this.handleClick); 
  }
  toggleIcon() {
    if(this.menuList.classList.contains('active')){
      this.btnIcon.setAttribute('src', this.srcActiveBtn);
      this.handleScroll();
    } else {
      this.btnIcon.setAttribute('src', this.srcBtn)
      this.handleScroll();  
    }
  }
  handleScroll(){
    if(this.menuList.classList.contains('active')){
      document.querySelector('html').style.overflow = 'hidden';
    } else {
      document.querySelector('html').style.overflow = 'scroll';
    }
  }
  handleClick() { 
    this.menuList.classList.toggle('active');
    this.toggleIcon();
  }
  init(){
    this.toggleMenu();
  }
} 