import MenuMobile from "./menu-mobile.js";
import Accordion from "./accordion.js";
const menuMobile = new MenuMobile('#btn-menu', '#hero nav ul', 'assets/hamburguer.svg', 'assets/activeBtn.svg');
menuMobile.init();

const accordion = new Accordion('dl.faq-list')
accordion.init();