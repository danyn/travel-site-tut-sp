import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new MobileMenu()

new RevealOnScroll('.feature', '80%');
new RevealOnScroll('.testimonial', '80%');

new StickyHeader();

new Modal();

