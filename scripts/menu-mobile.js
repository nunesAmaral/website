export default class MenuMobile {
  constructor(btnMenu, menuList, srcActiveBtn){
    this.btnMenu = document.querySelector(btnMenu);
    this.menuList = document.querySelector(menuList);
    this.srcActiveBtn = srcActiveBtn;
  }
  toggleMenu() {
    this.btnMenu.addEventListener('click', () => {
      this.menuList.classList.toggle('active');
      this.toggleIcon()
    });
  }
  toggleIcon() {
    if(this.menuList.contains('active')){
      this.btnMenu.setAtribute('src', this.srcActiveBtn);
    } 
  }
  init(){
    this.toggleMenu();
  }
}