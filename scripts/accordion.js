export default class Accordion {
  constructor(list){
    this.list = document.querySelectorAll(list);
  }
  addEvent(){
    this.list.forEach(item => {
      item.addEventListener('click', this.activeAccordion);
    });
  }
  activeAccordion(){
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
    if(this.nextElementSibling.classList.contains('active')){
      this.children[0].setAttribute('src', 'assets/open-dt-icon.svg');
    } else {
      this.children[0].setAttribute('src', 'assets/accordion-li.svg')
    }
  }
  init(){
    this.addEvent();
  }
}
